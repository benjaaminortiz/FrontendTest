import React from 'react'
import Item from './Item'
import './Subsection.css'
import OnBa from '../files/OnBa.png'
import Neural from '../files/neural.png'
import Phone from '../files/VectorPhone.png'
import Onboarding from '../files/VectorOnboarding.png'

const Subsection = () => {

 const data = [
  {
    logo: OnBa,
    title: 'Online Banking',
    description: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
  }, {
    logo: Phone,
    title: 'Simple Budgeting',
    description: 'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.'
  }, {
    logo: Onboarding,
    title: 'Fast Onboarding',
    description: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.'
  }, {
    logo: Neural,
    title: 'Open API',
    description: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.'
  },
  
 ]



  return (
    <div className='sub'>
        <div className='main-title'>
        <h1>Why choose Easybank?</h1>
        <p>We leverage Open Banking to turn your bank acount into your financial hub. <br/> Control your finances like never before.</p>
        </div>
        <div className='items'>
        {data.map((card) =>{
          const {logo, title, description} = card
          return <Item logo={logo} title={title} description={description} />
        })}
        </div>
    </div>
  )
}

export default Subsection