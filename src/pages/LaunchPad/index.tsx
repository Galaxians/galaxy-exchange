import React, { useContext, useMemo } from 'react'
import styled from 'styled-components'
import { Card } from 'glx-uikit'

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
  opacity: 1;
  text-align: center;
  margin: 10px;
  cursor: pointer;
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
  opacity: 1;
  text-align: center;
  margin: 10px;
  cursor: pointer;
`

export default function LaunchPad() {

  return (
    <>
      <div style={{ display: "flex" }}>
        <BuyerCard>
          <div style={{ fontSize: '32px', fontWeight: 500}}>Buyers</div>
          <div>Are you looking to buy brand new tokens in Pre-sale ? Click here</div>
        </BuyerCard>
        <DeveloperCard>
        <div style={{ fontSize: '32px', fontWeight: 500 }}>Developers</div>
          <div>Do you want launch your own Token? Click here</div>
        </DeveloperCard>
      </div>
    </>
  )
}
