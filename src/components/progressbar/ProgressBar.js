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
        value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        showValue: PropTypes.bool,
        unit: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.string,
        mode: PropTypes.string
    };

    render() {
        let className = classNames('ui-progressbar ui-widget ui-widget-content ui-corner-all', this.props.className, {'ui-progressbar-determinate': (this.props.mode === 'determinate'), 'ui-progressbar-indeterminate': (this.props.mode === 'indeterminate')});
        if(this.props.showValue) {
            let labelText = (this.props.value && typeof(this.props.value) === "number") ? this.props.value + this.props.unit : (this.props.value||"");
            var label = <div className="ui-progressbar-label" style={{display: this.props.value ? 'block' : 'none'}}>{labelText}</div>;
        } 

        let progressbar = null;
        
        if(this.props.mode === 'indeterminate') {
            let container = (<div className="ui-progressbar-indeterminate-container">
                                <div className="ui-progressbar-value ui-progressbar-value-animate ui-widget-header ui-corner-all" style={{width: this.props.value + '%', display: 'block'}}></div>
                            </div>);

            if(typeof(this.props.value) === "string") {
                progressbar = (<div id={this.props.id} className={className} role="progressbar" aria-label={this.props.value} style={this.props.style}>
                                    {label}
                                    {container}                
                                </div>);
            }
            else {
                progressbar = (<div id={this.props.id} className={className} role="progressbar" aria-valuemin="0" aria-valuenow={this.props.value} aria-valuemax="100" style={this.props.style}>
                                    {label}
                                    {container}                
                                </div>);
            }
        }
        else {
            let valueText = (<div className="ui-progressbar-value ui-progressbar-value-animate ui-widget-header ui-corner-all" style={{width: this.props.value + '%', display: 'block'}}></div>);

            if(typeof(this.props.value) === "string") {
                    progressbar = (<div id={this.props.id} className={className} role="progressbar" aria-label={this.props.value} style={this.props.style}>
                                    {valueText}
                                    {label}
                                </div>);
            }
            else {
                progressbar = (<div id={this.props.id} className={className} role="progressbar" aria-valuemin="0" aria-valuenow={this.props.value} aria-valuemax="100" style={this.props.style}>
                                    {valueText}
                                    {label}
                                </div>);
            }
        }


        return progressbar;
    }

}