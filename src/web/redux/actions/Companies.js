import axios from 'axios'

export const fetchCompanies = url => ({
    type: 'FETCH_COMPANIES',
    payload: axios.get(url)
})