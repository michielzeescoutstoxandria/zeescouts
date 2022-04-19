var getClient = function(){
    /*
    Example result:
        {
            url: 'http://localhost:8888/auth',
            realm: 'scouts',
            clientId: 'groepsadmin-localhost-8000',
            redirectUri: 'http://localhost:8000/'
        }
    */
  
    var returnClient = {
      url: 'https://zeescoutstoxandria.netlify.app/',
      realm: 'scouts',
      clientId: null,
      redirectUri: window.location.href
    }
  
    // var returnClient = {
    //   url: 'http://localhost:8888/auth/',
    //   realm: 'scouts',
    //   clientId: null,
    //   redirectUri: window.location.href
    // }

    return returnClient;
  }
  