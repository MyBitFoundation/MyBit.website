import React from 'react'
import stylesheet from './how-does-it-work.scss'
import { Col, Card, Button } from 'antd';
import { howDoesItWorkDataFirstRow, howDoesItWorkDataSecondRow   } from '../constants/how-does-it-work-section';
import {InputForm} from '../inputForm/input-form'

export const HowDoesItWork = () => {
    return(
        <div className="HowDoesItWork">
            <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
            <div className="row-flex">
                {howDoesItWorkDataFirstRow.map((data, key) => (
                        <div key={data.title} className={`item item--${data.color}`}>
                            {data.transform &&
                                <div className="HowDoesItWork-triangle-up">
                                </div>
                            }
                            <Card bordered={false} className={`textCard textCard--${data.color}`}>
                                <div className={`textCard-contentWrapper textCard-contentWrapper--${data.color}`}>
                                    <h2 className={!!key ? "textCard-header header-top-left" : "textCard-header header-"}>{data.title}</h2>
                                    <div className="textCard-content">
                                        {data.content}
                                    </div>
                                    {data.button &&
                                    <div className="HowDoesItWork-btnWrapper">
                                        <Button 
                                            type="primary" 
                                            className="HowDoesItWork-btn"
                                            rel={data.button.external ? "noopener noreferrer" : null}
                                            target={data.button.external ? "_blank" : null}
                                        >
                                            {data.button.text}
                                        </Button>
                                    </div>
                                    }
                                    {data.paragraph &&
                                    <Col span={24} className="HowDoesItWork-paragraph-first">
                                        {data.paragraph}
                                    </Col>
                                    }
                                {data.subscribeForm &&
                                    <div className="HowDoesItWork-form">
                                        <InputForm title="Get Updates" placeholder="Your email address"/>
                                    </div>
                                }
                                </div>
                            </Card>
                        </div>
                ))}
            </div>
            <div className="row-flex">
                {howDoesItWorkDataSecondRow.map((data, key) => (
                    <div key={data.title} className={`item item--${data.color}`}>
                        <Card bordered={false} className={`textCard textCard--${data.color}`}>
                            <div className={`textCard-contentWrapper textCard-contentWrapper--${data.color}`}>
                                <h2 className={!!key ? "textCard-header header-top-left" : "textCard-header"}>{data.title}</h2>
                                {data.paragraph &&
                                <div className="HowDoesItWork-paragraph-second">
                                    {data.paragraph}
                                </div>
                                }
                                <div className={`textCard-content textCard-content--${data.type}`}>
                                    {data.content}
                                </div>
                                {data.button &&
                                <div className="DevTools-btnWrapper">
                                    <Button 
                                        type="primary" 
                                        className="DevTools-btn" 
                                        href={data.button.url} 
                                        rel={data.button.external ? "noopener noreferrer" : null}
                                        target={data.button.external ? "_blank" : null}
                                    >
                                        {data.button.text}
                                    </Button>
                                </div>
                                }
                            </div>
                        </Card>
                        {data.transform &&
                            <div className="HowDoesItWork-triangle-down">
                            </div>
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}
