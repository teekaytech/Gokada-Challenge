import React from 'react'

function ParcelDetails() {
  return (
    <section>
      <div className="details-meta">
        <p className="price">₦15,000</p>
        <p className="duration">3.3km | 24mins</p>
      </div>
      <div className="details__buton">
        <button type="submit">Enter Parcel Details</button>
      </div>
    </section>
  );
}

export default ParcelDetails;
