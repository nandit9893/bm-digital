import React, { useState } from "react";
import { ZoomIn, ZoomOut } from "lucide-react";

const MapBoxPreview = () => {
  const address = "BM Digital Utilization";
  const [coordinates] = useState([77.36751292443452, 28.620405163780095]); // [longitude, latitude]
  const [zoomLevel, setZoomLevel] = useState(17);

  const mapboxToken =
    "pk.eyJ1IjoieHNzMSIsImEiOiJjbTM0OHBrN3cxazVjMmtzNHl3emUyNGJ3In0.2sFfOtaeQDIVzpDB_azClA";

  const mapboxUrl = `https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/geojson(%7B%22type%22%3A%22Point%22%2C%22coordinates%22%3A%5B${coordinates[0]}%2C${coordinates[1]}%5D%7D)/${coordinates[0]},${coordinates[1]},${zoomLevel},0/1200x600@2x?access_token=${mapboxToken}`;

  const handleNavigation = () => {
    window.open(
      "https://maps.app.goo.gl/qE9oPBX93w2zcVCT6",
      "_blank"
    );
  };

  const handleShareClick = (e) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator
        .share({
          title: "BM Digital Utilization Location",
          text: address,
          url: "https://maps.app.goo.gl/qE9oPBX93w2zcVCT6",
        })
        .catch(console.error);
    }
  };

  const handleZoomIn = (e) => {
    e.stopPropagation();
    setZoomLevel((prev) => Math.min(prev + 3, 20));
  };

  const handleZoomOut = (e) => {
    e.stopPropagation();
    setZoomLevel((prev) => Math.max(prev - 3, 10));
  };

  return (
    <div className="w-full">
      <div
        className="relative w-full h-[200px] rounded-xl overflow-hidden border border-gray-200 bg-white cursor-pointer"
        onClick={handleNavigation}
      >
        <img
          src={mapboxUrl}
          alt="BM Digital Utilization Location Map"
          className="w-full h-full object-cover hover:opacity-95 transition-opacity"
          style={{ imageRendering: "crisp-edges" }}
        />

        {/* Zoom Controls */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <button
            onClick={handleZoomIn}
            className="p-2 bg-white rounded-lg shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Zoom in"
          >
            <ZoomIn className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={handleZoomOut}
            className="p-2 bg-white rounded-lg shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Zoom out"
          >
            <ZoomOut className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MapBoxPreview;
