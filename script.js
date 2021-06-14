// Write your JavaScript code here!
window.addEventListener("load", function(){
   console.log("inside load event");
   

let form = document.getElementById("formSubmit");

form.addEventListener("click", function(event) { 
   // event.preventDefault();
   console.log("inside form submit event");
   let pilotsName = document.getElementById("pilotName");
   let coPilotsName = document.getElementById("copilotName");
   let fuelLevelInput = document.getElementById("fuelLevel");
   let cargoMassInput = document.getElementById("cargoMass");

let faultyItemsInput = document.getElementById("faultyItems");
let pilotStatusInput = document.getElementById("pilotStatus");
let copilotStatusInput = document.getElementById("copilotStatus");

let cargoStatusInput = document.getElementById("cargoStatus");

let launchStatusInput = document.getElementById("launchStatus");

let launchStatusCheckInput = document.getElementById("launchStatusCheck");

//visibility
element = document.querySelector('.container');

//Testing - remove later
// launchStatusCheckInput.style.visibility = "visible";
// launchStatusInput.style.visibility = "visible";
faultyItemsInput.style.visibility = "visible";

let standardFuel = 10000;
// if(!isNaN(pilotsName.value)|| !isNaN(coPilotsName.value) || !isNaN(fuelLevelInput.value) || !isNaN(cargoMassInput.value))

if(fuelLevelInput.value === "" || cargoMassInput.value === "" || pilotsName.value === "" || coPilotsName.value === ""){	
alert("All fields are required");
event.preventDefault();
}

else if(!isNaN(pilotsName.value) || !isNaN(coPilotsName.value) || isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value) ){
   alert("Make sure to enter valid information to each field!")
event.preventDefault();
}

else{
   
// alert(fuelLevelInput.value);
// if(fuelLevelInput.value !== ""){
if (fuelLevelInput.value < standardFuel){
	alert("inside fuelCheck");
	faultyItemsInput.style.visibility = "visible";
	pilotStatusInput.innerHTML = `The Pilot ${pilotsName.value} is ready for launch`;
	copilotStatusInput.innerHTML = `The CoPilot ${coPilotsName.value} is ready for launch`;
	launchStatusInput.innerHTML = "Shuttle not ready for launch";
	launchStatusInput.style.color = "red";
}
// }
else if (cargoMassInput.value > 10000){
	faultyItemsInput.style.visibility = "visible";
	pilotStatusInput.innerHTML = `The Pilot ${pilotsName.value} is ready for launch`;
	copilotStatusInput.innerHTML = `The CoPilot ${coPilotsName.value} is ready for launch`;
	launchStatusInput.innerHTML = "Shuttle not ready for launch";
	launchStatusInput.style.color = "red";
	cargoStatusInput.innerHTML = "There is too much mass for the shuttle to take off";
}
else if (fuelLevelInput.value > standardFuel && cargoMassInput.value < 10000){
   // launchStatusInput.style.visibility = "visible";
   // pilotStatusInput.style.visibility = "visible";
   // copilotStatusInput.style.visibility = "visible";
   // launchStatusCheckInput.style.visibility = "visible";
   // launchStatusInput.style.visibility = "visible";
   faultyItemsInput.style.visibility = "visible";
   // faultyItemsInput.style.di  splay = 'block';
   // faultyItemsInput.removeAttribute("hidden");
   // element.style.visibility = 'visible';
   // element.style.display = 'block';
   // faultyItemsInput.style.display = 'block';
   // faultyItems.style.visibility = "visible";
   
   


	pilotStatusInput.innerHTML = `The Pilot ${pilotsName.value} is ready for launch`;
	copilotStatusInput.innerHTML = `The CoPilot ${coPilotsName.value} is ready for launch`;
	launchStatusInput.style.color = "green";
	launchStatusInput.innerHTML = "Shuttle is ready for launch";

	
}

}
// faultyItemsInput.style.visibility = "visible";
//Starting JSON Code
fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
   response.json().then(function(json) {
      const missionTargetField = document.getElementById("missionTarget");  
      // for(i=0;i<json.length;i++){
         missionTargetField.innerHTML = `<h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[4].name}</li>
            <li>Diameter: ${json[4].diameter}</li>
            <li>Star: ${json[4].star}</li>
            <li>Distance from Earth: ${json[4].distance}</li>
            <li>Number of Moons: ${json[4].moons}</li>
         </ol>
         <img src="${json[4].image}">`;
      // }

   });
});


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
