function showPopup(buttonNumber) {
    if (buttonNumber >= 1 && buttonNumber <= 3) {
        document.getElementById("popup").style.display = "block";
    }
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function submitReview() {
    // Retrieve values from input fields
    var name = document.getElementById("name").value;
    var review = document.getElementById("review").value;


    var reviewData = {
      name: name,
      review: review
    };

    // Code to log the review data to the console
    console.log(reviewData);

    // Code to clear the input fields
    document.getElementById("name").value = "";
    document.getElementById("review").value = "";

    closePopup();
}

function openGoogleReview() {
    // Code to open the Google review page in a new window
    window.open("https://www.example.com/review-page", "_blank");
}