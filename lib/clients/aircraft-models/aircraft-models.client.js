import {urlFor, AIRCRAFT_MODELS} from '../shared/urls'
import RestClient from "../shared/rest-client";

const BASE_URL = urlFor(AIRCRAFT_MODELS)
const client = new RestClient(BASE_URL, true)


export const list = () => client.get()

export default {list}