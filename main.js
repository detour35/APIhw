
// same as document.ready
$(function () {
    // Functions


    // This function creates a button 
    function createBtn(event) {

        //stopping from reloading the page
        event.preventDefault();

        //gets user input from the form    
        var userInput = $('#search-term').val();


        //creates a button in jquery using user input
        var newBtn = $('<button class="btn btn-info">').text(userInput);

        //appends button to btnList
        $('#btnList').append(newBtn);
    };

    // This function gets the gifs from the API
    function getGiphy() {
        // "this" is the name of the button that was clicked fom the jquery below
        var btnText = $(this).text();
        // Our ajax call communicates with the Giphy server and gets a response
        $.ajax({
            url: "https://api.giphy.com/v1/gifs/search?q=" + btnText + "&api_key=lFF9Yxkitf2ugL6Waes2cFHNZ8UE1h5i&limit=9",
            request: 'GET'

            // when ajax request is finished run the promise below
        }).done(function (res) {
            // Get all 9 images from the API
            for (var i = 0; i < res.data.length; i++) {

                // makes an html string and puts it into a variable for all the elements in the images array
                var imageHtml = $("<img src ='" + res.data[i].images.downsized.url + "'>");


                // appends the images to the gif container div
                $("#gifContainer").append(imageHtml);
            }
        });
    };

    // Event binding: creates eventListeners

    // create btns according to user input
    // When you click on the element with # of search button it fires createBtn
    $('#search').on('click', createBtn);


    // When you click on the element with # of btnList it fires getGiphy
    $('#btnList').on('click', 'button', getGiphy);

});