import React from 'react';
import Tour from './Tour';
const Tours = (props) => {

  const {tours, removeTour} = props;

  return(
   
    <section className='tours-container'>
      <div className='tours-section-title-container'>
          <h2>Our tours</h2>
      </div>
      {
        tours.map(tour => {
          return (
            <Tour key={tour.id} {...tour} removeTour={removeTour}/>
          )
        })
      }

    </section>
    
  );
};

export default Tours;
