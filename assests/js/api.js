// const userAction = async () => {
//     const response = await fetch('https://groepsadmin.scoutsengidsenvlaanderen.be/groepsadmin/rest-ga/', {
//       mode: 'no-cors'
//     });
//     const myJson = await response.json(); //extract JSON from the http response
//     // do something with myJson
//     return myJson;
//   }

// api url

var keycloak = new Keycloak();

function initKeycloak() {
  keycloak.init({onLoad: 'login-required'}).then(function() {
      // constructTableRows(keycloak.idTokenParsed);
      // pasteToken(keycloak.token);
  }).catch(function() {
      alert('failed to initialize');
  });
}


const api_url = 
      "https://groepsadmin.scoutsengidsenvlaanderen.be/groepsadmin/rest-ga/";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url, {
      mode: 'no-cors',
      Content: 'application/json',
      Authorization: 'Bearer' + keycloak.token});
    
    // Storing data in form of JSON
    var data = response;
    console.log(data);
    // if (response) {
    //     hideloader();
    // }
    // show(data);
}
// Calling that async function
getapi(api_url);
  
// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
    let tab = 
        `<tr>
          <th>Name</th>
          <th>Office</th>
          <th>Position</th>
          <th>Salary</th>
         </tr>`;
    
    // Loop to access all rows 
    for (let r of data.list) {
        tab += `<tr> 
    <td>${r.name} </td>
    <td>${r.office}</td>
    <td>${r.position}</td> 
    <td>${r.salary}</td>          
</tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("employees").innerHTML = tab;
}