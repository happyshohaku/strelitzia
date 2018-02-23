$(document).ready(function(){

	// tabs
	$("#StrelitziaContent").show();
	$("#StrelitziaOrdermade").hide();
	$("#StrelitziaRental").hide();
	

	$("#StrelitziaTab").click(function() {
		$("#StrelitziaContent").show();
		$("#StrelitziaOrdermade").hide();
		$("#StrelitziaRental").hide();
		$(".contentTab").removeClass("active");
		$(this).addClass("active");
	});


	$("#OrdermadeTab").click(function() {
		$("#StrelitziaOrdermade").show();
		$("#StrelitziaContent").hide();
		$("#StrelitziaRental").hide();
		$(".contentTab").removeClass("active");
		$(this).addClass("active");
	});


	$("#RentalTab").click(function() {
		$("#StrelitziaRental").show();
		$("#StrelitziaContent").hide();
		$("#StrelitziaOrdermade").hide();
		$(".contentTab").removeClass("active");
		$(this).addClass("active");
	});
	


	// google map
		var map;
		function initMap() {
		  map = new google.maps.Map(document.getElementById('map'), {
		    center: {lat: -34.397, lng: 150.644},
		    zoom: 8
		  });
		}


});
