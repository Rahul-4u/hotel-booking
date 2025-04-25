import React, { useContext } from "react";
import { AuthContext } from "../user/Authprovider";

export default function ClintCard({ card }) {
  const { darkMode } = useContext(AuthContext);
  const { displayName, rating, comment, timestamp, photoURL } = card;

  return (
    <div className="mx-4">
      <div
        className={`rounded-2xl shadow-md transition-transform duration-300 hover:scale-105 ${
          darkMode
            ? "bg-slate-800 text-white border border-slate-600"
            : "bg-white text-gray-800 border border-gray-200"
        } p-5 h-60 flex flex-col justify-between`}
      >
        <div className="flex items-center gap-4">
          <img
            className="w-14 h-14 rounded-full border-2 border-rose-400 shadow-sm object-cover"
            src={photoURL}
            alt={`${displayName}'s avatar`}
          />
          <div>
            <h2 className="text-lg font-semibold">{displayName}</h2>
            <p className="text-sm text-rose-500 font-medium">{rating} ★</p>
          </div>
        </div>

        <p
          className={`text-sm italic mt-3 px-1 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          "{comment}"
        </p>

        <div className="text-right mt-2">
          <p className="text-xs text-gray-400">
            {timestamp ? new Date(timestamp).toLocaleDateString() : ""}
          </p>
        </div>
      </div>
    </div>
  );
}
