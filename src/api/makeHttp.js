import axios from 'axios';

const makeHttp = async ({method, data, endpoint, headers}) => {
  try {
    console.log(process.env.REACT_APP_LOCAL_URL);
    const request = await axios({
      method,
      data,
      headers,
      baseURL: 'http://localhost:5000',
      url: endpoint,
    });
    return request;
  } catch (err) {
    console.log({err, method, data, endpoint, headers});
    throw err;
  }
};

export default makeHttp;
