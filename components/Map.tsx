import React from "react";
import GoogleMapReact from "google-map-react";

export interface MapProps {
  className?: string;
  markers?: Array<Marker>;
}

export interface Marker {
  lat: number;
  lng: number;
  text: string;
}

const AnyReactComponent = ({
  text,
  lat,
  lng,
}: {
  text: string;
  lat: number;
  lng: number;
}) => (
  <div>
    <img width="25px" height="25px" src="./Honeycrisp-Apple.jpg" />
  </div>
);

export function Map(props: MapProps) {
  const defaultProps = {
    center: {
      lat: 60.397076,
      lng: 5.324383,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div className={props.className}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY || "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {props.markers?.map((marker) => (
          <AnyReactComponent
            lat={marker.lat}
            lng={marker.lng}
            text={marker.text}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
}
