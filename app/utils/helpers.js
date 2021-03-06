var axios = require('axios');

function getRepos(username) {
  return axios.get('https://api.github.com/users/' + username + '/repos');
};

function getuserinfo(username) {
  return axios.get('https://api.github.com/users/' + username);
};

var helpers = {
  getGitHubInfo: function (username) {
    return axios.all([getRepos(username), getuserinfo(username)])
        .then(function (arr) {
          return {
            repos: arr[0].data,
            bio: arr[1].data
          }
        });
  }
};

module.exports = helpers;