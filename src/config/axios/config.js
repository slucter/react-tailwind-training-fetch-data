export default function axiosInstance (axios) {
    axios.interceptors.request.use(
        config => {
            const token = localStorage?.token ?? null
            if (!token) return config
            config.headers['Authorization'] = token
            return config
        },
        error => {
            console.log(error, 'From Config')
            return error
        }
    )
    axios.interceptors.response.use(
        response => response,
        error => {
            if (error.response.status === 401) {
                localStorage.clear();
            }      
            return error
        }
    )

    return axios
}