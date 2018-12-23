import React from 'react'
import PropTypes from 'prop-types'
import stylesheet from './how-to-use.scss'
import { Row, Col, Card } from 'antd';
import {
  HOW_TO_USE_FIRST,
  HOW_TO_USE_SECOND
} from '../constants/howToUse';

export const HowToUse = ({ graphic }) => {
    return(
        <div className="howToUse">
            <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
            <Row>
                <Col md = {12} xs = {24}>
                    <Row>
                        <Col span={24}>
                        {
                            HOW_TO_USE_FIRST &&
                            <div className={`howToUse-contentWrapper howToUse-contentWrapper--${HOW_TO_USE_FIRST.type}`}>
                                <h2 className='textCard-header header-top-left'>{HOW_TO_USE_FIRST.title}</h2>
                                <div className={`textCard-content textCard-content--${HOW_TO_USE_FIRST.type}`}>
                                    {HOW_TO_USE_FIRST.content}
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
                        HOW_TO_USE_SECOND &&
                        <div className={`howToUse-contentWrapper howToUse-contentWrapper--${HOW_TO_USE_SECOND.type}`}>
                            <h2 className='textCard-header textCard-header--header-top-left'>{HOW_TO_USE_SECOND.title}</h2>
                            <div className={`textCard-content textCard-content--${HOW_TO_USE_SECOND.type}`}>
                                {HOW_TO_USE_SECOND.content}
                            </div>
                        </div>
                    }
                </Col>
            </Row>
        </div>
    )
}
