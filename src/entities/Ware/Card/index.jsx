import { Addition } from '../../../components/Typography/Addition'
import { Headline } from '../../../components/Typography/Headline'
import { Paragraph } from "../../../components/Typography/Paragraph"
import { Extra } from './Extra'

export const Card = ({ image, headline, paragraph, addition, extra }) => {

  return (
    <div className='product-card' >

      {extra && <Extra {...extra} type={extra.type} />}

      <img src={image} alt='image' />

      <div className='product-card_footer'>

        <div className='product-card__footer_text'>

          <Headline {...headline} />

          <Paragraph {...paragraph} />

          <Addition {...addition} />

        </div>

        <button className='product-card_button'>
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5 4H19C19.5523 4 20 4.44771 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5C4 4.44772 4.44771 4 5 4ZM2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5ZM12 12C9.23858 12 7 9.31371 7 6H9C9 8.56606 10.6691 10 12 10C13.3309 10 15 8.56606 15 6H17C17 9.31371 14.7614 12 12 12Z"
              fill="white"
            />
          </svg>
        </button>

      </div>

    </div>
  )
}
