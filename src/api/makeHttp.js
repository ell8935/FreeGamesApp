import axios from 'axios';

const makeHttp = async ({method, data, endpoint, headers}) => {
  try {
    const request = await axios({
      method,
      data,
      headers,
      baseURL: 'http://localhost:5000',
      url: endpoint,
    });
    return request.data;
  } catch (err) {
    console.log({err, method, data, endpoint, headers});
    throw err;
  }
};

export default makeHttp;
