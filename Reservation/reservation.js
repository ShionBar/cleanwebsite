// var price1BRApt = 5000;
// var price2BRApt = 7800;
// var price3BRApt = 8500;
// var priceOffice = 5600;
// var priceRetail = 7000;
// var priceRestaurant = 8500;
// var priceIndustrial = 10000;
// var priceCarpet = 1500;
// var priceWindow = 2000;
// var priceEvent = 8000;
var price1BRApt = 80;
var price2BRApt = 130;
var price3BRApt = 145;
var priceOffice = 100;
var priceRetail = 120;
var priceRestaurant = 145;
var priceIndustrial = 170;
var priceCarpet = 25;
var priceWindow = 35;
var priceEvent = 150;

function getAmount(isPeso, amount) {
    const exchangeRate = 58.33;
    if(isPeso){
        return "Php " + (amount * exchangeRate).toFixed(2);
    } else{
        return "$ " + amount;
    }
    // price1BRApt = price1BRApt * exchangeRate;
    // price2BRApt = price2BRApt * exchangeRate;
    // price3BRApt = price3BRApt * exchangeRate;
    // priceOffice = priceOffice * exchangeRate;
    // priceRetail = priceRetail * exchangeRate;
    // priceRestaurant = priceRestaurant * exchangeRate;
    // priceIndustrial = priceIndustrial * exchangeRate;
    // priceCarpet = priceCarpet * exchangeRate;
    // priceWindow = priceWindow * exchangeRate;
    // priceEvent = priceEvent * exchangeRate;
}

function showResponse() {
    const serviceCat = document.getElementById("service-category").value;
    const serviceType = document.getElementById("service-type").value;
    const responseMessage = document.getElementById("responseMessage");
    console.log("DEBUG: " + document.getElementById("peso").checked)
    let message = "";
    var isPeso = document.getElementById("peso").checked;


    if (serviceCat === "residential") {
        if(serviceType === "1-bedroom"){
            message = "Price: " + getAmount(isPeso, price1BRApt);
            // document.querySelector("div.cardPaymentOptionForm").style.display = "none";
        } else if(serviceType === "2-bedroom"){
            message = "Price: " + getAmount(isPeso, price2BRApt);
        } else if(serviceType === "3-bedroom"){
            message = "Price: " + getAmount(isPeso, price3BRApt);
        }
        // message = "You've selected Residential Cleaning. We will ensure your home is spotless and fresh.\n\nPrice starts at Php1000 for properties with less than or equal to 50sqm.Php500 will be charged for every exceeding 50sqm floor area. Our staff will check and compute the final contract price upon service booking.";
    } else if (serviceCat === "commercial") {
        if(serviceType === "office"){
            message = "Price: " + getAmount(isPeso, priceOffice);
        } else if (serviceType === "retail"){
            message = "Price: " + getAmount(isPeso, priceRetail);
        } else if (serviceType === "restaurant"){
            message = "Price: " + getAmount(isPeso, priceRestaurant);
        } else if (serviceType === "industrial"){
            message = "Price: " + getAmount(isPeso, priceIndustrial);
        }
        // message = "You've selected Commercial Cleaning. We'll make your workspace clean and professional.\n\nPrice starts at Php5000 for commercial spaces with less than or equal to 300sqm. Php500 will be charged for every exceeding 50sqm floor area. Our staff will check and compute the final contract price upon service booking.";
    } else if (serviceCat === "special") {
        if(serviceType === "carpet"){
            message = "Price: " + getAmount(isPeso, priceCarpet);
        } else if (serviceType === "window"){
            message = "Price: " + getAmount(isPeso, priceWindow);
        } else if (serviceType === "event"){
            message = "Price: " + getAmount(isPeso, priceEvent);
        }
        // message = "You've selected Special Cleaning. We offer detailed services like carpet cleaning, window washing, and upholstery cleaning for Php500 per service. Our staff will compute the final contract price after completing the services.";
    }

    // Display the response message
    responseMessage.innerText = message;
    responseMessage.style.display = "block";
    console.log(responseMessage.innerText);
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

function generateTransactionNumber(){
    let result = '';
    const characters = '0123456789';
    
    // Loop to generate characters for the specified length
    for (let i = 0; i < 10; i++) {
        const randomInd = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomInd);
    }
    return result;
}

function bookNowClicked() {
    const currentdate = new Date();
    var transactionNumber = generateTransactionNumber();
    var fullName = document.querySelector("#name");
    var phoneNumber = document.querySelector("#phone");
    var email = document.querySelector("#email");
    var city = document.querySelector("#city");
    var propertyAddress = document.querySelector("#address");
    var serviceCat = document.querySelector("#service-category");
    var serviceType = document.querySelector("#service-type");
    var date = document.querySelector("#date");
    var time = document.querySelector("#time");
    var paymentMethod = document.querySelector("#payment-method");
    var price = document.getElementById("responseMessage");

    Email.send({
        
        Host: "smtp.elasticemail.com",
        Username: "cleansweep2k24@gmail.com",
        Password: "AFF4F0771E3B0BA5BAD2452BB8D5DAF69742",
        From: 'cleansweep2k24@gmail.com',
        To: 'cleansweep2k24@gmail.com',
        
        Subject: "Order Form for " + fullName.value + " - " + (currentdate.getMonth() + 1) + "/" + currentdate. getDate() + "/" + currentdate.getFullYear() + ". Reference No. " + transactionNumber,
        Body: "Booking Details" + "<br />" 
        + "----------------------------------------------------------------"
        + "<br />"
        + "Full Name: " + fullName.value + "<br />" 
        + "Contact Number: " + phoneNumber.value + "<br />" 
        + "Email: " + email.value + "<br />" 
        + "Address: " + propertyAddress.value + "<br />" 
        + "City: " + city.value + "<br />" 
        + "Service Booked: " + serviceCat.value.toUpperCase() + "<br />"
        + "Service Type: " + serviceType.value.toUpperCase() + "<br />"
        + "Date: " + date.value + "<br />"
        + "Time: " + time.value + "<br />"
        + "Price: " + price.innerText + "<br />"
        + "<br />"
        + "Payment Option" + "<br />" 
        + "-----------------------------------------------------------------" 
        + "<br />" 
        + "Payment Method: " + paymentMethod.value.toUpperCase() + "<br />" 
        + getPaymentMethodDetails() + "<br />" 
        + "-----------------------------------------------------------------"

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






function updateServiceType() {
    const serviceCategory = document.getElementById('service-category').value;
    const serviceType = document.getElementById('service-type');
    const residentialServices = [
        { value: "1-bedroom", text: "1-Bedroom Apartment Cleaning" },
        { value: "2-bedroom", text: "2-Bedroom Apartment Cleaning" },
        { value: "3-bedroom", text: "3-Bedroom House Cleaning" }
    ];
    const commercialServices = [
        { value: "office", text: "Office Cleaning" },
        { value: "retail", text: "Retail Cleaning" },
        { value: "restaurant", text: "Restaurant Cleaning" },
        { value: "industrial", text: "Industrial Cleaning" }
    ];
    const specialServices = [
        { value: "carpet", text: "Carpet Cleaning" },
        { value: "window", text: "Window Washing" },
        { value: "event", text: "Event Cleanup" }
    ];

    serviceType.innerHTML = ""; // Clear previous options
    responseMessage.innerText = "";
    responseMessage.style.display = "none";
    clearCurrency();


    let services = [];
    if (serviceCategory === "residential") {
        services = residentialServices;
    } else if (serviceCategory === "commercial") {
        services = commercialServices;
    } else if (serviceCategory === "special") {
        services = specialServices;
    }

    // Populate the service type dropdown based on category
    services.forEach(service => {
        const option = document.createElement('option');
        option.value = service.value;
        option.text = service.text;
        serviceType.appendChild(option);
    });
}

function clearCurrency() {
    document.getElementById("peso").checked = false;
    document.getElementById("dollar").checked = false;
}

function selectPaymentMethod() {
    var paymentMethod = document.getElementById("payment-method").value;
    console.log(paymentMethod);
    if(paymentMethod === "credit/debit"){
        document.querySelector("div.cardPaymentOptionForm").style.display = "block";
    }
}

function getPaymentMethodDetails(){
    var paymentMethod = document.querySelector("#payment-method").value;

    const name = document.querySelector('.field-container #name');
    const cardnumber = document.getElementById('cardnumber');
    const expirationdate = document.getElementById('expirationdate');
    const securitycode = document.getElementById('securitycode');
    
    if(paymentMethod === "credit/debit"){
        return "Name: " + name.value + "<br />" 
        + "Card Number: " + cardnumber.value + "<br />" 
        + "Expiration Date: " + expirationdate.value + "<br />" 
        + "Security Code: " + securitycode.value + "<br />" 
    } else {
        return "";
    }
}
