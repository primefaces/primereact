import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DomHandler from '../utils/DomHandler';

export class AccordionTab extends Component {
    
    static defaultProps = {
        header: null,
        disabled: false,
        headerStyle: null,
        headerClassName: null,
        contentStyle: null,
        contentClassName: null
    }
    
    static propTypes = {
        header: PropTypes.string,
        disabled: PropTypes.bool,
        headerStyle: PropTypes.object,
        headerClassName: PropTypes.string,
        contentStyle: PropTypes.object,
        contentClassName: PropTypes.string
    }
}

export class Accordion extends Component {

    static defaultProps = {
        id: null,
        activeIndex: null,
        className: null,
        style: null,
        multiple: false,
        onTabOpen: null,
        onTabClose: null
    }

    static propTypes = {
        id: PropTypes.string,
        activeIndex: PropTypes.any,
        className: PropTypes.string,
        style: PropTypes.object,
        multiple: PropTypes.bool,
        onTabOpen: PropTypes.func,
        onTabClose: PropTypes.func
    };
    
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: props.activeIndex
        };
    }
    componentDidUpdate() {
        if(this.expanding) {
            DomHandler.addClass(this.contentWrapper, 'ui-accordion-content-wrapper-expanding');
            setTimeout(() => {
                DomHandler.removeClass(this.contentWrapper, 'ui-accordion-content-wrapper-expanding');
                this.expanding = false;
            }, 500);
        }
    }


    componentWillReceiveProps(nextProps) {
        this.setState({
            activeIndex: nextProps.activeIndex
        });
    }
    
    onTabClick(event, tab, i) {
        if(!tab.props.disabled) {
            this.expanding = true;
            let selected = this.isSelected(i);

            if(this.props.multiple) {
                var indexes = this.state.activeIndex||[];
                if(selected)
                    indexes = indexes.filter(index => index !== i);
                else
                    indexes = [...indexes,i];

                this.setState({activeIndex: indexes});
            }
            else {
                if(selected)
                    this.setState({activeIndex: null});
                else
                    this.setState({activeIndex: i});
            }

            let callback = selected ? this.props.onTabOpen : this.props.onTabClose;
            if(callback) {
                callback({originalEvent: event, index: i});
            }
        }

        event.preventDefault();
    }

    isSelected(i) {
        return this.props.multiple ? (this.state.activeIndex && this.state.activeIndex.indexOf(i) !== -1) : this.state.activeIndex === i;
    }
    
    renderTabHeader(tab, selected, index) {
        let tabHeaderClass = classNames(tab.props.headerClassName, 'ui-accordion-header ui-state-default ui-corner-all', {'ui-state-active': selected, 'ui-state-disabled': tab.props.disabled});
        
        return (
            <div className={tabHeaderClass} style={tab.props.headerStyle} onClick={(event) => this.onTabClick(event, tab, index)}>
                <span className={classNames('fa fa-fw', {'fa-caret-right': !selected, 'fa-caret-down': selected})}></span>
                <a href="#">{tab.props.header}</a>
            </div>
        );
    }
    
    renderTabContent(tab, selected) {
        let tabContentWrapperClass = classNames(tab.props.contentClassName, 'ui-accordion-content-wrapper',{
                                    'ui-accordion-content-wrapper-collapsed': !selected,
                                    'ui-accordion-content-wrapper-expanded': selected});
        
        return (
            <div ref={(el) => this.contentWrapper = el} className={tabContentWrapperClass} style={tab.props.contentStyle}>
                <div className="ui-accordion-content ui-widget-content">
                    {tab.props.children}
                </div>
            </div>
        );
    } 
    
    renderTab(tab, index) {
        let selected = this.isSelected(index);
        let tabHeader = this.renderTabHeader(tab, selected, index);
        let tabContent = this.renderTabContent(tab, selected);

        return (
            <div key={tab.props.header} className="ui-accordion-tab">
                {tabHeader}
                {tabContent}
            </div>
        );
    }
         
    render() {
        let tabs = React.Children.map(this.props.children, (tab, index) => {
            return this.renderTab(tab, index);
        });
        let className = classNames('ui-accordion ui-widget ui-helper-reset', this.props.className);

        return (
            <div id={this.props.id} className={className} style={this.props.style}>
                {tabs}
            </div>
        );
    }
}