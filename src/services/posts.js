import axios from 'axios';

function getList() {
  return axios('https://jsonplaceholder.typicode.com/posts');
}

function getPost(id) {
  return axios(`https://jsonplaceholder.typicode.com/posts/${id}`);
}

export default {
  getList, 
  getPost
}