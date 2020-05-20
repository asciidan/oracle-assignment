import axios from 'axios'

/**
 * Axios instance with custom parameters
 */
export const HttpClient = axios.create({
  baseURL: 'https://swapi.dev/api',
})

/**
 * Perform and resolve an Axios GET request
 */
export const resolveGetUrl = async <T = unknown>(url: string): Promise<T> => {
  return (await axios.get<T>(url)).data
}
