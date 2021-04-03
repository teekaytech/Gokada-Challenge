import '../assets/details.scss';

function ParcelDetails() {
  return (
    <section className="details">
      <div className="details__info">
        <div className="price">
          <p className="price">₦15,000</p>
        </div>
        <div className="duration">
          <p className="duration">3.3km | 24mins</p>
        </div>
      </div>
      <div className="details__button">
        <button type="submit" className="button">
          Enter Parcel Details
        </button>
      </div>
    </section>
  );
}

export default ParcelDetails;
