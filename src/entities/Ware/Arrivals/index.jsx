import React from 'react'
import { Card } from '../../../components/Card'

export const Arrivals = ({ cards }) => {

  return (
    <div className='arrivals__gallery'>
      {cards.map(card =>{ 
        return <Card key={cards.indexOf(card)} {...card} />}
      )}
    </div>
  )
}
