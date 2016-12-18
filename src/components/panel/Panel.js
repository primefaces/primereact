import React, {Component} from 'react';

export class Panel extends Component {
    
    render() {
        return (
            <div className="ui-panel ui-widget ui-widget-content ui-corner-all">
                {this.props.header != null && <div className="ui-panel-titlebar ui-widget-header ui-helper-clearfix ui-corner-all">
                    <span className="ui-panel-title">{this.props.header}</span>
                </div>}
                <div className="ui-panel-content-wrapper">
                    <div className="ui-panel-content ui-widget-content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

Panel.defaultProps = {
    header: null
}

Panel.propTypes = {
    header: React.PropTypes.any
};