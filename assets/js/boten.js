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
    fetch('https://apizee1.000webhostapp.com/getboten.php', {
        headers: {
            'Accept': 'application/json',
        },
        method: "GET", // POST, PUT, DELETE, etc.
        mode: "cors", // same-origin, no-cors
    })
        .then(response => response.json())
        .then(function (data) {
            console.log(data);
            var boten = data;
            var botenlijst = document.getElementById('boot');
            for (var i = 0; i < boten.length; i++) {
                // var botenitem = document.createElement('li');
                // botenitem.innerHTML = boten[i].naam;
                // botenlijst.appendChild(botenitem);
                var botenitem = '<div class="card"><img src="https://drive.google.com/uc?export=view&id=' + boten[i].img_ID + '" class="card-img-top" width="20px"><div class="card-body clearfix"><h4 class="card-title">' + boten[i].naam + '</h4><p class="card-text border-light border-top border-bottom"><span class="row"><span class="col-6 text-muted text-left"><a href="' + boten[i].datasheet + '" class="btn btn-outline-dark float-left">Datasheet</a></span><span class="col-6 text-muted text-right"><a href="javascript: void(0);" class="btn btn-outline-dark float-right schade" onclick="schadeBtn(this)" data-boot=' + boten[i].id + ' data-bootnaam="' + boten[i].naam + '">schade</a></span></span></p><p class="card-text">' + boten[i].description + '</p></div></div>';
                botenlijst.innerHTML += botenitem;

                select = document.getElementById('bootnaam');
                var opt = document.createElement('option');
                opt.value = boten[i].naam;
                opt.innerHTML = boten[i].naam;
                select.appendChild(opt);

            }

        })
        .catch(function (err) {
            console.log("Something went wrong!", err);
        });
}

function loadcards() {
    loadboten();

    // for (var i = 0; i < boten.length; i++) {
    //     var botenitem = document.createElement('li');
    //     botenitem.innerHTML = boten[i].naam;
    //     botenlijst.appendChild(botenitem);
    // }
    // var botenlijst = document.getElementById('boot');
    // var botenitem = '<div class="card"><img src="https://drive.google.com/uc?export=view&id=1-YfVH0eq2lwVyU3nWc9dOh_N9e1F2LXJ" class="card-img-top" width="20px"><div class="card-body clearfix"><h4 class="card-title">stormvogel</h4><p class="card-text border-light border-top border-bottom"><span class="row"><span class="col-6 text-muted text-left"><a href="" class="btn btn-outline-dark float-left">Datasheet</a></span><span class="col-6 text-muted text-right"><a href="javascript: void(0);" class="btn btn-outline-dark float-right schade"  onclick="schadeBtn(this)" data-boot=0>schade</a></span></span></p><p class="card-text">demo model</p></div></div>';
    // botenlijst.innerHTML += botenitem;
    // botenitem = '<div class="card"><img src="https://drive.google.com/uc?export=view&id=1-YfVH0eq2lwVyU3nWc9dOh_N9e1F2LXJ" class="card-img-top" width="20px"><div class="card-body clearfix"><h4 class="card-title">stormvogel</h4><p class="card-text border-light border-top border-bottom"><span class="row"><span class="col-6 text-muted text-left"><a href="" class="btn btn-outline-dark float-left">Datasheet</a></span><span class="col-6 text-muted text-right"><a href="javascript: void(0);" class="btn btn-outline-dark float-right schade"  onclick="schadeBtn(this)" data-boot=1>schade</a></span></span></p><p class="card-text">demo model</p></div></div>';
    // botenlijst.innerHTML += botenitem;
    // var botenitem = '<div class="card"><img src="https://drive.google.com/uc?export=view&id=1-YfVH0eq2lwVyU3nWc9dOh_N9e1F2LXJ" class="card-img-top" width="20px"><div class="card-body clearfix"><h4 class="card-title">stormvogel</h4><p class="card-text border-light border-top border-bottom"><span class="row"><span class="col-6 text-muted text-left"><a href="" class="btn btn-outline-dark float-left">Datasheet</a></span><span class="col-6 text-muted text-right"><a href="javascript: void(0);" class="btn btn-outline-dark float-right schade"  onclick="schadeBtn(this)" data-boot=2>schade</a></span></span></p><p class="card-text">demo model</p></div></div>';
    // botenlijst.innerHTML += botenitem;
    // var botenitem = '<div class="card"><img src="https://drive.google.com/uc?export=view&id=1-YfVH0eq2lwVyU3nWc9dOh_N9e1F2LXJ" class="card-img-top" width="20px"><div class="card-body clearfix"><h4 class="card-title">stormvogel</h4><p class="card-text border-light border-top border-bottom"><span class="row"><span class="col-6 text-muted text-left"><a href="" class="btn btn-outline-dark float-left">Datasheet</a></span><span class="col-6 text-muted text-right"><a href="javascript: void(0);" class="btn btn-outline-dark float-right schade"  onclick="schadeBtn(this)" data-boot=3>schade</a></span></span></p><p class="card-text">demo model</p></div></div>';
    // botenlijst.innerHTML += botenitem;
    // botenlijst.innerHTML += botenitem;
    // botenlijst.innerHTML += botenitem;
    // botenlijst.innerHTML += botenitem;
    // botenlijst.innerHTML += botenitem;
    // botenlijst.innerHTML += botenitem;

}

