import "../styles/SectionCard.css";

export const SectionCard = ({ imgUrl, title }) => {
  return (
    <div className="card card-display">
      <img src={imgUrl} className="card-img-top" alt="Card Image" />
      <div className="card-body">
        <p className="card-text">
          <strong>{title}</strong>
        </p>
      </div>
    </div>
  );
};
