import React from "react"
import Title from "./Title"
import { tourPackages } from "../data"

const Tours = () => {
  return (
    <section className='section' id='tours'>
      <Title title='featured' subTitle='tours' />
      <div className='section-center featured-center'>
        {tourPackages.map((tour) => {
          const { id, img, date, title, desc, country, duration, cost } = tour
          return (
            <article className='tour-card' key={id}>
              <div className='tour-img-container'>
                <img src={img} className='tour-img' alt='' />
                <p className='tour-date'>{date}</p>
              </div>
              <div className='tour-info'>
                <div className='tour-title'>
                  <h4>{title}</h4>
                </div>
                <p>{desc}</p>
                <div className='tour-footer'>
                  <p>
                    <span>
                      <i className='fas fa-map'></i>
                    </span>{" "}
                    {country}
                  </p>
                  <p>{duration}</p>
                  <p>{cost}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Tours
