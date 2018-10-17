//{text: 'Get Started', url: 'https://github.com/MyBitFoundation/'}
import React from 'react'
export const howDoesItWorkDataFirstRow = [
    {
      title: 'Ecosystem Fund',
      color: 'dark-left',
      subscribeForm: true,
      content:
      <div>
        <p>
        The goal of the ecosystem fund is to stimulate new
        growth. It let’s anyone contribute (“lock”) MYB to the
        fund and award it to development teams which have
        been chosen to join the fund and have achieved
        certain milestones.
        </p>
        <p>
        All contributors to the fund will have a voting right to
        select new projects. In return for funding a project, a
        portion of the applications future revenue will be
        returned to the fund.
        </p>

        <p className="coming-soon">Coming soon in 2019</p>
      </div>
    },
    {
      title: 'How does it Work?',
      color: 'light-right',
      transform: 'right-top',
      type: 'light-list',
      paragraph: <p>Successful applications can then join the
                    DDF to rapidly scale development.</p>,
      content:
        <ol>
            <li>Holders of MYB contribute tokens to the fund.</li>
            <li>Development teams follow the application process with their idea.</li>
            <li>Investors of the fund vote to accept or reject a proposal using Blockchain governance protocols.</li>
            <li>If accepted, MYB is escrowed in a smart contract and released to the development team in increments after set milestones are achieved.</li>
            <li>Upon approval funds are distributed from the smart contract.</li>
        </ol>
    }
  ]


export const howDoesItWorkDataSecondRow = [
    {
      title: 'Decentralised'+ '\n'
      +' Development Fund',
      color: 'light-left',
      transform: 'right-top',
      content:
      <div>
        <p>
        The DDF is designed to advance existing projects built on top of MyBit
        by paying people to complete specific microtasks.
        These tasks can consist of new functionality development, security,
        design, marketing or anything else that adds value to a specific
        application built on the MyBit Network.
        </p>
        <p>
        Initially, five million MYB (roughly 2.8% of supply)
        will be allocated as rewards for tasks. Following the
        second phase of the tokensale 50% of raised funds
        (in ETH) will be added to the DDF.
        </p>
      </div>,
      button: {text: 'View Tasks', url: 'https://ddf.mybit.io', external:true}
    },
    {
      title: 'How does it Work?',
      color: 'dark-right',
      type: 'dark-list',
      paragraph: <p>Once governance is added in 2019 it will look like this.</p>,
      content:
      <div>
        <ol>
            <li>Propose feature or task.</li>
            <li>Community votes on feature and allocates funds (in MYB or ETH).</li>
            <li>Task published on the DDF portal and available to contributors.</li>
            <li>Once completed it is reviewed and voted on by community.</li>
            <li>Upon approval, funds are distributed to the contributor.</li>
        </ol>
      </div>
    }
]
