import axios from 'axios';


/* to cleanup App.js file we create this custom client file containing all config for accessing unsplash api
 * we could further isolate query params as well and move them to this file *
 */
export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID 285b8daa167c248511c33bc5c3044396cf577f7ac6356e6c2eff9c30f4b37f98'
	}
});