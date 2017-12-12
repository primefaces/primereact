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
        header: PropTypes.string,
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

    componentWillMount() {
        this.id = this.props.id || UniqueComponentId();
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
        let id = this.id + '_header_' + index;
        let ariaControls = this.id + '_content_' + index;

        return (
            <li className={className} role="presentation" style={tab.props.headerStyle}>
                <a role="tab" href={'#' + ariaControls} onClick={(e) => this.onTabHeaderClick(e, tab, index)} id={id} aria-controls={ariaControls} aria-selected={selected} >
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
            let id = this.id + '_content_' + index;
            let ariaLabelledBy = this.id + '_header_' + index;

            return (
                <div id={id} aria-labelledby={ariaLabelledBy} aria-hidden={!selected} className={className} style={tab.props.contentStyle} role="tabpanel">
                    {tab.props.children}
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