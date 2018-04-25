// YouTube API Key
const API_KEY = 'AIzaSyAhE7phirGx9wlS2auDO9cIcG_s0NY8ra8';
// YouTube Search URL
const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';

// AJAX Function
// 1st try
// event listener for form input
$("form").on("submit", function(e) {
    e.preventDefault();
    // debug event listener success
    console.log("input received");
    // function to pull from API
    function getDataFromApi(searchTerm, callback) {
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

// add function to console.log JSON result
});



// write function to push results to page
