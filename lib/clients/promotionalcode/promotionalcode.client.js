import { urlFor, PROMOTIONAL_CODE } from '../shared/urls'
import RestClient from "../shared/rest-client";

const BASE_URL = urlFor(PROMOTIONAL_CODE)
const client = new RestClient(BASE_URL, true)

export const list = () => client.get()
export const show = (id) => client.get(id)
export const save = (promotionalCode) => client.post(promotionalCode)
export const update = (promotionalCode) => client.put(promotionalCode)

export default { list, show, save, update }