import { Button } from '../../../components/Button'
import { useState } from 'react'

const buttons = [
  {
    type: 'hot',
    children: 'All products',
    className: 'categories__button_active',
  },
  {
    type: 'hot',
    children: 'Leaf tea',
  },
  {
    type: 'hot',
    children: 'Tea sets',
  },
  {
    type: 'hot',
    children: 'Teaware',
  },
  {
    type: 'hot',
    children: 'Sweets',
  },
  {
    type: 'hot',
    children: 'Gifts',
  },
]

export const Categories = () => {

  // const btnClicked = (event) => {
  //   document.querySelector('.categories__button_active').classList.remove('categories__button_active')

  //   event.target.classList.add('categories__button_active')
  // }

  const [active, setActive] = useState(0)

  const handleActive = (index) => event => {
    event.preventDefault()
    setActive(index)
  }

  // .map(props => props.onClick = btnClicked)

  return (
    <ul className='categories'>

      {buttons.map((button, index) =>
        <li key={index}>
          <Button {...button}
            onClick={handleActive(index)}
            className={`categories__button ${index === active ? 'categories__button_active' : ''}`} />
        </li>
      )}

    </ul>

  )
}
