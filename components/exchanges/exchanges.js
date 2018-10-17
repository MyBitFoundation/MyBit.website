import React, { Fragment, Component } from 'react';
import stylesheet from './exchanges.scss';

import { exchanges }  from '../constants/exchanges';

export class Exchanges extends Component {
    render() {
      return (
        <Fragment>
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          <div className="Exchanges__wrapper">
            <div className="Exchanges__header">Exchanges</div>
            <div className="Exchanges__container">
              {Object.keys(exchanges).map(logo => (
                <a key={logo} className="Exchanges__container-img-wrapper" href={exchanges[logo].link} rel='noopener noreferrer' target='_blank'>
                  <img src={exchanges[logo].image}></img>
                </a>
              ))}
            </div>
          </div>
        </Fragment>
      );
    }
}
