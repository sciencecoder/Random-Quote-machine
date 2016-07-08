
 $(document).ready(function() { 
 $("#tweet-this").hide();
$(".button").on("click", function() {
    $(".content").text("");
  
  //Source: http://stackoverflow.com/questions/36393052/use-api-with-api-key-using-javascript
  
  $.ajax({
    
    url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=",
    // method: 'post', 
    headers: {
       'X-Mashape-Key': 'JU46tMuGpomshukA3x0CVsiRwaVZp1XeSoJjsn3iSEtg6Sn9i0',
       //'Content-type': 'application/x-www-form-rule coded',
       //'Accept': 'application/json'
       },
 //   crossDomain: true,
    success: function(data) {
      //End code snippet.
     var string = JSON.parse(data);
   
 $(".content").append("<h4>" + string.quote + "</h4>" + "<h5>" + "-" + string.author + "</h5>");
    var url = "https://twitter.com/intent/tweet?text=" + string.quote + "-" + string.author;
     
        $("#tweet-this").show();
        $("#tweet-this").attr("href", url); 
  }
 
   
          });
 
     });            
});
  
 
  
  
