import React from "react";

class Car extends React.Component {
	render() {
		return (
			<h1>
				Hi, I am a {this.props.color} {this.props.brand}!
			</h1>
		);
	}
}

class Garage extends Car {
	render() {
		const carName = "Ford";
		const color = "Green";
		return (
			<>
				<h1> Who lives in my Garage?</h1>
				<Car brand={carName} color={color} />
			</>
		);
	}
}
export default (Car, Garage);
