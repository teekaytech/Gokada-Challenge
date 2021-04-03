import React from 'react'

function RequestFields() {
  return (
    <section>
      <div className="title">
        <h4>Parcel Request</h4>
      </div>
      <div className="addresses">
        <input type="text" name="pickup" id="pickup" placeholder="Pickup address"/>
        <input type="text" name="dropoff" id="pickup" placeholder="Dropoff address"/>
      </div>
    </section>
  );
}

export default RequestFields
