import '../assets/request.scss';

function RequestFields() {
  return (
    <section className="request">
      <div className="request__title">
        <h4>Parcel Request</h4>
      </div>
      <div className="request__addresses">
        <input type="text" name="pickup" id="pickup" className="pickup" placeholder="Pickup address"/>
        <input type="text" name="dropoff" id="pickup" className="dropoff" placeholder="Dropoff address"/>
      </div>
    </section>
  );
}

export default RequestFields
