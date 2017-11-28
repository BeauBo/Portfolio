function myMap(){
	var myCenter = new google.maps.LatLng(43.705720, -79.275516);
	var mapProp = {center: myCenter, zoom:12, scrollwheel:false, draggable:false,
	mapTypeId:google.maps.MapTypeId.ROADMAP};
	var map = new google.maps.Map(document.getElementById('googleMap'),mapProp);
	var marker = new google.maps.Marker({position: myCenter});
	marker.setMap(map);
	}