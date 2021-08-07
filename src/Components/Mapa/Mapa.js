import React, { useRef, useState, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import '../../Styles/mapa.css';



function Mapa() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZmVkZWhpbHNlbiIsImEiOiJja3I0dzRkZTEyenhzMm9vOGs0YmdsM2ozIn0.jTC_nHxqAkIF_DODrdBgPA';
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng] = useState(-58.5445);
    const [lat] = useState(-34.5858);
    const [zoom] = useState(8.06);

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