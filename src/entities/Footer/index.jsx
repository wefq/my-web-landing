import React from 'react'
import { FooterMenu } from './FooterMenu'
import { Contacts } from './Contacts'
import { Social } from './Social'

export const Footer = () => {
  return (
    <footer className='Footer'>
      <FooterMenu />

      <Contacts />

      <Social />
    </footer>
  )
}
