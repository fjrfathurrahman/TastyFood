"use client";

import { useRef, useEffect } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";

export const Map = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maptilersdk.Map | null>(null);
  const zoomLevel = 14;

  maptilersdk.config.apiKey = process.env.NEXT_PUBLIC_MAPTILER_API_KEY ?? "";

  useEffect(() => {
    if (mapRef.current) return;

    if (containerRef.current) {
      mapRef.current = new maptilersdk.Map({
        container: containerRef.current,
        style: maptilersdk.MapStyle.STREETS,
        center: [107.60981, -6.91959],
        zoom: zoomLevel,
      });

      // Penanda marker
      new maptilersdk.Marker({ color: "#FF0000" })
        .setLngLat([107.60981, -6.91959])
        .addTo(mapRef.current!);
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [zoomLevel]);

  return (
    <div className="map-wrapper relative w-full h-[430px] sm:h-[370px] lg:h-[500px] z-50 my-16 rounded-xl shadow-md">
      <div
        ref={containerRef}
        className="map w-full h-full absolute rounded-xl"
      />
    </div>
  );
};
