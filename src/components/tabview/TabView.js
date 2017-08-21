import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class TabPanel extends Component {
    
    static defaultProps = {
        header: null,
        leftIcon:null,
        rightIcon: null
    }

    static propTypes = {
        header: PropTypes.string,
        leftIcon: PropTypes.string,
        rightIcon: PropTypes.string
    };

    render() {        
        return <div>{this.props.children}</div>;
    }
}

export class TabView extends Component {

    static defaultProps = {
        id: null,
        activeIndex: null,
    }

    static propTypes = {
        id: PropTypes.string,
        activeIndex: PropTypes.number
    };
    
    constructor() {
        super();
        this.state = {activeIndex:0};
        this.getTabHeaderClass = this.getTabHeaderClass.bind(this);
    }
    
    onTabClick(e, i) {
        this.setState({activeIndex:i});
        if(this.props.onTabChange) {
            this.props.onTabChange({originalEvent: e, index: i});
        }
        e.preventDefault();
    }
    
    getTabHeaderClass(index) {
        var className = 'ui-state-default ui-corner-top';
        if(index === this.state.activeIndex) {
            className += ' ui-tabview-selected ui-state-active';
        }
        return className;
    }
    
    componentWillMount() {
        if (this.props.activeIndex) {
 		    this.setState({activeIndex: this.props.activeIndex});
 		}
    }
 
    componentWillReceiveProps(nextProps) {
        if (nextProps.activeIndex !== this.props.activeIndex) {
            this.setState({activeIndex: nextProps.activeIndex});
        }
    }

    render() {
        return (
            <div id={this.props.id} className="ui-tabview ui-widget ui-widget-content ui-corner-all ui-tabview-top">
                <ul className="ui-tabview-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all" role="tablist">
                    {React.Children.map(this.props.children, (tab,i) => {
                            return <li className={this.getTabHeaderClass(i)} role="tab">
                                <a href="#" onClick={(e) => this.onTabClick(e,i)}>
                                    {tab.props.leftIcon && <span style={{marginRight:4}} className={classNames('ui-tabview-left-icon fa ',tab.props.leftIcon) }></span>}
                                    <span className="ui-tabview-title">{tab.props.header}</span>
                                    {tab.props.rightIcon && <span style={{marginLeft:4}} className={classNames('ui-tabview-right-icon fa ',tab.props.rightIcon) }></span>}
                                </a>
                            </li>
                        })
                    }
                </ul>
                <div className="ui-tabview-panels">
                    {React.Children.map(this.props.children, (tab,i) => {
                        return <div className="ui-tabview-panel ui-widget-content" style={this.state.activeIndex === i ? {display:'block'} : {display:'none'}}>
                            {tab}
                        </div>
                    })
                }
                </div>
            </div>
        );
    }
}