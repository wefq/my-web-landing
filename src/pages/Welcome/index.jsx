import { Section } from '../../components/Section'
import { Headline } from "../../components/Typography/Headline"
import { Button } from "../../components/Button"

export const Welcome = () => {
  return (
    <Section background='beige'>
      <Headline level={1} children={'Undefined Application'} />
      <Button type={'hot'} children={'Go!'} />
    </Section>
  )
}
