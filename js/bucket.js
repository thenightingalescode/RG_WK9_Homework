function initMap() {
  var home = {lat: 40.3894869, lng:-75.3730484};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: home
  });

  var icon = {
    url: 'https://cdn3.iconfinder.com/data/icons/glypho-free/64/home-128.png', // url
    scaledSize: new google.maps.Size(20, 20), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
};

  var marker = new google.maps.Marker({
    position: home,
    map: map,
    icon: icon,

  });
}
