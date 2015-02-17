$(document).ready(function(){
  $('button').click(function(){
    $("button").removeClass("selected");
    $(this).addClass("selected");
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var company = $(this).text();
    var opts = { 
      tags: company,
      format: "json"
    };
    function displayPhotos(data) {
      var photoHTML = '<ul>';
      $.each(data.items, function(i, image) {
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<a href="' + image.link + '" class="image">';
        photoHTML += '<img src="' + image.media.m + '" ></a></li>';
      });
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);
    }
    $.getJSON(flickerAPI, opts, displayPhotos);
  });
}); //end ready