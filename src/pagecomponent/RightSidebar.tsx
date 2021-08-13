import React, { useContext, useState } from 'react'
import styled from 'styled-components';

export const SidebarContainer = styled.div<{ isOpen: any; }>`
    position: absolute;
    z-index: 998;
    top: 78px;
    right: 0;
    width: 250px;
    height: 100vh;
    background: rgb(52, 0, 72);
    padding: 5px;
    transition: 0.3s ease-in-out;
    right: ${({ isOpen }) => (isOpen ? '0px' : '-250px')};
    >div:last-of-type {
        transform: ${({ isOpen }) => isOpen ? 'rotateY(0deg)' : 'rotateY(180deg)'};
    }
`;


export default function RightSidebar({ isOpen, toggle }) {

    const btnclick = () => {
        // console.log('haha'); 
    }

    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <div style={{ position: 'relative', marginTop: '30px', height: '70px', backgroundColor: 'rgb(30, 0, 41)', color: 'rgb(201, 187, 206)', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                <div>Ad Space 303 * 100</div>
                <div style={{position: 'absolute', right: '10px', top: '-12px', fontSize: '12px', backgroundColor: 'rgb(97, 49, 159)', width:'12px', textAlign:'center'}}>?</div>
            </div>

            <div style={{ marginTop: '30px', height: '0px', border: '1px solid #61319F'}} />

            <div style={{ position: 'relative',  marginTop: '30px', height: '156px', backgroundColor: 'rgb(30, 0, 41)', color: 'rgb(201, 187, 206)', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
            <div className="fs-20">Ad Space 303 * 176</div>
                <div style={{position: 'absolute', right: '10px', top: '-12px', fontSize: '12px', backgroundColor: 'rgb(97, 49, 159)', width:'12px', textAlign:'center'}}>?</div>
            </div>

            <div style={{ marginTop: '30px', height: '0px', border: '1px solid #61319F'}} />

            <div style={{ position: 'relative',  marginTop: '30px', height: '253px', backgroundColor: 'rgb(30, 0, 41)', color: 'rgb(201, 187, 206)', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
            <div>Ad Space 303 * 303</div>
                <div style={{position: 'absolute', right: '10px', top: '-12px', fontSize: '12px', backgroundColor: 'rgb(97, 49, 159)', width:'12px', textAlign:'center'}}>?</div>
            </div>

            <div style={{ position: 'relative', marginTop: '40px', height: '100px', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                <img src="./assets/img/Kal-with-tongue-out.png" alt="tongue" style={{ width: '158px' }} />
                <div style={{ position: 'absolute', color: 'white', fontSize: '18px', right: 25, top: 10 }}>Need Help?</div>
            </div>

            <div style={{ position: 'absolute', top: 20, right: 250, width: '28px', height: '28px', cursor: 'pointer' }} onClick={() => toggle()} onKeyDown={() => btnclick()} role='button' tabIndex={0}>
                <img src="./assets/img/right.png" alt="right" style={{ width: "28px" }} />
            </div>
        </SidebarContainer>
    )
}
