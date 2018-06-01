import axios from 'axios';

const request = axios.create();

request.defaults.baseURL = `https://mysterious-reef-29460.herokuapp.com/api/v1/`
request.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';
request.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
request.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';

export const setupToken = (token) => {
    request.defaults.headers.common.Authorization = token
};

export const resetToken = () => {
    request.defaults.headers.common.Authorization = undefined
}

request.interceptors.request.use(
    request => request,
    error => {
      console.log(error)
    }
  )
  
  request.interceptors.response.use(
    response => response,
    error => {
      if (error.response.status === 401) {
        // TODO Navigate to Login
      }
      return Promise.reject(error)
    }
  )
  
  export const post = (url, data) => request.post(url, data)
  export const get  = (url) => request.get(url)
  export const put  = (url) => request.put(url, data)
  export const del  = (url) => request.delete(url)