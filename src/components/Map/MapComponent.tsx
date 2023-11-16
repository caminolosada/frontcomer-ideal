import React, { useEffect } from "react";
import { getLocalsData } from "./MapService";

const markerGold =
  "https://res.cloudinary.com/drghk9p6q/image/upload/v1700160592/marcador-de-posicion_1_qdg7qb.png";
const markerBlue =
  "https://res.cloudinary.com/drghk9p6q/image/upload/v1700160592/marcador-de-posicion_ihzf30.png";

const MapComponent: React.FC = () => {
  useEffect(() => {
    const bcnCoordinates = { lat: 41.3851, lng: 2.1734 };

    const map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        // UBICACIÓN INCIAL
        center: bcnCoordinates,
        zoom: 13,
      }
    );

    //CAPTURA DE DATOS
    const locals = getLocalsData();

    //MARKERS IN MAP
    locals.forEach((local) => {
      // Determina el color del símbolo en función de isGolden
      const symbolColor = local.isGolden ? markerGold : markerBlue;

      const marker = new google.maps.Marker({
        position: {
          lat: local.coordenadas.latitud,
          lng: local.coordenadas.longitud,
        },
        map,
        title: `Local ID: ${local.id}`,
        icon: {
          url: symbolColor,
          scaledSize: new google.maps.Size(50, 50),
        },
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

                <a href="https://api.whatsapp.com/send?phone=677147018" target="_blank">Contactar agente</a>
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
