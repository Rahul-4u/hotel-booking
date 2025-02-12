import React, { useContext } from "react";
import { AuthContext } from "../user/Authprovider";

export default function ClintCard({ card }) {
  const { darkMode } = useContext(AuthContext);
  const { displayName, rating, comment, timestamp, photoURL } = card;
  return (
    <div>
      <div
        className={`card ${
          darkMode ? "bg-slate-400 text-black" : "bg-primary text-white"
        } mx-4 h-56  `}
      >
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
