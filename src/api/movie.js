import request from '@/utils/request'

export const getMovieByTitle = (title) => {
  return request({
    url: 'movie',
    method: 'get',
    params: { title }
  })
}

export const getMovieById = (id) => {
  return request({
    url: 'movie/' + id,
    method: 'get'
  })
}
