function Button(props) {/*
	const ID = this.props.id;
	const args = this.props.func.arguments;
	const func = this.props.func.name; // may need to be tweaked, this contains the function to be added as event handler under string form
	const text = this.props.innertext; // string containing the text that is to be displayed into the button
	const INFO = this.props.info; // this is a JSON string that stores information such as side and faction
	return (
		<button id={ID} onClick={() => {window[func](args)}} info={INFO}>
			{text}
		</button>
	);*/
	return (
		<button>Click me!, [props]</button>
	)
}


const stuff = () => alert("button pressed!");

export default Button;
