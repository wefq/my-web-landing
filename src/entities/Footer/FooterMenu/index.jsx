import React from 'react'
import { Link } from '../../../components/Typography/Link'
import { Headline } from '../../../components/Typography/Headline'

const links =
  [{ children: 'Shop', href: 'shop' },
  { children: 'Delivery', href: 'Delivery' },
  { children: 'FAQ', href: 'FAQ' },
  { children: 'Sales', href: 'Sales' },
  { children: 'Contacts', href: 'Contacts' },
  { children: 'Shop', href: 'shop' },
  { children: 'Delivery', href: 'Delivery' },
  { children: 'FAQ', href: 'FAQ' },
  { children: 'Sales', href: 'Sales' },
  { children: 'Contacts', href: 'Contacts' }
  ]

export const FooterMenu = () => {
  return (
    <div>
      <Headline level={3} children='MANU' />

      <nav className='footer__menu'>

        <ul>

          {links.map((link, index) =>
            <li key={index}>
              <Link {...link} />
            </li>)}

        </ul>

      </nav>
    </div>)
}
