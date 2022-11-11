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

function loadschade() {
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
            var schade = data;
            var schadelijst = document.getElementById('table-schade');
            for (var i = 0; i < schade.length; i++) {
                var schadeitem = `
                    <tr>
                        <td>1</td>
                        <td>${schade[i].bootnaam}</td>
                        <td>${schade[i].prioriteit}</td>
                        <td>${schade[i].description}</td>
                        <td>${schade[i].persoon}</td>
                        <td>
                                    
                                    <label class="switch">
                                        
                                        <input type="checkbox">
                                        <span class="slider round"></span>
                                        
                                    </label>
                        </td>
                        
                    </tr>
                `;
                schadelijst.innerHTML += schadeitem;

                // if(boten[i].beschikbaar == 0){
                //     const card = document.getElementById(`card${i}`);
                //     card.classList.add("kapot");
                // }

            }

        })
        .catch(function (err) {
            console.log("Something went wrong!", err);
            alert("tis kapot");
        });
}

function loadtable() {
    // loadschade();
}

