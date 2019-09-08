import React from 'react';
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar';

class App extends React.Component {

	state = { images: [] };

	/*This function we pass in as prop to SearchBar component.
	* Over there user input is handled and when Enter is pressed
	* this function is envoked in callback method.
	* We then do network request from here based on user input term
	* in SearchBar component
	*/
	onSearchSubmit = async (term) => {
		const response = await unsplash.get('search/photos', {
			params: { query: term },
		});
		this.setState({ images: response.data.results });
	}

	render() {
		return (
			<div className="ui container" style={{ marginTop: '10px' }}>
				<SearchBar onSearchSubmit={this.onSearchSubmit} />
				Found {this.state.images.length} images
			</div>
		);
	}
}

export default App;