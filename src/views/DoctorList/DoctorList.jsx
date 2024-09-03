import { useSelector } from "react-redux";
import DoctorCard from "../../components/DoctorCard/DoctorCard";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";
import DoctorModal from "../../components/DoctoModal/DoctorModal";
import "./DoctorList.css";

const DoctorList = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const doctorsData = useSelector((state) => state.doctors.doctors);

  console.log(selectedDoctor);

  const handleDoctorClick = (doctor) => {
    console.log(doctor);
    setSelectedDoctor(doctor);
  };

  const handleCloseModal = () => {
    setSelectedDoctor(null);
  };

  return (
    <div className="container">
      <div className="docs">
        <h2>Meet our doctors</h2>
        <div className="searchbar">
          <input type="text" name="" id="" placeholder="Search Doctor" />
          <IoIosSearch style={{ color: "#0000008c", fontSize: "22px" }} />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          background: "white",
          width: "100%",
          padding: "15px",
          marginBottom: "20px",
          borderRadius: "20px",
          color: "#0000008c",
          fontSize: "14px",
          gap: "60px",
          alignItems: "center",
          boxShadow:
            "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        }}
      >
        <Link
          style={{
            backgroundColor: "#4f6dcf",
            padding: "5px 25px",
            color: "white",
            borderRadius: "20px",
            width: "125px",
            textAlign: "center",
          }}
        >
          ALL
        </Link>
        <Link>CARDIOLOGY</Link>
        <Link>ORTHOPEDICS</Link>
        <Link>ONCOLOGY</Link>
        <Link>DERMATOLOGY</Link>
        <Link>SERGERY</Link>
        <Link>GINOCOLOGY</Link>
      </div>

      <div className="card-container">
        {doctorsData.map((doctor) => (
          <div onClick={() => handleDoctorClick(doctor)}>
            <DoctorCard
              key={doctor.id}
              name={doctor.name}
              specialty={doctor.categories[0].name}
              image={doctor.image}
              location={doctor.location}
            />
          </div>
        ))}
      </div>

      {selectedDoctor && (
        <DoctorModal doctor={selectedDoctor} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default DoctorList;
