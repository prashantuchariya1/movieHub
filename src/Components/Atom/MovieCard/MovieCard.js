import React from 'react'
import style from './MovieCard.module.css'
import { Link } from 'react-router-dom';
export default function MovieCard(props) {
  
  return (
    <Link to={`/movie/${props.name}`} state={props} style={{textDecoration: 'none'}}>
    <div className={style.MovieCard}>
        <div className={style.card}>

        <img className={style.poster_img} src={props.imageUrl} alt="" />
        <h3 className={style.movie_name}>{props.name}</h3>
        </div>
    </div>
    </Link>
  )
}
