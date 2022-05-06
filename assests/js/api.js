var keycloak = new Keycloak();

function initKeycloak() {
  keycloak.init({onLoad: 'login-required'}).then(function() {
      return;
  }).catch(function() {
      alert('failed to initialize');
  });
}


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

const loadData = function () {
  // document.getElementById('username').innerText = keycloak.subject;

  const url = 'https://groepsadmin.scoutsengidsenvlaanderen.be/groepsadmin/rest-ga/lid/profiel';

  const req = new XMLHttpRequest();
  req.open('GET', url, true);
  req.setRequestHeader('Accept', 'application/json');
  req.setRequestHeader('Authorization', 'Bearer ' + keycloak.token);

  req.onreadystatechange = function () {
      if (req.readyState == 4) {
          if (req.status == 200) {
            var myArr = JSON.parse(this.responseText);
            json(myArr);
              
          } else if (req.status == 403) {
              alert('Forbidden');
          }
      }
  }

  req.send();
}

function json(json) {
  var functies = json.functies;
  for (var i = 0; i < functies.length; i++){
    console.log(functies[i].omschrijving)
    if(functies[i].omschrijving == "Materiaalmeester"){
      alert('bingo');
    } else {
      alert('non')
    }
  }
}

function login(){
  // initKeycloak();
  if({onLoad: 'login-required'}){
    window.location.replace("https://zeescoutstoxandria.netlify.app/leiding.html");
  }
  // loadData();
  
}