import { FaStar } from "react-icons/fa";
import "./DoctorCard.css";

const DoctorCard = ({ name, specialty, image, location }) => {
  return (
    <div className="doctor-card">
      <img src={image} alt="Doctor" />
      <div className="doctor-info">
        <h2>{name}</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p className="specialty">{specialty}</p>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <FaStar style={{ color: "#feb52e", fontSize: "17px" }} />
            <p>
              4.8 <span>(244)</span>
            </p>
          </div>
        </div>

        <div style={{ marginTop: "16px" }}>
          <p style={{ fontSize: "14px" }}>1400 Pacientes</p>
          <p style={{ fontWeight: "600", color: "#0000008c" }}>{location}</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
