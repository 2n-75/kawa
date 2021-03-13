import React, { FC } from 'react'
import styled from 'styled-components'
import { color } from '../../config/const'
import { LabelCss } from '../Label'
import { IProps } from './types'

const Header: FC<IProps> = ({ index, score, handleReset }) => {
  return (
    <StyledHeader>
      <HeaderContent>
        {index < 5 ?
          <p>{index + 1}組目</p> :
          <p>ちょうどいい間隔との誤差：{score}</p>
        }
      </HeaderContent>
      <HeaderContent>
        <Button color={color.green} onClick={handleReset}>やりなおす</Button>
      </HeaderContent>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  height: 5vh;
  padding: 1vw 0;
  margin-bottom: 5px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  @media (max-width: 768px) {
    height: 10vh;
  }
  box-shadow: 0 2px 6px rgba(192,164,140,0.3);
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
