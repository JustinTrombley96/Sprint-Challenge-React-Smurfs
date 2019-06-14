import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Smurf from './components/Smurf';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			smurfs : [],
		};
	}
	//An Axios request that retrieves the array of Smurfs in the Smurfs DB
	componentDidMount() {
		axios
			.get('http://localhost:3333/smurfs')
			.then(res => this.setState({ smurfs: res.data }))
			.catch(err => this.setState({ error: err }));
	}
	addSmurf = smurf => {
		axios
			.post('http://localhost:3333/smurfs', smurf)
			.then(res => {
				console.log(res);
			})
			.catch(err => {
				console.log(err);
			});
	};
	// add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
	// Notice what your map function is looping over and returning inside of Smurfs.
	// You'll need to make sure you have the right properties on state and pass them down to props.
	render() {
		return (
			<div className='App'>
				<nav>
					<NavLink to='/'>Smurfs</NavLink>
					<NavLink to='/smurf-form'>Smurf-Form</NavLink>
				</nav>
				<Route exact path='/smurf-form' component={SmurfForm}>
					<SmurfForm smurfs={this.state.smurfs} addSmurf={this.addSmurf} />
				</Route>
				<Route exact path='/'>
					<Smurfs smurfs={this.state.smurfs} />
				</Route>
			</div>
		);
	}
}

export default App;
