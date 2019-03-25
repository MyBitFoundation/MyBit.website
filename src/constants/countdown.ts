export const MYBIT_TOKEN_SALE_API_ENDPOINT = 'https://api.mybit.io/token-sale';
export const MYBIT_TOKEN_SALE_WEBSITE = 'https://td.mybit.io';
export const DAY_IN_SECONDS = 86400;
export const MINUTE_IN_MILLISECONDS = 60000;
export const DAY_IN_MILLISECONDS = 86400000;

export const getSecondsUntilNextPeriod = (timestampStartTokenSale: any) => {
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