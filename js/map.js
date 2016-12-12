function myMap() {
  var mapCanvas = document.getElementById("map");
  var myCenter = new google.maps.LatLng(8.859181,76.670366);
  var mapOptions = {center: myCenter, zoom: 5};
  var map = new google.maps.Map(mapCanvas,mapOptions);
  var marker = new google.maps.Marker({
    position: myCenter,
    animation: google.maps.Animation.BOUNCE
  });
  marker.setMap(map);}

 $(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});

 $(function(){

        $('.carousel-control').click(function(e){
            e.preventDefault();
            $('#myCarousel').carousel( $(this).data() );
        });

    });
 $('.carousel').carousel({
  interval: 30
});