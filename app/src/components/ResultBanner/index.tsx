import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { color, font } from '../../config/const'
import { IProps } from './types'

const ResultBanner: FC<IProps> = ({ isSuccess }) => {
  return (
    isSuccess? (
      <SuccessBanner><Text>均等</Text></SuccessBanner>
    ) : (
      <ErrorBanner><Text>NOT 均等</Text></ErrorBanner>)
  )
}

const StyledBanner = css`
  position: absolute;
  top: 30%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  border-radius: 10px;
  width: 60vw;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  min-width: 300px;
  font-family: 'Yusei Magic', sans-serif;
  letter-spacing: 0.1em;
  text-align: center;
  @media (max-width: 768px) {
    width: 90vw;
    height: 25vh;
  }
`

const SuccessBanner = styled.div`
  ${StyledBanner};
  background: ${color.blue};
`

const ErrorBanner = styled.div`
  ${StyledBanner};
  background: ${color.red};
`

const Text = styled.span`
  font-size: 4em;
  font-weight: ${font.bold};
  color: #fff;
`

export default ResultBanner;
