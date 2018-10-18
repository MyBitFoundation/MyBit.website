import React, { Component, Fragment } from 'react';
import TeamMembers from './team-members';
import stylesheet from './team-section.scss';
import { teamDesc } from '../constants';

export class TeamSection extends Component {
  render() {
    return (
      <Fragment>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <section className="TeamSection">
          <h2 className="TeamSection__header">Meet the Team</h2>
          <TeamMembers team={teamDesc} linkedin={false}/>
        </section>
      </Fragment>
    );
  }
}
