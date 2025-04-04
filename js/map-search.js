window.onload = function () {
    var defaultLatLng = { lat: 15.3173, lng: 75.7139 };
    var map = new google.maps.Map(document.getElementById('dvMap'), {
      center: defaultLatLng,
      zoom: 20
    });

    var input = document.getElementById('searchInput');
    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', map);

    var infowindow = new google.maps.InfoWindow();
    var geocoder = new google.maps.Geocoder();

    var marker = new google.maps.Marker({
        map: map,
        anchorPoint: new google.maps.Point(0, -29),
        draggable: true,
        visible: false
    });


    function updateAddressFromLatLng(latlng) {
        geocoder.geocode({ location: latlng }, function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    input.value = results[0].formatted_address;
                    infowindow.setContent(results[0].formatted_address);
                    infowindow.open(map, marker);
                } else {
                    console.warn('No address found');
                }
            } else {
                console.error('Geocoder failed due to: ' + status);
            }
        });
    }

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            map.setCenter(userLocation);
            map.setZoom(20); 
            marker.setPosition(userLocation);
            marker.setVisible(true);
            updateAddressFromLatLng(userLocation);
        }, function () {
            console.warn('Geolocation failed or denied. Using default location.');
        });
    } else {
        console.warn('Browser does not support Geolocation');
    }

    autocomplete.addListener('place_changed', function() {
        infowindow.close();
        marker.setVisible(false);
        var place = autocomplete.getPlace();
        if (!place.geometry) {
            window.alert("Autocomplete's returned place contains no geometry");
            return;
        }
  
        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
        } else {
            map.setCenter(place.geometry.location);
            map.setZoom(18);
        }
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);
    
        var address = '';
        if (place.address_components) {
            address = [
              (place.address_components[0] && place.address_components[0].short_name || ''),
              (place.address_components[1] && place.address_components[1].short_name || ''),
              (place.address_components[2] && place.address_components[2].short_name || '')
            ].join(' ');
        }
    
        infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
        infowindow.open(map, marker);
    });

    google.maps.event.addListener(marker, 'dragend', function () {
        var newPosition = marker.getPosition();
        map.setCenter(newPosition);
        updateAddressFromLatLng({
            lat: newPosition.lat(),
            lng: newPosition.lng()
        });
    });
}