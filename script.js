// Write your JavaScript code here!
window.addEventListener("load", function(){
   
let form = document.getElementById("formSubmit");


form.addEventListener("click", function(event) { 
   event.preventDefault();
  
   let pilotsName = document.getElementById("pilotName");
   let coPilotsName = document.getElementById("copilotName");
   let fuelLevelInput = document.getElementById("fuelLevel");
   let cargoMassInput = document.getElementById("cargoMass");

let faultyItemsInput = document.getElementById("faultyItems");
let pilotStatusInput = document.getElementById("pilotStatus");
let copilotStatusInput = document.getElementById("copilotStatus");
let fuelStatusInput = document.getElementById("fuelStatus");
let cargoStatusInput = document.getElementById("cargoStatus");

let launchStatusInput = document.getElementById("launchStatus");

let launchStatusCheckInput = document.getElementById("launchStatusCheck");

let standardFuel = 10000;
// if(!isNaN(pilotsName.value)|| !isNaN(coPilotsName.value) || !isNaN(fuelLevelInput.value) || !isNaN(cargoMassInput.value))

if(fuelLevelInput.value === "" || cargoMassInput.value === "" || pilotsName.value === "" || coPilotsName.value === ""){	
alert("All fields are required!");
// event.preventDefault();
}

else if(!isNaN(pilotsName.value) || !isNaN(coPilotsName.value) || isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value) ){
   alert("Make sure to enter valid information to each field!")
// event.preventDefault();
}

else{
   
if (fuelLevelInput.value < standardFuel){
	faultyItemsInput.style.visibility = "visible";
	pilotStatusInput.innerHTML = `The Pilot ${pilotsName.value} is ready for launch`;
   fuelStatusInput.innerHTML = `Fuel level too low for launch`;
	copilotStatusInput.innerHTML = `The Co-pilot ${coPilotsName.value} is ready for launch`;
	launchStatusInput.innerHTML = "Shuttle not ready for launch";
	launchStatusInput.style.color = "red";
}

else if (cargoMassInput.value > 10000){
	faultyItemsInput.style.visibility = "visible";
	pilotStatusInput.innerHTML = `The Pilot ${pilotsName.value} is ready for launch`;
	copilotStatusInput.innerHTML = `The CoPilot ${coPilotsName.value} is ready for launch`;
	launchStatusInput.innerHTML = "Shuttle not ready for launch";
	launchStatusInput.style.color = "red";
	cargoStatusInput.innerHTML = "There is too much mass for the shuttle to take off";
}
else if (fuelLevelInput.value > standardFuel && cargoMassInput.value < 10000){
  
   faultyItemsInput.style.visibility = "visible";
   pilotStatusInput.innerHTML = `The Pilot ${pilotsName.value} is ready for launch`;
	copilotStatusInput.innerHTML = `The CoPilot ${coPilotsName.value} is ready for launch`;
	launchStatusInput.style.color = "green";
	launchStatusInput.innerHTML = "Shuttle is ready for launch";
   cargoStatusInput.innerHTML = "Cargo mass is good for the shuttle to take off";
   fuelStatusInput.innerHTML = `Fuel level is good for the shuttle to take off`;

	fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
   response.json().then(function(json) {
      const missionTargetField = document.getElementById("missionTarget");  
      
         let index = Math.floor(Math.random() * json.length);
         missionTargetField.innerHTML = `<h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[index].name}</li>
            <li>Diameter: ${json[index].diameter}</li>
            <li>Star: ${json[index].star}</li>
            <li>Distance from Earth: ${json[index].distance}</li>
            <li>Number of Moons: ${json[index].moons}</li>
         </ol>
         <img src="${json[index].image}">`;
         // index = (index + 1) % json.length;
         
    

   });
});
}

}

});

});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
