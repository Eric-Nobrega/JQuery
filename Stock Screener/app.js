const apiKey = "ikzD5MqPKBpwBCZW1T6QXXbFq8Sd9vZI";

$("#user-input-button").click(function () {
  // ticker value
  const tickerVal = $("#user-input-search").val();
  // start date value
  const startDate = $("#start-date").val();
  // end date value
  const endDate = $("#end-date").val();
  // make api request
  $.get(
    `https://api.polygon.io/v2/aggs/ticker/${tickerVal}/range/1/day/${startDate}/${endDate}?apiKey=${apiKey}`,
    (data) => {
      $(`<div> </div>`)
        .appendTo("#result-container")
        .addClass("card w-50 align-self-center border shadow mt-3")
        .append(`<div> </div>`)
        .addClass("card-body")
        .append(`<div>${data.ticker}</div>`)
        .addClass("card-title display-6")
        .append(`<div>Daily Open: ${data.results[10].o}</div>`)
        .addClass("lead")
        .append(`<div>Daily Close: ${data.results[10].c}</div>`)
        .addClass("lead")
        .append(`<div>Current Price: ${data.results[10].vw}</div>`)
        .addClass("lead");
    }
  );
});
