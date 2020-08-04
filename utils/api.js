var axios = require('axios');

const url = "https://api.github.com"

// Github

const api = {
  async getUser(username) {
    // Fetch email and profile picture url from api

    const response = await axios.get(`${url}/users/${username}`)
    const data = response.data;

    return {
      email: data.email || "",
      profile_image: data.avatar_url
    }

  }
};

module.exports = api;