console.log("script.js loaded");

async function getScript() {
  console.log("async method!");
  const response = await getGame();
  return response;
}

async function gameResponse() {
  console.log("gameResponse method loaded");
  const response = await getGame();
  console.log(response);
}

async function getGame() {
  const options = {
    method: "GET",
  };

  return fetch(
    "https://catalog.api.gamedistribution.com/api/v2.0/rss/All/?collection=11&categories=All&tags=All&subType=all&type=all&mobile=all&rewarded=all&amount=10&page=1&format=json",
    //"https://catalog.api.gamedistribution.com/api/v2.0/rss/All/?collection=All&categories=All&tags=All&subType=Javascript&type=all&mobile=0&rewarded=all&amount=10&page=1&format=json",
    options
  )
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((err) => console.error(err));
}
