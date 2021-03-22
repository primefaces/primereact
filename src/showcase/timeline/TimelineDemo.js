import React, { Component } from 'react';
import { Timeline } from '../../components/timeline/Timeline';
import { Card } from '../../components/card/Card';
import { Button } from '../../components/button/Button';
import { AppInlineHeader } from '../../AppInlineHeader';
import { TimelineDoc } from './TimelineDoc';
import './TimelineDemo.scss';

export class TimelineDemo extends Component {

    constructor(props) {
        super(props);

        this.events1 = [
            { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
            { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
            { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
            { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
        ];

        this.events2 = [
            '2020', '2021', '2022', '2023'
        ];
    }

    render() {
        const customizedMarker = (item) => {
            return (
                <span className="custom-marker p-shadow-2" style={{ backgroundColor: item.color }}>
                    <i className={item.icon}></i>
                </span>
            );
        };

        const customizedContent = (item) => {
            return (
                <Card title={item.status} subTitle={item.date}>
                    { item.image && <img src={`showcase/demo/images/product/${item.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.name} width={200} className="p-shadow-2" />}
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                    <Button label="Read more" className="p-button-text"></Button>
                </Card>
            );
        };

        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="timeline">
                        <h1>Timeline</h1>
                        <p>Timeline visualizes a series of chained events.</p>
                    </AppInlineHeader>
                </div>
                <div className="content-section implementation timeline-demo">
                    <div className="card">
                        <h5>Left Align</h5>
                        <Timeline value={this.events1} content={(item) => item.status} />
                    </div>

                    <div className="card">
                        <h5>Right Align</h5>
                        <Timeline value={this.events1} align="right" content={(item) => item.status} />
                    </div>

                    <div className="card">
                        <h5>Alternate Align</h5>
                        <Timeline value={this.events1} align="alternate" content={(item) => item.status} />
                    </div>

                    <div className="card">
                        <h5>Opposite Content</h5>
                        <Timeline value={this.events1} opposite={(item) => item.status} content={(item) => <small className="p-text-secondary">{item.date}</small>} />
                    </div>

                    <div className="card">
                        <h5>Customized</h5>
                        <Timeline value={this.events1} align="alternate" className="customized-timeline" marker={customizedMarker} content={customizedContent} />
                    </div>

                    <div className="card">
                        <h5>Horizontal</h5>
                        <h6>Top Align</h6>
                        <Timeline value={this.events2} layout="horizontal" align="top" content={(item) => item} />

                        <h6>Bottom Align</h6>
                        <Timeline value={this.events2} layout="horizontal" align="bottom" content={(item) => item} />

                        <h6>Alternate Align</h6>
                        <Timeline value={this.events2} layout="horizontal" align="alternate" content={(item) => item} opposite={<span>&nbsp;</span>} />
                    </div>
                </div>

                <TimelineDoc />
            </div>
        );
    }
}
