import React from 'react';
import {GoogleMap, Marker, withGoogleMap, withScriptjs} from "react-google-maps";
import InfoBox from 'react-google-maps/lib/components/addons/InfoBox';

const options = {
    closeBoxURL: '',
    enableEventPropagation: true
};

const Map = (props) => {
    const {positions} = props;
    return (
        <div>
            <GoogleMap
                defaultZoom={12}
                defaultCenter={{
                    lat: 16.03458884331925,
                    lng: 108.20502929152657
                }}>
                <Marker
                    position={new window
                        .google
                        .maps
                        .LatLng({lat: positions.from.lat, lng: positions.from.lng})}>
                    <InfoBox options={options}>
                        <>
                            <div
                            style={{
                                backgroundColor: 'green',
                                color: 'white',
                                borderRadius: '1em',
                                padding: '0.2em'
                            }}>
                            điểm đi: {positions.from.label}
                        </div>
                    </>
                </InfoBox>
            </Marker>
            <Marker
                    position={new window
                        .google
                        .maps
                        .LatLng({lat: positions.to.lat, lng: positions.to.lng})}>
                    <InfoBox options={options}>
                        <>
                            <div
                            style={{
                                backgroundColor: 'green',
                                color: 'white',
                                borderRadius: '1em',
                                padding: '0.2em'
                            }}>
                            điểm đến: {positions.to.label}
                        </div>
                    </>
                </InfoBox>
            </Marker>
        </GoogleMap>
    </div>
    );
}

export default withScriptjs(withGoogleMap(Map));