import React, { FC, useState } from 'react'
//import '../assets/style/components/snsList.scss'
import styled, { keyframes, css } from 'styled-components'

const Couple: FC = () => {
  const [xOffset, setXOffset] = useState(0)
  const [isMoving, setIsMoving] = useState(true)
  const handleClick = (event: React.MouseEvent) => {
    const element = event.currentTarget
    setXOffset(element.getBoundingClientRect().x)
    setIsMoving(false)
  }
  return (
    <div>
      {isMoving ? <Moving onClick={handleClick}>押して止める</Moving> : <Stoped>ああああ</Stoped>}
    </div>
  )
}
// Create the keyframes
const move = keyframes`
  from { margin-left: -20%; } to { margin-left: 100%; }
`

// Here we create a component that will rotate everything we pass in over two seconds
const Moving = styled.div`
  display: inline-block;
  padding: 2rem 1rem;
  font-size: 1.2rem;
  animation: ${move} 10s linear infinite;
`

const Stoped = styled.div`
  display: inline-block;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`

export default Couple;
