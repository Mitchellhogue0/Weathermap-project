let getForecast = function (coordinates) {
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
        }
    })
}