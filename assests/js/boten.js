function boten() {
    console.log('start');
    const url = 'http://zeescouts.000webhostapp.com/getboten.php';
  
    const req = new XMLHttpRequest();
    req.open('GET', url, true);
    req.setRequestHeader('mode', 'no-cors');
    req.setRequestHeader('Content-Length', '564');
    console.log(req);
  
    req.onreadystatechange = function () {
        if (req.readyState == 4) {
            if (req.status == 200) {
              var json = this.responseText;
              console.log(json);
               
            } else if (req.status == 403) {
                alert('Forbidden');
            }
        }
    }
    req.send();
  }