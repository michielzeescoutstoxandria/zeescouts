var express = require('express');
var app = express();
const Keycloak = require('keycloak-connect');
let keycloak = new Keycloak({});
app.use(keycloak.middleware());
app.use(express.static('public'));

// const request = require('request');


// Installeer de EJS-template engine
// app.set('view engine', 'ejs');

// Defineer de API-URL
// const apiUrl = 'https://api.example.com/resource';



var testController = require('./controller/test-controller.js');
app.use('/test', testController);

app.get('/admin', keycloak.protect(), function(req, res){
    res.send("Hello Admin");
});

app.get('/logout', keycloak.deauthenticated(), (req, res) => {
    res.redirect('/');
});

app.get('/status', function(req, res){
   res.send("Server is up!");
//    request(apiUrl, { json: true }, (err, response, body) => {
//         if (err) {
//             return console.log(err);
//         }
//         // Stuur de API-response naar de view
//         res.render('index', { data: body });
//     });
});

app.listen(3000, () => {
    console.log('Server luistert op poort 3000');
});

// keycloak.protect()
// keycloak.store.get(request)



// const express = require('express');
// const Keycloak = require('keycloak-connect');
// const session = require('express-session');

// const app = express();
// const keycloak = new Keycloak({});

// app.use(session({ secret: 'mySecret', resave: false, saveUninitialized: true }));
// app.use(keycloak.middleware());

// app.get('/secured', keycloak.protect(), (req, res) => {
//   res.send(`Welcome, ${req.kauth.grant.access_token.content.preferred_username}`);
// });

// app.listen(3000, () => {
//   console.log('Server running on port 3000');
// });


// const express = require('express');
// const Keycloak = require('keycloak-connect');
// const session = require('express-session');
// const axios = require('axios');

// const app = express();
// const keycloak = new Keycloak({});

// app.use(session({ secret: 'mySecret', resave: false, saveUninitialized: true }));
// app.use(keycloak.middleware());

// app.get('/secured', keycloak.protect(), (req, res) => {
//   axios({
//     method: 'get',
//     url: 'https://my-secured-api.com/data',
//     headers: {
//       Authorization: `Bearer ${req.kauth.grant.access_token.token}`
//     }
//   })
//   .then(response => {
//     res.send(response.data);
//   })
//   .catch(error => {
//     console.log(error);
//     res.send(error);
//   });
// });

// app.listen(3000, () => {
//   console.log('Server running on port 3000');
// });
