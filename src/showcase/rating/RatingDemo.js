import React, { Component } from 'react';
import { Rating } from '../../components/rating/Rating';
import { AppInlineHeader } from '../../AppInlineHeader';
import { RatingDoc } from './RatingDoc';

export class RatingDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            val1: null,
            val2: null
        };
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="rating" showInputStyle>
                        <h1>Rating</h1>
                        <p>Rating componentsis a star based selection input.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <h5>Basic {this.state.val1}</h5>
                        <Rating value={this.state.val1} onChange={(e) => this.setState({val1: e.value})} />

                        <h5>Without Cancel</h5>
                        <Rating value={this.state.val2} cancel={false} onChange={(e) => this.setState({val2: e.value})} />

                        <h5>ReadOnly</h5>
                        <Rating value={5} readOnly stars={10} cancel={false} />

                        <h5>Disabled</h5>
                        <Rating value={8} disabled stars={10} />
                    </div>
                </div>

                <RatingDoc />
            </div>
        )
    }
}
