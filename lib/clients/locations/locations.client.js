import {urlFor, LOCATIONS} from '../shared/urls'
import RestClient from "../shared/rest-client";

const BASE_URL = urlFor(LOCATIONS)
const client = new RestClient(BASE_URL, true)


export const list = () => client.get()

export default {list}
