import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import jump from 'jump.js';
import {easeInOutCubic} from '../../utils/Easing';

export const GoogleMap = ({properties, activeProperty, setActiveProperty, DefaultCenter, isFiltering, filteredProperties}) => {
    const {latitude, longitude} = DefaultCenter;
    const[markers] = useState([]);
    const[thisMap, setthisMap] = useState();

    function createMapOptions(maps) {
        return {
          panControl: false,
          mapTypeControl: false,
          scrollwheel: false,
          styles: [{ stylers: [{ 'saturation': -60 }, { 'gamma': 0.7 }, { 'lightness': 9 }, { 'visibility': 'on' }] }]
        }
    }

    useEffect(() => {
      
        markers.forEach(marker => {
            marker.iw.close();

            const {property} = marker; 
            //console.log(property);
            if(isFiltering){

                // show markers of filtered properties
                if(filteredProperties.includes(property)){

                    markers[property.index].setVisible(true);

                } else {
                    // hide all other markers
                    markers[property.index].setVisible(false);
                }

            } else {

                // show all markers
                markers[property.index].setVisible(true);

            }
        })
        if (activeProperty && !activeProperty.errors){
            markers[activeProperty.index] && markers[activeProperty.index].iw.open(thisMap, markers[activeProperty.index]);
        }
    }, [activeProperty, markers, thisMap, isFiltering, filteredProperties]);

    function createMarkers(map, maps, markers, properties, activeProperty, setActiveProperty){

        const activePropertyIndex = activeProperty.index;

        setthisMap(map);

        properties.forEach(property => {
            const {latitude, longitude, index, address} = property;
            const marker = new maps.Marker({
                position: {lat: latitude, lng: longitude},
                map: map,
                icon: {
                    url: "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld="+ (index+1) +"|1078ff|ffffff"
                },
                property
            });
            // create info window for each marker   
            const iw = new maps.InfoWindow({
              content: `<h1>${address}</h1>`
            })

            marker.iw = iw;

            marker.addListener('click', function() {

                // hide all other info boxes on click
                markers.forEach(marker => {
                    marker.iw.close();
                })

                // make clicked info window always opened
                marker.iw.open(thisMap, marker);

                // scroll to the right property
                const target = `#card-${property.index}`;
                jump(target, {
                    duration: 800,
                    easing: easeInOutCubic
                });

                // set active property onto the state
                setActiveProperty(property);

            });
              // push this marker to the markers array on the state
              markers.push(marker);

            // show active property info window
            markers[activePropertyIndex] && markers[activePropertyIndex].iw.open(thisMap, markers[activePropertyIndex]);
        })

    }

    return (
        <div className="mapContainer">
        <div id="map">
            <GoogleMapReact
            bootstrapURLKeys={{
                key: ['AIzaSyApo7SZ0cD2Gl3y35Z52qcg4aUvpCMActA']
            }}
            options={createMapOptions}
            defaultCenter={{lat: latitude, lng: longitude}}
            defaultZoom={16}
            yesIWantToUseGoogleMapApiInternals={true}
            onGoogleApiLoaded={({ map, maps }) => createMarkers(map, maps, markers, properties, activeProperty, setActiveProperty)}
            />

        </div>
        </div>
    )
}

export default GoogleMap;