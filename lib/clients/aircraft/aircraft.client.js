import {urlFor, AIRCRAFT} from '../shared/urls'
import RestClient from "../shared/rest-client";

const BASE_URL = urlFor(AIRCRAFT)
const client = new RestClient(BASE_URL, true)


export const list = () => client.get()
export const show = (id) => client.get(id)
export const save = (aircraft) => client.post(aircraft)

export default {list, show}