import React, { Fragment } from 'react';
import { links } from './links';

export const myBitToken = {
  title: "The MyBit Token",
  content:
  <Fragment>
    <p>
      The MyBit Network is powered by the MyBit Token (MYB).
      MYB is used for everything from executing specific functions
      with our SDKs to accessing features of applications. Basically,
      all apps built on MyBit (including MyBitGO) use MYB to function.
    </p>
    <p>
      The token is also used to fund the growth of the network through
      MyBit Ventures and other developer reward programmes.
    </p>
  </Fragment>,
  button: {text: 'Learn More', url: links.token}
}
