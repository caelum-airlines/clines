import fetch from 'isomorphic-unfetch'

const EMPTY_HEADERS = {}

const URL_BUILDER = (baseURL) => (uri) => `${baseURL}/${uri}`.replace(/\/$/, "");
const HEADERS_BUILDER = (defaultHeaders) => (headers) => ({...defaultHeaders, ...headers});

export default class RestClient {
    constructor(baseURL, withCors, defaultHeaders = EMPTY_HEADERS) {
        this.buildURL = URL_BUILDER(baseURL);
        this.buildHeaders = HEADERS_BUILDER(defaultHeaders);
        this.withCors = withCors;
    }

    _buildOptions(method, receivedHeaders, others={}) {
        let headers = this.buildHeaders(receivedHeaders);

        let mode = {}

        if (this.withCors) {
            mode = {mode: "cors"}
        }

        return {
            ...others,
            method,
            headers,
            ...mode,
        }
    }

    async get(uri = "", headers = {}) {

        const options = this._buildOptions('GET', headers)

        const response = await fetch(this.buildURL(uri), options);

        console.log(`Status code: ${response.status}`)

        const json =  await response.json()

        console.log(`JSON: ${JSON.stringify(json)}`)

        return json
    }

    async post(body, uri = "", headers = {'Content-type': 'application/json'}) {
        const options = this._buildOptions('POST', headers, {body: JSON.stringify(body)})

        console.log(options)

        return await  fetch(this.buildURL(uri), options)
    }
}
