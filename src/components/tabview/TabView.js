import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class TabPanel extends Component {
    
    static defaultProps = {
        header: null
    }

    static propTypes = {
        header: PropTypes.string
    };

    render() {        
        return <div>{this.props.children}</div>;
    }
}

export class TabView extends Component {

    static defaultProps = {
        id: null,
        activeIndex: null
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
                                    <span className="ui-tabview-title">{tab.props.header}</span>
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