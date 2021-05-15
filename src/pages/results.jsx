import ThreeCanvas from '../components/layout/_canvas'
import { Menu } from '../components/Menu'
import React, { useState, useEffect } from 'react'
import { colors } from '@/components/color'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import * as Icon from 'react-feather';
import { Tip } from '../components/Tip'
import { CheckpointCard } from '../components/CheckpointCard'

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  z-index: 0;
  display: flex;
  justify-content: center;
`

const Score = styled.div`
  text-align: left;
  position: absolute;
  left: 5vw;
  bottom: 10vh;
  display: flex;
  height: 50px;
  border-radius: 10px 10px 0 0;
  align-items: center;
  justify-content: space-between;
  color: ${colors.blue};
  border: 1px solid ${colors.blue};
  background: white;
  font-size: 18px;
  font-weight: 700;
  font-family: Nunito;
  width: 90vw;
  height: 5vh;
  z-index: 0;
  padding: 0 5vw 0 5vw;
  transition: 0s ease;

  &:hover {
  }
`

const Space = styled.div`
  width: 10px;
`

const ResultsUI = styled.div`
  width: 90vw;
  min-height: 100px;
  position: absolute;
  top: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: Nunito;
  font-size: 14px;
  animation: 5s ease blink-1 infinite;
`

const Progress = styled.div`
  width: 90vw;
  position: absolute;
  bottom: 5vh;
  display: flex;
  align-items: center;
  justify-content: left;
  background: white;
  border: 1px solid white;
  font-family: Nunito;
  border-radius: 0 0 10px 10px;
  overflow: hidden;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const ProgressBlue = styled.div`
  width: 10vw;
  min-height: 5vh;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.blue};
  transition: 1s ease;
  font-family: Nunito;
`

const ScoreInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.1s ease;
  font-family: Nunito;
`

const TipsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 2fr 2fr 2fr 2fr;
  grid-template-columns: 2fr 2fr 2fr;
  margin: 1vh 0 0 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: 0.1s ease;
  font-family: Nunito;
`

const TipUI = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.1s ease;
  font-family: Nunito;
  z-index: 1000;
  
`

const TipImage = styled.img`
  width: 10vh;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 1vh;
  filter: grayscale(100%)
`

const FactUI = styled.div`
width: 50%;
text-align: center;
`

const Results = () => {
  const showScoreCard = () => {
    setScoreCardExpand(!scoreCardExpand)
  }

  const [count, setCount] = useState(null)

  const [scoreCardExpand, setScoreCardExpand] = useState(false)

  const [progress, setProgress] = useState([false, false, false, false, false, false, false, false, false, false, false, false])

  const [progressBar, setProgressBar] = useState([0, 0])

  const [showFact, setShowFact] = useState(false)

  const [fact, setFact] = useState("beans")

  useEffect(() => {
    //get score
    let score = JSON.parse(localStorage.getItem('score'))

    let completed = () => {
      if (process.browser) {
        if (localStorage.getItem('completed') === null) {
          return [false, false, false, false, false, false, false, false, false, false, false, false]
        } else {
          return JSON.parse(localStorage.getItem('completed'))
        }
      }
    }

    let p = completed()

    setProgress(p)
    //check if points are complete and add increment to score
    let count = p.filter(Boolean).length

    var number = Math.min(Math.max(parseInt(count), 0), 3);

    localStorage.setItem('count', count)

    setCount(count)

    setProgressBar([score, ((100 - score) / 3) * number])
  }, [])

  function clamp(num, min, max) {
    return num <= min ? min : num >= max ? max : num;
  }

  console.log('progress', progress)
  console.log('rendered', progressBar)

  const props = useSpring({
    config: { duration: 2000 },
    number: progressBar[0] + progressBar[1] /* + progressGreen */,
    from: { number: 0 },
  })

  const [hide, setHide] = useState(false)
  console.log('progress bar', progressBar)
  return (
    <Container style={{background: count == 12 ? 'linear-gradient(-45deg, #3884FF, #51B27E)' : colors.blue}}>
      <Menu
        hide={hide}
        setHide={setHide}
        logo='/logo-small.png'
        iconColor={'white'}
        three={true}
        backButton={false}
      />

      <ResultsUI>click the points to see your impact on the earth</ResultsUI>

      { count == 0 ? <CheckpointCard completeImage="/earth.png" completeMessage="Your Eco Score Could be Better.." completeFact="The recent increase in fast fashion has polluted our air and water. Complete the tasks to increase your score and bring the stars back!"/> : <></> }

      { count == 3 ? <CheckpointCard completeImage="/earth.png" completeMessage="You brought the stars back!" completeFact="Complete more tasks to unlock more tips or check out our other resources."/> : <></> }

      { count == 12 ? <CheckpointCard completeImage="/earth.png" completeMessage="You've completed all the tasks!" completeFact="Share this with your friends and check out our resources!"/> : <></> }

      <ThreeCanvas
        r3f
        hide={hide}
        setHide={setHide}
        progress={progress}
        setProgress={setProgress}
        progressBar = {progressBar}
      />

      <Score
        style={{
          display: 'flex',
          height: scoreCardExpand ? '70vh' : '5vh',
          alignItems: scoreCardExpand ? 'flex-start' : 'center',
          justifyContent: scoreCardExpand ? 'space-between' : 'center',
          padding: scoreCardExpand ? '2vh' : '0 2vh',
          flexDirection: 'column',
          border: '2px solid white'
        }}
        
      >
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            
          }}
        >
          <div
          onClick={showScoreCard}
            style={{
              display: 'flex',
              width: '100%',
              cursor: 'pointer',
              
            }}
          >
            Eco Score:
            <Space></Space>
            <animated.div>
              {props.number.to((val) => Math.floor(val))}
            </animated.div>
            <Space></Space>
          </div>
          {scoreCardExpand ? <Icon.ChevronDown style={{cursor: 'pointer'}} onClick={showScoreCard}/> : <Icon.ChevronUp style={{cursor: 'pointer'}} onClick={showScoreCard} />}
        </div>

        <ScoreInfo
          style={{
            display: scoreCardExpand ? 'flex' : 'none',
            justifyContent: 'flex-start',
            margin: '1vh 0 0 0',
            flexDirection: 'column',
          }}
        >
          <div
          onClick={() => setShowFact(!showFact)}
               style={{
                width: '90vw',
                height: '92%',
                background: colors.blue,
                color: 'white',
                position: 'absolute',
                zIndex: '10000',
                display: showFact ? 'flex' : 'none',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                border: '1px solid white'
              }}>

                <Icon.X 
                style={{
                  position: 'absolute',
                  top: '10px',
                  left: '10px',
                  
                }}
                onClick={() => setShowFact(!showFact)}/>
                <FactUI>

                  {fact}
                </FactUI>


          </div>
          <div
            style={{
              width: '90vw',
              background: colors.blue,
              color: 'white',
              padding: '1vw 5vw',
              position: 'relative',
              height: '6vh',
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              display: 'flex',
              alignItems: 'center' 
            }}
          >
            
            <p style={{
              position: 'absolute',
              animation: 'blink 6s ease infinite',
      
            }}>{count < 3 ? 'Your Eco Score Could be Better' : 'Your Eco Score is Complete!'}</p>
            <p style={{
              position: 'absolute',
              animation: 'blink 6s ease infinite',
              animationDelay: '3s',
              opacity: '0',
            }}>See your impacts to unlock tips</p>
            
          </div>

          <TipsContainer>

            <Tip position={0} progress={progress} image='/microfiber.png' setShowFact={setShowFact} showFact={showFact} setFact={setFact} tip="To reduce the microfibers you produce, buy natural textiles and try washing less with cool water."/>

            <Tip position={1} progress={progress} image='/bottle-empty.png' setShowFact={setShowFact} showFact={showFact} setFact={setFact} tip="To help lessen water usage try washing your clothes in bigger batches and less often."/>

            <Tip position={2} progress={progress} image='/factory.png' setShowFact={setShowFact} showFact={showFact} setFact={setFact} tip="Try purchasing clothing made from recycled materials to avoid adding to carbon emissions."/>
           
            <Tip position={3} progress={progress} image='/garbage.png' setShowFact={setShowFact} showFact={showFact} setFact={setFact} tip="To lessen the amount of textiles populating landfills try donating your clothes to thrift stores, where they can be reused and recycled instead."/>

            <Tip position={4} progress={progress} image='/tee.png' setShowFact={setShowFact} showFact={showFact} setFact={setFact} tip="If your clothing is ruined and no longer wearable, consider donating to your local textile recycling program."/>

            <Tip position={5} progress={progress} image='/oil-drum.png' setShowFact={setShowFact} showFact={showFact} setFact={setFact} tip="To help lessen water pollution try purchasing clothing from companies that use a carbon based dyeing process."/>
            
            <Tip position={6} progress={progress} image='/tree.png' setShowFact={setShowFact} showFact={showFact} setFact={setFact} tip="Try not to buy clothing made from rayon or viscose, as these fibers are almost completely constucted from wood pulp."/>

            <Tip position={7} progress={progress} image='/building.png' setShowFact={setShowFact} showFact={showFact} setFact={setFact} tip="Try to shop locally more often than not, as emissions from transportation contributes to the melting of our ice caps and the expansion of our oceans."/>

            <Tip position={8} progress={progress} image='/iceberg.png' setShowFact={setShowFact} showFact={showFact} setFact={setFact} tip="Try to compose a majority of your wardrobe from used clothing, as the fashion industry contributes more than 10% of global carbon emissions annually."/>

            <Tip position={9} progress={progress} image='/grey-cloud.png' setShowFact={setShowFact} showFact={showFact} setFact={setFact} tip="Try bringing unwanted clothing to thrift stores or textile recycling shops as 95% of textiles can be recycled."/>
           
            <Tip position={10} progress={progress} image='/water-drop.png' setShowFact={setShowFact} showFact={showFact} setFact={setFact} tip="Avoid purchasing clothing made of cotton as cotton requires more water to dye than other textiles."/>

            <Tip position={11} progress={progress} image='/sheep.png' setShowFact={setShowFact} showFact={showFact} setFact={setFact} tip="Hemp is a natural, biodegradable material which doesn't require pesticides to grow and is a great alternative to wool."/>

          </TipsContainer>
        </ScoreInfo>
      </Score>

      <Progress>
        <div
          style={{
            width: progressBar[0] + 'vw',
            minHeight: '5vh',
            bottom: '0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: colors.blue,
            transition: '2s ease',
          }}
        />

        <div
          style={{
            width: progressBar[1] - 10 + 'vw',
            minHeight: '5vh',
            bottom: '0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: colors.green,
            transition: '2s ease',
          }}
        />
      </Progress>
    </Container>
  )
}

export default Results
