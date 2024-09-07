import { useDispatch, useSelector } from "react-redux";
import DoctorCard from "../../components/DoctorCard/DoctorCard";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import DoctorModal from "../../components/DoctoModal/DoctorModal";
import "./DoctorList.css";
import { getEnvVariables } from "../../helpers/getEnvVariables";
import { setCategories } from "../../redux/categoriesSlice";
import axios from "axios";

const DoctorList = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  
  // const doctors = useSelector((state) => state.doctors.doctors);
  const [doctors, setDoctors] = useState([])
console.log(doctors)
  const [selectedCategory, setSelectedCategory] = useState("ALL")  

  const categories = useSelector((state) => state.categories.categories)

  const dispatch = useDispatch()

  const envVars = getEnvVariables();

  const handleDoctorClick = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const handleCloseModal = () => {
    setSelectedDoctor(null);
  };

  const getCategories = async () => {
    const response = await axios.get(`${envVars.VITE_BACK_URL}/categories`);
    const categories = response.data.categories;
    dispatch(setCategories(categories));

  }

  const getDoctorsData = async () => {
    try {
      if (selectedCategory !== "ALL") {
        const data = await axios.get(`${envVars.VITE_BACK_URL}/doctors?category=${selectedCategory}`);
        const doctors = data.data;
        setDoctors(doctors)
      } else {
        const data = await axios.get(`${envVars.VITE_BACK_URL}/doctors`);
        const doctors = data.data;
        setDoctors(doctors)
      }

    } catch (error) {
      console.error("Error fetching doctors data:", error);
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    getCategories()
  }, [])

  useEffect(() => {
    getDoctorsData()
  }, [selectedCategory])

  useEffect(() => {
    const cards = document.querySelectorAll(".card-container > div");
    cards.forEach((card) => {
      card.style.animation = "none"; // Resetea la animación
      card.offsetHeight; // Fuerza un reflow
      card.style.animation = ""; // Reactiva la animación
    });
  }, [doctors]);

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
          textTransform: "uppercase"
        }}
      >
        <Link
          onClick={() => handleCategoryClick('ALL')}
          style={{
            backgroundColor: selectedCategory === 'ALL' ? "#4f6dcf" : "transparent",
            padding: selectedCategory === 'ALL' && "5px 25px",
            color: selectedCategory === 'ALL' ? "white" : "#0000008c",
            borderRadius: "20px",
            width: "125px",
            textAlign: "center",
            // transition: "background-color 0.1s ease, color 0.1s ease",
          }}
        >
          ALL
        </Link>
        {
          categories.length && categories.map((category) => (
            <Link
              key={category.id}
              onClick={() => handleCategoryClick(category.name)}
              style={{
                backgroundColor: selectedCategory === category.name ? "#4f6dcf" : "transparent",
                padding: selectedCategory === category.name && "5px 25px",
                color: selectedCategory === category.name ? "white" : "#0000008c",
                borderRadius: "20px",
                textAlign: "center",
                // transition: "background-color 0.1s ease, color 0.1s ease"
              }}
            >
              {category.name}
            </Link>
          ))
        }
      </div>

      <div className="card-container">
        {doctors.map((doctor) => (
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

      {selectedDoctor && (
        <DoctorModal doctor={selectedDoctor} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default DoctorList;
