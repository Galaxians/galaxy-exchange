import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem, useModal } from 'glx-uikit'

import useI18n from 'hooks/useI18n'
import SettingsModal from '../PageHeader/SettingsModal'
import RecentTransactionsModal from '../PageHeader/RecentTransactionsModal'

const StyledNav = styled.div`
  margin-bottom: 20px;
`

function Nav({ activeIndex = 0 }: { activeIndex?: number }) {
  const TranslateString = useI18n()
  const [onPresentSettings] = useModal(<SettingsModal translateString={TranslateString} />)
  const [onPresentRecentTransactions] = useModal(<RecentTransactionsModal translateString={TranslateString} />)
  return (
    <StyledNav style={{ borderRadius: '4px' }}>
      <div className="row mt-4" style={{justifyContent: 'space-between'}}>
        <div className="col-auto" >
          <ButtonMenu activeIndex={activeIndex} scale="sm">
            {activeIndex === 0 ? (
              <ButtonMenuItem
                className="nav-menu-item"
                style={{
                  paddingLeft: '20px',
                  paddingRight: '20px',
                  paddingTop: '20px',
                  paddingBottom: '20px',
                  background: 'transparent',
                  border: '1px solid #FF00FF',
                  borderRadius: '8px',
                }}
                id="swap-nav-link"
                to="/swap"
                as={Link}
              >
                {TranslateString(1142, 'Exchange')}
              </ButtonMenuItem>
            ) : (
              <ButtonMenuItem
              className="nav-menu-item color-gray"
                style={{
                  paddingLeft: '20px',
                  paddingRight: '20px',
                  paddingTop: '20px',
                  paddingBottom: '20px',
                  background: 'transparent',
                  border: '1px solid rgb(30, 25, 37)',
                  borderRadius: '8px',
                }}
                id="swap-nav-link"
                to="/swap"
                as={Link}
              >
                {TranslateString(1142, 'Exchange')}
              </ButtonMenuItem>
            )}
            {activeIndex === 1 ? (
              <ButtonMenuItem
              className="nav-menu-item"
                style={{
                  paddingLeft: '20px',
                  paddingRight: '20px',
                  paddingTop: '20px',
                  paddingBottom: '20px',
                  background: 'transparent',
                  borderRadius: '8px',
                  border: '1px solid #FF00FF',
                }}
                id="pool-nav-link"
                to="/pool"
                as={Link}
              >
                {TranslateString(262, 'Pool')}
              </ButtonMenuItem>
            ) : (
              <ButtonMenuItem
              className="nav-menu-item color-gray"
                style={{
                  paddingLeft: '20px',
                  paddingRight: '20px',
                  paddingTop: '20px',
                  paddingBottom: '20px',
                  background: 'transparent',
                  border: '1px solid rgb(30, 25, 37)',
                  borderRadius: '8px',
                }}
                id="pool-nav-link"
                to="/pool"
                as={Link}
              >
                {TranslateString(262, 'Pool')}
              </ButtonMenuItem>
            )}

            {activeIndex === 2 ? (
              <ButtonMenuItem
              className="nav-menu-item"
                style={{
                  paddingLeft: '20px',
                  paddingRight: '20px',
                  paddingTop: '20px',
                  paddingBottom: '20px',
                  background: 'transparent',
                  borderRadius: '8px',
                  border: '1px solid #FF00FF',
                }}
                id="bridge-nav-link"
                as="a"
                href="https://www.binance.org/en/bridge?utm_source=PancakeSwap"
                target="_blank"
                rel="noreferrer noopener"
              >
                Bridge
              </ButtonMenuItem>
            ) : (
              <ButtonMenuItem
              className="nav-menu-item color-gray"
                style={{
                  paddingLeft: '20px',
                  paddingRight: '20px',
                  paddingTop: '20px',
                  paddingBottom: '20px',
                  background: 'transparent',
                  border: '1px solid rgb(30, 25, 37)',
                  borderRadius: '8px',
                }}
                id="bridge-nav-link"
                as="a"
                href="https://www.binance.org/en/bridge?utm_source=PancakeSwap"
                target="_blank"
                rel="noreferrer noopener"
              >
                Bridge
              </ButtonMenuItem>
            )}
          </ButtonMenu>
        </div>
        <div className="col-auto">
          <ButtonMenuItem className="setting-icon" onClick={onPresentSettings} style={{ marginLeft: '-14px', height: '44px', width: '44px' }} />
          <ButtonMenuItem
            className="order-history-icon media-left" style={{height: '44px', width: '44px'}}
            onClick={onPresentRecentTransactions}
          />
        </div>
      </div>
    </StyledNav>
  )
}

export default Nav
