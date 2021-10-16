import React from 'react'
import {Link} from '../../../components/Typography/Link'

const links =
  [{ children: 'Shop', href: 'shop' },
  { children: 'Delivery', href: 'Delivery' },
  { children: 'FAQ', href: 'FAQ' },
  { children: 'Sales', href: 'Sales' },
  { children: 'Contacts', href: 'Contacts' }]

export const Navigation = () =>
  <nav className='nav'>
    {links.map((link, index) =>
      <Link key={index} {...link} />)}
  </nav>
