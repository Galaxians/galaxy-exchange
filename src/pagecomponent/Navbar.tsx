import React, { useContext, useState } from 'react'
import { Button, useWalletModal as UikitMenu } from 'glx-uikit'
import { useHistory, Link } from 'react-router-dom'
import { useWeb3React } from '@web3-react/core'
import useAuth from 'hooks/useAuth'
import styled, { css } from 'styled-components'

export const StyledLink = styled(Link)`
  margin-left: 25px;
  border: 1px solid #FF1FFF;
  width: 120px;
  text-align: center;
  border-radius: 10px;
  color: gray;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  height: 44px;
  width: 146px;
  >span {
    font-size: 15px;
    font-family: monospace;
    z-index: 1;
  }
  >div {
    transition: 0.3s;
    background: transparent linear-gradient(90deg, #FF1FFF 0%, #440C8B 100%) 0% 0% no-repeat padding-box;
    width: 0%;
  }
  &:hover {
    color: white !important;
    >div {
      background: transparent linear-gradient(90deg, #FF1FFF 0%, #440C8B 100%) 0% 0% no-repeat padding-box;
      width: 100%;
    }
  }
`
export const StyledA = styled.a`
  margin-left: 25px;
  border: 1px solid #FF1FFF;
  width: 120px;
  text-align: center;
  border-radius: 10px;
  color: gray;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  height: 44px;
  width: 146px;
  >span {
    font-size: 15px;
    font-family: monospace;
    z-index: 1;
  }
  >div {
    transition: 0.3s;
    background: transparent linear-gradient(90deg, #FF1FFF 0%, #440C8B 100%) 0% 0% no-repeat padding-box;
    width: 0%;
  }
  &:hover {
    color: white !important;
    >div {
      background: transparent linear-gradient(90deg, #FF1FFF 0%, #440C8B 100%) 0% 0% no-repeat padding-box;
      width: 100%;
    }
  }
`

export default function Navbar({toggle}) {
  const { account, activate, deactivate } = useWeb3React()
  const { login, logout } = useAuth()
  const [current, setCurrent] = useState("");
  //   const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  //   const { isDark, toggleTheme } = useTheme()
  //   const priceData = useGetPriceData()
  //   const cakePriceUsd = priceData ? Number(priceData.prices.Cake) : undefined
  //   const profile = useGetLocalProfile()

  const { onPresentConnectModal, onPresentAccountModal } = UikitMenu(login, deactivate, account as string)
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null
  const history = useHistory()

  return (
    <div className="container-fluid top-nav-bg">
      <nav className="navbar navbar-dark navbar-expand-lg">
        <div className="container-fluid">
          <div style={{display:"flex"}}>
          <button type="submit" data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="/navcol-1" style={{marginTop:'0px', marginLeft:'-15px' ,alignSelf: 'center', border: 'unset'}} onClick={toggle}>
            <span className="visually-hidden">Toggle navigation</span>
            {/* <span className="navbar-toggler-icon text-white" /> */}
            <div className="toggle-icon" style={{backgroundColor: "#FE1EF9"}} />
          </button>
          <a className="navbar-brand" href="https://galaxyswap.net/">
            <img src="./assets/img/galaxyswap-logo-color-800px.png" alt="Galaxy Swap" style={{width: "180px", marginLeft:'30px'}} />
          </a>
          <a className="navbar-icon" href="https://galaxyswap.net/">
            <img src="./assets/img/Icon-galaxyswap-192x192.png" alt="Galaxy Swap" style={{marginLeft: '5px', width: "50px"}} />
          </a>
          </div>

          <div className="nav-btn-show">
            <span className="navbar-text actions">
              <div>
                {account ? (
                  <Button
                  className="btn text-white xrounded "
                  style={{height: '25px', fontSize:'12px', background: 'transparent', border: '1px solid #FF1FFF'}}
                    onClick={() => {
                      onPresentAccountModal()
                    }}
                  >
                    {accountEllipsis}
                  </Button>
                ) : (
                  <Button
                  className="btn text-white xrounded "
                  style={{height: '25px', fontSize:'12px', background: 'transparent', border: '1px solid #FF1FFF'}}
                    onClick={() => {
                      onPresentConnectModal()
                    }}
                  >
                    Connect
                  </Button>
                )}
              </div>
            </span>
            <img src="./assets/img/alien-kal-avatar.png" alt="profile" style={{marginLeft:'11px', width:'25px', marginTop: '7px', height: '25px'}} />
          </div>
          <div className="collapse navbar-collapse" id="navcol-1">
          {/* <span className="pink-color small mt-2">Powered by GalaxyProtocol</span> */}
            <ul className="navbar-nav" style={{flex:1, justifyContent:'center'}}>
              <li className="nav-item" style={{display:'inline-flex'}}>
              <StyledLink to="/exchange" rel="noreferrer" onClick={() => setCurrent("exchange")} style={current === "exchange" ? {background: 'transparent linear-gradient(90deg, #FF1FFF 0%, #440C8B 100%) 0% 0% no-repeat padding-box'} : {}} >
                  <span>EXCHANGE</span>
                 <div style={{position:'absolute',top:0,left:0,height:'100%', borderRadius: '10px'}} />
                </StyledLink>
                <StyledLink to="/farms" rel="noreferrer" onClick={() => setCurrent("farms")} style={current === "farms" ? {background: 'transparent linear-gradient(90deg, #FF1FFF 0%, #440C8B 100%) 0% 0% no-repeat padding-box'} : {}} >
                  <span>FARMS</span>
                 {current !== "farms" && <div style={{position:'absolute',top:0,left:0,height:'100%', borderRadius: '10px'}} />}
                </StyledLink>
                <StyledLink to="/pool" rel="noreferrer" onClick={() => setCurrent("pool")} style={current === "pool" ? {background: 'transparent linear-gradient(90deg, #FF1FFF 0%, #440C8B 100%) 0% 0% no-repeat padding-box'} : {}}>
                  <span>POOL</span>
                 {current !== "pool" && <div style={{position:'absolute',top:0,left:0,height:'100%', borderRadius: '10px'}} />}
                </StyledLink>
                <StyledLink to="/launchpad" rel="noreferrer" onClick={() => setCurrent("launchpad")} style={current === "launchpad" ? {background: 'transparent linear-gradient(90deg, #FF1FFF 0%, #440C8B 100%) 0% 0% no-repeat padding-box'} : {}}>
                  <span>LANCHPAD</span>
                  {current !== "launchpad" && <div style={{position:'absolute',top:0,left:0,height:'100%', borderRadius: '10px'}} />}
                </StyledLink>
                </li>
            </ul>
            <span className="navbar-text actions ms-auto">
            <div>
              {account ? (
                <Button
                className="btn text-white xrounded "
                style={{marginLeft:'70px',height: '40px', width:'140px', background: 'transparent', border: '1px solid #FF1FFF'}}
                  onClick={() => {
                    onPresentAccountModal()
                  }}
                >
                  {accountEllipsis}
                </Button>
              ) : (
                <Button
                className="btn text-white xrounded "
                style={{marginLeft:'70px',fontWeight: 600, height: '40px', width:'140px', background: 'transparent', border: '1px solid #FF1FFF'}}
                  onClick={() => {
                    onPresentConnectModal()
                  }}
                >
                  Connect
                </Button>
              )}
            </div>
          </span>
          <img src="./assets/img/alien-kal-avatar.png" alt="profile" style={{marginLeft:'11px', width:'40px'}} />
          </div>
        </div>
      </nav>
    </div>
  )
}