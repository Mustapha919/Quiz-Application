//import the react and reactdom libraries
import React from 'react';
import ReactDOM from 'react-dom';

//Create a react component
// const App = () =>  {
// 	const buttonText = 'clickme!';


// 	return(
// 		<div>
// 		   <label className="label" htmlFor="name">Enter name : </label>
// 		   <input id="name" type="text" />

// 		   {/*<button style="background-color: blue; color: white;">Submit</button>*/}

// 		   <button style={{backgroundColor : 'red', color : 'white'}}>
// 		      {getButtonText()}
// 		   </button>
// 		</div>
// 	);
// };

// function getTime() {
// 	return(new Date()).toLocaleTimeString()
// }

// //Create a react component
// const App = () => {
// 	return(
// 		<div>
// 			<div>Current Time</div>
// 			<h3>{getTime()}</h3>
// 		</div>
// 	);
// };

//Create a react component
const App = () => {
	const date = new Date();
	const hours = date.getHours();
	let timeOfDay;

	if(hours < 12){
		timeOfDay = "Morning" 
	}
	else if(hours >= 12 && hours < 16){
		timeOfDay = "Afternoon"
	}
	else if(hours >= 16 && hours < 20){
		timeOfDay = "Evening"
	}
	else {
		timeOfDay = "Night"
	}
	return(
		<div>
			<h1 style={{color : "#ff8c00"}} >
				Good {timeOfDay}!
			</h1>
		</div>
	);
};

//Take the react component and show it in the screen
ReactDOM.render(
	<App />, document.querySelector('#root') 
);