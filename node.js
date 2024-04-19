const axios = require('axios');

async function makeRequest() {
  try {
    const response = await axios.get('http://192.168.128.2:32370');
    console.log(response.data); // Print the response data
  } catch (error) {
    console.error('Error making request:', error.message);
  }
}

// Make a request every second
setInterval(makeRequest, 1000);
