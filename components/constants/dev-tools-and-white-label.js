import {links} from './links';
export const devToolsData = [
  {
    title: 'Developer Tools',
    className: 'first',
    type: 'dark',
    content:
    <p>
      The MyBit SDK is a suite of tools that allow developers
      to build decentralised wealth management applications on top of the
      MyBit Network. Using these tools front-end developers can build
      decentralised asset management platforms of their own using MyBit
      scripts and API's.
    </p>,
    button: {text: 'Get Started', url: links.devs, external: true}
  },
  {
    title: 'White Label Solutions',
    className: 'last',
    type: 'light',
    content:
    <p>
      Often companies understand the importance of innovation to remain competitive,
      however, do not possess the resources required to develop custom solutions.
      This is why we are working to provide pre-packaged wealth management and distribution
      applications including an investment platform, a decentralised exchange, and DAFs
      (decentralised autonomous funds) which enable anyone to roll out the necessary
      infrastructure for operating an investment fund. All decentralised with Ethereum.
      All powered by Mybit.
    </p>
  },
]
