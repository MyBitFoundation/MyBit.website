import React, { Fragment, Component } from 'react';
import classNames from 'classnames'
import stylesheet from './roadmap.scss';

export class Roadmap extends Component {
    render() {
      const { events } = this.props;
      return (
        <Fragment>
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          <section className="Roadmap">
            <h2 className='Roadmap__header'>Roadmap</h2>
            <div className='Roadmap__wrapper'>
              <div className='Roadmap__timeline'>
                {events.map((event, index) => (
                  <div
                    key={`${event.title}-${event.description}`}
                    className={classNames({
                    'Roadmap__dot': true,
                    'Roadmap__dot--is-active': event.active,
                  })}>
                    <div className={classNames({
                      'Roadmap__label': true,
                      'Roadmap__label--is-even': (index % 2 === 0),
                      'Roadmap__label--is-odd': (index % 2 === 1),
                    })}>
                      <div className='Roadmap__label-description'>{event.description}</div>
                      <div className='Roadmap__label-title'>{event.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Fragment>
      );
    }
}
