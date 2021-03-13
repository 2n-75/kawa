import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { color, font } from '../../config/const'
import { IProps } from './types'

const ResultBanner: FC<IProps> = ({ error }) => {
  return (
    error ? (
      <ErrorBanner><Text>NOT 均等</Text></ErrorBanner>
    ) : (
      <SuccessBanner><Text>均等</Text></SuccessBanner>)
  )
}

const StyledBanner = css`
  position: absolute;
  top: 30%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  padding: 10px 20px;
  border-radius: 10px;
  z-index: 2;
`

const SuccessBanner = styled.div`
  ${StyledBanner};
  background: ${color.mint};
`

const ErrorBanner = styled.div`
  ${StyledBanner};
  background: ${color.red};
`

const Text = styled.span`
  font-size: 3em;
  font-weight: ${font.bold};
  color: #fff;
`

export default ResultBanner;
