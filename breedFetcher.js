const request = require('request');

const input = process.argv.slice(2,3);

const fetchBreed = (name) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${name}`, (error, response, body) => {
    if (error) {
      return console.log('There was an error:\n ', error);
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      return console.log('No such breeds were found');
    }
    return console.log(data[0].description);
  });
};

fetchBreed(input);