import axios from "axios";

export default axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization: "Client-ID b1lM3xZF9SaNxoRO7m2RWoZku8D4Z04kSRNGsbaHKW4",
	},
});
