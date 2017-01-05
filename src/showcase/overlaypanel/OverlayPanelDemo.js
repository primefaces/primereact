import React, {Component} from 'react';
import {OverlayPanel} from '../../components/overlaypanel/OverlayPanel';
import {Button} from '../../components/button/Button';

export class OverlayPanelDemo extends Component {
        
    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
    }

    onClick(event) {
        this.op.toggle(event);
    }

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>OverlayPanel</h1>
                        <p>OverlayPanel is a container component that can overlay other components on page.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>
                    <p>Click the button to show the panel.</p>
                    <Button type="button" label="Basic" onClick={this.onClick} />

                    <OverlayPanel ref={(el) => {this.op = el;}}>
                        <img src="showcase/resources/demo/images/galleria/galleria1.jpg" alt="Galleria 1" />
                    </OverlayPanel>
                </div>
            </div>
        )
    }
}