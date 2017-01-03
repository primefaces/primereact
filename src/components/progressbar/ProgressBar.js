import React, {Component} from 'react';
import classNames from 'classnames';

export class ProgressBar extends Component {

    render() {
        var className = classNames('ui-progressbar ui-widget ui-widget-content ui-corner-all', this.props.className);
        if(this.props.showValue) {
            var label = <div className="ui-progressbar-label" style={{display: this.props.value ? 'block' : 'none'}}>{this.props.value + this.props.unit}</div>;
        } 

        return (
            <div className={className} role="progressbar" aria-valuemin="0" aria-valuenow={this.props.value} aria-valuemax="100" style={this.props.style}>
                <div className="ui-progressbar-value ui-progressbar-value-animate ui-widget-header ui-corner-all" style={{width: this.props.value + '%'}}></div>
                {label}
            </div>
        );
    }

}

ProgressBar.defaultProps = {
    value: null,
    showValue: true,
    unit: '%',
    style: null,
    className: null
}

ProgressBar.propTypes = {
    value: React.PropTypes.number,
    showValue: React.PropTypes.bool,
    unit: React.PropTypes.string,
    style: React.PropTypes.object,
    className: React.PropTypes.string,
};