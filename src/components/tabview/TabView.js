import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
        header: PropTypes.string,
        leftIcon: PropTypes.string,
        rightIcon: PropTypes.string,
        disabled: PropTypes.bool,
        headerStyle: PropTypes.object,
        headerClassName: PropTypes.string,
        contentStyle: PropTypes.object,
        contentClassName: PropTypes.string
    };

    render() {        
        return (
            <div>{this.props.children}</div>
        );
    }
}

export class TabView extends Component {

    static defaultProps = {
        id: null,
        activeIndex: null,
        style: null,
        className: null
    }

    static propTypes = {
        id: PropTypes.string,
        activeIndex: PropTypes.number,
        style: PropTypes.object,
        className: PropTypes.string
    };
    
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        };
    }
    
    onTabHeaderClick(event, tab, index) {
        if(!tab.props.disabled) {
            this.setState({
                activeIndex: index
            });
            
            if(this.props.onTabChange) {
                this.props.onTabChange({originalEvent: event, index: index});
            }
        }

        event.preventDefault();
    }
         
    componentWillReceiveProps(nextProps) {
        if(nextProps.activeIndex !== this.props.activeIndex) {
            this.setState({
                activeIndex: nextProps.activeIndex
            });
        }
    }
    
    renderTabHeader(tab, index) {
        let selected = this.state.activeIndex === index;
        let className = classNames(tab.props.headerClassName, 'ui-state-default ui-corner-top', {'ui-tabview-selected ui-state-active': selected, 'ui-state-disabled': tab.props.disabled});
        
        return (
            <li className={className} role="tab" style={tab.props.headerStyle}>
                <a href="#" onClick={(e) => this.onTabHeaderClick(e, tab, index)}>
                    {tab.props.leftIcon && <span className={classNames('ui-tabview-left-icon fa', tab.props.leftIcon)}></span>}
                    <span className="ui-tabview-title">{tab.props.header}</span>
                    {tab.props.rightIcon && <span className={classNames('ui-tabview-right-icon fa', tab.props.rightIcon)}></span>}
                </a>
            </li>
        );
    }
    
    renderNavigator() {
        let headers = React.Children.map(this.props.children, (tab, index) => {
                            return this.renderTabHeader(tab, index);
                      });
            
        return (
            <ul className="ui-tabview-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all" role="tablist">
                {headers}
            </ul>
        );
    }
    
    renderContent() {
        let contents = React.Children.map(this.props.children, (tab, index) => {
            let selected = this.state.activeIndex === index;
            let className = classNames(tab.props.contentClassName, 'ui-tabview-panel ui-widget-content', {'ui-helper-hidden': !selected});
            
            return (
                <div className={className} style={tab.props.contentStyle}>
                    {tab}
                </div>
            );
        })
        
        return (
            <div className="ui-tabview-panels">
                {contents}
            </div>
        );
    }

    render() {
        let className = classNames('ui-tabview ui-widget ui-widget-content ui-corner-all ui-tabview-top', this.props.className)
        let navigator = this.renderNavigator();
        let content = this.renderContent();
        
        return (
            <div id={this.props.id} className={className} style={this.props.style}>
                {navigator}
                {content}
            </div>
        );
    }
}