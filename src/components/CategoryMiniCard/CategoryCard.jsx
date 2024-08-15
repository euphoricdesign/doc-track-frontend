import "./CardCategory.css";

const CategoryCard = ({ categorySvg }) => {
  return (
    <div className="card">
      <div className="card-content">
        <img src={categorySvg} alt="categoria" />
      </div>
    </div>
  );
};

export default CategoryCard;
