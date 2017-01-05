import React, {Component} from 'react';
import DomHandler from '../utils/DomHandler';
import classNames from 'classnames';

export class Growl extends Component {

    static defaultProps = {
        closable: true,
        className: null,
        style: null,
        onClear: null
    }

    static propTypes = {
        closable: React.PropTypes.bool,
        className: React.PropTypes.string,
        style: React.PropTypes.object,
        onClear: React.PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {messages:this.props.value};
        this.clear = this.clear.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({messages:nextProps.value});
    }

    clear(event) {
        this.setState({messages:[]});
        if(this.props.onClear) {
            this.props.onClear();
        }
        this.removed = true;
        event.preventDefault();
    }

    remove(event, msg, index) {
        var element = event.target.parentElement.parentElement;
        DomHandler.fadeOut(element, 250);
        setTimeout(() => {
            this.removed = true;
            var msgs = [...this.state.messages];
            msgs.splice(index, 1);
            this.setState({messages: msgs});
        }, 250);
    }

    componentDidMount() {
        DomHandler.fadeIn(this.container, 250);
    }

    componentDidUpdate() {
        if(!this.removed) {
            DomHandler.fadeIn(this.container, 250);
        }
        this.removed = false;
    }

    render() {
        var className = classNames('ui-growl ui-widget', this.props.className);

        if(this.state.messages) {
            var messageItems = this.state.messages.map((msg, index) => {
            var severity = msg.severity;
            var messageClassName = classNames('ui-growl-item-container ui-state-highlight ui-corner-all ui-shadow', {
                'ui-growl-message-info': severity === 'info',
                'ui-growl-message-warn': severity === 'warn',
                'ui-growl-message-error': severity === 'error',
                'ui-growl-message-success': severity === 'success'
            });

            var iconClassName = classNames('ui-growl-image fa fa-2x', {
                'fa-info': severity === 'info',
                'fa-warning': severity === 'warn',
                'fa-close': severity === 'error',
                'fa-check': severity === 'success'
            });
            
            return <div className={messageClassName} aria-live="polite" key={msg.summary + msg.detail}>
                        <div className="ui-growl-item ui-helper-clearfix">
                            <div className="ui-growl-icon-close fa fa-close" onClick={(event) => this.remove(event, msg, index)}></div>
                            <span className={iconClassName}></span>
                            <div className="ui-growl-message">
                                <span className="ui-growl-title">{msg.summary}</span>
                                <p>{msg.detail}</p>
                            </div>
                        </div>
                    </div>;
            });
        }

        return (
            <div className={className} ref={(el) => {this.container = el;}} style={this.props.style}>
                {messageItems}
            </div>
        );   
    }
}