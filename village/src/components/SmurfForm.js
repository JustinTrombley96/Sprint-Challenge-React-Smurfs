import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class SmurfForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name   : '',
			age    : '',
			height : '',
		};
	}

	addSmurf = (event, smurf) => {
		event.preventDefault();
		axios;
		this.props.addSmurf(this.state);

		this.setState({
			name   : '',
			age    : '',
			height : '',
		});
		document.location.reload();
	};

	handleInputChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		return (
			<div className='SmurfForm'>
				<Link to='/'>
					<h4>Go to Smurfs?</h4>
				</Link>
				<form onSubmit={this.addSmurf}>
					<input onChange={this.handleInputChange} placeholder='name' value={this.state.name} name='name' />
					<input onChange={this.handleInputChange} placeholder='age' value={this.state.age} name='age' />
					<input
						onChange={this.handleInputChange}
						placeholder='height'
						value={this.state.height}
						name='height'
					/>
					<button type='submit'>Add to the village</button>
				</form>
			</div>
		);
	}
}

export default SmurfForm;
