import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import HamburgerButton from '../static/svgs/icons/menu-icon.svg'
import { mobileMenu, headerMenu, headerMenuDropDown, resourcesDropDown } from './constants/menu'
import { testAlphaUrl } from './constants'
import {Link} from './link';
import stylesheet from './menu.scss'
import { Button } from './button'
import { IconListMobileMenu } from './icon'
import { DropdownCustom } from './dropdown'
import { Locale } from './locale'

export class Menu extends React.Component {
  constructor(props){
   super(props);
   this.state = {popup: false}

   this.handleClick = this.handleClick.bind(this);
  }

  handleClick(flag){
    this.setState({popup: flag});
    this.props.setMobileMenuState(flag);
  }

  render(){
    const { isInHomePage, isLight } = this.props;
    const toRender = headerMenu.map((option) => {
      return(
        <Link
          key={option.name}
          path={option.path}
          isInHomePage={isInHomePage}
          isLight={isLight}
          name={option.name}
          external={Boolean(option.external)}
          className={option.className}
        />
      )
    })

    
    const toRenderDropdowns = headerMenuDropDown.map((option) => {
      return(
        <DropdownCustom
          key={option.name}
          name={option.name}
          list={option.list}
        />
      )
    })
    
    toRender.push(toRenderDropdowns);
    toRender.push(<Locale />);
    toRender.push(<Button 
      label={"Contribute"}
      url={"/investor"}
      isSecondary
      isLight
      isLink
      isCentered
      isRounded
      className={
        classNames({
          'Menu__btn': true
        })
      }
    />);
    
    const toRenderMobile = mobileMenu.map((option) => {
      return(
        <a
          key={option.path}
          href={option.path}
          className={
          classNames({
            'SidebarMobile__overlay-link': true,
            'SidebarMobile__overlay-link--is-visible' : this.state.popup
          })
        }

          target={option.external ? "_blank" : ""}
          rel="noopener noreferrer"
        >
          {option.name}
        </a>
      )
    })

    toRenderMobile.push(<IconListMobileMenu />)

    return (
      <div
        className={
          classNames({
            'Menu': true,
            'Menu--is-home' : isInHomePage,
            'Menu--is-video-open': this.props.videoOpen
          })
        }
      >
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        {toRender}
        <div
          className={
            classNames({
              'Menu__hamburger-button': true,
              'Menu__hamburger-button--is-home' : isInHomePage
            })
          }
        >
          <a onClick={() => this.handleClick(true)}>
            <HamburgerButton />
          </a>
        </div>
        <div 
          className={
            classNames({
              'SidebarMobile': true,
              'SidebarMobile--is-visible' : this.state.popup,
            })
          }
        >
          <a 
            className={
              classNames({
                'SidebarMobile__overlay-btn-close': true,
                'SidebarMobile__overlay-btn-close--is-visible' : this.state.popup,
              })
            } 
            onClick={() => this.handleClick(false)}
          >
            &times;
          </a>
          {toRenderMobile}
        </div>
      </div>
    )
  }
}

Menu.defaultProps = {
  isInHomePage: false,
  isLight: false
}

Menu.propTypes = {
  isInHomePage: PropTypes.bool,
  isLight: PropTypes.bool,
  setMobileMenuState: PropTypes.func.isRequired,
}
