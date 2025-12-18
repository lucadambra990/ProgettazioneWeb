import { useState } from "react";

const ChangeColor = () => {
  const [selectID, setID] = useState(null);
  const cards = ["Card1", "Card2", "Card3"];

  return (
    <div className="container mt-3">
      {cards.map((text, index) => (
        <div
          className="card mb-2"
          key={index}
          onClick={() => setID(index)}
        >
          <div className="card-body">
            <h5 className={selectID === index ? "text-danger" : ""}>
              Title
            </h5>
            <p className={selectID === index ? "text-danger" : ""}>
              {text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChangeColor;