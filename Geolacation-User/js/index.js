import {elDelTitle, elButton} from "./style.js";

function getLocation() {

    elDelTitle.textContent = 'Loading...'
    elButton.textContent = 'Loading...'

    function success(position) {

        let sLatitude = position.coords.latitude
        let sLongitude = position.coords.longitude

        let getLocation = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${sLatitude}&longitude=${sLongitude}&localityLanguage=en`

        fetch(getLocation)
            .then(res => res.json())
            .then(data => {
                elDelTitle.textContent = data.principalSubdivision
                elButton.textContent = 'getLocation'
            })
    }

    function error() {
        elDelTitle.textContent = 'Sizni Geolocation olinmadi'
    }

    window.navigator.geolocation.getCurrentPosition(success, error)

}

elButton.addEventListener('click', () => getLocation())