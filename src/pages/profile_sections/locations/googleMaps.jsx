import "../../../index.css";
const AddressCard = ({ adrs_title }) => {
  return (
    <div className="profile-addresses-card">
      <span className="profile-addresses-card-title">{adrs_title}</span>
      <div className="profile-addresses-card-location">
        <div
          style={{
            width: "100%",
            height: "400px",
          }}
        >
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            src="https://maps.app.goo.gl/eSnmLQE64bJevSvu9"
          ></iframe>
        </div>
      </div>
      <button>active</button>
    </div>
  );
};
export default AddressCard;
