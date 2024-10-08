import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DoctorCard from "../../components/DoctorCard/DoctorCard";
import CategoryCard from "../../components/CategoryMiniCard/CategoryCard";
import { categories } from "../../helpers/categories";
import { TypeAnimation } from "react-type-animation";

import { getEnvVariables } from "../../helpers/getEnvVariables";
import { setDoctors } from "../../redux/doctorSlice";
import img from "../../assets/doctor.svg";
import "./Home.css";
import DoctorModal from "../../components/DoctoModal/DoctorModal";

const Home = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const user = useSelector((state) => state.user.user);
  const doctors = useSelector((state) => state.doctors.doctors);

  const name = user.name.split(" ")[0];

  const dispatch = useDispatch();

  const envVars = getEnvVariables();

  const getDoctorsData = async () => {
    try {
      const data = await axios.get(`${envVars.VITE_BACK_URL}/doctors`);
      const doctors = data.data;
      dispatch(setDoctors(doctors));
    } catch (error) {
      console.error("Error fetching doctors data:", error);
    }
  };

  const handleDoctorClick = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const handleCloseModal = () => {
    setSelectedDoctor(null);
  };

  useEffect(() => {
    getDoctorsData();
  }, []);

  return (
    <>
      <div className="container">
        <TypeAnimation
          className="greeting"
          sequence={[`Hi ${name}! 👋`]}
          wrapper="span"
          cursor={false}
          repeat={false}
        />
        <span>How do you feel today?</span>

        <div className="contenedor">
          <div className="text-content">
            <span className="title">Find the best doctors in our clinic</span>
            <p className="subtitle">
              Search through our doctors and schedule your appointment now!
            </p>
          </div>
          <img
            className="svg-img"
            src={img}
            alt="Descripción de la imagen"
          ></img>
        </div>

        <div className="categories">
          <h3>Categories</h3>
          <div className="card-category-container">
            {categories.map((category) => (
              <CategoryCard key={category.id} categorySvg={category.category} categoryName={category.name} />
            ))}
          </div>
        </div>

        <div className="doctors">
          <h3>Our Doctors</h3>
          <div className="card-container">
            {doctors.slice(0, 8).map((doctor) => (
             <div key={doctor.id} onClick={() => handleDoctorClick(doctor)}>
                <DoctorCard
                  name={doctor.name}
                  specialty={doctor.categories[0].name}
                  image={doctor.image}
                  location={doctor.location}
                />
             </div>
            ))}
          </div>
          <button className="view-more-btn">
            <Link to="/doctors/info">View more</Link>
            <div className="arrow-wrapper">
              <div className="arrow"></div>
            </div>
          </button>
          {selectedDoctor && (
            <DoctorModal doctor={selectedDoctor} onClose={handleCloseModal} />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
