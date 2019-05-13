import config from '../config/index'

const api = config.api

function filterStatus(response) {
	if (response.status >= 200 && response.status < 300) {
		return response
	} else {
		let error = new Error(response.statusText);
		error.response = response;
		error.type = 'http';
		throw error;
	}
}

function filterJSON(response) {
    console.log('hideLoadding')
    return response.json();
}

function filterResult(result) {
	// if (result.status) {
		return result.data;
	// } else {
		// throw result.msg;
	// }
}

function get(url,param){
    url = api + url
    console.log('showLoadding')
    return fetch(url,{
        method: 'get',
        mode: 'cors',
        credentials: 'include'
    }).then(filterJSON)
}
function post(url,param){
    url = api + url
    console.log('showLoadding')
    return fetch(url,{
        method: 'post',
        mode: 'cors',
        credentials: 'include'
    }).then(filterJSON)
}

export default{
    get,
    post
}