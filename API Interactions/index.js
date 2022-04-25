/*Asynchronous Javascript And Xml. 
Ajax is just a means of loading data 
from the server to the web browser 
without reloading the whole page. */

//methods such as load(), $.get(), $.post()

//load() method
//loads data from the server, places returned data into selected element
/*
$("button").click(function () {
  $("#box").load("test-content.html", (a, b, c) => {
    console.log(a);
    console.log(b);
    console.log(c);
  });
});
*/

//get() method // post() method
//sends and retrieves data asynchronously from a web server
//$.get(URL, data, success);
$("button").click(function () {
  $.get("https://jsonplaceholder.typicode.com/posts", (data) => {
    data.map((element) => {
      $(`<li>User ID: ${element.id}</li>`)
        .appendTo("#ulToMap")
        .addClass("li-id");
      $(`<li>User Title: ${element.title}</li>`)
        .appendTo("#ulToMap")
        .addClass("li-title");
      $(`<li>User Body: ${element.body}</li>`)
        .appendTo("#ulToMap")
        .addClass("li-body");
    });
  });
});
