import {urlFor, AIRPORTS} from '../urls';
import RestClient from "../rest-client";

const BASE_URL = urlFor(AIRPORTS)
const client = new RestClient(BASE_URL, true)

export const list = () => client.get()
export const show = (id) => client.get(id)
export const save = (airports) => client.post(airports)

export default {list, show, save}