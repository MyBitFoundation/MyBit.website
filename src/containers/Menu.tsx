import React from 'react'
import { navigate } from '@reach/router'
import styled from 'styled-components'
import MenuItem from '@components/MenuItem'
import { MenuProps } from '@constants/menus'
import logo from '../../static/img/logo.svg'
import openmenu from '../../static/img/openmenu.svg'
import closemenu from '../../static/img/closemenu.svg'
import hovermenu from '../../static/img/menuhover.svg'
import Btn from '@components/Button'

export default class Menu extends React.Component<MenuProps, MenuState> {
  state: MenuState = {
    activeItem: null,
    open: false,
    hoverOpen: false
  }

  closeMenu = (): void => {
    this.setState({
      open: false,
    })
  }

  toggleOpen = (): void => {
    this.setState({
      open: !this.state.open
    })
  }

  toggleItem = (index: number): void => {
    this.setState({
      activeItem: this.state.activeItem === index ? null : index
    })
  }

  openItem = (index: number): void => {
    this.setState({
      activeItem: index
    })
  }

  closeItem = (): void => {
    this.setState({
      activeItem: null
    })
  }

  onHover = () => {
    this.setState({
      hoverOpen: true
    })
  }

  onHoverExit = () => {
    this.setState({
      hoverOpen: false
    })
  }

  render() {
    return (
      <>
        <SHeader>
          <SLogo src={logo} alt="myBit" onClick={() => navigate('/')} />
          <SMenuToggle
            src={
              this.state.open
                ? closemenu
                : this.state.hoverOpen
                ? hovermenu
                : openmenu
            }
            alt="toggle menu"
            onClick={this.toggleOpen}
            onMouseEnter={() => this.onHover()}
            onMouseLeave={() => this.onHoverExit()}
          />
          <div className="dn db-l tr">
            <SMenuItemsDesktop>
              <div className="flex flex-row items-top pt3 pr3">
                {this.props.items.map((e, index) => (
                  <div
                    onMouseEnter={() => this.openItem(index)}
                    onMouseLeave={() => this.closeItem()}
                  >
                    <MenuItem
                      key={index}
                      index={index}
                      title={e.title}
                      active={index === this.state.activeItem}
                      toggle={this.toggleItem}
                      links={e.links}
                    />
                  </div>
                ))}
                <div className="" />
                <SButton
                  target="_blank"
                  rel="noreferrer"
                  href="https://task.market"
                >
                  Get Involved
                </SButton>
              </div>
            </SMenuItemsDesktop>
          </div>
        </SHeader>

        <SMenuItemsMobile open={this.state.open}>
          {this.props.items.map((e, index) => (
            <MenuItem
              key={index}
              index={index}
              title={e.title}
              active={index === this.state.activeItem}
              toggle={this.toggleItem}
              links={e.links}
              onClick={this.closeMenu}
            />
          ))}
          <Btn linkTo="https://task.market" text="get involved" />
        </SMenuItemsMobile>
      </>
    )
  }
}
interface MenuState {
  activeItem: number
  open: boolean
  hoverOpen: boolean
}

const SMenuItemsDesktop = styled.div.attrs({
  className: ''
})`
  z-index: 1;
`

const SMenuItemsMobile = styled.div.attrs({
  className: ''
})`
  overflow-x: hidden;
  height: ${(props: { open: boolean }) => (props.open ? '100vh' : '0vh')};
  width: 100%;
  z-index: 1;
  position: relative;
  left: 0;
  top: 0;
  transition: height 0.5s;
`

const SMenuToggle = styled.img.attrs({
  className: 'dn-l pt0'
})``

const SLogo = styled.img.attrs({
  className: 'pa3 w4'
})`
  cursor: pointer;
`

const SHeader = styled.header.attrs({
  className: 'flex flex-row justify-between align-center'
})``

const SButton = styled.a.attrs({
  className: 'link no_underline tc center b whover pv1 ph2'
})`
  background: #1890ff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  font-family: Gilroy;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #ffffff;
`
