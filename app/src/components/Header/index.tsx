import React, { FC, useState, useEffect } from 'react'
import styled from 'styled-components'
import { color } from '../../config/const'
import { LabelCss } from '../Label'
import { IProps } from './types'

const Header: FC<IProps> = ({ index, score, handleReset }) => {
  return (
    <StyledHeader>
      <HeaderContent />
      <HeaderContent>
        {index < 5 ?
          <p>{index + 1}組目</p> :
          <p>平均値：{score}</p>
        }
      </HeaderContent>
      <HeaderContent>
        <Button color={color.green} onClick={handleReset}>やりなおす</Button>
      </HeaderContent>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  height: 10vh;
  margin: 1vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

const HeaderContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Button = styled.button`
  ${LabelCss};
  &hover{
    cursor: pointer;
  }
`

export default Header;
