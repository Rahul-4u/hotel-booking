import React from "react";

export default function ClintCard({ card }) {
  const { displayName, rating, comment, timestamp, photoURL } = card;
  return (
    <div>
      <div className="card bg-primary mx-4 h-56  text-primary-content ">
        <div className="card-body ">
          <div className="flex gap-4 ">
            <div className="w-1/3">
              <img
                className="w-12 h-12 rounded-full border"
                src={photoURL}
                alt=""
              />
            </div>
            <div className="w-2/3">
              <h2 className="card-title">{displayName}</h2>
              <p>{comment}</p>
              <p>{rating}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
