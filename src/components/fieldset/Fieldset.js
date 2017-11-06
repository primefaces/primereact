import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DomHandler from '../utils/DomHandler';

export class Fieldset extends Component {

    static defaultProps = {
        id: null,
        legend: null,
        className: null,
        style: null,
        toggleable: false,
        collapsed: false,
        onExpand: null,
        onCollapse: null
    };

    static propTypes = {
        id: PropTypes.string,
        legend: PropTypes.any,
        className: PropTypes.string,
        style: PropTypes.object,
        toggleable: PropTypes.bool,
        collapsed: PropTypes.bool,
        onExpand: PropTypes.func,
        onCollapse: PropTypes.func
    };
    
    constructor(props) {
        super(props);
        this.state = {collapsed: this.props.collapsed};
        this.toggle = this.toggle.bind(this);
    }

    componentDidUpdate() {
        if(this.props.toggleable && !this.state.collapsed && this.expanding) {
            DomHandler.addClass(this.contentWrapper, 'ui-fieldset-content-wrapper-expanding');

            setTimeout(() => {
                DomHandler.removeClass(this.contentWrapper, 'ui-fieldset-content-wrapper-expanding');
                this.expanding = false;
            }, 500);
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.collapsed !== this.state.collapsed) {
            this.setState({
                collapsed: nextProps.collapsed
            });
        }
    }

    toggle(e) {
        if(this.props.toggleable) {
            if(this.state.collapsed)
                this.expand(e);
            else
                this.collapse(e);
        }

        e.preventDefault();
    }

    expand(event) {
        this.setState({collapsed: false});
        this.expanding = true;
        if(this.props.onCollapse) {
            this.props.onCollapse(event);
        }
    }

    collapse(event) {
        this.setState({collapsed: true});
        if(this.props.onCollapse) {
            this.props.onCollapse(event);
        }
    }

    renderContent() {
        let className = classNames('ui-fieldset-content-wrapper', {
            'ui-fieldset-content-wrapper-collapsed': (this.state.collapsed && this.props.toggleable),
            'ui-fieldset-content-wrapper-expanded': (!this.state.collapsed && this.props.toggleable)
        });

        return (
            <div ref={(el) => this.contentWrapper = el} className={className}>
                <div className="ui-fieldset-content">
                    {this.props.children}
                </div>
            </div>
        );
    }

    render() {
        let content = this.renderContent();
        let className = classNames('ui-fieldset ui-widget ui-widget-content ui-corner-all', this.props.className, {'ui-fieldset-toggleable': this.props.toggleable});

        return (
            <fieldset id={this.props.id} className={className} style={this.props.style}>
                <legend className="ui-fieldset-legend ui-corner-all ui-state-default ui-unselectable-text" onClick={this.toggle}>
                    {this.props.toggleable && <span className={classNames('ui-fieldset-toggler fa fa-fw', {'fa-plus': this.state.collapsed, 'fa-minus': !this.state.collapsed})}></span>}
                    {this.props.legend}
                </legend>
                {content}
            </fieldset>
        );
    }
}