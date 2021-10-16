import { Card } from '../Card'

export const List = ({ products }) =>
  <div className='product__list'>
    {products.map((product, index) => <Card key={index} {...product} />)}
  </div>

