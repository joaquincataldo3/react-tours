import React, { useState } from 'react';
import './Tour.css'


const Tour = (props) => {

  const [showMore, setShowMore] = useState(true)
  const { id, name, info, image, price, removeTour } = props;

  const showInfo = (showMore) => {
    setShowMore(!showMore)
  }


  return (

    <article className='tour-wrapper'>
      <div className='tour-img-container'>
        <img src={image} alt="" />
      </div>
      <div className='tour-info-container'>
        <footer className='tour-name-price-container'>
          <h3>{name}</h3>
          <h4 className='tour-price'>${price}</h4>
        </footer>
        <div className='tour-description-container'>
          <p>{showMore ? `${info.substring(0, 150)}...` : info}
            <button className='show-more-less-btn' onClick={() => showInfo(showMore)}>{showMore ? 'Show More' : 'Show Less'}</button>
          </p>
        </div>
      </div>
      <div className='remove-btn-container'>
        <button className='remove-tour-btn' onClick={() => removeTour(id)}>Not interested</button>
      </div>
    </article>

  )
    ;
};

export default Tour;
