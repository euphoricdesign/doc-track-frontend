import { Link } from "react-router-dom";
import "./CardCategory.css";

const CategoryCard = ({ categorySvg, categoryName }) => {
  return (
    <div className="card">
      <Link to={`category/${categoryName}`}>
        <div className="card-content">
          <img src={categorySvg} alt="categoria" />
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
