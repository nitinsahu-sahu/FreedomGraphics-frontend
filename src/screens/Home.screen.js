import React, { useEffect } from 'react'
import { HomeIndexComponent } from '../components'
import Layoutscreen from './Layout.screen'

function Homescreen() {
  // useEffect(() => {
  //   document.title = 'My Page Title';
  // }, []);
  return (
    <Layoutscreen>
      <HomeIndexComponent />
    </Layoutscreen>
  )
}

export default Homescreen
