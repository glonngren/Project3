function initMap(){
  var ola = {lat: 41.89748, lng: -87.7239607};
  var map = new google.maps.Map(
    document.getElementById('map'), {
    zoom: 14, center: ola
    }
  );
  var marker = new google.maps.Marker({
    position: ola,
    map: map
  });
}