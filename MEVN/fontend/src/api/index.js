// 各种api
// 负责用instance和服务端进行交互
var axoisInstance = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
