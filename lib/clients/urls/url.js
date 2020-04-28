const BASE_URL = process.env.CLINES_API_URL || "http://localhost:8080"

export const AIRPORTS = 'airports'
export const AIRCRAFT = 'aircraft'

const endpoints =  {
        [AIRCRAFT]: `${BASE_URL}/aircraft`,
        [AIRPORTS]: `${BASE_URL}/airports`,
}

export const urlFor = (name) => {
    try {
        return endpoints[name]
    } catch (e) {
        throw new Error(`cannot find the URL '${name}'.`)
    }
}