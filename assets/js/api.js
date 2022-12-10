var keycloak = new Keycloak();
// if (sessionStorage.getItem("keycloak") == null) {
//   keycloak = new Keycloak();
// } else {
//   keycloak = sessionStorage.getItem("keycloak");
// }

const token = localStorage.getItem('kc_token');
const refreshToken = localStorage.getItem('kc_refreshToken');

var materiaalmeester;
if (sessionStorage.getItem("keycloak") == null) {
  materiaalmeester = false;
} else {
  materiaalmeester = sessionStorage.getItem("materiaalmeester");
}

function login() {
  keycloak.init({ onLoad: 'login-required', token, refreshToken })
    .then(function () {
      materiaalmeesterfunction();
      localStorage.setItem('kc_token', keycloak.token);
      localStorage.setItem('kc_refreshToken', keycloak.refreshToken);
    })
    .catch(function () {
      alert('failed to initialize');
    });
}

const api_url = "https://groepsadmin.scoutsengidsenvlaanderen.be/groepsadmin/rest-ga/functie";


// Defining async function
async function getapi(url, token) {
  console.log(token);
  var auth = { Authorization: `Bearer ${token}` };

  console.log(auth);

  // Storing response
  const response = await fetch(url, {
    mode: 'no-cors',
    headers: {
      auth,
      'Content-Type': 'application/json'
    }
  });

  // Storing data in form of JSON
  var data = response;
  console.log(data);
  // if (response) {
  //     hideloader();
  // }
  // show(data);
}
// Calling that async function


// Function to hide the loader
function hideloader() {
  document.getElementById('loading').style.display = 'none';
}

function materiaalmeesterfunction() {
  keycloak.updateToken(10)
    .then(function () {
      // document.getElementById('username').innerText = keycloak.subject;
      const url = 'https://groepsadmin.scoutsengidsenvlaanderen.be/groepsadmin/rest-ga/lid/profiel';
      console.log("materiaal ok");

      const req = new XMLHttpRequest();
      req.open('GET', url, true);
      req.setRequestHeader('Accept', 'application/json');
      req.setRequestHeader('mode', 'no-cors');
      req.setRequestHeader('Authorization', 'Bearer ' + keycloak.token);

      req.onreadystatechange = function () {
        if (req.readyState == 4) {
          if (req.status == 200) {
            console.log("ok");
            var json = JSON.parse(this.responseText);
            materiaalmeestercheck(json);

          } else if (req.status == 403) {
            alert('Forbidden');
          }
        }
      }

      req.send();
      // return check;
    }).catch(function () {
      alert('Failed to refresh token');
    });
}

const materiaalmeestercheck = function (json) {
  console.log("check");
  console.log(keycloak);
  var functies = json.functies;

  for (var i = 0; i < functies.length; i++) {
    if (functies[i].omschrijving == "Materiaalmeester" || functies[i].omschrijving == "Adjunct Materiaalmeester") {
      materiaalmeester = true;
      sessionStorage.setItem("materiaalmeester", true);
    }
  }
  redirect();
}

function redirect() {
  if (keycloak.authenticated == true) {
    console.log(materiaalmeester);
    if (materiaalmeester == true) {
      window.location.replace("https://zeescoutstoxandria.netlify.app/materiaalmeester.html");
    } else {
      window.location.replace("https://zeescoutstoxandria.netlify.app/leiding.html");
    }
  }
}

function logout() {
  // keycloak.logout();
  // window.location.replace("https://zeescoutstoxandria.netlify.app");
  // keycloak.logout('http://auth-server/auth/realms/Internal_Projects/protocol/openid-connect/logout?redirect_uri=encodedRedirectUri')
  //alert("Logged Out");
  keycloak.logout({"redirectUri":"https://zeescoutstoxandria.netlify.app/logout.html"});
}

function materiaalmeesternav() {
  if (materiaalmeester == true) {

    var homenav = document.getElementById('homenav');

    var nav = `
                            <div class="dropdown">
                                <a class="active none" href="#">Materiaalmeesters <i class="fa fa-caret-down"></i>
                                </a>
                                <ul class="dropdown-content">
                                    <li>
                                        <a href="leiding.html">Leiding</a>
                                    </li>
                                </ul>
                            </div>
                        `;
    homenav.innerHTML = nav;
  }
}

function islogin(){
  console.log(keycloak.authenticated);
}

// function login(){
//   materiaalmeester();
//   console.log(keycloak);
//   console.log(keycloak.authenticated);
//   console.log(keycloak.sessionId);
//   console.log(materiaalmeestercheck);

//   // if(keycloak.authenticated == true){
//     // materiaalmeester();
//     // if(materiaalmeester() == true){
//     //   window.location.replace("https://zeescoutstoxandria.netlify.app/materiaalmeester.html");
//     // }
//     // } else {
//     //   window.location.replace("https://zeescoutstoxandria.netlify.app/leiding.html");
//     // }
//   // }
// }