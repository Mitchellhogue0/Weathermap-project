function createDayOne (filtered) {
    $("#day-one").empty();
    console.log("clear html")
    $("#day-one").append(`Day One: <br> ${filtered.date}
                                    <br>current Temp: ${filtered.temp}
                                    <br> humidity: ${filtered.humidity}
                                    <br> Wind: ${filtered.wind}
                                    <br> Pressure: ${filtered.pressure}<br><br>`)
}

function createDayTwo (filtered) {
    $("#day-two").empty();
    $("#day-two").append(`Day Two: <br> ${filtered.date}
                                    <br>current Temp: ${filtered.temp}
                                    <br> humidity: ${filtered.humidity}
                                    <br> Wind: ${filtered.wind}
                                    <br> Pressure: ${filtered.pressure}<br><br>`)
}

function createDayThree (filtered) {
    $("#day-three").empty();
    $("#day-three").append(`Day Three: <br> ${filtered.date}
                                    <br>current Temp: ${filtered.temp}
                                    <br> humidity: ${filtered.humidity}
                                    <br> Wind: ${filtered.wind}
                                    <br> Pressure: ${filtered.pressure}<br><br>`)
}

function createDayFour (filtered) {
    $("#day-four").empty();
    $("#day-four").append(`Day Four: <br> ${filtered.date}
                                    <br>current Temp: ${filtered.temp}
                                    <br> humidity: ${filtered.humidity}
                                    <br> Wind: ${filtered.wind}
                                    <br> Pressure: ${filtered.pressure}<br><br>`)
}

function createDayFive (filtered) {
    $("#day-five").empty();
    $("#day-five").append(`Day Five: <br> ${filtered.date}
                                    <br>current Temp: ${filtered.temp}
                                    <br> humidity: ${filtered.humidity}
                                    <br> Wind: ${filtered.wind}
                                    <br> Pressure: ${filtered.pressure}<br><br>`)
}