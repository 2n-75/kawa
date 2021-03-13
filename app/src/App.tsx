import React, { FC, useState, useEffect } from 'react'
import styled from 'styled-components'
import { color } from './config/const'
import './assets/main.scss'
import Header from './components/Header'
import StoppedCouple from './components/StoppedCouple'
import MovingCouple from './components/MovingCouple'
import { Label } from './components/Label'
import backgroundImg from './assets/bg.jpeg'
import { average } from './util'

const App: FC = () => {
  const [coupleIndex, setCoupleIndex] = useState(0)
  const [coupleXOffsets, setCoupleXOffsets] = useState([0, 0, 0, 0, 0])
  const [score, setScore] = useState(0)

  /**
   * カップルをクリックした時
   */
  const handleClick = (event: React.MouseEvent) => {
    const element = event.currentTarget
    coupleXOffsets[coupleIndex] = element.getBoundingClientRect().x
    setCoupleXOffsets(coupleXOffsets)
    setCoupleIndex(coupleIndex + 1)
    if ((coupleIndex + 1) > 4) {
      setScore(average(coupleXOffsets))
    }
  }

  /**
   * リセットボタンを押した時
   */
  const handleReset = () => {
    setCoupleIndex(0)
    setCoupleXOffsets([0, 0, 0, 0, 0])
    setScore(0)
  }

  return (
    <AppWrapper>
      <Header index={coupleIndex} score={score} handleReset={handleReset} />
      <Wrapper>
        <BackgroundImg src={backgroundImg} />
        <CoupleContainer>
          {coupleXOffsets.map((xOffset, index) => (
            <div>
              {index <= coupleIndex && (
                index === coupleIndex ?
                  <MovingCouple onClick={handleClick} /> :
                  <StoppedCouple xOffset={xOffset} />
              )}
            </div>
          ))}
        </CoupleContainer>
      </Wrapper>
    </AppWrapper>
  )
}

const AppWrapper = styled.div`
`

const BackgroundImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  position: fixed;
`

const CoupleContainer = styled.div`
  position: relative;
  width: 100%;
`
export default App;
