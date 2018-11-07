import React from 'react'
import stylesheet from './cookiesBanner.scss'
import { Button, Icon } from 'antd'
import { links } from '../constants/links';

export class CookiesBanner extends React.Component {
    render() {
        return (
            <React.Fragment>
                <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                <div className="cookiesBanner__wrapper">
                    <div className="cookiesBanner__content">
                        We use cookies for Google Analytics. 
                        <a href={links.privacyPolicy} target="_blank" rel="noopener noreferrer" className="cookiesBanner__link">More information</a>
                        <div className="cookiesBanner__buttons">
                            <Button type="primary" className="cookiesBanner__button-accept">OK</Button>
                            <Button className="cookiesBanner__button-deny">Deny cookies</Button>
                            <Button className="cookiesBanner__button-close"><Icon type="close" theme="outlined" /></Button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

/*<Link href={teamsData.button.url}>*/