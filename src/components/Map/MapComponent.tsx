import React, { useEffect } from "react";
import { mapStyles } from "./MapStyles";
import { getLocalsData } from "./MapService";

const MapComponent: React.FC = () => {
  useEffect(() => {
    const bcnCoordinates = { lat: 41.3851, lng: 2.1734 };

    const map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        // ubicación inicial
        center: bcnCoordinates,
        zoom: 13,
        styles: mapStyles,
      }
    );

    //getLocalsData
    const locals = getLocalsData();

    //Markers in map
    locals.forEach((local) => {
      const marker = new google.maps.Marker({
        position: {
          lat: local.coordenadas.latitud,
          lng: local.coordenadas.longitud,
        },
        map,
        title: `Local ID: $(local.id)`,
      });

      const infoWindow = new google.maps.InfoWindow({
        content: `
            <div>
                <p>Estado: ${local.estado || "No especificado"}</p>
                ${
                  local.costeAlquiler
                    ? `<p>Coste de Alquiler: ${local.costeAlquiler}</p>`
                    : ""
                }</p>
                ${
                  local.tipoNegocio
                    ? `<p>Tipo de Negocio: ${local.tipoNegocio}</p>`
                    : ""
                }</p>
            </div>
            `,
      });

      marker.addListener("click", () => {
        infoWindow.open(map, marker);
      });
    });
  }, []);

  return <div id="map" style={{ height: "400px", width: "100%" }}></div>;
};

export default MapComponent;
