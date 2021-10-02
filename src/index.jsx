import { render } from 'react-dom'
import { List } from './entities/Ware/List'
import { Section } from './entities/Section'
import { Categories } from './entities/Ware/Categories';
import { Arrivals } from './entities/Ware/Arrivals'

export const App = () => {

  const products = [
    {
      image: 'https://cdn.shopify.com/s/files/1/2611/1744/products/Leach_Pottery_Standard_ware_Tea_Bowl_Ash.jpg?v=1616769627',
      headline: {
        children: "EISAI'S  SENCHA TEA",
        level: 4,
      },
      paragraph: {
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
    },
    {
      image: 'https://cdn.shopify.com/s/files/1/2611/1744/products/Leach_Pottery_Standard_ware_Tea_Bowl_Ash.jpg?v=1616769627',
      headline: {
        children: "EISAI'S  SENCHA TEA",
        level: 4,
      },
      paragraph: {
        children: "4 Oz"
      },
      addition: {
        type: "complement",
        children: " $20.00"
      },
      extra: {
        type: 'popular',
      }
    },
    {
      image: 'https://cdn.shopify.com/s/files/1/2611/1744/products/Leach_Pottery_Standard_ware_Tea_Bowl_Ash.jpg?v=1616769627',
      headline: {
        children: "EISAI'S  SENCHA TEA",
        level: 4,
      },
      paragraph: {
        children: "4 Oz"
      },
      addition: {
        type: "complement",
        children: " $20.00"
      },
      extra: {
        type: 'new',
      }
    },
    {
      image: 'https://cdn.shopify.com/s/files/1/2611/1744/products/Leach_Pottery_Standard_ware_Tea_Bowl_Ash.jpg?v=1616769627',
      headline: {
        children: "EISAI'S  SENCHA TEA",
        level: 4,
      },
      paragraph: {
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
    },
    {
      image: 'https://cdn.shopify.com/s/files/1/2611/1744/products/Leach_Pottery_Standard_ware_Tea_Bowl_Ash.jpg?v=1616769627',
      headline: {
        children: "EISAI'S  SENCHA TEA",
        level: 4,
      },
      paragraph: {
        children: "4 Oz"
      },
      addition: {
        type: "complement",
        children: " $20.00"
      },
      extra: {
        type: 'popular',
      }
    },
    {
      image: 'https://cdn.shopify.com/s/files/1/2611/1744/products/Leach_Pottery_Standard_ware_Tea_Bowl_Ash.jpg?v=1616769627',
      headline: {
        children: "EISAI'S  SENCHA TEA",
        level: 4,
      },
      paragraph: {
        children: "4 Oz"
      },
      addition: {
        type: "complement",
        children: " $20.00"
      },
      extra: {
        type: 'new',
      }
    },
    {
      image: 'https://cdn.shopify.com/s/files/1/2611/1744/products/Leach_Pottery_Standard_ware_Tea_Bowl_Ash.jpg?v=1616769627',
      headline: {
        children: "EISAI'S  SENCHA TEA",
        level: 4,
      },
      paragraph: {
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
    },
    {
      image: 'https://cdn.shopify.com/s/files/1/2611/1744/products/Leach_Pottery_Standard_ware_Tea_Bowl_Ash.jpg?v=1616769627',
      headline: {
        children: "EISAI'S  SENCHA TEA",
        level: 4,
      },
      paragraph: {
        children: "4 Oz"
      },
      addition: {
        type: "complement",
        children: " $20.00"
      },
      extra: {
        type: 'popular',
      }
    },
  ]

  const bestsellers = {
    headline: {
      children: 'OUR BEST SELLERS'
    },
    paragraph: {
      children: 'Select a category or go to the section with a convinient filter by product'
    }
  }

  const arrivals = {
    headline: {
      children: "NEW ARRIVALS",
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
        background: "pink",
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
        background: "white",
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

  return (
    <main>
      <Section headline={arrivals.headline}>
        <Arrivals cards={arrivals.cards} />
      </Section>

      <Section {...bestsellers}>
        <Categories />
        <List products={products} />
      </Section>
    </main>
  )
}

render(<App />, document.querySelector('#root'))