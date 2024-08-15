import "./DoctorCard.css";

const DoctorCard = ({ name, specialty, image }) => {
  return (
    <div className="doctor-card">
      <img src={image} alt="Doctor" />
      <div className="doctor-info">
        <h2>{name}</h2>
        <p>{specialty}</p>
      </div>
    </div>
  );
};

export default DoctorCard;
