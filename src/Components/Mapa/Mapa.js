import React, { Component, useRef, useState, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import '../../Styles/mapa.css';



function Mapa() {
    <link href='https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css' rel='stylesheet' />
    mapboxgl.accessToken = 'pk.eyJ1IjoiZmVkZWhpbHNlbiIsImEiOiJja3I0dzRkZTEyenhzMm9vOGs0YmdsM2ozIn0.jTC_nHxqAkIF_DODrdBgPA';
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-58.5445);
    const [lat, setLat] = useState(-34.5858);
    const [zoom, setZoom] = useState(8.06);

    useEffect(() => {
        if (map.current) return;
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
    });
    return (
        <div>
            <div ref={mapContainer} className="map-container" />
        </div>
    );

}
export default Mapa