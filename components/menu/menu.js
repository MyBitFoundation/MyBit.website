import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import HamburgerButton from '../../static/svgs/icons/menu-icon.svg'
import { mobileMenu, headerMenu, headerMenuDropDown, headerMenuButton, headerMenuLanguage } from '../constants/menu'
import {Link} from '../link';
import stylesheet from './menu.scss'
import { Button } from '../button'
import { IconListMobileMenu } from '../icon'
import { DropdownCustom } from '../dropdown'
import { Locale } from '../locale'
import { withRouter } from 'next/router'
import { Icon } from 'antd';

class CustomMenu extends React.Component {
  constructor(props){
   super(props);
   this.state = {popup: false, lang: headerMenuLanguage["en"].name, dropdownItem: null}

   this.handleClick = this.handleClick.bind(this);
  }

  toggleMobileDropdown = (evt) => {
    const dropdownItem = this.state.dropdownItem !== evt.currentTarget.innerText ? evt.currentTarget.innerText : null;
    this.setState({dropdownItem})
  }

  handleClick(flag){
    this.setState({popup: flag});
  }

  handleLocaleChange = (evt) => {
    const lang = headerMenuLanguage[evt.key].name;
    this.setState({lang})
  }

  render(){
    const { lang } = this.state;
    const toRender = headerMenu.map((option) => {
      return(
        <Link
          key={option.path}
          path={option.path}
          isLight
          name={option.name}
          external={Boolean(option.external)}
          className={
            classNames({
              'Menu__item': true,
              'active': this.props.router.pathname.indexOf(option.name.toLocaleLowerCase()) !== -1
            })
          }
        />
      )
    })

    const toRenderDropdowns = headerMenuDropDown.map((option) => {
      return(
        <DropdownCustom
          key={option.name}
          name={option.name}
          list={option.list}
          className={
            classNames({
              'Menu__item': true
            })
          }
        />
      )
    })

    toRender.push(toRenderDropdowns);
    toRender.push(<Locale key='locale' 
                          className={classNames({'Menu__item': true})}
                          langMenu={headerMenuLanguage}
                          lang={lang}
                          onLocaleChanged={this.handleLocaleChange}
                          />);
    toRender.push(<Button
      key='button'
      label={headerMenuButton.name}
      url={headerMenuButton.url}
      newTab={headerMenuButton.external}
      isSecondary
      isLight
      isLink
      isCentered
      isRounded
      className={
        classNames({
          'Menu__item': true,
          'Menu__btn': true
        })
      }
    />);

    const toRenderMobile = mobileMenu.map((option) => {
      return (
        <Fragment key={option.name}>
          {!option.dropdown && <a
            onClick={this.toggleMobileDropdown}
            href={option.path.url}

            className={
            classNames({
              'SidebarMobile__overlay-link': true,
              'SidebarMobile__overlay-link--is-visible' : this.state.popup,
              'SidebarMobile__menuButton': option.button,
              'SidebarMobile__currentPage': this.props.router.pathname.indexOf(option.name.toLocaleLowerCase()) !== -1
            })
          }

            target={option.path.external ? "_blank" : ""}
            rel="noopener noreferrer"
          >
            {option.name}
          </a>}
          {option.dropdown && <div
            className={
            classNames({
              'SidebarMobile__overlay-link': true,
              'SidebarMobile__dropdown': true,
              'SidebarMobile__overlay-link--is-visible' : this.state.popup
            })
          }
          >
            <div onClick={this.toggleMobileDropdown}>
              {option.name}
              <span className={`SidebarMobile__chevron${this.state.dropdownItem == option.name ? '--active' : '' }`}>
                <Icon type="down" theme="outlined"/>
              </span>
            </div>
            {option.menuItems.map(mItem => (
              <a
                key={mItem.name}
                href={mItem.url}
                target={mItem.external ? "_blank" : ""}
                rel="noopener noreferrer"
                className={`SidebarMobile__menuItem${this.state.dropdownItem == option.name ? '--active' : '' }`}

                target={mItem.external ? "_blank" : ""}
                rel="noopener noreferrer"
              >
              <span className="SidebarMobile__teamText">{mItem.name}</span>
            </a>
            ))}
          </div>}
        </Fragment>
      )
    })

    toRenderMobile.push(<IconListMobileMenu key='IconListMobileMenu'/>)

    return (
      <div
        className={
          classNames({
            'Menu': true,
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

CustomMenu.propTypes = {
  setMobileMenuState: PropTypes.func,
}
export const Menu = withRouter(CustomMenu);

