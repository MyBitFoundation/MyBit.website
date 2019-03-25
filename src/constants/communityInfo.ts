import entrepreneurs from '@images/developers.svg'
import developers from '@images/entrepreneurs.svg'
import contributors from '@images/contributors.svg'
import { CommunityInfoProps } from '@components/CommunityInfo'
export const communityInfoData: CommunityInfoProps[] = [
  {
    icon: developers,
    title: 'Developers',
    textStart: 'can leverage our open source resources like the ',
    blueWord: 'MyBit SDK',
    link: 'https://developer.mybit.io/portal/',
    textEnd: ' to quickly build, deploy, and test new applications on the Ethereum Blockchain.'
  },
  {
    icon: entrepreneurs,
    title: 'Entrepreneurs',
    textStart: 'can pitch innovative product ideas to the community who will vote to award project funding through ',
    blueWord: 'MyBit Ventures',
    link: '/ventures',
    textEnd: '.'
  },
  {
    icon: contributors,
    title: 'Contributors',
    textStart: 'can both access the ',
    blueWord: 'Task.Market',
    link: 'https://task.market',
    textEnd: ' to get involved and be rewarded financially for contributing to the growth and development of the MyBit Ecosystem.'
  }
]