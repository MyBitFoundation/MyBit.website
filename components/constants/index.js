import { LINKS } from './links'

export const MYBIT_TOKEN_SALE_API_ENDPOINT = 'https://api.mybit.io/token-sale';
export const MYBIT_TOKEN_SALE_WEBSITE = 'https://td.mybit.io';
export const DAY_IN_SECONDS = 86400;
export const MINUTE_IN_MILLISECONDS = 60000;
export const DAY_IN_MILLISECONDS = 86400000;

export const getSecondsUntilNextPeriod = (timestampStartTokenSale) => {
  const currentDay = ((Math.floor(Date.now() / 1000) - timestampStartTokenSale) / DAY_IN_SECONDS) + 1;
  const past = currentDay % 1;
  const secondsUntilNextPeriod = ((1 - past) * DAY_IN_SECONDS).toFixed(0);

  return secondsUntilNextPeriod;
}

export const COUNTDOWN_INFO = {
  finalDate: new Date("Jan 01 2019 12:00:00 GMT-0"),
  title: 'Token Distribution Phase 2 Begins Jan 1, 2019',
  parts: {day:'Days', hour: 'Hours', minut: 'Minutes', second: 'Seconds'}
}

export const TEAM_DESCRIPTION = [
  {
    name: 'Ian Worrall',
    job: 'Founder',
    bio:
      'A veteran to the bitcoin industry who began as a miner and trader in 2013. Soon after moved into blockchain applications to fund MyBit in Switzerland.',
    linkedin: 'https://www.linkedin.com/in/ian-m-worrall-1b599a59/',
    imageSrc: '/static/team/v2/ian.jpg',
    imageAlt: 'Founder',
  },{
    name: 'Jose Aguinaga',
    job: 'CTO',
    bio: 'A web engineer with over 8+ years of experience in javascript related technologies, fintech development, and software engineering.',
    linkedin: 'https://www.linkedin.com/in/jjperezaguinaga/',
    imageSrc: '/static/team/v2/jose.jpg',
    imageAlt: 'CTO',
  },{
    name: 'Peter Phillips',
    job: 'Solidity Developer',
    bio:
      'A developer with five years of experience in data engineering, data visualisation and web app development, who now specialises in Solidity. He was also an early miner of Bitcoin and Ethereum.',
    linkedin: '',
    imageSrc: '/static/team/v2/Peter_Phillips.jpg',
    imageAlt: 'Solidity Developer',
  },{
    name: 'Cristiano Martins',
    job: 'Lead Front End Developer',
    bio:
      'A front end developer and Computer Science graduate with experience from multiple blockchain projects. He now specialises in React while still figuring out how he found his way in.',
    linkedin: '',
    imageSrc: '/static/team/v2/cris.jpg',
    imageAlt: 'Lead Front End Developer',
  },{
    name: 'Dan Engler',
    job: 'North American Community Manager',
    bio:
      'An IT security professional, avid crypto enthusiast and all around hustler who helps keep order on the MyBit\'s Telegram channel',
    linkedin: '',
    imageSrc: '/static/team/v2/Dan_Engler.jpg',
    imageAlt: 'North American Community Manager',
  },{
    name: 'Rory Davies',
    job: 'Asia Pacific Community Manager',
    bio:
      'A community manager who’s inspired by the power of blockchain to change business and economics. An active member of the MyBit community, he’s now keeping our Telegram in check.',
    linkedin: '',
    imageSrc: '/static/team/v2/Rory_Davies.jpg',
    imageAlt: 'Asia Pacific Community Manager',
  }
]

export const TEAMS_DATA = {
  title: 'Empowering Disruptive Teams',
  button: {text: 'Learn More', url: LINKS.fund},
  image: '../../static/svgs/mybit_ventures.svg',
  content: `Whether you want to build a project from scratch, contribute to an existing project,
  or hunt for bugs, MyBit Ventures is here to support everyone who’s serious about our
  Network and the broader Ethereum community.`,
}

export const EVENTS_DATA = {
  title: 'Upcoming Events',
  button: {text: 'Find an Event', url: LINKS.events, external: true},
  imageUrl: '/static/assets/event-graphic2.png'
}

export const NEWS_DATA = {
  title: 'Latest News',
  button: {text: 'Read More', url: LINKS.news, external: true},
  imageUrl: '/static/assets/news-banner.png'
}

export const DEVELOPERS_DATA = {
  title: 'Developers',
  button: {text: 'Get Started', url: LINKS.devs, external: true},
  image: {url: null, alt: 'Code image' },
  content: `We believe in making development effective, efficient and fun. This is why we have designed the MyBit Software Development Kit (SDK) to streamline development. It enables engineers to quickly get concepts off the ground and focus on building the future.`,
}

export const APPS_HIGHLIGHTS = {
title: 'Applications Powered by MyBit',
description: 'MyBit’s applications offer a new way of owning and distributing wealth. Our applications include everything from investment platforms to payrolls, wills, trusts, and much more. They’re secure, efficient and cost-effective, letting users avoid middlemen and third party fees.',
button: {text: 'View More', url: LINKS.applications},
applications:[{
  id: 1,
  name: 'myBitGo',
  imageUrl: '/static/svgs/my-bit-apps/my-bit-go.svg',
  button: {text: 'Try Now', url: LINKS.mybitGo},
  content:'IoT investment platform '
},
{
  id: 10,
  name: 'myBitMobileIOs',
  imageUrl: '/static/svgs/my-bit-apps/my-bit-mobile.svg',
  button: {text: 'Try Now', url: LINKS.iosMobileWallet},
  content:'iOS mobile wallet'
},
{
  id: 2,
  name: 'myBitMobileAndroid',
  imageUrl: '/static/svgs/my-bit-apps/my-bit-mobile.svg',
  button: {text: 'Try Now', url: LINKS.androidMobileWallet},
  content:'Android mobile wallet'
},
{
  id: 3,
  name: 'myBitTrust',
  imageUrl: '/static/svgs/my-bit-apps/trust.svg',
  button: {text: 'Try Now', url: LINKS.mybitTrust},
  content:'Trust fund for distributing Blockchain assets'
},
{
  id: 4,
  name: 'myBitWill',
  imageUrl: '/static/svgs/my-bit-apps/will.svg',
  button: {text: 'Try Now', url: LINKS.mybitWill},
  content:'Blockchain-based wills for distributing assets'
},
{
  id: 7,
  name: 'myBitDropzone',
  imageUrl: '/static/svgs/my-bit-apps/drop-zone.svg',
  button: {text: 'Try Now', url: LINKS.dropzone},
  content:'Simple and efficient crypto airdrops'
},
{
  id: 5,
  name: 'myBitOptions',
  imageUrl: '/static/svgs/my-bit-apps/options.svg',
  button: {text: 'Coming Soon', url: LINKS.mybitOptions, type: 'bordered', disabled:true},
  content:'Automating company token and stock option distributions'
},
{
  id: 6,
  name: 'myBitFork',
  imageUrl: '/static/svgs/my-bit-apps/fork.svg',
  button: {text: 'Coming Soon', url: LINKS.fork, type: 'bordered', disabled:true},
  content: 'Decentralised bill-splitting'
},
{
  id: 8,
  name: 'myBitMydax',
  imageUrl: '/static/svgs/my-bit-apps/mydax.svg',
  button: {text: 'Coming Soon', url: LINKS.mydax, type: 'bordered', disabled:true},
  content:'Decentralised IoT asset exchange'
},
{
  id: 9,
  name: 'myBitPayroll',
  displayPage: 'aplications',
  imageUrl: '/static/svgs/my-bit-apps/payroll-01.svg',
  button: {text: 'Coming Soon', url: LINKS.mybitPayroll, type: 'bordered', disabled:true},
  content: 'Smart contract-based payroll automation'
},
{
  id: 11,
  name: 'myBitCheque',
  displayPage: 'aplications',
  imageUrl: '/static/svgs/my-bit-apps/cheque.svg',
  button: {text: 'Coming Soon', url: '#', type: 'bordered', disabled:true},
  content:'Request payments in cryptocurrency'
},
{
  id: 12,
  name: 'myBitSavings',
  displayPage: 'aplications',
  imageUrl: '/static/svgs/my-bit-apps/my-bit-savings.svg',
  button: {text: 'Coming Soon', url: '#', type: 'bordered', disabled:true},
  content:'Automate saving money while you spend'
},
{
  id: 13,
  name: 'myBitBudget',
  displayPage: 'aplications',
  imageUrl: '/static/svgs/my-bit-apps/my-bit-budget.svg',
  button: {text: 'Coming Soon', url: '#', type: 'bordered', disabled:true},
  content:'Put limits on the amount you spend'
},
]
};

export const LATEST_NEWS = [{
  imageSrc: '/static/assets/news-banner.png',
  title: 'Latest news',
  innerTitle: 'Data',
  content: '<p>Our Network succeeds with cutting edge technology and an amazing community</p>',
  link: 'https://medium.com/mybit-dapp',
  buttonLabel: 'Read more',
  newTab: true,
},{
  imageSrc: '/static/assets/event-graphic2.png',
  title: 'Upcoming events',
  innerTitle: 'Zug',
  content: '<p>April 1st, 2018 in Zug, Switzerland</p>',
  link: '/community#events',
  buttonLabel: 'Attend',
  newTab: false,
}]

export const FORM_PROPS_MAILCHIMP = {
  action: '//mybit.us15.list-manage.com/subscribe/post?u=af48b1fdb5278fd9884338f23&id=dbcac41639',
  messages: {
    inputPlaceholder: "Email",
    btnLabel: "Subscribe",
    sending: "Signing up...",
    success: "Thank you! We will update you about any MyBit developments",
    error: "Oops, please try again with other email"
  },
  styles: {
    sending: {
      fontSize: 18,
      color: "auto"
    },
    success: {
      fontSize: 18,
      color: "#3fd0ae"
    },
    error: {
      fontSize: 18,
      color: "red"
    }
  }
}

export const ACHIEVEMENTS = [{
    title: 'Q1 2017',
    description: 'Idea Conceived'
  }, {
    title: 'Q3 2017',
    description: 'Tokensale August 2017'
  }, {
    title: 'Q4 2017',
    description: 'First 3 partners November 2017'
  }, {
    title: 'Q1 2018',
    description: 'Opens office in Zug, Switzerland'
  }, {
    title: 'Q3 2018',
    description: 'MyBit DApp Inner Alpha'
  }, {
    title: 'Q3 2018',
    description: 'MYDAX Alpha Release'
  }, {
    title: 'Q4 2018',
    description: 'Beta Release'
}];

export const JOIN_COMMUNITY_DATA = {
  title: 'Join the Community',
  subheader: 'get involved and get rewarded',
  url: LINKS.telegram
}

export const SIGN_UP_UPDATES_DATA = {
  title: 'Sign up for Updates',
  subtitle: 'and be the first to get the news',
}

export const EXCHANGES = [{
  imageSrc: '/static/exchanges/bancor.png',
  url: 'https://www.bancor.network/communities/5b16460462bc740001afa01e/currency'
}, {
  imageSrc: '/static/exchanges/latoken.png',
  url: 'https://wallet.latoken.com/market/Crypto/ETH/MYB-ETH'
}, {
  imageSrc: '/static/exchanges/forkdelta.png',
  url: 'https://forkdelta.github.io/#!/trade/MYB-ETH'
}, {
  imageSrc: '/static/exchanges/idex.png',
  url: 'https://idex.market/eth/myb',
  className: "AccessLayer__exchanges-logos--is-idex"
}, {
  imageSrc: '/static/exchanges/ethland.png',
  url: 'https://app.ethlend.io/',
  className: "AccessLayer__exchanges-logos--is-ethland"
}]

export const MEDIA = [{
  title: 'MyBit Mobile DApp',
  content: '<p>The MyBit Decentralised Application (DApp) is the backbone of the MyBit Network. It enables anyone to invest directly in IoT assets. All at a fraction of the cost of traditional platforms and investment funds. The MyBit DApp is the future of investing.</p>',
}, {
  title: 'IoT Asset Tracker',
  content: '<p>View all of your MyBit Asset Investments in one place. It’s essentially the blockfolio for IoT assets on the MyBit Platform!</p>'
}];
