import React, {Component} from 'react';

export class TabView extends Component {
    
    constructor() {
        super();
        this.state = {activeIndex:0};
        this.getTabHeaderClass = this.getTabHeaderClass.bind(this);
    }
    
    onTabClick(event, index) {
        this.setState({activeIndex:index});
        event.preventDefault();
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
                    {this.props.children.map((tab,i) => {
                            return <li className={this.getTabHeaderClass(i)} role="tab">
                                <a href="#" onClick={(e) => this.onTabClick(e,i)}>
                                    <span className="ui-tabview-title">{tab.props.header}</span>
                                </a>
                            </li>
                        })
                    }
                </ul>
                <div className="ui-tabview-panels">
                    {this.props.children.map((tab,i) =>
                        <div className="ui-tabview-panel ui-widget-content" style={this.state.activeIndex === i ? {display:'block'} : {display:'none'}}>
                            {tab}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}