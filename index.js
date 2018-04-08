// YouTube API Key
const API_KEY = 'AIzaSyAhE7phirGx9wlS2auDO9cIcG_s0NY8ra8';
// YouTube Search URL
const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';

// AJAX Function
// 1st try
/* function getDataFromApi(searchTerm, callback) {
    const settings = {
      url: YOUTUBE_SEARCH_URL,
      data: {
        part: 'snippet',
        key: API_KEY,
        q: `${searchTerm}`,
      },
      dataType: 'json',
      type: 'GET',
      success: callback
    };
  
    $.ajax(settings);
  }
*/

$(function() {
    $("form").on("submit", function(e) {
        e.preventDefault();
        // prepare request
        var request = gapi.client.youtube.search.list({
            part:"snippet",
            type:"video",
            q: encodeURIComponent($("#text-entry").val()).replace(/%20/g, "+"),
            maxResults: 5,
            order: "viewCount"
        });
        // execute the request
        request.execute(function(response) {
            console.log(response);
        });
    });
});

$(function init() {
    gapi.client.setApiKey(API_KEY);
    gapi.client.load("youtube", "v3", function() {
        // api is ready
    });
});

// write function to listen for form input


// write function to push results to page
