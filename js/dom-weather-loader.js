function createDayOne(filtered) {
    $("#day-one").empty();
    console.log("clear html")
    $("#day-one").append(`<div class="card border-secondary mb-3" style="max-width: 18rem;">
  <div class="card-header">${filtered.date}</div>
  <div class="card-body text-secondary">
    <h5 class="card-title"></h5>
    <p class="card-text">Temperature: ${filtered.temp} ℉ <br> <img src= "http://openweathermap.org/img/w/${filtered.icon}.png"><br>
                         Description: ${filtered.description} <br>
                         humidity: ${filtered.humidity} <br>
                         Wind: ${filtered.wind} <br>
                         Pressure: ${filtered.pressure} <br></p>
  </div>
</div>`)
    // `Day One: <br> ${filtered.date}
    //                                 <br>current Temp: ${filtered.temp}
    //                                 <br> humidity: ${filtered.humidity}
    //                                 <br> Wind: ${filtered.wind}
    //                                 <br> Pressure: ${filtered.pressure}<br><br>`)
}

function createDayTwo(filtered) {
    $("#day-two").empty();
    $("#day-two").append(`<div class="card border-secondary mb-3" style="max-width: 18rem;">
  <div class="card-header"> ${filtered.date}</div>
  <div class="card-body text-secondary">
    <h5 class="card-title"></h5>
    <p class="card-text">Temperature: ${filtered.temp} ℉ <br> <img src= "http://openweathermap.org/img/w/${filtered.icon}.png"><br>
                         Description: ${filtered.description} <br>
                         humidity: ${filtered.humidity} <br>
                         Wind: ${filtered.wind} <br>
                         Pressure: ${filtered.pressure} <br></p>
  </div>
</div>`)
// Day Two: <br> ${filtered.date}
//                                     <br>current Temp: ${filtered.temp}
//                                     <br> humidity: ${filtered.humidity}
//                                     <br> Wind: ${filtered.wind}
//                                     <br> Pressure: ${filtered.pressure}<br><br>`)
}

function createDayThree(filtered) {
    $("#day-three").empty();
    $("#day-three").append(`<div class="card border-secondary mb-3" style="max-width: 18rem;">
  <div class="card-header"> ${filtered.date}</div>
  <div class="card-body text-secondary">
    <h5 class="card-title"></h5>
    <p class="card-text">Temperature: ${filtered.temp} ℉ <br> <img src= "http://openweathermap.org/img/w/${filtered.icon}.png"><br>
                         Description: ${filtered.description} <br>
                         humidity: ${filtered.humidity} <br>
                         Wind: ${filtered.wind} <br>
                         Pressure: ${filtered.pressure} <br></p>
  </div>
</div>`)
// Day Three: <br> ${filtered.date}
//                                     <br>current Temp: ${filtered.temp}
//                                     <br> humidity: ${filtered.humidity}
//                                     <br> Wind: ${filtered.wind}
//                                     <br> Pressure: ${filtered.pressure}<br><br>`)
}

function createDayFour(filtered) {
    $("#day-four").empty();
    $("#day-four").append(`<div class="card border-secondary mb-3" style="max-width: 18rem;">
  <div class="card-header"> ${filtered.date}</div>
  <div class="card-body text-secondary">
    <h5 class="card-title"></h5>
    <p class="card-text">Temperature: ${filtered.temp} ℉ <br> <img src= "http://openweathermap.org/img/w/${filtered.icon}.png"><br>
                         Description: ${filtered.description} <br>
                         humidity: ${filtered.humidity} <br>
                         Wind: ${filtered.wind} <br>
                         Pressure: ${filtered.pressure} <br></p>
  </div>
</div>`)
// Day Four: <br> ${filtered.date}
//                                     <br>current Temp: ${filtered.temp}
//                                     <br> humidity: ${filtered.humidity}
//                                     <br> Wind: ${filtered.wind}
//                                     <br> Pressure: ${filtered.pressure}<br><br>`)
}

function createDayFive(filtered) {
    $("#day-five").empty();
    $("#day-five").append(`<div class="card border-secondary mb-3" style="max-width: 18rem;">
  <div class="card-header"> ${filtered.date}</div>
  <div class="card-body text-secondary">
    <h5 class="card-title"></h5>
    <p class="card-text">Temperature: ${filtered.temp} ℉ <br> <img src= "http://openweathermap.org/img/w/${filtered.icon}.png"><br>
                         Description: ${filtered.description} <br>
                         humidity: ${filtered.humidity} <br>
                         Wind: ${filtered.wind} <br>
                         Pressure: ${filtered.pressure} <br></p>
  </div>
</div>`)
// Day Five: <br> ${filtered.date}
//                                     <br>current Temp: ${filtered.temp}
//                                     <br> humidity: ${filtered.humidity}
//                                     <br> Wind: ${filtered.wind}
//                                     <br> Pressure: ${filtered.pressure}<br><br>`)
}