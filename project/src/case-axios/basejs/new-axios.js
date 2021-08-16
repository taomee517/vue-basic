import axios from 'axios'

const requests = axios.create({
	baseURL: "http://192.168.1.151",
	timeout: 6000
});

export default {
  requests
}