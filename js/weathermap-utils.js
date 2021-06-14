let getForecast = function (coordinates) {
    console.log("from addMapEvent")
    $.get({
        url: "https://api.openweathermap.org/data/2.5/forecast",
        data: {
            APPID: OPEN_WEATHERMAP_TOKEN,
            lat: coordinates.lat,
            lon: coordinates.lng,
            units: "imperial"
        },
        success: function (data) {
            console.log(data)

            createDayOne(filterDataOne(data))
            createDayTwo(filterDataTwo(data))
            createDayThree(filterDataThree(data))
            createDayFour(filterDataFour(data))
            createDayFive(filterDataFive(data))

        }
    })
}



function filterDataOne (data) {
    let dataObject = {
        date: data.list[0].dt_txt,
        temp: data.list[0].main.temp,
        icon: data.list[0].weather[0].icon,
        description: data.list[0].weather[0].description,
        humidity: data.list[0].main.humidity,
        wind: data.list[0].wind.speed,
        pressure: data.list[0].main.pressure

    }
    return dataObject
}

function filterDataTwo (data) {
    let dataObject = {
        date: data.list[8].dt_txt,
        temp: data.list[8].main.temp,
        icon: data.list[8].weather[0].icon,
        description: data.list[8].weather[0].description,
        humidity: data.list[8].main.humidity,
        wind: data.list[8].wind.speed,
        pressure: data.list[8].main.pressure

    }
    return dataObject
}

function filterDataThree (data) {
    let dataObject = {
        date: data.list[16].dt_txt,
        temp: data.list[16].main.temp,
        icon: data.list[16].weather[0].icon,
        description: data.list[16].weather[0].description,
        humidity: data.list[16].main.humidity,
        wind: data.list[16].wind.speed,
        pressure: data.list[16].main.pressure

    }
    return dataObject
}

function filterDataFour (data) {
    let dataObject = {
        date: data.list[24].dt_txt,
        temp: data.list[24].main.temp,
        icon: data.list[24].weather[0].icon,
        description: data.list[24].weather[0].description,
        humidity: data.list[24].main.humidity,
        wind: data.list[24].wind.speed,
        pressure: data.list[24].main.pressure

    }
    return dataObject
}

function filterDataFive (data) {
    let dataObject = {
        date: data.list[32].dt_txt,
        temp: data.list[32].main.temp,
        icon: data.list[32].weather[0].icon,
        description: data.list[32].weather[0].description,
        humidity: data.list[32].main.humidity,
        wind: data.list[32].wind.speed,
        pressure: data.list[32].main.pressure

    }
    return dataObject
}