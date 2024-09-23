import React from 'react'
import { default as slider1, default as slider2 } from '../../assets/images/926965eb-b84d-45d1-b7d4-b0bf6f583f96_VN-1976-688.jpg_2200x2200q80.jpg'
import slider3 from '../../assets/images/a15f19a5-98c0-4eeb-8eb1-2be436096910_VN-1976-688.jpg_2200x2200q80.jpg'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WraperTypeProduct } from './style'

const HomePage = () => {
  const arr = ['TV', 'Tu Lanh', 'Laptop']
  return (
    <>
      <div style={{ padding: '0 120px' }}>
        <WraperTypeProduct>
          {arr.map((item) => {
            return (
              <TypeProduct name={item} key={item} />
            )
          })}
        </WraperTypeProduct>
      </div>
      <div id='container' style={{ backgroundColor: '#efefef', padding: '0 120px' }}>
        <SliderComponent arrImages={[slider1, slider2, slider3]} />
      </div>
      HomePage

    </>
  )
}

export default HomePage
