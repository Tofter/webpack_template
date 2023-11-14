// fetch("https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=LSiUgcBRr3qxy8fULV9HVIfSXzVRRYkh")

const KEY = LSiUgcBRr3qxy8fULV9HVIfSXzVRRYkh

async function logMovies() {
    const response = await fetch("https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=LSiUgcBRr3qxy8fULV9HVIfSXzVRRYkh");
    const movies = await response.json();
    console.log(movies);
  }