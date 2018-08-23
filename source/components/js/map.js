GoogleMapsLoader.KEY = 'AIzaSyDP13T048ji9u8_di9Gdpmh6bkBhPoC3bs';
GoogleMapsLoader.LANGUAGE = 'ua';

GoogleMapsLoader.load(function(google) {
	var myLatLng = {lat: 50.031796, lng: 36.221886};
  var map = new google.maps.Map(document.getElementById('map'), {
    	center: myLatLng,
    scrollwheel:false,
    zoom: 17
  });
  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    animation: google.maps.Animation.DROP,
    title: 'Первая слобожанская строительная компания'
  });
});