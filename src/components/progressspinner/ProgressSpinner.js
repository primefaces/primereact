import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class ProgressSpinner extends Component {

    static defaultProps = {
        id: null,
        style: null,
        className: null,
        strokeWidth: "2",
        fill: "none",
        animationDuration: "2s"
    };

    static propTypes = {
        id: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.string,
        strokeWidth: PropTypes.string,
        fill: PropTypes.string,
        animationDuration: PropTypes.string
    };

    render() {
        let spinnerClass = classNames('p-progress-spinner',this.props.className);

        return <div id={this.props.id} style={this.props.style} className={spinnerClass} role="alert" aria-busy={true}>
            <svg className="p-progress-spinner-svg" viewBox="25 25 50 50" style={{animationDuration: this.props.animationDuration}}>
                <circle className="p-progress-spinner-circle" cx="50" cy="50" r="20" fill={this.props.fill}
                        strokeWidth={this.props.strokeWidth} strokeMiterlimit="10"/>
            </svg>
        </div>;
    }
}
