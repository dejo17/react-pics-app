import React from 'react';

class SearchBar extends React.Component {

	state = { term: '' };

	/*This function is callback method to handle Enter key being pressed
	* while focus is in input field (equivalent of submit button).
	* We prevent default browser behavior where page is refreshed 
	* automaticaly and then we invoke parent component method which will do the 
	* network request based on search done in this Component. This method was received
	* as a Prop.
	*/
	onFormSubmit = (event) => {
		event.preventDefault();
		this.props.onSearchSubmit(this.state.term);
	}
	render(props) {
		return (
			<div className="ui segment">
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="field">
						<label>Image Search</label>
						<input
							type="text"
							value={this.state.term}
							onChange={(e) => this.setState({ term: e.target.value })} />
					</div>
				</form>
			</div>
		);
	}
}
export default SearchBar;