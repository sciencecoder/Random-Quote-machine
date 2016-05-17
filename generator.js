$(document).ready(function() { 
 $("#tweet-this").hide();
$(".button").on("click", function() {
    $(".content").text("");
   $.ajax({
  headers: {
      "X-Mashape-Key": "JU46tMuGpomshukA3x0CVsiRwaVZp1XeSoJjsn3iSEtg6Sn9i0",
  Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"    
  },
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
   success: function(data) {
     var string = JSON.parse(data);
   
 $(".content").append("<h4>" + string.quote + "</h4>" + "<h5>" + "-" + string.author + "</h5>");
    var url = "https://twitter.com/intent/tweet?text=" + string.quote + "-" + string.author;
     
        $("#tweet-this").show();
        $("#tweet-this").attr("href", url); 
  }
 
   
          });
 
     });            
});
  
 
  
