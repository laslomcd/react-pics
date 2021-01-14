import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
	state = {
		images: [],
	};

	onSearchSubmit = async (term) => {
		const response = await axios.get("https://api.unsplash.com/search/photos", {
			params: { query: term },
			headers: {
				Authorization: "Client-ID b1lM3xZF9SaNxoRO7m2RWoZku8D4Z04kSRNGsbaHKW4",
			},
		});
		this.setState({ images: response.data.results });
	};

	render() {
		return (
			<div className="ui container" style={{ marginTop: "10px" }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
			</div>
		);
	}
}

export default App;
