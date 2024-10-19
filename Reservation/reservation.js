function showResponse() {
    const service = document.getElementById("service").value;
    const responseMessage = document.getElementById("responseMessage");

    let message = "";

    if (service === "Residential Cleaning") {
        message = "You've selected Residential Cleaning. We will ensure your home is spotless and fresh.\n\nPrice starts at Php1000 for properties with less than or equal to 50sqm.Php500 will be charged for every exceeding 50sqm floor area. Our staff will check and compute the final contract price upon service booking.";
    } else if (service === "Commercial Cleaning") {
        message = "You've selected Commercial Cleaning. We'll make your workspace clean and professional.\n\nPrice starts at Php5000 for commercial spaces with less than or equal to 300sqm. Php500 will be charged for every exceeding 50sqm floor area. Our staff will check and compute the final contract price upon service booking.";
    } else if (service === "Special Cleaning") {
        message = "You've selected Special Cleaning. We offer detailed services like carpet cleaning, window washing, and upholstery cleaning for Php500 per service. Our staff will compute the final contract price after completing the services.";
    }

    // Display the response message
    responseMessage.innerText = message;
    responseMessage.style.display = "block";
}

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {

    var btnBookNow = document.querySelector("#reservationForm .book-btn");

    btnBookNow.addEventListener('click', bookNowClicked)
}

function bookNowClicked() {
    const currentdate = new Date();
    var fullName = document.querySelector("#fullname");
    var phoneNumber = document.querySelector("#phone");
    var email = document.querySelector("#email");
    var city = document.querySelector("#city");
    var propertyAddress = document.querySelector("#address");
    var service = document.querySelector("#service");
    var date = document.querySelector("#date");
    var time = document.querySelector("#time");

    Email.send({
        
        Host: "smtp.elasticemail.com",
        Username: "cleansweep2k24@gmail.com",
        Password: "AFF4F0771E3B0BA5BAD2452BB8D5DAF69742",
        From: 'cleansweep2k24@gmail.com',
        To: 'cleansweep2k24@gmail.com',
        
        Subject: "Order Form for " + fullName.value + " - " + (currentdate.getMonth() + 1) + "/" + currentdate.getDate() + "/" + currentdate.getFullYear(),
        Body: "Booking Details" + "<br />" 
        + "----------------------------------------------------------------"
        + "<br />"
        + "Full Name: " + fullName.value + "<br />" 
        + "Contact Number: " + phoneNumber.value + "<br />" 
        + "Email: " + email.value + "<br />" 
        + "Address: " + propertyAddress.value + "<br />" 
        + "City: " + city.value + "<br />" 
        + "Service Booked: " + service.value + "<br />"
        + "Date: " + date.value + "<br />"
        + "Time: " + time.value + "<br />"
        + "<br />"
        + "<br />"
        + "----------------------------------------------------------------"
        + "<br />"


    }).then(function (message) {
        
        if(message!="OK"){
            alert("Errors encountered during the booking process. It maybe because of slow internet connection causing failure in connecting to our server. Please repeat booking process. Thank you.")
            location.href = "../index.html";
        } else {
            alert("Thank you for booking us. Your booking details has been sent to our sales department and one of our staff will reach you to get more details.");
            location.href = "../index.html";
        }
        
        
    });
}
