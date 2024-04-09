function Button(props) {
	const ID = this.props.id;
	const func = this.props.function; // may need to be tweaked, this contains the function to be added as event handler under string form
	const text = this.props.innertext; // string containing the text that is to be displayed into the button
	const INFO = this.props.info; // this is a JSON string that stores information such as side and faction
	return (
		<button id={ID} onClick={func} info={INFO}>
			{text}
		</button>
	);
}

export default Button;
