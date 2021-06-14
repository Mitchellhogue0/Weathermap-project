mapboxgl.accessToken = MAPBOX_TOKEN;

let map =
    new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/dark-v10",
        center: [-101.8552, 33.5779],
        zoom: 12
    });


let marker = setMarker([-101.8552, 33.5779]);

addMapEvent(marker)
//
let geocoder = setGeoCoder();
addGeocoder(geocoder);
addGeocoderEvent(geocoder);
getCoordinatesDrag(marker);
// getCoordinatesLoad(marker);

function setMarker(point) {
    return new mapboxgl.Marker().setLngLat(point)
        .addTo(map)
        .setDraggable(true);
}

function addMapEvent(marker) {
    map.on('click', function (event) {
       marker.setLngLat(event.lngLat).addTo(map)
        // var lngLat = event.target.getLngLat()
        // getForecast(lngLat);
    })
}

function addGeocoder (geocoder) {
    map.addControl(geocoder);
}

function setGeoCoder(){
    return new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: false
    })
}

function addGeocoderEvent() {
    geocoder.on("result", function (event){
       // var coord = marker.setLngLat(event.result.geometry.coordinates)
       //  getForecast(coord);
    })
}

function getCoordinatesDrag () {
    marker.on("dragend", function (event) {
        var lngLat = event.target.getLngLat()
        getForecast(lngLat);
    })
}

// function getCoordinatesLoad () {
//     marker.on("click", function (event) {
//         var lngLat = event.target.getLngLat()
//         getForecast(lngLat);
//     })
// }