import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import UniqueComponentId from '../utils/UniqueComponentId';

export class TabPanel extends Component {

    static defaultProps = {
        header: null,
        leftIcon: null,
        rightIcon: null,
        disabled: false,
        headerStyle: null,
        headerClassName: null,
        contentStyle: null,
        contentClassName: null
    }

    static propTypes = {
        header: PropTypes.any,
        leftIcon: PropTypes.string,
        rightIcon: PropTypes.string,
        disabled: PropTypes.bool,
        headerStyle: PropTypes.object,
        headerClassName: PropTypes.string,
        contentStyle: PropTypes.object,
        contentClassName: PropTypes.string
    };

}

export class TabView extends Component {

    static defaultProps = {
        id: null,
        activeIndex: 0,
        style: null,
        className: null,
        renderActiveOnly: true,
        onTabChange: null
    }

    static propTypes = {
        id: PropTypes.string,
        activeIndex: PropTypes.number,
        style: PropTypes.object,
        className: PropTypes.string,
        renderActiveOnly: PropTypes.bool,
        onTabChange: PropTypes.func
    };

    constructor(props) {
        super(props);
        if (!this.props.onTabChange) {
            this.state = {
                activeIndex: this.props.activeIndex
            };
        }

        this.id = this.props.id || UniqueComponentId();
    }

    isSelected(index) {
        const activeIndex = this.props.onTabChange ? this.props.activeIndex : this.state.activeIndex;

        return (activeIndex === index);
    }

    onTabHeaderClick(event, tab, index) {
        if (!tab.props.disabled) {
            if (this.props.onTabChange) {
                this.props.onTabChange({originalEvent: event, index: index});
            }
            else {
                this.setState({
                    activeIndex: index
                });
            }
        }

        event.preventDefault();
    }

    renderTabHeader(tab, index) {
        const selected = this.isSelected(index);
        const className = classNames(tab.props.headerClassName, 'p-unselectable-text', {'p-tabview-selected p-highlight': selected, 'p-disabled': tab.props.disabled});
        const id = this.id + '_header_' + index;
        const ariaControls = this.id + '_content_' + index;

        return (
            <li className={className} style={tab.props.headerStyle} role="presentation" >
                <a role="tab" href={'#' + ariaControls} onClick={(event) => this.onTabHeaderClick(event, tab, index)} id={id} aria-controls={ariaControls} aria-selected={selected}>
                    {tab.props.leftIcon && <span className={classNames('p-tabview-left-icon ', tab.props.leftIcon)}></span>}
                    <span className="p-tabview-title">{tab.props.header}</span>
                    {tab.props.rightIcon && <span className={classNames('p-tabview-right-icon ', tab.props.rightIcon)}></span>}
                </a>
            </li>
        );
    }

    renderTabHeaders() {
        return (
            React.Children.map(this.props.children, (tab, index) => {
                return this.renderTabHeader(tab, index);
            })
        );
    }

    renderNavigator() {
        const headers = this.renderTabHeaders();

        return (
            <ul className="p-tabview-nav p-reset" role="tablist">
                {headers}
            </ul>
        );
    }

    renderContent() {
        const contents = React.Children.map(this.props.children, (tab, index) => {
            if (!this.props.renderActiveOnly || this.isSelected(index)) {
                return this.createContent(tab,index);
            }
        })

        return (
            <div className="p-tabview-panels">
                {contents}
            </div>
        );
    }

    createContent(tab, index) {
        const selected = this.isSelected(index);
        const className = classNames(tab.props.contentClassName, 'p-tabview-panel', {'p-hidden': !selected});
        const id = this.id + '_content_' + index;
        const ariaLabelledBy = this.id + '_header_' + index;

        return (
            <div id={id} aria-labelledby={ariaLabelledBy} aria-hidden={!selected} className={className}
                 style={tab.props.contentStyle} role="tabpanel">
                {!this.props.renderActiveOnly ? tab.props.children : (selected && tab.props.children)}
            </div>
        );
    }

    render() {
        const className = classNames('p-tabview p-component p-tabview-top', this.props.className)
        const navigator = this.renderNavigator();
        const content = this.renderContent();

        return (
            <div id={this.props.id} className={className} style={this.props.style}>
                {navigator}
                {content}
            </div>
        );
    }
}
