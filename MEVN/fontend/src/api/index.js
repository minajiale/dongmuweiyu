// 各种api
// 负责用instance和服务端进行交互
var axoisInstance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
