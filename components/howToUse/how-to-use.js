import React from 'react'
import PropTypes from 'prop-types'
import stylesheet from './how-to-use.scss'
import { Row, Col, Card } from 'antd';
import { howToUseFirst, howToUseSecond } from '../constants/howToUse';

export const HowToUse = ({ graphic }) => {
    return(
        <div className="howToUse">
            <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
            <Row>
                <Col md = {12} xs = {24}>
                    <Row>
                        <Col span={24}>
                        {
                            howToUseFirst &&
                            <div className={`howToUse-contentWrapper howToUse-contentWrapper--${howToUseFirst.type}`}>
                                <h2 className='textCard-header header-top-left'>{howToUseFirst.title}</h2>
                                <div className={`textCard-content textCard-content--${howToUseFirst.type}`}>
                                    {howToUseFirst.content}
                                </div>
                            </div>
                        }
                        </Col>
                        <Col xs={0} md={24}>
                            <Card bordered={false} className="graphicCard">
                            <div className="graphicCard-imageContainer">
                                {
                                    graphic
                                    && <img src={graphic} alt="Graphic" className="graphic-image"/>
                                }
                            </div>
                            </Card>
                        </Col>
                    </Row>


                </Col>
                <Col md = {12} xs = {24}>
                    {
                        howToUseSecond &&
                        <div className={`howToUse-contentWrapper howToUse-contentWrapper--${howToUseSecond.type}`}>
                            <h2 className='textCard-header textCard-header--header-top-left'>{howToUseSecond.title}</h2>
                            <div className={`textCard-content textCard-content--${howToUseSecond.type}`}>
                                {howToUseSecond.content}
                            </div>
                        </div>
                    }
                </Col>
            </Row>
        </div>
    )
}
