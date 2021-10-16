import React from 'react'
import { Link } from '../../../components/Typography/Link'
import { Paragraph } from '../../../components/Typography/Paragraph'
import {Headline} from '../../../components/Typography/Headline'

export const Contacts = () => {
  return (
    <div className='contacts'>
      <Headline level={3} children='CONTACTS'/>

      <ul>

        <li>
          <Link href='mailto:hello@tealeaf.com' children='hello@tealeaf.com' />
        </li>

        <li>
          <Link href='tel:88005553535' children='hello@tealeaf.com' />
        </li>

        <li>
          <Paragraph children='Every day: 9:00 AM - 9.00 PM' />
        </li>

      </ul>
    </div>
  )
}
