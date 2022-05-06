var keycloak = new Keycloak();


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

const materiaalmeester = function () {
  // document.getElementById('username').innerText = keycloak.subject;
  const url = 'https://groepsadmin.scoutsengidsenvlaanderen.be/groepsadmin/rest-ga/lid/profiel';
  console.log("materiaal ok");

  const req = new XMLHttpRequest();
  req.open('GET', url, true);
  req.setRequestHeader('Accept', 'application/json');
  req.setRequestHeader('Authorization', 'Bearer ' + keycloak.token);

  // req.onreadystatechange = function () {
  //     if (req.readyState == 4) {
  //         if (req.status == 200) {
  //           var myArr = JSON.parse(this.responseText);
  //           return(materiaalmeestercheck(myArr));
              
  //         } else if (req.status == 403) {
  //             alert('Forbidden');
  //         }
  //     }
  // }

  req.send();
  return;
}

function materiaalmeestercheck() {
  console.log("check")
  // var functies = json.functies;
  var materiaalmeester = false;
  // for (var i = 0; i < functies.length; i++){
  //   console.log(functies[i].omschrijving)
  //   if(functies[i].omschrijving == "Materiaalmeester"){
  //     materiaalmeester = true;
  //   }
  // }
  return materiaalmeester;
}

function login(){
  keycloak.init({onLoad: 'login-required'}).catch(function() {
      alert('failed to initialize');
  });
  if(keycloak.authenticated == true){
    console.log(materiaalmeestercheck());
    // if(materiaalmeester() == true){
    //   window.location.replace("https://zeescoutstoxandria.netlify.app/materiaalmeester.html");
    // } else {
    //   window.location.replace("https://zeescoutstoxandria.netlify.app/leiding.html");
    // }
  }  
}