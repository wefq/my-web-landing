import { Card } from '../Card'

export const List = ({ products }) => {
  return (
    <div className='product__list'>
      {products.map(product => {
        return <Card key={products.indexOf(product)} {...product} />
      })}
    </div>
  )
}
