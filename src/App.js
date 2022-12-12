import React, { useState, useEffect } from 'react'
import Loading from './Comps/Loading';
import Tours from './Comps/Tours';




const url = 'https://course-api.com/react-tours-project'


function App(props) {

  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const toursApiCall = () => {
    fetch(url)
      .then(response => response.json())
      .then(tours => {
        setTours(tours);
        setIsLoading(false);
      })
  }

  const removeTour = (id) => {
    const newTours = tours.filter(tour => {
      return tour.id !== id
    })
    setTours(newTours)
  }

  useEffect(() => {
    toursApiCall()
  }, [])

  {
    isLoading &&  <Loading />
  }

  return (
    <Tours tours={tours} removeTour={removeTour}/>
  )
}

export default App;
