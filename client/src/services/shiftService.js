import api from './api'

export default {
  all: () => api.get('/shifts'),
  create: (newShift) => api.post('/shifts', newShift),
  delete: (id) => api.delete(`/shifts/${id}`)
}
