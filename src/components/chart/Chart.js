import React, {Component} from 'react';
import ChartJS from 'chart.js/src/chart.js';

export class Chart extends Component {

    componentDidMount() {
        this.chart = new ChartJS(this.canvas, {
            type: this.props.type,
            data: this.props.data,
            options: this.props.options
        });
    }

    render() {
        return (
            <div style={this.props.style} className={this.props.className}>
                <canvas width={this.props.width} height={this.props.height} ref={(el) => {this.canvas = el;}}></canvas>
            </div>
        );
    }
}

Chart.defaultProps = {
    type: null,
    data: null,
    options: null,
    width: null,
    height: null,
    style: null,
    className: null
}

Chart.propTypes = {
    type: React.PropTypes.string,
    data: React.PropTypes.object,
    options: React.PropTypes.object,
    width: React.PropTypes.string,
    height: React.PropTypes.string,
    style: React.PropTypes.string,
    className: React.PropTypes.string
};