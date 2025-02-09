"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./googleMaps.module.css";
import dynamic from "next/dynamic";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

import "leaflet/dist/leaflet.css";
import L from "leaflet";

const position = [30.7918293, 31.0297569];

const containerStyle = {
  width: "100%",
  height: "450px",
  borderRadius: "10px",
};

function GoogleMaps() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (isClient) {
      try {
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconUrl: "/images/marker-icon.png",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowUrl: "/images/marker-shadow.png",
          shadowSize: [41, 41],
          iconRetinaUrl: null,
        });
      } catch (error) {
        console.error("Error in leaflet icon settings:", error);
      }
    }
  }, [isClient]);

  if (!isClient) {
    return null;
  }

  return (
    <section className={styles.googleMaps}>
      <div className="container">
        <h2 className={styles.title}>Reach us via the map</h2>
        <Image src={"/images/Group-1.png"} alt="image" width={67} height={7} />
        <div className={styles.maps}>
          <MapContainer
            center={position}
            zoom={13}
            style={containerStyle}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution="&copy; contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>Apps Square</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  );
}

export default GoogleMaps;
