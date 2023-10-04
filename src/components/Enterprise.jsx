import "../styles/Enterprise.css";
import categoryIcon from "../assets/category.svg";
import workIcon from "../assets/work.svg";
import locationIcon from "../assets/location.svg";
import phoneIcon from "../assets/phone.svg";
import mailIcon from "../assets/mail.svg";

export const Enterprise = ({ enterprise, imageUrl }) => {
  const { name, actor, activity, address, phoneList, mailList } = enterprise;
  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={imageUrl} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">
                <img src={categoryIcon} alt="Phone icon" /> {actor}
              </p>
              <p className="card-text">
                <img src={workIcon} alt="Phone icon" /> {activity}
              </p>
              <div className="card-text">
                <small className="text-body-secondary">
                  <div>
                    <img src={locationIcon} alt="Phone icon" /> {address}
                  </div>
                </small>
              </div>
              <div className="card-text">
                <small className="text-body-secondary">
                  {phoneList.map((phone, index) => (
                    <div key={index}>
                      <img src={phoneIcon} alt="Phone icon" />{" "}
                      <a href={`tel:${phone}`}>{phone.replace("(+53)", "")}</a>
                      {"   "}
                    </div>
                  ))}{" "}
                  {mailList.map((mail, index) => (
                    <div key={index}>
                      <img src={mailIcon} alt="Phone icon" />{" "}
                      <a href={`mailto:${mail}`}>{mail}</a>
                      {"   "}
                    </div>
                  ))}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
