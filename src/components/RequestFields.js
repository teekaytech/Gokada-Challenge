import '../assets/request.scss';
import { useState, useEffect } from "react";
import LocationSearchInput from "../map/LocationSearchInput";

function RequestFields() {
  const [position, setPosition] = useState({})


  useEffect(() => {
    navigator.geolocation.watchPosition(
      async function (position) {
        const outcome = await position;
        setPosition({
          latitude: outcome.coords.latitude,
          longitude: outcome.coords.longitude,
        });
      }
    );
  }, []);

  return (
    <section className="request">
      <div className="request__title">
        <h4>Parcel Request</h4>
      </div>
      <div className="request__addresses">
        <LocationSearchInput holder="Pickup address" cname="pickup" key="pickup" position={position} />
        <LocationSearchInput holder="Dropoff address" cname="dropoff" key="dropoff" position={position}/>
      </div>
    </section>
  );
}

export default RequestFields
