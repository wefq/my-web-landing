import { Headline } from '../../components/Typography/Headline'
import { Paragraph } from '../../components/Typography/Paragraph'
export const Section = ( props) => {
  return (
    <section className='section'>

      <Headline {...props.headline} level={2} />

      {props.paragraph && <Paragraph {...props.paragraph} />}

      <div className='section___content'>{props.children}</div>
    </section>
  )
}
