import React from "react";
import { useLocation } from "react-router-dom";
import style from "./SummaryPage.module.css";
import { Link } from "react-router-dom";

export default function SummaryPage() {
  const location = useLocation();
  const props = location.state;

  const bookingData = {
    name: `${props.name}`,
    imageUrl: `${props.imageUrl}`,
  };
  //   console.log(bookingData)
  localStorage.setItem("formData", JSON.stringify(bookingData));

  return (
    <div className={style.SummaryPage}>
      <h1>{props.name}</h1>
      <div className={style.details_container}>
        <div className={style.detail_summary}>
          <p>{props.summary.replace(/<[^>]+>/g, "")}</p>
          <Link to="/book">
            <button className={style.btn}>Book Ticket</button>
          </Link>
        </div>
        <div className={style.detail_image}>
          <img className={style.banner_image} src={props.imageUrl} alt="" />
          <div className={style.movie_details}>
            <p>
              <strong>Genres:</strong>
              {props.genres || "Data not available"}
            </p>
            <p>
              <strong>Type:</strong>
              {props.type || "Data not available"}
            </p>
            <p>
              <strong>Rating:</strong>
              {props.rating || "Data not available"}
            </p>
            <p>
              <strong>Runtime:</strong>
              {props.runtime || "Data not available"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
