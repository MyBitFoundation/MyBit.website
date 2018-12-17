import Router from 'next/router'
import TokenSaleDetails from './tokenSaleDetails';
import Countdown from './countdown';
import stylesheet from './banner.scss'
import { getSecondsUntilNextPeriod } from '../constants'

const TOKEN_SALE_DETAILS_BANNER = 2;
const TOKEN_SALE_NOT_STARTED_BANNER = 1;

class Banner extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      // if the server returns a current day that isn't undefined then the token sale has started
      active: this.props.currentDayServer ? TOKEN_SALE_DETAILS_BANNER : TOKEN_SALE_NOT_STARTED_BANNER,
    };
  }

  componentWillReceiveProps(nextProps){
    // client side currentDay starts at 1
    // this code handles the case where the token sale starts (we now have a currentDay/period that is defined)
    // in which case we animate the switch from on banner to the other
    if((nextProps.currentDay > 0 || nextProps.currentDayServer > 0) && this.state.active === TOKEN_SALE_NOT_STARTED_BANNER){
      this.setState({
        active: TOKEN_SALE_DETAILS_BANNER,
      });
    }
  }

  render(){
    const {
      timestampStartTokenSale,
      currentPeriodTotal,
      loaded,
      currentDay,
      currentDayServer,
      price,
    } = this.props;

    const {
      active,
    } = this.state;

    const secondsUntilNextPeriod = getSecondsUntilNextPeriod(
      timestampStartTokenSale
    )

    return (
      <div className="Banner">
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <div className={`Banner__section ${ active == TOKEN_SALE_DETAILS_BANNER ? 'Banner__section--is-active' : undefined}`}>
          <TokenSaleDetails
            {...this.props}
            secondsUntilNextPeriod={secondsUntilNextPeriod}
          />
        </div>
        <div className={`Banner__section ${ active == TOKEN_SALE_NOT_STARTED_BANNER ? 'Banner__section--is-active' : undefined}`}>
          <Countdown
            timestampStartTokenSale={timestampStartTokenSale}
          />
        </div>
      </div>
    )
  }
};

export default Banner;
