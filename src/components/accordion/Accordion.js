import React, {Component} from 'react';
import classNames from 'classnames';

export class AccordionTab extends Component {
    
}

AccordionTab.defaultProps = {
    header: null
}

AccordionTab.propTypes = {
    header: React.PropTypes.string,
    selected: React.PropTypes.bool
};

export class Accordion extends Component {
    
    constructor() {
        super();
        this.state = {};
    }
    
    onTabClick(e, i) {
        var selected = this.isSelected(i);

        if(this.props.multiple) {
            var indexes = this.state.activeIndex||[];
            if(selected)
                indexes = indexes.filter(index => index !== i);
            else
                indexes.push(i);

            this.setState({activeIndex: indexes});
        }
        else {
            if(selected)
                this.setState({activeIndex: null});
            else
                this.setState({activeIndex: i});
        }

        var callback = selected ? this.props.onTabOpen : this.props.onTabClose;
        if(callback) {
            callback({originalEvent: e, index: i});
        }

        e.preventDefault();
    }

    isSelected(i) {
        return this.props.multiple ? this.state.activeIndex && this.state.activeIndex.includes(i) : this.state.activeIndex === i;
    }
        
    render() {
        return (
            <div className={classNames('ui-accordion ui-widget ui-helper-reset', this.props.className)} style={this.props.style}>
                {this.props.children && this.props.children.map((tab,i) => {
                    var selected = this.isSelected(i);

                    return (
                        <div key={tab.props.header} className="ui-accordion-tab">
                            <div className="ui-accordion-header ui-state-default ui-corner-all" key={tab.props.header}>
                                <span className={classNames('fa fa-fw', {'fa-caret-right': !selected, 'fa-caret-down': selected})}></span>
                                <a href="#" onClick={(e) => this.onTabClick(e, i)}>{tab.props.header}</a>
                            </div>
                            <div className="ui-accordion-content-wrapper" style={{display: selected ? 'block': 'none'}}>
                                <div className="ui-accordion-content ui-widget-content">
                                    {tab.props.children}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

Accordion.defaultProps = {
    activeIndex: null,
    className: null,
    style: null,
    multiple: false,
    onTabOpen: null,
    onTabClose: null
}

Accordion.propTypes = {
    activeIndex: React.PropTypes.any,
    className: React.PropTypes.string,
    style: React.PropTypes.object,
    multiple: React.PropTypes.bool,
    onTabOpen: React.PropTypes.func,
    onTabClose: React.PropTypes.func
};