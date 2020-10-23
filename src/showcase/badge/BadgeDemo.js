import React, { Component } from 'react';
import { Button } from '../../components/button/Button';
import './BadgeDemo.scss';
import { BadgeDoc } from './BadgeDoc';

export class BadgeDemo extends Component {
    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Badge</h1>
                        <p>Badge is a small status indicator for another element.</p>
                    </div>
                </div>

                <div className="content-section implementation badge-demo">
                    <div className="card">
                        <h5>Numbers</h5>
                        <div className="badges">
                            <span className="p-badge">2</span>
                            <span className="p-badge p-badge-success">8</span>
                            <span className="p-badge p-badge-info">4</span>
                            <span className="p-badge p-badge-warning">12</span>
                            <span className="p-badge p-badge-danger">3</span>
                        </div>

                        <h5>Tags</h5>
                        <div className="badges">
                            <span className="p-tag">Primary</span>
                            <span className="p-tag p-tag-success">Success</span>
                            <span className="p-tag p-tag-info">Info</span>
                            <span className="p-tag p-tag-warning">Warning</span>
                            <span className="p-tag p-tag-danger">Danger</span>
                        </div>

                        <h5>Pills</h5>
                        <div className="badges">
                            <span className="p-tag p-tag-rounded">Primary</span>
                            <span className="p-tag p-tag-rounded p-tag-success">Success</span>
                            <span className="p-tag p-tag-rounded p-tag-info">Info</span>
                            <span className="p-tag p-tag-rounded p-tag-warning">Warning</span>
                            <span className="p-tag p-tag-rounded p-tag-danger">Danger</span>
                        </div>

                        <h5>Positioned Badge</h5>
                        <span className="p-overlay-badge p-mr-5">
                            <i className="pi pi-bell" style={{ fontSize: '2em' }}></i>
                            <span className="p-badge">2</span>
                        </span>

                        <span className="p-overlay-badge">
                            <Button type="button" label="New" />
                            <span className="p-badge p-badge-warning">5</span>
                        </span>

                        <h5>Inline Button Badge</h5>
                        <Button type="button" label="Emails" badge="8" className="p-mr-2" />
                        <Button type="button" label="Messages" icon="pi pi-users" className="p-button-warning" badge="8" badgeClassName="p-badge-danger" />

                        <h5>Sizes</h5>
                        <div className="badges">
                            <span className="p-badge">2</span>
                            <span className="p-badge p-badge-lg p-badge-sucess">4</span>
                            <span className="p-badge p-badge-xl p-badge-warning">6</span>
                        </div>
                    </div>
                </div>

                <BadgeDoc />
            </div>
        );
    }
}
