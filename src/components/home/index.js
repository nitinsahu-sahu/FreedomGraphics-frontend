import React from 'react'
import HeroComponents from '../global-components/Global.componets'
import Trusted from './Trusted'
import Service from './Service'
import TopRatedProducts from './TopRatedProducts'

function HomeIndexComponent() {
  
  return (
    <>
      <HeroComponents
        title="Freedom Graphics Shop"
      />
      <TopRatedProducts />
      <Service />
      <Trusted />
    </>
  )
}

export default HomeIndexComponent
