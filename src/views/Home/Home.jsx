import { useSelector } from "react-redux";
import img from "../../assets/doctor.svg";
import DoctorCard from "../../components/DoctorCard/DoctorCard";
import CategoryCard from "../../components/CategoryMiniCard/CategoryCard";
import { categories } from "../../helpers/categories";

import "./Home.css";

const Home = () => {
  const user = useSelector((state) => state.user.user);
  const name = user.name.split(" ")[0];

  const doctorsData = [
    {
      id: 1,
      name: "Dr. Juan Perez",
      specialty: "Cardiology",
      image:
        "https://www.infobae.com/new-resizer/kTpbPO_yF5zboXTkc2B5knfDTB4=/992x661/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/5KCVGAGSP5HFJA7KMALNP7ITS4.jpg",
    },
    {
      id: 2,
      name: "Dra. María García",
      specialty: "Dermatology",
      image:
        "https://d7lju56vlbdri.cloudfront.net/var/ezwebin_site/storage/images/_aliases/img_1col/noticias/solo-el-8-de-las-medicas-alcanza-puestos-de-responsabilidad-en-hospitales/3405721-5-esl-MX/Solo-el-8-de-las-medicas-alcanza-puestos-de-responsabilidad-en-hospitales.jpg",
    },
    {
      id: 3,
      name: "Dr. Carlos Martínez",
      specialty: "Pediatrics",
      image:
        "https://familydoctor.org/wp-content/uploads/2018/02/41808433_l-848x566.jpg",
    },
    {
      id: 4,
      name: "Dra. Ana López",
      specialty: "Gynecology",
      image:
        "https://www.pmfarma.com/noticias/noticias/50913/image/mujeres%20medicas.jpg",
    },
    {
      id: 5,
      name: "Dr. Pablo Rodríguez",
      specialty: "Neurology",
      image:
        "https://eunamed.com/wp-content/uploads/2021/02/medico-especialista-en-chile-768x512.jpg",
    },
    {
      id: 6,
      name: "Dra. Laura Fernández",
      specialty: "Ophthalmology",
      image:
        "https://img.freepik.com/foto-gratis/hermosa-joven-doctora-mirando-camara-oficina_1301-7781.jpg?w=1060&t=st=1713415807~exp=1713416407~hmac=0a92ba80cd405e1a0ceb57317ec5d933459c05dadfb5c324e69583e89d6b1929",
    },
    {
      id: 7,
      name: "Dr. Jorge Sanchez",
      specialty: "Psychiatry",
      image:
        "https://img.freepik.com/fotos-premium/retrato-doctor-hombre-usando-tableta-digital_107420-66908.jpg?w=1060",
    },
    {
      id: 8,
      name: "Dra. Carmen Navarro",
      specialty: "Oncology",
      image:
        "https://img.freepik.com/foto-gratis/doctora-bata-laboratorio-blanco-aislado-sonrisa-confiada_343596-6556.jpg?t=st=1713415827~exp=1713419427~hmac=80d1867d1b5369b59cb9399601f07af1e14f58917a64c11bc307a0eff8dd3088&w=1060",
    },
  ];

  return (
    <>
      <div className="container">
        <h1 className="greeting">Hi {name}! 👋</h1>
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
              <CategoryCard key={category.id} categorySvg={category.category} />
            ))}
          </div>
        </div>

        <div className="doctors">
          <h3>Top Doctors</h3>
          <div className="card-container">
            {doctorsData.map((doctor) => (
              <DoctorCard
                key={doctor.id}
                name={doctor.name}
                specialty={doctor.specialty}
                image={doctor.image}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
