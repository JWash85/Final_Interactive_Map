/*Obtain the user's current location 
Map the location on a Leaflet map
Select a business type from list 
map the five nearest locations on the map using Foursquare API*/

//**Test that page was linked */
/*let five = '5'
let two = '2'
console.log(five + two)*/

//**API's */
//Get Users Location using Geolocation API
//Use Foursquare API to get five nearest locations



/*async function getCoords(){
    pos = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
        
    })
    return [pos.coords.latitude, pos.coords.longitude]
}
console.log(getCoords())
const myMap = {
	coordinates: [],
	businesses: [],
	map: {},
	markers: {},

    buildMap() {
		this.map = L.map('map', {
		center: this.coordinates,
		zoom: 11,
		});
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		minZoom: '15',
		}).addTo(this.map)
		const marker = L.marker(this.coordinates)
		marker.addTo(this.map).bindPopup('<p1><b>You Are Here</b><br></p1>').openPopup()
        const stations = L.layerGroup(this.businesses) 
        stations.addTo(this.map)
	},

    
    /*addMarkers() {
		for (var i = 0; i < this.businesses.length; i++) {
		this.markers = L.marker([
			this.businesses.results[i].geocodes.main
			
		])
			//.bindPopup(`<p1>${this.businesses[i].name}</p1>`).openPopup()
			.addTo(this.map)
		}
        addMarkers()
	},
    //Foursquare API Key fsq3GfLjfu97/4L4PL/Xti/VY+a1tK1lhjz/6fvcdTcRk88=



}*/

/*window.onload = async () => {
    const coords = await getCoords()
    //const locations = await fetchLocations()
    console.log(coords)
    myMap.coordinates = coords
    //myMap.businesses = locations
    myMap.buildMap()
    const business = await fetchLocations()
    myMap.businesses = business
    
}
/**************************************
//My many attempts at using Foursquare 
//Console logs results however unable to figure out how to get points onto map 
**********************************************
async function fetchLocations(){
    const options = {
        method: 'GET',
        headers: {
        Accept: 'application/json',
        Authorization: 'fsq3q3cSk8RzlddoJTP10YaAMGmAxa+MRml0xW5/ujQpYG8='
    }
  };
        let response = await fetch('https://api.foursquare.com/v3/places/search?query=Coffee&ll=37.6250633%2C-77.5331131&limit=5', options)
        //let response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.foursquare.com/v3/places/search?query=${business}&limit=${limit}&ll=${lat}%2C${lon}`, options)
        let data = await response.text();
        let parsedData = JSON.parse(data);
        //let businesses = parsedData.results
        let business1lat = parsedData.results[0].geocodes.main.latitude;
        let business1lon = parsedData.results[0].geocodes.main.longitude;
        let business2lat = parsedData.results[1].geocodes.main.latitude;
        let business2lon = parsedData.results[1].geocodes.main.longitude;
        let business3lat = parsedData.results[2].geocodes.main.latitude;
        let business3lon = parsedData.results[2].geocodes.main.longitude;
        let business4lat = parsedData.results[3].geocodes.main.latitude;
        let business4lon = parsedData.results[3].geocodes.main.longitude;
        let business5lat = parsedData.results[4].geocodes.main.latitude;
        let business5lon = parsedData.results[4].geocodes.main.longitude;
        let businesseslat =[business1lat,business2lat,business3lat,business4lat,business5lat]
        let businesseslon =[business1lon,business2lon,business3lon,business4lon,business5lon]
        let businesses = [businesseslat,businesseslon]
        //let lat = business.latitude
        //let long = business.longitude
        //let businesses = [lat, long]
        //return businesses
        //const rS = L.marker(business1lat, business1lon).bindPopup('Réaumur-Sébastopol')
        //const sSD = L.marker(business2lat, business2lon).bindPopup('Strasbourg-Saint-Denis')
        //const sentier = L.marker(business3lat, business3lon).bindPopup('Sentier')
        //const bourse = L.marker(business4lat, business4lon).bindPopup('Bourse')
        //const qS = L.marker(business5lat, business5lon).bindPopup('Quatre Septembre')
        
        //const businesses = L.layerGroup(rS, sSD, sentier, bourse, qS,).addTo(myMap)
        return(businesses)
        
        //.catch(err => console.error(err));
}
   
    document.getElementById("form").addEventListener("click", async (event)=>{
        event.preventDefault()
        console.log(event)
        
})*/




//const latlngs = L.latlngs(this.businesses)
//console.log(businesses.geocodes)
   /*function processBusinesses(data) {
    let businesses = data.map('element',(results)=>{
        let location = {
            name: results.name,
            lat: results.geocodes.main.latitude,
            long: results.geocodes.main.longitude
        };
        console.log(location)
    })
    //return businesses
}
processBusinesses()


/****************************************************************
 * attempt at using pieces of the solution code and isn't working
 ***************************************************************/
///
/*async function getFoursquare(business) {
    const options = {
        method: 'GET',
        headers: {
        Accept: 'application/json',
        Authorization: 'fsq3q3cSk8RzlddoJTP10YaAMGmAxa+MRml0xW5/ujQpYG8='
        }
    }
    let limit = 5
	let lat = myMap.coordinates[0]
	let lon = myMap.coordinates[1]
    let response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.foursquare.com/v3/places/search?query=${business}&limit=${limit}&ll=${lat}%2C${lon}`, options)
    let data = await response.text()
	let parsedData = JSON.parse(data)
	let businesses = parsedData.results
	return businesses
}
    function processBusinesses(data) {
        let businesses = data.map((element) => {
            let location = {
                name: element.name,
                lat: element.geocodes.main.latitude,
                long: element.geocodes.main.longitude
            };
            return location
        })
        return businesses
    }
    window.onload = async () => {
        const coords = await getCoords()
        myMap.coordinates = coords
        myMap.buildMap()
    }*/ 
/*const myMap = L.map('map', {
        center: [48.87007, 2.346453],
        zoom: 12,
});

const marker = L.marker([48.87007, 2.346453])
marker.addTo(myMap).bindPopup('<p1><b>You Are Here</b></p1>').openPopup()

// Add OpenStreetMap tiles:
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: '15',
}).addTo(myMap)

/*[48.87007, 2.346453]*/



/*******************************************
 * 2nd attenpt at using full solution code 
 *******************************************/

const myMap = {
	coordinates: [],
	businesses: [],
	map: {},
	markers: {},

	
	buildMap() {
		this.map = L.map('map', {
		center: this.coordinates,
		zoom: 11,
		});
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		minZoom: '15',
		}).addTo(this.map)
		const marker = L.marker(this.coordinates)
		marker.addTo(this.map).bindPopup('<p1><b>You are here</b><br></p1>').openPopup()
	},

	
	addMarkers() {
		for (var i = 0; i < this.businesses.length; i++) {
		this.markers = L.marker([
			this.businesses[i].lat,
			this.businesses[i].long,
		])
			.bindPopup(`<p1>${this.businesses[i].name}</p1>`).addTo(this.map)
		}
	},
}


async function getCoords(){
	const pos = await new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(resolve, reject)
	});
	return [pos.coords.latitude, pos.coords.longitude]
}

async function getFoursquare(business) {
	const options = {
		method: 'GET',
		headers: {
		Accept: 'application/json',
		Authorization: 'fsq3q3cSk8RzlddoJTP10YaAMGmAxa+MRml0xW5/ujQpYG8='
		}
	}
	let limit = 5
	let lat = myMap.coordinates[0]
	let lon = myMap.coordinates[1]
	let response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.foursquare.com/v3/places/search?&query=${business}&limit=${limit}&ll=${lat}%2C${lon}`, options)
	let data = await response.text()
	let parsedData = JSON.parse(data)
	let businesses = parsedData.results
	return businesses
}
function processBusinesses(data) {
	let businesses = data.map((element) => {
		let location = {
			name: element.name,
			lat: element.geocodes.main.latitude,
			long: element.geocodes.main.longitude
		};
		return location
	})
	return businesses
}

window.onload = async () => {
	const coords = await getCoords()
	myMap.coordinates = coords
	myMap.buildMap()
}

document.getElementById('submit')
document.addEventListener('click', async (event) => {
	event.preventDefault()
	let business = document.getElementById('locations').value
	let data = await getFoursquare(business)
	myMap.businesses = processBusinesses(data)
	myMap.addMarkers()
})