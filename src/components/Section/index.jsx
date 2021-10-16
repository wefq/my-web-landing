import { Headline } from '../Typography/Headline'
import { Paragraph } from '../Typography/Paragraph'

export const Section = (props) => {
  return (
    <section className={`section ${props.className ? props.className : ''}`}>
      <div className='section__header'>
        <Headline {...props.headline} level={2} />
        {props.paragraph && <Paragraph {...props.paragraph} />}
      </div>

      {props.children}
    </section>
  )
}
