import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
export default class MapaUbicacion extends Component {
    render() {

        const position = [-31.20430, -64.31457];
        if (typeof window !== 'undefined') {
            return (
                <div className="mapa-ubicacion">
                    <Map center={position} zoom={13}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                            <Popup>
                                <span>
                                    Escuela Alfredo Bravo <br /> Dermidio Loza 252 - Barrio Loza<br />Río Ceballos
                                </span>
                            </Popup>
                        </Marker>
                    </Map>
                </div>
            );
        } else {
            return (
                <div className="section mapa-ubicacion">
                    <div className="leaflet-container"> </div>
                </div>);
        }
    }
}