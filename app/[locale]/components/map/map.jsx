"use client";
import dynamic from "next/dynamic";
const GoogleMaps = dynamic(() => import("../googleMaps/googleMaps.jsx"), {
  ssr: false,
});

function Map() {
  return <GoogleMaps />;
}

export default Map;
