import React, {Component} from 'react';
import classNames from 'classnames';

export class InputText extends Component {
    
    render() {
        var styleClass = classNames('ui-inputtext ui-state-default ui-corner-all ui-widget', this.props.className, {
            'ui-state-disabled': this.props.disabled
        });

        return <input {...this.props} className={styleClass} />;
    }
}

InputText.defaultProps = {};

InputText.propTypes = {};