import { Button } from '../../../components/Button'

export const Categories = () => {

  const btnClicked = (event) => {
    document.querySelector('.categories__button_active').classList.remove('categories__button_active')

    event.target.classList.add('categories__button_active')
  }

  const buttons = [
    {
      type: 'hot',
      children: 'All products',
      className: 'categories__button_active',
      onClick: btnClicked
    },
    {
      type: 'hot',
      children: 'Leaf tea',
      onClick: btnClicked
    },
    {
      type: 'hot',
      children: 'Tea sets',
      onClick:btnClicked
    },
    {
      type: 'hot',
      children: 'Teaware',
      onClick: btnClicked
    },
    {
      type: 'hot',
      children: 'Sweets',
      onClick: btnClicked
    },
    {
      type: 'hot',
      children: 'Gifts',
      onClick: btnClicked
    },
  ]

  return (
    <ul className='categories'>

      {buttons.map(button =>
        <li key={buttons.indexOf(button)}>
          <Button {...button} className={`categories__button ${button.className}`} />
        </li>
      )}

    </ul>

  )
}
