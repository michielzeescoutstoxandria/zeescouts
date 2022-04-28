const userAction = async () => {
    const response = await fetch('https://groepsadmin.scoutsengidsenvlaanderen.be/groepsadmin/rest-ga/', {
      mode: 'no-cors'
    });
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    return myJson;
  }