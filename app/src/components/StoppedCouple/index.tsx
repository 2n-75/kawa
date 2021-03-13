import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { IProps } from './types'
import coupleImg from '../../assets/couple.png'

const StoppedCouple: FC<IProps> = ({ xOffset }) => {
  return (
    <Stoped src={coupleImg} xOffset={xOffset}/>
  )
}

const Stoped = styled.img<{
  /**
   * x座標
   */
  xOffset?: number
}>`
  position: absolute;
  ${({ xOffset }) =>
    xOffset && css`
    left: ${xOffset || 0}px;
  `}
  width: 100px;
  height: 100px;
  bottom: 44vh;
  display: inline-block;
  @media (max-width: 768px) {
    bottom: 40vh;
  }
`

export default StoppedCouple;
