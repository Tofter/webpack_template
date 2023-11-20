/* fetch("https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=LSiUgcBRr3qxy8fULV9HVIfSXzVRRYkh")


 async function logMovies() {
    const response = await fetch("https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=LSiUgcBRr3qxy8fULV9HVIfSXzVRRYkh");
    const movies = await response.json();
    console.log(movies);
  } */


  

  const apiKey = "LSiUgcBRr3qxy8fULV9HVIfSXzVRRYkh";
const apiUrl = "https://api.nytimes.com/svc/archive/v1/2019/1.json?";
const country = "us"; // replace with the country code you are interested in

const url = `${apiUrl}?country=${country}&apiKey=${apiKey}`;

// Make the API request using fetch
fetch(url)
  .then(response => {
    // Check if the response is successful (status code 200)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Parse the JSON data in the response
    return response.json();
  })
  .then(data => {
    // Handle the data (e.g., display headlines)
    console.log(data.articles);
  })
  .catch(error => {
    // Handle errors
    console.error('Error fetching news:', error);
  });