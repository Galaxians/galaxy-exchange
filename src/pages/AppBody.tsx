import React from 'react'
import styled from 'styled-components'
import { Card } from 'glx-uikit'

export const BodyWrapper = styled(Card)`
  position: relative;
  // min-width: 478px;
  min-height: 470px;
  width: 100%;
  z-index: 5;
  padding: 5px;
  //background: #0b001e 0% 0% no-repeat padding-box;
  //box-shadow: 0px 3px 99px #ff1fff38;
`

export const Body = styled.div`
  width: auto;
  @media(max-width : 478px) {
    width: 100%;
    padding: 5px;
  }
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */

export default function AppBody({ children }: { children: React.ReactNode }) {
  return (
    <Body>
      <BodyWrapper>{children}</BodyWrapper>
    </Body>
  )
}
