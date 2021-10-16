import React from 'react'
import { Section } from '../../components/Section'
import { Card } from '../../components/Card'

const sales = {
  head: {
    headline: {
      children: "DISCOUNTS & SALES",
    },
    paragraph: {
      children: "Follow our promotions and discounts. Here you can buy your favourite tea and other products of the best prices."
    },
    className: 'sales'
  },
  cards: [
    {
      background: "white",
      itemsPosition: "left-side",
      size: 'big',

      addition: {
        type: "complement",
        children: "01 - Leaf Tea"
      },

      headline: {
        level: 3,
        children: "NATURAL WELLNESS COLLECTION"
      },

      button: {
        type: "hot",
        children: "BUY NOW",
        onClick: (event) => console.log(event)
      }
    },
    {
      background: "yellow",
      itemsPosition: "right-side",

      addition: {
        type: "complement",
        children: "02 - Tea sets"
      },

      headline: {
        level: 3,
        children: "HERBAL TEAS"
      },

      button: {
        type: "hot",
        children: "BUY NOW",
        onClick: (event) => console.log(event)
      }
    },
    {
      background: "white",
      itemsPosition: "left-side",
      size: 'big',

      addition: {
        type: "complement",
        children: "03 - Tea sets"
      },

      headline: {
        level: 3,
        children: "7:00 AM TEAM"
      },

      button: {
        type: "hot",
        children: "BUY NOW",
        onClick: (event) => console.log(event)
      }
    },
  ]
}

export const Sales = () => {
  return (
    <Section {...sales.head}>
      {sales.cards.map((card, index) => <Card key={index} {...card} />)}
    </Section>
  )
}
