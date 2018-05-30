function myMap() {

	var location = {lat:20.5937,lng:78.9629};
    var map = new google.maps.Map(document.getElementById("map"),{
    	zoom:5,
    	center:location
    });

    //listen for click on map
   /* google.maps.event.addListener(map,'click',function(event) {
        //add marker
        addMarker({coords:event.latLng});
    }); */

    
    // add marker array
    var markers =[
        {coords:{lat:20.5937,lng:78.9629},
               iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
               content:'<h1>India</h1>'
               },
               {coords:{lat: 34.083656,lng:74.797371},
               iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
               content:'<h1>Jammu and Kashmir</h1>'
                  },
                  {coords:{lat:15.317277,lng:75.713890}},
                  {coords:{lat: 28.207609,lng:  79.826660}},
                  {coords:{lat:26.244156,lng:92.537842}},
                  {coords:{lat:19.601194,lng:75.552979}},
                  {coords:{lat:10.850516,lng:76.271080}},
                  {coords:{lat:27.391277,lng:73.432617}},
                  {coords:{lat:25.199350,lng:85.517609}}
                 ];
    //loop through markers
    for(var i=0;i<markers.length;i++){
        addMarker(markers[i]);
    }

  

    // add marker funtion
    function addMarker(props) {
        var marker = new google.maps.Marker({
        position:props.coords,
        map:map,
        //icon:props.iconImage
    });

    //check for custom icon
    if(props.iconImage) {
        //set icon image
        marker.setIcon(props.iconImage);

    } 

    if(props.content) {
        var infoWindow = new google.maps.InfoWindow({
        content:props.content
    });
    marker.addListener('click',function() {
        infoWindow.open(map,marker);
    }); 

    }

    }
}