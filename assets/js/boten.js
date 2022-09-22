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
                var botenlijst = document.getElementById('boot');
                for (var i = 0; i < boten.length; i++) {
                    // var botenitem = document.createElement('li');
                    // botenitem.innerHTML = boten[i].naam;
                    // botenlijst.appendChild(botenitem);
                    var botenitem = '<div class="card"><img src="https://drive.google.com/uc?export=view&id=' + boten[i].img_ID + '" class="card-img-top" width="20px"><div class="card-body clearfix"><h4 class="card-title">'+ boten[i].naam +'</h4><p class="card-text border-light border-top border-bottom"><span class="row"><span class="col-6 text-muted text-left"><a href="' + boten[i].datasheet + '" class="btn btn-outline-dark float-left">Datasheet</a></span><span class="col-6 text-muted text-right"><a href="aangifte.html" class="btn btn-outline-dark float-right">schade</a></span></span></p><p class="card-text">' + boten[i].description + '</p></div></div>';
                    botenlijst.innerHTML += botenitem;


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

