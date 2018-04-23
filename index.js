// YouTube API Key
const API_KEY = 'AIzaSyAhE7phirGx9wlS2auDO9cIcG_s0NY8ra8';
// YouTube Search URL
const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';

// AJAX Function
// 1st try
$(function() {
    $("form").on("submit", function(e) {
        e.preventDefault();
        console.log("input received");
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
  };

// write function to listen for form input


// write function to push results to page
