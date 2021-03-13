import React, { FC } from 'react'
import styled, { keyframes } from 'styled-components'
import { IProps } from './types'
import coupleImg from '../../assets/couple.png'

const MovingCouple: FC<IProps> = ({ onClick }) => {
  return (
    <Moving src={coupleImg} onClick={onClick} />
  )
}
// Create the keyframes
const move = keyframes`
  0% {margin-left: -50px; transform: scaleX(1);}
  49%  {transform: scaleX(1);}
  50% {margin-left: 98%; transform: scaleX(-1);}
  99%  {transform: scaleX(-1);}
  100% {margin-left: -50px; transform: scaleX(1);}
`

// Here we create a component that will rotate everything we pass in over two seconds
const Moving = styled.img`
  position: absolute;
  bottom: 45vh;
  display: inline-block;
  width: 100px;
  height: 100px;
  animation: ${move} 15s linear infinite;
  z-index: 1;
  cursor: pointer;
  @media (max-width: 768px) {
    bottom: 42vh;
  }
`

export default MovingCouple;
