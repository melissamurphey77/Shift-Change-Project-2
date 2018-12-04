import api from './api'

export default {
    all: () => api.get('/employees'),
    create: (credentials) => api.post('/employees/register', credentials),
    delete: (id) => api.delete(`/employees/${id}`),
    login: (credentials) => api.post('/employees/login', credentials)
}