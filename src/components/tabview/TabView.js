import React, {Component} from 'react';

export class TabPanel extends Component {
    
    render() {        
        return <div>{this.props.children}</div>;
    }
}

TabPanel.defaultProps = {
    header: null
}

TabPanel.propTypes = {
    header: React.PropTypes.string
};

export class TabView extends Component {

    static defaultProps = {
        activeIndex: null
    }

    static propTypes = {
        activeIndex: React.PropTypes.number
    };
    
    constructor() {
        super();
        this.state = {activeIndex:0};
        this.getTabHeaderClass = this.getTabHeaderClass.bind(this);
    }
    
    onTabClick(e, i) {
        this.setState({activeIndex:i});
        this.props.onTabChange({originalEvent: e, index: i});
        e.preventDefault();
    }
    
    getTabHeaderClass(index) {
        var styleClass = 'ui-state-default ui-corner-top';
        if(index === this.state.activeIndex) {
            styleClass += ' ui-tabview-selected ui-state-active';
        }
        return styleClass;
    }
    
    render() {
        return (
            <div className="ui-tabview ui-widget ui-widget-content ui-corner-all ui-tabview-top">
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