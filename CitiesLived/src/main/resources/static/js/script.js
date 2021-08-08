window.addEventListener('load', function(e) {
	console.log('script.js loaded');
	run();
});

function run() {	
	loadCitiesLived();
// this is for Adding a New City
	document.newCityForm.newCityBtn
	.addEventListener('click', function(event) {
		event.preventDefault();
		let cfm = document.newCityForm;
		let newCity = {
			name : cfm.name.value,
			address : cfm.address.value,
			state : cfm.state.value,
			postalCode : cfm.postalCode.value,
			country : cfm.country.value
		};
		addNewCity(newCity);
	});
}

function getCityById(cityId) {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', `api/cities/${cityId}`); // 'api/cities/' + cityId
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let city = JSON.parse(xhr.responseText);
				displayAllDetails(city);
			} else {
				let getCityByIdDiv = getElementById('getCityByIdDiv');
				getCityByIdDiv.textContent = 'City not found';
			}
		}
	}
	xhr.send();
}

function loadCitiesLived() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/cities');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let citiesLived = JSON.parse(xhr.responseText);
				countUniqueCities(citiesLived);
				displayCitiesLived(citiesLived);
			}
		}
	};
	xhr.send();
}

function displayCitiesLived(citiesLived) {
	let table = document.getElementById('citiesListTable');              
	let tr = document.createElement('tr');
	let th = document.createElement('th');
	table.appendChild(tr);
	tr.appendChild(th);
	th.textContent = 'City';
	th = document.createElement('th');
	th.textContent = 'State';
	tr.appendChild(th);
	th = document.createElement('th');
	th.textContent = 'Details'
	tr.appendChild(th)
	th = document.createElement('th');
	th.textContent = 'Update City'
	tr.appendChild(th)
	for (const city of citiesLived) {
		let td = document.createElement('td');
		let detailBtn = document.createElement('button');
		detailBtn.textContent = 'Details';
		detailBtn.className = 'btn btn-outline-light'
		detailBtn.addEventListener('click', function(e){
			e.preventDefault();
			getCityById(city.id);
		});
		let updateBtn = document.createElement('button');
		updateBtn.textContent = 'Update';
		updateBtn.className = 'btn btn-outline-success'
		updateBtn.addEventListener('click', function(e){
			// e.preventDefault();
			updateFormCreation(city);
		});
		tr = document.createElement('tr');
		table.appendChild(tr);
		tr.appendChild(td);
		td.textContent = city.name;
		td = document.createElement('td');
		tr.appendChild(td);
		td.textContent = city.state;
		td = document.createElement('td'); // this is for Details btn
		td.appendChild(detailBtn);
		tr.appendChild(td);
		td = document.createElement('td'); // this is for Update Btn
		td.appendChild(updateBtn);
		tr.appendChild(td);
	}
}

function addNewCity(city) {
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/cities');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 201) {
				loadCitiesLived();
				location.reload();
			} else {
			let newCityh2 = document.createElement('h2');
			document.body.appendChild(newCityh2);
			newCityh2.textContent = 'Could not add the new city';
		}
	  }
	};
	xhr.setRequestHeader("Content-type", "application/json");
	let cityJson = JSON.stringify(city);
	xhr.send(cityJson);
}

// TODO: COMPLETE LOGIC 
function updateCity(city) {
	let xhr = new XMLHttpRequest();
	xhr.open('PUT', 'api/cities');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
			loadCitiesLived();
			location.reload();
		} else {
			let newCityh2 = document.createElement('h2');
			document.body.appendChild(newCityh2);
			newCityh2.textContent = 'Could not update the city';
		}
	  }
	};
	xhr.setRequestHeader("Content-type", "application/json");
	let updatedCityJson = JSON.stringify(city);
	xhr.send(updatedCityJson);
}

function deleteCity(cityId) {
	let xhr = new XMLHttpRequest();
	xhr.open('DELETE', `api/cities/${cityId}`);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 204) {
			loadCitiesLived();
			location.reload();
		} else {
			let newCityh2 = document.createElement('h2');
			document.body.appendChild(newCityh2);
			newCityh2.textContent = `Could not delete city with id ${cityId}`;
		}
	  }
	};
	xhr.send();
}

function displayAllDetails(city) {
	let tableDiv = document.getElementById('allDetailsDiv');
	if (tableDiv.firstElementChild !== null) {
		tableDiv.firstElementChild.remove();
	}
	let table = document.createElement('table');
	let h4 = document.createElement('h4');
	let tr = document.createElement('tr');
	let th = document.createElement('th');
	h4.textContent = `${city.name}`;
	tableDiv.appendChild(table);
	table.appendChild(h4);
	table.appendChild(tr);
	tr.appendChild(th);
	th.textContent = 'City';
	th = document.createElement('th');
	th.textContent = 'State';
	tr.appendChild(th);
	th = document.createElement('th');
	th.textContent = 'Address';
	tr.appendChild(th);
	th = document.createElement('th');
	th.textContent = 'ZIP Code';
	tr.appendChild(th);
	th = document.createElement('th');
	th.textContent = 'Country';
	tr.appendChild(th);
	th = document.createElement('th');
	th.textContent = 'Delete Entry';
	tr.appendChild(th);
		let td = document.createElement('td');
		tr = document.createElement('tr');
		table.appendChild(tr);
		tr.appendChild(td);
		td.textContent = city.name;
		td = document.createElement('td');
		tr.appendChild(td);
		td.textContent = city.state;
		td = document.createElement('td');
		tr.appendChild(td);
		td.textContent = city.address;
		td = document.createElement('td');
		tr.appendChild(td);
		td.textContent = city.postalCode;
		td = document.createElement('td');
		tr.appendChild(td);
		td.textContent = city.country;
		let deleteBtn = document.createElement('button');
		td = document.createElement('td'); // for the Delete button 
		td.appendChild(deleteBtn);
		tr.appendChild(td);
		deleteBtn.textContent = 'Delete';
		deleteBtn.className = 'btn btn-outline-danger'
		deleteBtn.addEventListener('click', function(e){
			e.preventDefault();
			deleteCity(city.id);
		});
}

// this function is for Data Aggregation (of all the events)
// in this case, we are seeing how many different cities I've lived in
function countUniqueCities(cities) {
	let count = 0;
	let div = document.getElementById('countCitiesDiv');
	for (const city of cities) {
		count++;
	}
	let h5 = document.createElement('h5');
	div.appendChild(h5);
	h5.textContent = `You've lived in ${count} Unique Cities.`;
}

// dynamically create Form && call UpdateCity here
function updateFormCreation(city) {
	let updateDiv = document.getElementById('updateCityDiv');
	let fm = document.createElement('form');
	let h2 = document.createElement('h2');
	h2.textContent = `Update ${city.name}`;
	updateDiv.appendChild(fm);
	fm.appendChild(h2);
	fm.name = 'updateCityForm';
	fm.id = 'updateCityForm';
	let input = document.createElement('input');
	let label = document.createElement('label');
	let br = document.createElement('br');
	fm.appendChild(label);
	fm.appendChild(input);
	label.for = 'id';
	label.textContent = 'Id';
	input.name = 'id';
	input.id = 'id';
	input.value = `${city.id}`;
	fm.appendChild(br);

	input = document.createElement('input');
	label = document.createElement('label');
	br = document.createElement('br');
	fm.appendChild(label);
	fm.appendChild(input);
	label.for = 'name';
	label.textContent = 'City';
	input.type = 'text';
	input.name = 'name';
	input.id = 'name';
	input.value = `${city.name}`;
	fm.appendChild(br);

	input = document.createElement('input');
	label = document.createElement('label');
	br = document.createElement('br');
	fm.appendChild(label);
	fm.appendChild(input);
	label.for = 'state';
	label.textContent = 'State';
	input.name = 'state';
	input.id = 'state';
	input.value = `${city.state}`;
	fm.appendChild(br);

	input = document.createElement('input');
	label = document.createElement('label');
	br = document.createElement('br');
	fm.appendChild(label);
	fm.appendChild(input);
	label.for = 'address';
	label.textContent = 'Address';
	input.name = 'address';
	input.id = 'address';
	input.value = `${city.address}`;
	fm.appendChild(br);

	input = document.createElement('input');
	label = document.createElement('label');
	br = document.createElement('br');
	label.for = 'postalCode';
	label.textContent = 'ZIP Code';
	fm.appendChild(label);
	fm.appendChild(input);
	input.name = 'postalCode';
	input.id = 'postalCode';
	input.value = `${city.postalCode}`;
	fm.appendChild(br);

	input = document.createElement('input');
	label = document.createElement('label');
	br = document.createElement('br');
	label.for = 'country';
	label.textContent = 'Country';
	fm.appendChild(label);
	fm.appendChild(input);
	input.name = 'country';
	input.id = 'country';
	input.value = `${city.country}`;
	fm.appendChild(br);

	let btn = document.createElement('input');
	fm.appendChild(btn);
	btn.className = 'btn btn-outline-light';
	btn.type = 'submit';
	btn.id = 'submit';
	btn.addEventListener('click', function(e) {
		e.preventDefault();
		updateCityLived();
	});
}

function updateCityLived() {
	var requestBody = {
		'id' : parseInt(document.getElementById('id').value),
		'name' : document.getElementById('name').value,
		'state' : document.getElementById('state').value,
		'address' : document.getElementById('address').value,
		'postalCode' : document.getElementById('postalCode').value,
		'country' : document.getElementById('country').value
	   }
	   let xhr = new XMLHttpRequest(); 
	   xhr.open('PUT', 'api/cities'); 
	   xhr.setRequestHeader("Content-Type", "application/json"); 
	   xhr.onreadystatechange = function () {
		   if (xhr.readyState === 4) {
			   if (xhr.status === 200) {
				//    let updatedCity = JSON.parse(xhr.responseText); 
				   let table = document.getElementById('citiesListTable'); 
				   table.innerHTML = ''; 
				   loadCitiesLived();
				   location.reload();
			   }
			   else {
				let newCityh2 = document.createElement('h2');
				document.body.appendChild(newCityh2);
				newCityh2.textContent = 'Could not update the city';
			   }
		   }
	   }; 
	   console.log(JSON.stringify(requestBody));
	   xhr.send(JSON.stringify(requestBody)); 

}