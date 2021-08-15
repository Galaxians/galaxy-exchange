import React, { useContext, useMemo, useState } from 'react'
import styled from 'styled-components'
import { Card, Button, ChevronDownIcon, SearchIcon, Text, ChevronLeftIcon, ChevronRightIcon } from 'glx-uikit'
import Modal from '../Modal'

export const DeveloperDiv = styled.div`
    width: 900px;
    background: transparent;
    margin-top: 50px;
`

export const MainDiv = styled.div`
    margin-top: 50px;
    background: #0B001E;
`

export const ChildDiv = styled.div`
    flex: 1;
    background: transparent linear-gradient(132deg, #61319F 0%, #311950 100%) 0% 0% no-repeat padding-box;
    color: white;
    padding: 100px 0px;
    border: 0.5px solid #707070;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    opacity: 0.5;
    &:hover {
        background: #440C8B 0% 0% no-repeat padding-box;
    }
`

export const BackDiv = styled.div`
    color: white;
    width: 100px;
    cursor: pointer;
`

export const PresaleDiv = styled.div`
    background: #40117E 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 86px #00000029;
    border: 0.5px solid #FF1FFF;
    border-radius: 8px 8px 0px 0px;
    opacity: 1;
    width: 100%;
    color: white;
    padding: 25px;
`

export const PresaleDetial = styled.div`
    background: #40117E 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 86px #00000029;
    border: 0.5px solid #FF1FFF;
    border-top: 0px;
    border-radius: 0px 0px 8px 8px;
    opacity: 1;
    width: 100%;
    color: white;
    padding: 25px;
`
export const TokenInput = styled.input`
  position: relative;
  display: flex;
  padding: 10px;
  color: white;
  align-items: center;
  white-space: nowrap;
  background: #320B67;
  border: 0.5px solid #FF1FFF;
  outline: none;
  border-radius: 8px;
  -webkit-appearance: none;
  font-size: 16px;
  transition: border 100ms;
  width: 70%;
`

export const CheckBtn = styled.div`
    background: #FF1FFF 0% 0% no-repeat padding-box;
    border: 0.5px solid #FF1FFF;
    border-radius: 8px;
    opacity: 1;
    cursor: pointer;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 50px;
`

export default function DeveloperPad({
    GoBack,
}: { GoBack: () => void }) {

    const [activeIndex, setIndex] = useState(0);

    return (<DeveloperDiv>

        {activeIndex === 0 ? <BackDiv onClick={() => GoBack()}>
            <ChevronLeftIcon /> Go Back
        </BackDiv> : <BackDiv onClick={() => setIndex(0)}>
            <ChevronLeftIcon /> Go Back
        </BackDiv>}
        <div style={{ color: 'white', fontSize: '64px', textAlign: 'center', marginTop: '50px' }}>
            Nebula Launchpad
        </div>
        <div style={{ color: '#FF1FFF', fontSize: '24px', textAlign: 'center' }}>
            Launch your token easily
        </div>

        {activeIndex === 0 ? <MainDiv><div style={{ height: '100px', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px' }}>
            Choose the services you would like to use
        </div>
            <div style={{ display: 'flex' }}>
                <ChildDiv onClick={() => setIndex(1)}>
                    <div style={{ fontSize: '16px', padding: '10px', textAlign: 'center' }}>
                        Nebula Lanunchpad
                    </div>
                    <div style={{ fontSize: '11px', padding: '0px 50px', textAlign: 'center' }}>
                        Kickstart you Blockchain project, raise your capital and rock the crypto world!
                    </div>
                </ChildDiv>
                <ChildDiv onClick={() => setIndex(2)}>
                    <div style={{ fontSize: '16px', padding: '10px', textAlign: 'center' }}>
                        High Security Token Locker
                    </div>
                    <div style={{ fontSize: '11px', textAlign: 'center' }}>
                        Lock your BSC tokens
                    </div>
                </ChildDiv>
                <ChildDiv onClick={() => setIndex(3)}>
                    <div style={{ fontSize: '16px', padding: '10px', textAlign: 'center' }}>
                        Intergalatic Liquidity Locker
                    </div>
                    <div style={{ fontSize: '11px', textAlign: 'center' }}>
                        Lock Liquidity tokens
                    </div>
                </ChildDiv>
            </div></MainDiv> : null}
        {activeIndex === 1 ? <div style={{ display: 'flex', justifyContent: 'center' }}><MainDiv style={{ width: '750px' }}>
            <div style={{ height: '100px', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px' }}>
                Nebula Lanunchpad
            </div>
            <div style={{ display: 'flex', padding: '50px', background: 'rgb(66, 16, 136)', flexDirection: 'column' }}>
                <PresaleDiv>
                    Create your presale
                </PresaleDiv>
                <PresaleDetial>
                    <div style={{ display: 'flex' }}>
                        <TokenInput placeholder="Enter your token address..." />
                        <CheckBtn>Check</CheckBtn>
                    </div>
                    <div style={{ display: 'flex', marginTop: '20px' }}>
                        <Text>Buyers participate with</Text>
                        <div style={{ marginLeft: '50px', marginRight: '10px', borderRadius: '100%', background: 'white', width: '24px' }} />
                        <Text>WBNB</Text>
                        <ChevronDownIcon />
                    </div>
                    <Text style={{ marginTop: '20px', fontSize: '12px' }}>GalaxySwap V2 par to created</Text>
                    <Text style={{ fontSize: '12px', color: '#FF1FFF' }}>WBNB/?</Text>
                </PresaleDetial>
            </div></MainDiv></div> : null}
        {activeIndex === 2 ? <div style={{ display: 'flex', justifyContent: 'center' }}><MainDiv style={{ width: '700px' }}>
            <div style={{ height: '100px', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px' }}>
                High Security Token Locker
            </div>
            <div style={{ display: 'flex', padding: '50px 100px', background: 'rgb(66, 16, 136)', flexDirection: 'column', textAlign: 'center' }}>
                <Text style={{ fontSize: '12px' }}>We bring you the High Security Token Locker. Token locks are represented as shares of a pool, in a similar way to a GalaxySwap pool, allowing all BEP20 tokens including Rebasing and Deflationary mechanisms to be supported. This means lock amounts may change due to decimal rounding, but you will always retain your share of the pool.</Text>
                <Text style={{ fontSize: '14px', marginTop: '25px' }}>Selected Network</Text>
                <div style={{ display: 'flex', marginTop: '20px', justifyContent: 'center', border: '1px solid #FF1FFF', padding: '5px', width: '350px', alignSelf: 'center', borderRadius: '8px' }}>
                    <div style={{ marginRight: '10px', borderRadius: '100%', background: 'white', width: '24px' }} />
                    <Text>Binance Smart Chain</Text>
                    <ChevronDownIcon />
                </div>
                <div style={{ display: 'flex', marginTop: '20px', justifyContent: 'space-between', border: '1px solid #FF1FFF', padding: '10px', width: '400px', alignSelf: 'center', borderRadius: '20px' }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{ marginRight: '10px', borderRadius: '100%', background: 'white', width: '24px' }} />
                        <Text>Enter your token address</Text>
                    </div>
                    <SearchIcon />
                </div>
            </div></MainDiv></div> : null}
        {activeIndex === 3 ? <div style={{ display: 'flex', justifyContent: 'center' }}><MainDiv style={{ width: '700px' }}>
            <div style={{ height: '100px', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px' }}>
                Intergalactic Liquidity Locker
            </div>
            <div style={{ display: 'flex', padding: '100px 100px', background: 'rgb(66, 16, 136)', flexDirection: 'column', textAlign: 'left' }}>
                <Text style={{ fontSize: '12px' }}>The intergalactic Liquidity Locker does say his name. It locks your tokens. That way you will gain trust amongst your investors. If you are not developing a token this section is not ment for you. Instead we kindly direct you to this</Text>
                <Text style={{ fontSize: '14px', marginTop: '50px' }}>Enter the GalaxySwap V1 pair address you would like to lock liquidity for</Text>
                <div style={{ display: 'flex', marginTop: '5px', justifyContent: 'space-between', border: '1px solid #FF1FFF', padding: '5px', width: '100%', alignSelf: 'center', borderRadius: '8px' }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{ marginRight: '10px', borderRadius: '100%', background: 'white', width: '24px' }} />
                        <Text>Enter your token address</Text>
                    </div>
                </div>
                <Text style={{ fontSize: '12px', marginTop: '5px' }}>e.g. 0xc70bb2736e218861dca818d1e9f7a1930fe61e5b</Text>
            </div></MainDiv></div> : null}
    </DeveloperDiv>
    )
}
