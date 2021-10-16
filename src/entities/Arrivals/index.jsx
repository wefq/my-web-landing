import {Section} from '../../components/Section'
import {Gallery} from './Gallery'

const arrivals = {
  head: {
    headline: {
      children: "NEW ARRIVALS",
    },
    className: 'arrivals'
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
    {
      background: "pink",
      itemsPosition: "left-side",

      addition: {
        type: "complement",
        children: "03 - Teaware"
      },

      headline: {
        level: 3,
        children: "CLASSIC COLLECTION"
      },

      button: {
        type: "hot",
        children: "BUY NOW",
        onClick: (event) => console.log(event)
      }
    },
  ]
}

export const Arrivals = () => {
  return (
    <Section {...arrivals.head}>
      <Gallery cards={arrivals.cards} />
    </Section>
  )
}
