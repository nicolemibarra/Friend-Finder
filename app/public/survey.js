// Chosen CSS
var config = {
    ".chosen-select": {},
    ".chosen-select-deselect": {
        allow_single_deselect: true
    },
    ".chosen-select-no-single": {
        disable_search_threshold: 10
    },
    ".chosen-select-no-results": {
        no_results_text: "Oops, nothing found!"
    },
    ".chosen-select-width": {
        width: "95%"
    }
};

// Form inputs
$("#submit").on("click", (event) => {
    event.preventDefault();

    // User's data
    var userData = {
        name: $("#name").val(),
        photo: $("#photo").val(),
        scores: [
            $("#q1").val(),
            $("#q2").val(),
            $("#q3").val(),
            $("#q4").val(),
            $("#q5").val(),
            $("#q6").val(),
            $("#q7").val(),
            $("#q8").val(),
            $("#q9").val(),
            $("#q10").val()
        ]
    };

    // AJAX post the data to friends API
    $.post("/api/friends", userData, (data) => {

        // Result from the AJAX post
        $("#match-name").text(data.name);
        $("#match-img").attr("src", data.photo);

        // Modal with the best match
        $("#results-modal").modal("toggle");

    });

});
