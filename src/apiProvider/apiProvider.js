const axios = require('axios');

const BE_HOST = 'http://localhost:6010';

export const getArticles = async (articleType) => {
    return axios.get(
      `${BE_HOST}/articles/${articleType}`,
    );
}
