//JQUERY UI for tabs and accordian
$( function() {
  $( ".contentTabs" ).tabs();
  $( "#accordion" ).accordion({
    heightStyle: "content"
  });
} );

//Location Details
const locationDetails = [
    {
      "country": "United States",
      "state": "Arizona",
      "city": "Scottsdale",
      "contact": "602-383-3500"
    },
    {
      "country": "United States",
      "state": "Arizona",
      "city": "Scottsdale",
      "contact": "602-383-3500"
    },
    {
      "country": "United States",
      "state": "California",
      "city": "Irvine",
      "contact": "949-777-0400"
    },
    {
      "country": "United States",
      "state": "Colorado",
      "city": "Centennial",
      "contact": "720-407-1400"
    },
    {
      "country": "United States",
      "state": "Connecticut",
      "city": "Norwalk",
      "contact": "203-299-1420"
    },
    {
      "country": "United States",
      "state": "Florida",
      "city": "Boca Raton",
      "contact": "561-997-2900"
    },
    {
      "country": "United States",
      "state": "Idaho",
      "city": "Boise",
      "contact": "800-460-1237"
    },
    {
      "country": "United States",
      "state": "Illinois",
      "city": "Rosemont",
      "contact": "800-843-4488"
    },
    {
      "country": "United States",
      "state": "Iowa",
      "city": "West Des Moines",
      "contact": "515-246-4100"
    },
    {
      "country": "United States",
      "state": "Kansas",
      "city": "Overland Park",
      "contact": "913-322-2020"
    },
    {
      "country": "United States",
      "state": "Maryland",
      "city": "Crofton (Sirius Federal)",
      "contact": "800-391-0204"
    },
    {
      "country": "United States",
      "state": "Minnesota",
      "city": "Bloomington",
      "contact": "952-896-6300"
    },
    {
      "country": "United States",
      "state": "Missouri",
      "city": "St.Louis",
      "contact": "314-726-3630"
    },
    {
      "country": "United States",
      "state": "Nebraska",
      "city": "Omaha",
      "contact": "402-965-2300"
    },
    {
      "country": "United States",
      "state": "New York",
      "city": "Liverpool",
      "contact": "315-214-6200"
    },
    {
      "country": "United States",
      "state": "New York",
      "city": "Pittsford",
      "contact": "800-460-1237"
    },
    {
      "country": "United States",
      "state": "North Carolina",
      "city": "Charlotte",
      "contact": "800-460-1237"
    },
    {
      "country": "United States",
      "state": "North Carolina",
      "city": "Greensboro",
      "contact": "336-365-7037"
    },
    {
      "country": "United States",
      "state": "North Carolina",
      "city": "Raleigh",
      "contact": "800-460-1237"
    },
    {
      "country": "United States",
      "state": "Ohio",
      "city": "Cincinnati",
      "contact": "513-891-8888"
    },
    {
      "country": "United States",
      "state": "Ohio",
      "city": "Strongsville",
      "contact": "5440-826-8800"
    },
    {
      "country": "United States",
      "state": "South Dakota",
      "city": "Sioux Falls",
      "contact": "800-460-1237"
    },
    {
      "country": "United States",
      "state": "Texas",
      "city": "Austin",
      "contact": "512-840-7419"
    },
    {
      "country": "United States",
      "state": "Texas",
      "city": "Dallas",
      "contact": "972-725-2000"
    },
    {
      "country": "United States",
      "state": "Texas",
      "city": "Houston",
      "contact": "713-463-1600"
    },
    {
      "country": "United States",
      "state": "Texas",
      "city": "San Antonio",
      "contact": "800-460-1237"
    },
    {
      "country": "United States",
      "state": "Utah",
      "city": "Salt Lake City",
      "contact": "801-964-4900"
    },
    {
      "country": "United States",
      "state": "Washington",
      "city": "Bellevue",
      "contact": "425-406-5112"
    },
    {
      "country": "India",
      "state": "Tamil Nadu",
      "city": "Chennai",
      "contact": "91-44-6650-7800"
    },
    {
      "country": "Canada",
      "state": "Ontario",
      "city": "Mississauga",
      "contact": "800-460-1237"
    }
  ]


//Looping through the location details
locationDetails.forEach((location)=>{
    $row = $(`<div class="locationRow">`);
    $countryFlag = $(`<div class="countryFlag">`);
    let country = location.country;
    let imgUrl;
    switch(country){
        case "United States": 
            imgUrl = "images/flags/usa.png";
            break;
        case "India":
            imgUrl = "images/flags/india.png";
            break;
        case "Canada":
            imgUrl = "images/flags/canada.png";
            break;
    }
    $img = $(`<img src=${imgUrl} alt="country flag"/>`);

    $stateContainer = $(`<div class="state">`);
    $state = $("<p>");
    $state.text(location.state);

    $cityContainer = $(`<div class="city">`);
    $city = $("<p>");
    $city.text(location.city);

    $contactContainer = $(`<div class="contact">`);
    $contact = $("<p>");
    $contact.text(location.contact);

    //Adding elements inside their respective containers
    $countryFlag.append($img);
    $stateContainer.append($state);
    $cityContainer.append($city);
    $contactContainer.append($contact);

    // Appending elements to the DOM
    $row.append($countryFlag);
    $row.append($stateContainer);
    $row.append($cityContainer);
    $row.append($contactContainer);

    $(".siriusLocations").append($row);

});

$("#locations").append($(".siriusLocations"));