import { render } from 'react-dom'
import { Card } from './entities/Ware/Card';

export const App = () => {
  const options = {
    background: "green",
    itemsPosition: "left-side",

    addition: {
      type: "complement",
      children: "03 - Tea sets"
    },

    headline: {
      level: 2,
      children: "7:00 AM TEAM"
    },

    // paragraph: {
    //   children: "paragraph"
    // },

    button: {
      type: "hot",
      gap: "button-gap",
      children: "BUY NOW",
      onClick: (event) => console.log(event)
    }
  };

  const prodCard = {
    image: 'https://cdn.shopify.com/s/files/1/2611/1744/products/Leach_Pottery_Standard_ware_Tea_Bowl_Ash.jpg?v=1616769627',
    paragraphFirst: {
      children: "EISAI'S  SENCHA TEA"
    },
    paragraphSecond: {
      children: "4 Oz"
    },
    addition: {
      type: "complement",
      children: " $20.00"
    },
    extra: {
      type: 'sale',
      children: '-20%'
    }
  }

  return (
    <main>
      <Card {...prodCard} />
      <Card {...prodCard} />
      <Card {...prodCard} />
    </main>
  )
}

render(<App />, document.querySelector('#root'))