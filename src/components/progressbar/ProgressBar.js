import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class ProgressBar extends Component {

    static defaultProps = {
        id: null,
        value: null,
        showValue: true,
        unit: '%',
        style: null,
        className: null,
        mode: 'determinate'
    }

    static propTypes = {
        id: PropTypes.string,
        value: PropTypes.number,
        showValue: PropTypes.bool,
        unit: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.string,
        mode: PropTypes.string
    };

    render() {
        var className = classNames('ui-progressbar ui-widget ui-widget-content ui-corner-all', this.props.className, {'ui-progressbar-determinate': (this.props.mode === 'determinate'), 'ui-progressbar-indeterminate': (this.props.mode === 'indeterminate')});
        if(this.props.showValue) {
            var label = <div className="ui-progressbar-label" style={{display: this.props.value ? 'block' : 'none'}}>{this.props.value + this.props.unit}</div>;
        } 

        return (
            <div id={this.props.id} className={className} role="progressbar" aria-valuemin="0" aria-valuenow={this.props.value} aria-valuemax="100" style={this.props.style}>
                <div className="ui-progressbar-value ui-progressbar-value-animate ui-widget-header ui-corner-all" style={{width: this.props.value + '%', display: 'block'}}></div>
                {label}
            </div>
        );
    }

}