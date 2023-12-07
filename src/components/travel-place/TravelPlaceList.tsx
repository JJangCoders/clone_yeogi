"use client";
import React, { useState, useEffect } from "react";
import TravelPlaceItem, { TravelPlaceProps } from "./TravelPlaceItem";

interface TravelPlaceListProps {
  travelPlaces: TravelPlaceProps[];
}

export default function TravelPlaceList({
  travelPlaces,
}: TravelPlaceListProps) {
  return (
    <div className="flex flex-col w-full">
      <hr />
      {travelPlaces.map((travelPlace, index) => (
        <div key={index} className="mt-12pxr">
          <TravelPlaceItem {...travelPlace} />
          <hr className="mt-12pxr" />
        </div>
      ))}
    </div>
  );
}
