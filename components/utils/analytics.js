import ReactGA from 'react-ga'
import TwitterConvTrkr from "react-twitter-conversion-tracker"

export const initTwitterConvTrkr = () => {
  TwitterConvTrkr.init("o0chy");
}

export const logTwitterPageView = () => {
  TwitterConvTrkr.pageView();
}

export const initGA = () => {
  ReactGA.initialize('UA-125576919-1')
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action })
  }
}

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal })
  }
}