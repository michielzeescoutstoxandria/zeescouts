const https = require('https');

function updateDataBuienradar(){
	let req = https.get("https://api.openweathermap.org/data/2.5/weather?lat=51.319978006056466&lon=4.868497528758273&appid=a0fe2db2e4fd8ca09f4d160476a72330&units=metric", function(res) {
		let data = '', json_data;
		res.on('data', function(stream) {
			data += stream;
		});
		res.on('end', function() {
			json_data = JSON.parse(data);
			buienradardata = json_data;
			console.log(buienradardata);
		});
	}).on('error', (e) => {
		errorText += e.toString();
	});
}