const debug = (!process.env.NODE_ENV || process.env.NODE_ENV == "development");

const api = debug ? "https://jsonplaceholder.typicode.com" : "https://jsonplaceholder.typicode.com"
export default {
    api,
    debug
}