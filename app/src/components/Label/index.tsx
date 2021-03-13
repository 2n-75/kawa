import styled, { css } from 'styled-components'

export const LabelCss = css<{
  /**
   * 背景色
   */
  color?: string
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 2rem;
  padding: 5px 20px;
  border-radius: 20px;
  color: #fff;
  ${({ color }) =>
    color && css`
    background: ${color};
  `}
`

export const Label = styled.div`
  ${LabelCss};
`
