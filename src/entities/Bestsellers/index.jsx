import React from 'react'
import {Section} from '../../components/Section'
import { Categories } from './Categories'
import { List } from './List'
import {range} from '../../utils'

const bestsellers = {
  head: {
    headline: {
      children: 'OUR BEST SELLERS'
    },

    paragraph: {
      children: 'Select a category or go to the section with a convinient filter by product'
    },
    className: 'bestsellers'
  },

  products: range(8).map(() => (
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
    }
  ))
  // products: [
  //   {
  //     image: 'https://cdn.shopify.com/s/files/1/2611/1744/products/Leach_Pottery_Standard_ware_Tea_Bowl_Ash.jpg?v=1616769627',
  //     headline: {
  //       children: "EISAI'S  SENCHA TEA",
  //       level: 4,
  //     },
  //     paragraph: {
  //       children: "4 Oz"
  //     },
  //     addition: {
  //       type: "complement",
  //       children: " $20.00"
  //     },
  //     extra: {
  //       type: 'sale',
  //       children: '-20%'
  //     }
  //   },
  //   {
  //     image: 'https://cdn.shopify.com/s/files/1/2611/1744/products/Leach_Pottery_Standard_ware_Tea_Bowl_Ash.jpg?v=1616769627',
  //     headline: {
  //       children: "EISAI'S  SENCHA TEA",
  //       level: 4,
  //     },
  //     paragraph: {
  //       children: "4 Oz"
  //     },
  //     addition: {
  //       type: "complement",
  //       children: " $20.00"
  //     },
  //     extra: {
  //       type: 'popular',
  //     }
  //   },
  //   {
  //     image: 'https://cdn.shopify.com/s/files/1/2611/1744/products/Leach_Pottery_Standard_ware_Tea_Bowl_Ash.jpg?v=1616769627',
  //     headline: {
  //       children: "EISAI'S  SENCHA TEA",
  //       level: 4,
  //     },
  //     paragraph: {
  //       children: "4 Oz"
  //     },
  //     addition: {
  //       type: "complement",
  //       children: " $20.00"
  //     },
  //     extra: {
  //       type: 'new',
  //     }
  //   },
  //   {
  //     image: 'https://cdn.shopify.com/s/files/1/2611/1744/products/Leach_Pottery_Standard_ware_Tea_Bowl_Ash.jpg?v=1616769627',
  //     headline: {
  //       children: "EISAI'S  SENCHA TEA",
  //       level: 4,
  //     },
  //     paragraph: {
  //       children: "4 Oz"
  //     },
  //     addition: {
  //       type: "complement",
  //       children: " $20.00"
  //     },
  //     extra: {
  //       type: 'sale',
  //       children: '-20%'
  //     }
  //   },
  //   {
  //     image: 'https://cdn.shopify.com/s/files/1/2611/1744/products/Leach_Pottery_Standard_ware_Tea_Bowl_Ash.jpg?v=1616769627',
  //     headline: {
  //       children: "EISAI'S  SENCHA TEA",
  //       level: 4,
  //     },
  //     paragraph: {
  //       children: "4 Oz"
  //     },
  //     addition: {
  //       type: "complement",
  //       children: " $20.00"
  //     },
  //     extra: {
  //       type: 'popular',
  //     }
  //   },
  //   {
  //     image: 'https://cdn.shopify.com/s/files/1/2611/1744/products/Leach_Pottery_Standard_ware_Tea_Bowl_Ash.jpg?v=1616769627',
  //     headline: {
  //       children: "EISAI'S  SENCHA TEA",
  //       level: 4,
  //     },
  //     paragraph: {
  //       children: "4 Oz"
  //     },
  //     addition: {
  //       type: "complement",
  //       children: " $20.00"
  //     },
  //     extra: {
  //       type: 'new',
  //     }
  //   },
  //   {
  //     image: 'https://cdn.shopify.com/s/files/1/2611/1744/products/Leach_Pottery_Standard_ware_Tea_Bowl_Ash.jpg?v=1616769627',
  //     headline: {
  //       children: "EISAI'S  SENCHA TEA",
  //       level: 4,
  //     },
  //     paragraph: {
  //       children: "4 Oz"
  //     },
  //     addition: {
  //       type: "complement",
  //       children: " $20.00"
  //     },
  //     extra: {
  //       type: 'sale',
  //       children: '-20%'
  //     }
  //   },
  //   {
  //     image: 'https://cdn.shopify.com/s/files/1/2611/1744/products/Leach_Pottery_Standard_ware_Tea_Bowl_Ash.jpg?v=1616769627',
  //     headline: {
  //       children: "EISAI'S  SENCHA TEA",
  //       level: 4,
  //     },
  //     paragraph: {
  //       children: "4 Oz"
  //     },
  //     addition: {
  //       type: "complement",
  //       children: " $20.00"
  //     },
  //     extra: {
  //       type: 'popular',
  //     }
  //   },
  // ]
}

export const Bestsellers = () => {
  return (
    <Section {...bestsellers.head}>
      <Categories />
      <List products={bestsellers.products} />
    </Section>
  )
}
