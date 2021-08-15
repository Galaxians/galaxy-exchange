import React, { useContext, useMemo, useState } from 'react'
import styled from 'styled-components'
import { Card, Button, ChevronDownIcon, SearchIcon, Text, ChevronLeftIcon, ChevronRightIcon } from 'glx-uikit'
import Question from 'components/QuestionHelper'
import LaunchPadItem from 'components/LaunchPad/LaunchPadItem'
import LaunchPadDetail from 'components/LaunchPad/LaunchPadDetail'
import DeveloperPad from 'components/LaunchPad/DeveloperPad'

export const BuyerCard = styled(Card)`
  position: relative;
  z-index: 5;
  padding: 25px;
  padding-top: 18%;
  width: 300px;
  height: 320px;
  background: transparent linear-gradient(317deg, #440C8B 0%, #FF00FF 100%) 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 46px #FF00FF45;
  border: 1px solid #FF1FFF;
  border-radius: 5px;
  opacity: 1;
  text-align: center;
  margin: 10px;
  cursor: pointer;
  &:hover {
    background: transparent linear-gradient(317deg, #FF00FF 0%, #440C8B 100%) 0% 0% no-repeat padding-box;
  }
`

export const DeveloperCard = styled(Card)`
  position: relative;
  z-index: 5;
  padding: 25px;
  padding-top: 18%;
  width: 300px;
  height: 320px;
  background: transparent linear-gradient(137deg, #440C8B 0%, #0B001E 100%) 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 46px #FF00FF45;
  border: 1px solid #440C8B;
  border-radius: 5px;
  opacity: 1;
  text-align: center;
  margin: 10px;
  cursor: pointer;
  &:hover {
    background: transparent linear-gradient(319deg, #440C8B 0%, #0B001E 100%) 0% 0% no-repeat padding-box;
  }
`

export const GobackCard = styled(Card)`
  margin-top: 25px;
  width: 900px;
  height: 200px;
  background: #0B001E 0% 0% no-repeat padding-box;
  border: 1px solid #FF1FFF;
  border-radius: 11px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const LaunchPadBody = styled(Card)`
  width: 900px;
  background: transparent linear-gradient(309deg, #FF1FFF 0%, #440C8B 100%) 0% 0% no-repeat padding-box;
  border-radius: 8px;
  opacity: 1;
`

export const StateDiv = styled.div<{ active?: boolean }>`
  margin-right: 10px;
  display: flex;
  border-radius: 4px;
  background:  ${({ active }) => (active ? '#FF1FFF 0% 0% no-repeat padding-box' : null)};
  border: 1px solid #FF1FFF;
  width: 120px;
  padding: 5px 10px;
  justify-content: center;
  cursor: pointer;
`
export default function LaunchPad() {

  const [activeIndex, changeIndex] = useState(0);
  const [stateIndex, chagneState] = useState(0);
  const [openDetail, showOpenDetail] = useState(false);
  const GoBack = () => {
    if(openDetail === true) {
      showOpenDetail(false);
    }
    else {
      changeIndex(0);
    }
  }

  const changeDetail = () => {
    showOpenDetail(true);
  }

  return (
    <>
      {activeIndex === 0 ? <div style={{ display: "flex" }}>
        <BuyerCard onClick={() => changeIndex(1)}>
          <div style={{ fontSize: '32px', fontWeight: 500 }}>Buyers</div>
          <div>Are you looking to buy brand new tokens in Pre-sale ? Click here</div>
        </BuyerCard>
        <DeveloperCard onClick={() => changeIndex(2)}>
          <div style={{ fontSize: '32px', fontWeight: 500 }}>Developers</div>
          <div>Do you want launch your own Token? Click here</div>
        </DeveloperCard>
      </div> : null}
      {activeIndex === 1 ? <><GobackCard>
        <Card style={{ padding: '20px', cursor: 'pointer' }} onClick={() => GoBack()}><ChevronLeftIcon />Go back</Card>
        <div style={{ display: 'flex', padding: '20px' }}>
          <div style={{ marginRight: '20px' }}>
            <div style={{ fontSize: '12px', padding: '5px 0px' }}>Wallet</div>
            <div style={{ width: '200px', padding: '5px 10px', border: '1px solid #27262C', borderRadius: '4px' }}>0d6dbd...54Xd</div>
          </div>
          <div style={{ marginRight: '20px' }}>
            <div style={{ fontSize: '12px', padding: '5px 0px' }}>NetWork</div>
            <div style={{ width: '200px', padding: '5px 10px', border: '1px solid #27262C', borderRadius: '4px', display: 'flex', justifyContent: 'space-between' }}>
              <div>BSC Network</div> <ChevronDownIcon />
            </div>
          </div>
          <div style={{ marginRight: '20px' }}>
            <div style={{ fontSize: '12px', padding: '5px 0px' }}>BNB Balance</div>
            <div style={{ width: '200px', padding: '5px 10px', border: '1px solid #27262C', borderRadius: '4px' }}>10.5454 BNB</div>
          </div>
        </div>
        <div style={{ padding: '20px', display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <StateDiv active={stateIndex === 0} onClick={() => chagneState(0)}>
              <div style={{ background: 'red', borderRadius: '100%', width: '10px', height: '10px', marginRight: '10px' }} />
              <div style={{ fontSize: '12px' }}>UPCOMING</div>
            </StateDiv>
            <StateDiv active={stateIndex === 1} onClick={() => chagneState(1)}>
              <div style={{ background: 'yellow', borderRadius: '100%', width: '10px', height: '10px', marginRight: '10px' }} />
              <div style={{ fontSize: '12px' }}>ACTIVE</div>
            </StateDiv>
            <StateDiv active={stateIndex === 2} onClick={() => chagneState(2)}>
              <div style={{ background: 'green', borderRadius: '100%', width: '10px', height: '10px', marginRight: '10px' }} />
              <div style={{ fontSize: '12px' }}>SUCCESS</div>
            </StateDiv>
            <StateDiv active={stateIndex === 3} onClick={() => chagneState(3)}>
              <div style={{ background: 'gray', borderRadius: '100%', width: '10px', height: '10px', marginRight: '10px' }} />
              <div style={{ fontSize: '12px' }}>FAILD</div>
            </StateDiv>

          </div>
          <div>
            <div style={{ marginRight: '10px', display: 'flex', justifyContent: 'space-between', borderRadius: '8px', border: '1px solid #27262C', width: '300px', padding: '5px 15px', alignItems: 'center' }}>
              <div style={{ fontSize: '12px' }}>Put token address here</div>
              <SearchIcon />
            </div>
          </div>
        </div>
      </GobackCard>
        <LaunchPadBody style={{ marginTop: '25px' }}>
          {!openDetail ? <>
            <LaunchPadItem stateIndex={stateIndex} changeDetail={changeDetail} />
            <LaunchPadItem stateIndex={stateIndex} changeDetail={changeDetail} />
            <LaunchPadItem stateIndex={stateIndex} changeDetail={changeDetail} />
            <LaunchPadItem stateIndex={stateIndex} changeDetail={changeDetail} />
            <LaunchPadItem stateIndex={stateIndex} changeDetail={changeDetail} />
            <LaunchPadItem stateIndex={stateIndex} changeDetail={changeDetail} />
          </> : <LaunchPadDetail/>}
        </LaunchPadBody>
      </> : null}
      {activeIndex === 2 ? <DeveloperPad GoBack={GoBack} /> : null}
    </>
  )
}
