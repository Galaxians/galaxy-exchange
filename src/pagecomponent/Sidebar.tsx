import React, { useContext, useState } from 'react'
import styled from 'styled-components';

export const SidebarContainer = styled.aside<{ isOpen: any; }>`
  position: fixed;
  z-index: 998;
  width: 100%;
  height: 100%;
  background: transparent linear-gradient(90deg, #000000 0%, #0b001e 100%) 0% 0% no-repeat padding-box;
//   display: grid;
  align-items: center;
  top: 0;
  right: 0;
  transition: 1s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  right: ${({ isOpen }) => (isOpen ? '0%' : '-100%')};
`;


export default function Sidebar({ isOpen, toggle }) {

    const [isTag, setIsTag] = useState(false);
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <div className="navbar-toggler-mine">X</div>
            <div className="navbar-nav">
                <ul className="list-unstyled">
                    <li className="left-exchange-icon">
                        <a href="/" onClick={()=>{setIsTag(true)}}>Exchange</a>
                    </li>
                    <li className="left-farms-icon">
                        <a href="https://www.galaxyswap.net/farms" onClick={()=>{setIsTag(true)}}>Galaxia Farms</a>
                    </li>
                    <li className="left-pool-icon">
                        <a href="https://www.galaxyswap.net/pools" onClick={()=>{setIsTag(true)}}>Galaxia Pool</a>
                    </li>
                    <li className="left-redeem-icon">
                        <a href="https://galaxyprotocol.io/#/buyback" onClick={()=>{setIsTag(true)}}>Galaxia Redeem</a>
                    </li>
                </ul>
            </div>
        </SidebarContainer>
    )
}
