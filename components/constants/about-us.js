import React, { Fragment } from 'react';
import { links } from './links';

export const aboutUsData = [{
  title: 'About us',
  image: null,
  className: 'first',
  content:
  <Fragment>
    <p>MyBit was started by a team of industry veterans who spotted
      a massive problem with today’s financial systems. Third party
      agents such as lawyers, escrow agents, and brokers are required
      to establish trust and conduct transactions.
    </p>
    <p>
      This is inefficient, unsafe, and expensive. Our vision is to utilise
      smart contract technology to eliminate the need for these centralised
      sources and creating a more efficient, secure, and cost-effective wealth
      management environment.
    </p>
  </Fragment>,
  footer: null
},
{
  title: '',
  image: null,
  className: 'last',
  content:
    <p>
      MyBit provides robust developer tools such as SDKs and UI Kits to give
      engineers the power to rapidly build, test and deploy wealth management
      applications on the Ethereum blockchain as well as funding mechanisms to
      support and scale disruptive projects.
    </p>,
  footer:
    <Fragment>
      <p style={{fontWeight: 700}}>Headquartered at the heart of Crypto Valley</p>
      <p>Zug, Switzerland</p>
    </Fragment>
  }
]
