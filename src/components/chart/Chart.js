import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils/Utils';

export class Chart extends Component {

    static defaultProps = {
        id: null,
        type: null,
        data: null,
        options: null,
        width: null,
        height: null,
        style: null,
        className: null
    }

    static propTypes = {
        id: PropTypes.string,
        type: PropTypes.string,
        data: PropTypes.object,
        options: PropTypes.object,
        width: PropTypes.string,
        height: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.string
    };

    initChart() {
        import('chart.js/auto').then((module) => {
            if (this.chart) {
                this.chart.destroy();
                this.chart = null;
            }

            if (module && module.default) {
                this.chart = new module.default(this.canvas, {
                    type: this.props.type,
                    data: this.props.data,
                    options: this.props.options
                });
            }
        });
    }

    getCanvas() {
        return this.canvas;
    }

    getChart() {
        return this.chart;
    }

    getBase64Image() {
        return this.chart.toBase64Image();
    }

    generateLegend() {
        if(this.chart) {
            this.chart.generateLegend();
        }
    }

    refresh() {
        if(this.chart) {
            this.chart.update();
        }
    }

    reinit() {
        this.initChart();
    }

    shouldComponentUpdate(nextProps) {
        if (nextProps.data === this.props.data && nextProps.options === this.props.options && nextProps.type === this.props.type) {
            return false;
        }

        return true;
    }

    componentDidMount() {
        this.initChart();
    }

    componentDidUpdate() {
        this.reinit();
    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.destroy();
            this.chart = null;
        }
    }

    render() {
        let className = classNames('p-chart', this.props.className),
            style = Object.assign({
                width: this.props.width,
                height: this.props.height
            }, this.props.style);

        return (
            <div id={this.props.id} style={style} className={className}>
                <canvas ref={(el) => {this.canvas = el;}} width={this.props.width} height={this.props.height}></canvas>
            </div>
        );
    }
}
