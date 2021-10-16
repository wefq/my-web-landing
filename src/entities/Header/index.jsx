import React from 'react'
import { Link } from '../../components/Typography/Link'
import { HeaderMenu } from './HeaderMenu'
import { Navigation } from './Navigation'

export const Header = () => {
  return (
    <header className='Header'>
      <div className="header__burger">
        <span></span>
      </div>

      <Navigation />

      <a href="logo" className="header__logo"><div></div></a>

      <Link href='tel:+71337228322' children='+71337228322' />

      <HeaderMenu />
    </header>
  )
}
