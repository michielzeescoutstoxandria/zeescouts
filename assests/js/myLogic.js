var keycloak = new Keycloak();

function initKeycloak() {
    keycloak.init({onLoad: 'login-required'}).then(function() {
        constructTableRows(keycloak.idTokenParsed);
        pasteToken(keycloak.token);
    }).catch(function() {
        alert('failed to initialize');
    });
}

function constructTableRows(keycloakToken) {
    document.getElementById('row-username').innerHTML = keycloakToken.gebruikersnaam;
    document.getElementById('row-firstName').innerHTML = keycloakToken.given_name;
    document.getElementById('row-lastName').innerHTML = keycloakToken.family_name;
    document.getElementById('row-name').innerHTML = keycloakToken.name;
    document.getElementById('row-email').innerHTML = keycloakToken.email;
    document.getElementById('row-functies').innerHTML = keycloakToken.functies;
}

function pasteToken(token){
    document.getElementById('ta-token').value = token;
    document.getElementById('ta-refreshToken').value = keycloak.refreshToken;
}

var refreshToken = function() {
    keycloak.updateToken(-1)
    .then(function(){
        document.getElementById('ta-token').value = keycloak.token;
        document.getElementById('ta-refreshToken').value = keycloak.refreshToken;
    });
}

var logout = function() {
    keycloak.logout({"redirectUri":"http://localhost:9091/logout.html"});
}