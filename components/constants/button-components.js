import React from 'react';
import { Button } from '../button';
import { testAlphaUrl } from './';

export const eventDesc = [
{
    title: 'Blockchain Expo',
    location: 'Amsterdam, June 27-28',
    imageSrc: '/static/social/mybit_facebook_cover.png',
    imageAlt: 'Sample image',
    expired: true,
    button: (
      <Button
        label={"See more"}
        url={"https://blockchain-expo.com/europe/?gclid=cj0kcqjwxn_xbrcfarisaiufy1z80y18fss7y2vnlpt9kfm5-deimgbnaoee8szl6rwc0tkmzr3ugjuaapqsealw_wcb"}
        isLight
        isLink
        isCentered
        disabled
      />
    )
  }, {
    title: 'Tokenising ATM',
    location: 'Zug, TBD',
    description: "Founder, Ian Worrall, will be presenting a live demo showcasing how the MyBit team has tokenised the world's first Bitcoin ATM.",
  }, {
    title: 'MyBit/Slock.it',
    location: 'London, TBD',
    description: "Automating co-working, storage and shared spaces from start to finish. Demo will include financing, management, revenue distribution, and secondary market ownership swaps.",
  }, {
    title: 'IoT Hackathon',
    location: 'Berlin, TBD',
    description: "A Blockchain and Internet of Things hackathon designed to stimulate creativity and educate peers about the convergence of Finance, Blockchain, and IoT. More details to follow.",
  }, {
    title: 'Conference',
    location: 'New Zealand, October 11-12',
    description: "The first public demo of the MyBit platform in front of a live audience.",
  }, {
    title: 'Devcon',
    location: 'Prague, Oct 30 - Nov. 2',
    description: "Devcon speaks for itself. The intersection of Disruption, Innovation, and Freedom.",
  }
];

export const mediaHighlights = [{
  icon: 'mybit-dark',
  title: 'MyBit DApp',
  content:
  <div>
    <p>The MyBit Decentralized Application (DApp) is the backbone of the MyBit Network. It enables anyone to invest directly in IoT assets. All at a fraction of the cost of traditional platforms and investment funds. The MyBit DApp is the future of investing.</p>
    <Button
      label={"Test Alpha"}
      url={testAlphaUrl}
      className={"Products__btn-test-alpha"}
      isLink
      isCentered
      newTab
    />
  </div>,
}, {
  icon: 'mydax-white',
  title: 'MYDAX',
  content: '<p>The MyBit Decentralized Asset Exchange (MYDAX) is a revolutionary technology, providing liquidity to a historically illiquid market for the first time ever. It is the first Decentralized IoT Asset Exchange in the world and has ambitions to be the backbone of the new machine economy.</p>'
}];

export const diamondHighlights = [{
  title: 'Network',
  content: '<p>The MyBit Network connects the global IoT industry. Driving innovation and investment in the future machine economy.</p>',
  isDiamond: true,
  isLight: true,
},{
  title: 'Products',
  content:
  <div style={{display: "flex", flexDirection:"column"}}>
    <p>Smart investing paired with a decentralized IoT exchange.</p>
    <Button
      label={"Explore"}
      url={"/products"}
      isSecondary
      isLight
      isLink
      isCentered
    />
  </div>,
  icon: 'products',
  isDiamond: true,
  hasHoverEffect: true,
},{
  title: 'How it Works',
  content:
  <div style={{display: "flex", flexDirection:"column"}}>
    <p>Find out how it works with our interactive guide.</p>
    <Button
      label={"Start Here"}
      url={"/how-it-works"}
      className={"Home__btn-start-here"}
      isLink
      isCentered
    />
  </div>,
  isDiamond: true,
  isLight: true,
},{
  title: 'Community',
  content:
  <div style={{display: "flex", flexDirection:"column"}}>
    <p>A project powered by Ethereum, driven by the community.</p>
    <Button
      label={"Get Involved"}
      url={"/community"}
      isSecondary
      isLight
      isLink
      isCentered
    />
  </div>,
  icon: 'community',
  isDiamond: true,
  hasHoverEffect: true,
}]
