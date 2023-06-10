
const geocode = "https://maps.googleapis.com/maps/api/geocode/json";

//key de google maps, crear como variable en .env.local
const key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

export const reverseGeocode =(lat, lng) =>
    fetch(`${geocode}?key=${key}&latlng=${lat},${lng}`)
        .then((dir) => dir.json())
        .then((location) => (location.results[0].formatted_address)); 
