import { Addition } from '../Typography/Addition'
import { Headline } from '../Typography/Headline'
import { Paragraph } from '../Typography/Paragraph'
import { Button } from '../Button'

export const Card = ({ background, itemsPosition, size, addition, headline, paragraph, button }) => {
  return (
    <div className={`card ${background} ${itemsPosition} ${size ? size : ''}`}>

      {addition?.children && <Addition {...addition} />}

      {headline?.children && <Headline {...headline} />}

      {paragraph?.children && <Paragraph {...paragraph} />}

      {button?.type && <Button {...button}  className={button.gap} />}

    </div>
  )
}
