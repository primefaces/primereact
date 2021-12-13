import React, { Component } from 'react';
import { Rating } from '../../components/lib/rating/Rating';
import { RatingDoc } from '../../components/doc/rating';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

export default class RatingDemo extends Component {

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
                <Head>
                    <title>React Rating Component</title>
                    <meta name="description" content="Rating componentsis a star based selection input." />
                </Head>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Rating</h1>
                        <p>Rating componentsis a star based selection input.</p>
                    </div>

                    <DocActions github="rating/index.js" />
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
