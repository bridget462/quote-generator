// Get Quote From API
async function getQuote() {
  // some open api cannot be connected from local host. to avoid this, call proxy -> api
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const apiUrl =
    "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
  try {
    // wait until you get api respone
    const response = await fetch(proxyUrl + apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    getQuote();
    console.log("whoops, no quote", error);
  }
}

// On Load
getQuote();
