// function boten() {
//     console.log('start');
//     const url = 'https://zeescouts.000webhostapp.com/getboten.php';

//     const req = new XMLHttpRequest();
//     req.open('GET', url, true);
//     console.log(req);

//     req.onreadystatechange = function () {
//         if (req.readyState == 4) {
//             if (req.status == 200) {
//                 var json = JSON.parse(this.responseText);
//                 console.log(json);
//                 return(json);

//             } else if (req.status == 403) {
//                 alert('Forbidden');
//             }
//         }
//     }
//     req.send();
// }

function loadboten() {
    console.log('start');
    const url = 'https://zeescouts.000webhostapp.com/getboten.php';

    const req = new XMLHttpRequest();
    req.open('GET', url, true);
    console.log(req);

    req.onreadystatechange = function () {
        if (req.readyState == 4) {
            if (req.status == 200) {
                var json = JSON.parse(this.responseText);
                console.log(json);
                var boten = json;
                var botenlijst = document.getElementById('botenlijst');
                for (var i = 0; i < boten.length; i++) {
                    var botenitem = document.createElement('li');
                    botenitem.innerHTML = boten[i].naam;
                    botenlijst.appendChild(botenitem);
                }
            } else if (req.status == 403) {
                alert('Forbidden');
            }
        }
    }
    req.send();
}

function loadcards() { 
    loadboten();
    // for (var i = 0; i < boten.length; i++) {
    //     var botenitem = document.createElement('li');
    //     botenitem.innerHTML = boten[i].naam;
    //     botenlijst.appendChild(botenitem);
    // }
}