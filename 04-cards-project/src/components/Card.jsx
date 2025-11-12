import React from "react";
import { Bookmark } from "lucide-react";

const Card = ({ data }) => {
  return (
    <div className="card">
      {/* ✅ TOP */}
      <div className="top">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png"
          alt={data.company}
        />
        <button>
          Save <Bookmark size={16} />
        </button>
      </div>

      {/* ✅ CENTER */}
      <div className="center">
        <h3>
          {data.company} <span>{data.posted}</span>
        </h3>

        <h2>{data.position}</h2>

        <div>
          <h4>{data.type}</h4>
          <h4>{data.level}</h4>
        </div>
      </div>

      {/* ✅ BOTTOM */}
      <div className="bottom">
        <div>
          <h3>{data.salary}</h3>
          <p>{data.location}</p>
        </div>

        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default Card;
