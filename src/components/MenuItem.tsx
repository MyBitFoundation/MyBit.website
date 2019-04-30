import { MenuItemProps } from '@constants/menus'
import React from 'react'
import { navigate } from '@reach/router'
import styled from 'styled-components'
import arrowUp from '../../static/img/icon/arrowup.svg'
import arrowDown from '../../static/img/icon/arrowdown.svg'

export default class MenuItem extends React.Component<
  MenuItemProps,
  { activeLink: number }
> {
  state = {
    activeLink: -1
  }

  render() {
    return (
      <div
        onClick={() => this.props.toggle(this.props.index)}
        className="dib-l pr4-l"
      >
        <SMenuTitle>
          <SMenuImg
            src={this.props.active ? arrowUp : arrowDown}
            alt="expand"
          />
          <div>{this.props.title}</div>
        </SMenuTitle>
        {this.props.active && (
          <SMenuCard index={this.props.index}>
            {this.props.links.map((e, i) => (
              <SMenuLink
                key={i}
                active={i === this.state.activeLink}
                disabled={e.linkTo === ''}
                onMouseEnter={() => this.setState({ activeLink: i })}
                onMouseLeave={() => this.setState({ activeLink: -1})}
                onClick={() => {
                  e.linkTo.substr(0, 4) === 'http' ? window.open(e.linkTo) : navigate(e.linkTo);
                  this.props.onClick && this.props.onClick();
                }}
                className='w-100 pv1'
              >
                <thead>
                  <tr>
                    <th className="pr1" style={{ width: '24px' }}>
                      <img
                        style={{ width: '24px' }}
                        className="tl db"
                        alt="icon"
                        src={e.icon}
                      />
                    </th>
                    <th className="tl">
                      {e.title}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tl">
                    <td />
                    {e.text}
                  </tr>
                </tbody>
              </SMenuLink>
            ))}
          </SMenuCard>
        )}
      </div>
    )
  }
}
const SMenuCard = styled.div.attrs({
  className: 'br3 pv3 ph2 absolute-l'
})`

  background: white;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.12), 0px 4px 20px rgba(0, 0, 0, 0.12);
  @media screen and (min-width: 60em) {
    width: 380px;
    transform: ${(props: { index: number }) =>
      props.index === 4 ? 'translate(-128px)' : props.index === 3 ? 'translate(-32px)' : ''};
  }
`

const SMenuLink = styled.table`
  background: ${(props: { active: boolean }) =>
    props.active ? 'rgba(26, 144, 255, 0.1)' : '#ffffff'};
  border-radius: 4px;
  cursor: ${(props: any) => props.disabled ? 'not-allowed' : 'pointer'};
`

const SMenuTitle = styled.div.attrs({
  className: 'f6 fw5 flex flex-row pt1 pb1 pb-0-l items-center black'
})``
const SMenuImg = styled.img.attrs({
  className: 'pl2 pr1 dn-l'
})``
