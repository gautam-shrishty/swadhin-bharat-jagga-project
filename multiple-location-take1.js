function myMap() {

	var location = {lat:20.5937,lng:78.9629};
    var map = new google.maps.Map(document.getElementById("map"),{
    	zoom:5,
    	center:location
    });

    //add marker
   /* var marker = new google.maps.Marker({
    	position: location,
    	map:map,
        icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    }); 

    var infoWindow = new google.maps.InfoWindow({
        content:'<h1>india</h1>'
    });
    marker.addListener('click',function() {
        infoWindow.open(map,marker);
    }); 

    addMarker({coords:{lat:20.5937,lng:78.9629},
               iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
               content:'<h1>India</h1>'
               });
    addMarker({coords:{lat: 34.083656,lng:74.797371},
               iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
               content:'<h1>Jammu and Kashmir</h1>'
                  });
    addMarker({coords:{lat:15.317277,lng:75.713890}});
    addMarker({coords:{lat: 28.207609,lng:  79.826660}});
    addMarker({coords:{lat:26.244156,lng:92.537842}});
    addMarker({coords:{lat:19.601194,lng:75.552979}});
    addMarker({coords:{lat:10.850516,lng:76.271080}});
    addMarker({coords:{lat:27.391277,lng:73.432617}});
    addMarker({coords:{lat:25.199350,lng:85.517609}}); */


    
    // add marker array
    var markers =[
        {coords:{lat:20.5937,lng:78.9629},
               iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
               content:'<h1>India</h1>'
               },
               {coords:{lat: 34.083656,lng:74.797371},
               iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png', //jammu and kashmir
               content:'<h1>Jammu and Kashmir</h1>'+
                '<ul> <li> 1949- The Indian Constituent Assembly adopts Article 370</li>'+  
               '<li>1954- Jammu and Kashmir’s accession to India is ratified'+ 
               'by the state’s constituent assembly</li>'+
               '<li>1957- Jammu and Kashmir approves its own constitution,modelled on the lines of India’s.</li>'+
               '<li>1964- National Liberation Front floated </li>'+
               '<li>1989- Outbreak of militancy in Jammu and Kashmir.</li>'+
               '<li>1989- Exodus of Kashmiri Pandits from Jammu and Kashmir</li></ul>'
            },
                  {coords:{lat:17.3850,lng:78.4867},
                  animation:google.maps.Animation.DROP,
                  content:'<h1>Hydrabad</h1>'+
                  '<p>1948- Indian troops enter the Nizam-ruled princely <br> state '+
                  'of Hyderabad under Operation Polo and annex the state.</p>'
                },
                  {coords:{lat: 31.1471,lng:75.3412},
                  animation:google.maps.Animation.DROP,
                  content:'<h1>Punjab</h1>'+
                  '<p>1966- Punjab is divided into three <br> states along linguistic'+
                  'lines—Haryana, <br> Himachal Pradesh and Punjab </p>'
                 },
                  {coords:{lat:10.8505,lng:76.2711},
                  animation:google.maps.Animation.DROP,
                  content:'<h1>Kerala</h1>'+
                  '<p>1969: Indian Space Research Organisation (Isro) <br> founded and'+
                  'established in thiruvananthapuram,kerala.</p>'
                },
                  {coords:{lat:15.2993,lng:74.1240},
                  animation:google.maps.Animation.DROP,
                  content:'<h1>Goa</h1>'+
                  '<p>1961: Indian Army liberates Goa <br> from the Portuguese'+
                  'it becomes a Union Territory.</p>'
                },
                  {coords:{lat:22.9734,lng:78.6569},
                  animation:google.maps.Animation.DROP,
                  content:'<h1>Madhaya Pradesh</h1>'+
                  '<p>1984: More than 3,500 people die and 500,000 are injured in <br>'+ 
                  'the Bhopal Gas Tragedy following the leakage  of toxic methyl <br>'+
                  'isocyanate from Union Carbide India Ltd’s <br>pesticide plant in'+ 
                  'the city</p>'
                  
                },
                  {coords:{lat:19.0760,lng:72.8777},
                  animation:google.maps.Animation.DROP,
                  content:'<h1>Mumbai</h1>'+
                  '<ul><li>1993: Series of bomb blasts in Bombay (now Mumbai).</li>'+
                  '<l1>2008: Ten members of Lashkar-e-Taiba carry out a series of<br>'+ 
                  'coordinated shooting and bombing attacks at different <br>'+
                  'locations, including Taj hotel, in Mumbai.</li></ul>'

                  
                },
                  {coords:{lat:30.0668,lng: 79.0193},
                  animation:google.maps.Animation.DROP,
                  content:'<h1>Uttarakhand</h1>'+
                  '<p>2000: The states of Uttarakhand, <br> Chhattisgarh and Jharkhand were formed  </p>'
                 },

                 {coords:{lat:15.3173,lng:75.7139},
                 animation:google.maps.Animation.DROP,
                  content:'<h1>Karnataka</h1>'+
                  '<p>1990: Cauvery tribunal formed to resolve 150-year-old <br> river water dispute between Karnataka and Tamil Nadu.</p>'
                  
                 }

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

   /*if(props.animation){
        marker.setAnimation(google.maps.Animation.BOUNCE);
        
    } */

    }
}