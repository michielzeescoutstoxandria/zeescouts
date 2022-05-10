var keycloak = new Keycloak();
var materiaalmeester = false;

function login() {
  keycloak.init({onLoad: 'login-required'})
  .then(function() {
    materiaalmeesterfunction();
  })
  .catch(function() {
      alert('failed to initialize');
  });
}

// async function materiaalmeester() {
//   keycloak.init({onLoad: 'login-required'})
//   .then(function() {
//       // return;
//       materiaalmeesterfunction()
//       // console.log(keycloak);
//   })
//   .catch(function() {
//       alert('failed to initialize');
//   });
// }

const api_url = "https://groepsadmin.scoutsengidsenvlaanderen.be/groepsadmin/rest-ga/functie";

  
// Defining async function
async function getapi(url, token) {
    console.log(token);
    var auth = { Authorization : `Bearer ${token}` };

    console.log(auth);
    
    // Storing response
    const response = await fetch(url, {
      mode: 'no-cors',
      headers : {
        auth,
        'Content-Type': 'application/json'
    }});
    
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
  .then(function() {
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
}).catch(function() {
  alert('Failed to refresh token');
});
  }

const materiaalmeestercheck = function (json) {
  console.log("check")
  var functies = json.functies;
  
  for (var i = 0; i < functies.length; i++){
    if(functies[i].omschrijving == "Materiaalmeester"){
      materiaalmeester = true;
      redirect();
    }
  }
  // return materiaalmeester;
}

function redirect(){
  if(keycloak.authenticated == true){
    console.log(materiaalmeester);
//     // materiaalmeester();
    if(materiaalmeester() == true){
      window.location.replace("https://zeescoutstoxandria.netlify.app/materiaalmeester.html");
    }
    } else {
      window.location.replace("https://zeescoutstoxandria.netlify.app/leiding.html");
    }
  }  
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