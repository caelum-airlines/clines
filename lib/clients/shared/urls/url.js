const BASE_URL = process.env.CLINES_API_URL || "http://localhost:8080"

export const AIRPORTS = 'airports'
export const AIRCRAFT = 'aircraft'
export const AIRCRAFT_MODELS = 'aircraft-models'
export const LOCATIONS = 'LOCATIONS'
export const PROMOTIONAL_CODE = 'promotional-code'

const endpoints = {
    [AIRPORTS]: `${BASE_URL}/airports`,
    [AIRCRAFT]: `${BASE_URL}/aircraft`,
    [AIRCRAFT_MODELS]: `${BASE_URL}/aircraft-models`,
    [LOCATIONS]: `${BASE_URL}/locations`,
    [PROMOTIONAL_CODE]: `${BASE_URL}/promotional-code`,
}

export const urlFor = (name) => {
    try {
        return endpoints[name]
    } catch (e) {
        throw new Error(`cannot find the URL '${name}'.`)
    }
}