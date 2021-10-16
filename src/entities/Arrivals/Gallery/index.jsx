import React from 'react'
import { Card } from '../../../components/Card'

export const Gallery = ({ cards }) => {
  return (
    <div className='arrivals__gallery'>
      {cards.map((card, index) => {
        return <Card key={index} {...card} />
      })}
    </div>
  )
}
