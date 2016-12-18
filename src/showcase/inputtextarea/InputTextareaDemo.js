import React, {Component} from 'react';
import {InputTextarea} from '../../components/inputtextarea/InputTextarea';

export class InputTextareaDemo extends Component {
        
    resize () {
        let linesCount = 0,
        lines = this.el.nativeElement.value.split('\n');

        for(let i = lines.length-1; i >= 0 ; --i) {
            linesCount += Math.floor((lines[i].length / this.colsDefault) + 1);
        }

        this.rows = (linesCount >= this.rowsDefault) ? (linesCount + 1) : this.rowsDefault;
    }

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>InputTextarea</h1>
                        <p>Inputtextarea add styling and autoResize functionality to standard textare element.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Default</h3>
                    <InputTextarea rows={5} cols={30}></InputTextarea>

                    <h3>AutoResize</h3>
                    <InputTextarea rows={5} cols={30} autoResize={true}></InputTextarea>
                </div>
            </div>
        )
    }
}
