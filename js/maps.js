$(document).ready(function(){

	var overlay;
	RROverlay.prototype = new google.maps.OverlayView();

 	function initialize() {
	  var myLatLng = new google.maps.LatLng(33.3787803, -111.7810206);
	  var mapOptions = {
	    zoom: 17,
	    center: myLatLng,
      scrollwheel: false,
      navigationControl: false,
	    mapTypeControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
	  };

	  var map = new google.maps.Map(document.getElementById('map'),
	      mapOptions);

	  var neBound = new google.maps.LatLng(33.38,  -111.777);
	  var swBound = new google.maps.LatLng(33.378, -111.7810206);
	  var bounds = new google.maps.LatLngBounds(swBound, neBound);

	  overlay = new RROverlay(bounds, map);
	}


  function RROverlay(bounds, map) {
	  // Initialize all properties.
	  this.bounds_ = bounds;
	  // this.image_ = image;
	  this.map_ = map;

	  // Define a property to hold the image's div. We'll
	  // actually create this div upon receipt of the onAdd()
	  // method so we'll leave it null for now.
	  this.div_ = null;

	  // Explicitly call setMap on this overlay.
	  this.setMap(map);

	}

	RROverlay.prototype.onAdd = function() {

	  var div = document.createElement('div'),
	  		arrow = document.createElement('div'),
	  		phone = document.createElement('h4'),
	  		email = document.createElement('h4')
	  		address = document.createElement('h4'),
	  		phoneIcon = document.createElement('i'),
	  		emailIcon = document.createElement('i'),
	  		addressIcon = document.createElement('i'),
	  		phoneWrapper = document.createElement('div'),
	  		emailWrapper = document.createElement('div'),
	  		addressWrapper = document.createElement('div');

	  div.style.border = 'none';
	  div.style.borderWidth = '0px';
	  div.style.position = 'absolute';
	  div.style.background = '#8c4646';
	  div.setAttribute("id", "contact_div");

	  phoneIcon.setAttribute("class", "glyphicon glyphicon-phone-alt");
	  phoneIcon.style.color = "white";
	  phoneIcon.style.fontSize = "24px";
	  phoneIcon.style.display = "inline-block";
	  phoneIcon.style.margin = "26px 20px 20px 30px";
	  phoneIcon.style.verticalAlign=" middle";
	  phone.style.color = "white";
	  phone.style.fontWeight = "normal";
	  phone.style.display = "inline-block";
	  phone.style.verticalAlign=" middle";
	  phone.appendChild(document.createTextNode("480-329-5991"));
	  phoneWrapper.appendChild(phoneIcon);
	  phoneWrapper.appendChild(phone);

	  emailIcon.setAttribute("class", "glyphicon glyphicon-envelope");
	  emailIcon.style.color = "white";
	  emailIcon.style.display = "inline-block";
	  emailIcon.style.fontSize = "24px";
	  emailIcon.style.margin = "26px 20px 20px 30px";
	  emailIcon.style.verticalAlign=" middle";
	  email.style.color = "white";
	  email.style.fontWeight = "normal";
	  email.style.display = "inline-block";
	  email.style.verticalAlign=" middle";
	  email.appendChild(document.createTextNode("teamriturban@gmail.com"));
	  emailWrapper.appendChild(emailIcon);
	  emailWrapper.appendChild(email);

	  addressIcon.setAttribute("class", "glyphicon glyphicon-map-marker");
	  addressIcon.setAttribute("id", "addressIcon");
	  addressIcon.style.color = "white";
	  addressIcon.style.fontSize = "24px";
	  addressIcon.style.display = "inline-block";
	  addressIcon.style.margin = "26px 20px 20px 30px";
	  addressIcon.style.verticalAlign=" middle";
	  address.style.color = "white";
	  address.style.display = "inline-block";
	  address.style.fontWeight = "normal";
	  address.style.verticalAlign=" middle";
	  address.innerHTML = "2353 E Baseline Rd. <br> Gilbert, AZ 85234";
	  addressWrapper.appendChild(addressIcon);
	  addressWrapper.appendChild(address);

	  // arrow.style.background = "green";
	  arrow.style.borderStyle = "solid";
	  arrow.style.borderWidth = "25px 25px 25px 0";
	  arrow.style.position = "absolute";
	  arrow.style.top = "36%";
	  arrow.style.left = "-24px";
	  arrow.style.borderColor = "transparent #8c4646 transparent transparent";

	  div.appendChild(phoneWrapper);
	  div.appendChild(emailWrapper);
	  div.appendChild(addressWrapper);
	  div.appendChild(arrow);

	  this.div_ = div;

	  // Add the element to the "overlayImage" pane.
	  var panes = this.getPanes();
	  panes.overlayImage.appendChild(this.div_);	  

	};

	RROverlay.prototype.draw = function() {

	  // We use the south-west and north-east
	  // coordinates of the overlay to peg it to the correct position and size.
	  // To do this, we need to retrieve the projection from the overlay.
	  var overlayProjection = this.getProjection();

	  // Retrieve the south-west and north-east coordinates of this overlay
	  // in LatLngs and convert them to pixel coordinates.
	  // We'll use these coordinates to resize the div.
	  var sw = overlayProjection.fromLatLngToDivPixel(this.bounds_.getSouthWest());
	  var ne = overlayProjection.fromLatLngToDivPixel(this.bounds_.getNorthEast());

	  // Resize the image's div to fit the indicated dimensions.
	  var div = this.div_;
	  div.style.left = sw.x + 'px';
	  div.style.top = ne.y + 'px';
	  div.style.width = (ne.x - sw.x) + 'px';
	  div.style.height = (sw.y - ne.y) + 'px';
	};


  google.maps.event.addDomListener($("#contact_div"), "click", function(e) {
	  e.cancelBubble = true;
	  if (e.stopPropagation) {
	    e.stopPropagation();
	  }
	});

  google.maps.event.addDomListener(window, 'load', initialize);

});