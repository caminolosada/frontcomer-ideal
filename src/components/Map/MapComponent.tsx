import React, { useEffect } from "react";
import { useAppSelector } from "../../store";

const MapComponent: React.FC = () => {
  const locals = useAppSelector((state) => state.localState.locals);

  useEffect(() => {
    const goldenLocal = locals.filter((local) => local.isGolden);

    const bcnCoordinates = !goldenLocal.length
      ? { lat: 41.3851, lng: 2.1734 }
      : { lat: goldenLocal[0].latitude, lng: goldenLocal[0].longitude };

    const map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        // UBICACIÓN INCIAL
        center: bcnCoordinates,
        zoom: 13,
      }
    );

    //MARKERS IN MAP
    locals.forEach((local) => {
      // Determina el color del símbolo en función de isGolden

      const symbolColor = local.isGolden
        ? "gold"
        : local.isAvailability
        ? "green"
        : "blue";

      const marker = new google.maps.Marker({
        position: {
          lat: local.latitude,
          lng: local.longitude,
        },
        map,
        title: `${local.address}`,
        icon: {
          path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
          fillColor: symbolColor,
          fillOpacity: 1,
          strokeColor: "black",
          strokeWeight: 1,
          scale: local.isGolden ? 10 : 5,
        },
      });

      const infoWindow = new google.maps.InfoWindow({
        content: `
            <div>
                <p>Estat: ${
                  local.isAvailability
                    ? "Disponible"
                    : "Ocupat" || "No especificat"
                }</p>
                ${
                  local.isAvailability
                    ? `<p>Preu de lloguer: ${local.rentalPrice}€</p>`
                    : ""
                }${
          local.isAvailability
            ? `<p>Preu de venda: ${local.salePrice}€</p>`
            : ""
        }</p>
                ${
                  local.activityType
                    ? `<p>Tipus de Negoci: ${local.activityType}</p>`
                    : ""
                }</p>

                <a href="https://api.whatsapp.com/send?phone=677147018" target="_blank">Contacte agent</a>
                </div>
            `,
      });

      marker.addListener("click", () => {
        infoWindow.open(map, marker);
      });
    });
  }, [locals]);

  return <div id="map" style={{ height: "600px", width: "100%" }}></div>;
};

export default MapComponent;
