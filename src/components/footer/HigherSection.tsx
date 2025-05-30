import React from 'react'
import Logo from '../landing-page/landing-header/Logo'
import FooterLinks from './FooterLinks'

const HigherSection = () => {
  return (
    <div className="flex flex-row justify-between items-center w-full">
        <Logo title={true} />
        <FooterLinks />
      </div>
  )
}

export default HigherSection