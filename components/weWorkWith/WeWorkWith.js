import React, { Fragment, Component } from 'react';
import stylesheet from './WeWorkWith.scss';

import { path, partners } from '../constants/we-work-with';

export class WeWorkWith extends Component {
    render() {
      return (
        <Fragment>
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          <div className="WeWorkWith__wrapper">
            <div className="WeWorkWith__header">Who we work with</div>
            <div className="WeWorkWith__container">
              {partners.map(logo => (
                <div key={logo.name} className={`WeWorkWith__container-img-wrapper WeWorkWith__container-img-wrapper--${logo.name}`}>
                  <a href={logo.url} target="_blank" rel="noopener noreferrer">
                    <img src={`${path}${logo.imageName}`} alt={logo.imageAlt}></img>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </Fragment>
      );
    }
}
