import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Smurf from './Smurf';

class Smurfs extends Component {
	render() {
		return (
			<div className='Smurfs'>
				<Link to='smurf-form'>
					<h1>Go to Smurf-Form?</h1>
				</Link>
				<ul>
					{this.props.smurfs.map(smurf => {
						return (
							<Smurf
								name={smurf.name}
								id={smurf.id}
								age={smurf.age}
								height={smurf.height}
								key={smurf.id}
							/>
						);
					})}
				</ul>
			</div>
		);
	}
}

Smurf.defaultProps = {
	smurfs : [],
};

export default Smurfs;
