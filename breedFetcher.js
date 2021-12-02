const request = require('request');

const fetchBreedDescription = (breedName, callback) => {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      return callback(error);
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      const error = 'No such breeds were found';
      return callback(error);
    }
    const desc = data[0].description;
    callback(error, desc);
  });
};


module.exports = { fetchBreedDescription };