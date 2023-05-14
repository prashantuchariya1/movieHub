import React from 'react'
import style from './TicketBookPage.module.css'
export default function TicketBookPage() {
  const storedData = JSON.parse(localStorage.getItem('formData'));
  
  return (
    <div className={style.TicketBookPage}>
        <h1>Book Ticket</h1>
        <form action="">
        <div className={style.detail_image}>
                <img className={style.banner_image} src={storedData.imageUrl} alt="" />
                <h2>{storedData.name}</h2>
                
                </div>
                <div>

                <div>

                <label htmlFor="">Movie Name: </label>
                <input type="text"  value={storedData.name}/>
                </div>
                <div>

                <label htmlFor="">Select Date </label>
                <input type="date" />
                </div>
                </div>
                <button>Book Ticket</button>
                
        </form>
    </div>
  )
}
