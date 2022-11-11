function loadschade() {
    fetch('https://apizee1.000webhostapp.com/getschade.php', {
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
                                        
                                        <input type="checkbox" id="check${i}" data-id="${schade[i].id}" onclick="voltooid(this)" ${checkvoltooid(schade[i].voltooid)}>
                                        <span class="slider round"></span>
                                        
                                    </label>
                        </td>
                        
                    </tr>
                `;
                schadelijst.innerHTML += schadeitem;

            }

        })
        .catch(function (err) {
            console.log("Something went wrong!", err);
            alert("tis kapot");
        });
}

function checkvoltooid(voltooid){
    console.log(voltooid);
    if(voltooid == 1){
        return "checked";
    } else {
        return "";
    }
}

function loadkapot() {
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
            var boot = data;
            var bootlijst = document.getElementById('table-boot');
            for (var i = 0; i < boot.length; i++) {
                var bootitem = `
                    <tr>
                        <td>${boot[i].id}</td>
                        <td>${boot[i].naam}</td>
                        <td>
                                    
                                    <label class="switch">
                                        
                                        <input type="checkbox" id="beschikbaar${boot[i].id}" data-id="${boot[i].id}" onclick="beschikbaar(this)" ${checkvoltooid(boot[i].beschikbaar)}>
                                        <span class="slider round"></span>
                                        
                                    </label>
                        </td>
                        
                    </tr>
                `;
                bootlijst.innerHTML += bootitem;

            }

        })
        .catch(function (err) {
            console.log("Something went wrong!", err);
            alert("tis kapot");
        });
}

function loadtable() {
    loadschade();
}

function loadboten(){
    loadkapot();
}

function voltooid(d) {
    const id = d.getAttribute("data-id");
    console.log(d.checked);
    var data = new FormData();
    data.append("id", id);
    data.append("voltooid", d.checked);

    // (B) INIT FETCH POST
    fetch("https://apizee1.000webhostapp.com/postvoltooid.php", {
      method: "POST",
      body: data
    })

      // (C) RETURN SERVER RESPONSE AS TEXT
      .then((result) => {
        if (result.status != 200) { throw new Error("Bad Server Response"); }
        return result.text();
      })

      // (D) SERVER RESPONSE
      .then((response) => {
        console.log(response);
      })

      // (E) HANDLE ERRORS - OPTIONAL
      .catch((error) => { console.log(error); 
    alert("tis kapot")});

    // (F) PREVENT FORM SUBMIT
    return false;
}

function beschikbaar(d) {
    const id = d.getAttribute("data-id");
    console.log(d.checked);
    var data = new FormData();
    data.append("id", id);
    data.append("beschikbaar", d.checked);

    // (B) INIT FETCH POST
    fetch("https://apizee1.000webhostapp.com/postbeschikbaar.php", {
      method: "POST",
      body: data
    })

      // (C) RETURN SERVER RESPONSE AS TEXT
      .then((result) => {
        if (result.status != 200) { throw new Error("Bad Server Response"); }
        return result.text();
      })

      // (D) SERVER RESPONSE
      .then((response) => {
        console.log(response);
      })

      // (E) HANDLE ERRORS - OPTIONAL
      .catch((error) => { console.log(error); 
    alert("tis kapot")});

    // (F) PREVENT FORM SUBMIT
    return false;
}