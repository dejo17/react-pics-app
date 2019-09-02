import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
	
	/*This function we pass in as prop to SearchBar component.
	* Over there user input is handled and when Enter is pressed
	* this function is envoked in callback method.
	* We then do network request from here based on user input term
	* in SearchBar component
	*/
	onSearchSubmit(term) {
		console.log('Working! Term is: '+ term);
	}
	
	render() {
		return (
			<div className="ui container" style={{ marginTop: '10px' }}>
				<SearchBar onSearchSubmit = {this.onSearchSubmit}/>
			</div>
		);
	}
}

export default App;