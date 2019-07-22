import React, {Component} from 'react'
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import DomHandler from '../utils/DomHandler';
import classNames from 'classnames';
import {PickListSubList} from './PickListSubList';
import {PickListControls} from './PickListControls';
import {PickListTransferControls} from './PickListTransferControls';

export class PickList extends Component {

    static defaultProps = {
        id: null,
        source: null,
        target: null,
        sourceHeader: null,
        targetHeader: null,
        style: null,
        className: null,
        sourceStyle: null,
        targetStyle: null,
        responsive: false,
        showSourceControls: true,
        showTargetControls: true,
        metaKeySelection: true,
        tabIndex: '0',
        itemTemplate: null,
        onChange: null,
        onMoveToSource: null,
        onMoveAllToSource: null,
        onMoveToTarget: null,
        onMoveAllToTarget: null,
        onSourceSelect: null,
        onTargetSelect: null
    }

    static propTypes = {
        id: PropTypes.string,
        source: PropTypes.array,
        target: PropTypes.array,
        sourceHeader: PropTypes.string,
        targetHeader: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.string,
        sourcestyle: PropTypes.object,
        targetstyle: PropTypes.object,
        responsive: PropTypes.bool,
        showSourceControls: PropTypes.bool,
        showTargetControls: PropTypes.bool,
        metaKeySelection: PropTypes.bool,
        tabIndex: PropTypes.string,
        itemTemplate: PropTypes.func,
        onChange: PropTypes.func,
        onMoveToSource: PropTypes.func,
        onMoveAllToSource: PropTypes.func,
        onMoveToTarget: PropTypes.func,
        onMoveAllToTarget: PropTypes.func,
        onSourceSelect: PropTypes.func,
        onTargetSelect: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.state = {
            selectedItemsSource: [], 
            selectedItemsTarget: []
        };
        
        this.onSourceReorder = this.onSourceReorder.bind(this);
        this.onTargetReorder = this.onTargetReorder.bind(this);
        this.onTransfer = this.onTransfer.bind(this);
    }
    
    onSourceReorder(event) {
        this.handleChange(event, event.value, this.props.target);
        this.reorderedListElement = this.sourceListElement;
        this.reorderDirection = event.direction;
    }
    
    onTargetReorder(event) {
        this.handleChange(event, this.props.source, event.value);
        this.reorderedListElement = this.targetListElement;
        this.reorderDirection = event.direction;
    }
        
    handleScrollPosition(listElement, direction) {
        switch(direction) {
            case 'up':
                this.scrollInView(listElement, -1);
            break;
            
            case 'top':
                listElement.scrollTop = 0;
            break;
            
            case 'down':
                this.scrollInView(listElement, 1);
            break;
            
            case 'bottom':
                listElement.scrollTop = listElement.scrollHeight;
            break;
            
            default:
            break;
        }
    }
    
    handleChange(event, source, target) {
        if(this.props.onChange) {
            this.props.onChange({
                event: event.originalEvent,
                source: source,
                target: target,
            });
        }
    }
    
    onTransfer(event) {        
        switch(event.direction) {
            case 'toTarget':
                if(this.props.onMoveToTarget) {
                    this.props.onMoveToTarget({
                        originalEvent: event.originalEvent,
                        value: this.state.selectedItemsSource
                    })
                }
            break;
            
            case 'allToTarget':
                if(this.props.onMoveAllToTarget) {
                    this.props.onMoveAllToTarget({
                        originalEvent: event.originalEvent,
                        value: this.props.source
                    })
                }
            break;
            
            case 'toSource':
                if(this.props.onMoveToSource) {
                    this.props.onMoveToSource({
                        originalEvent: event.originalEvent,
                        value: this.state.selectedItemsTarget
                    })
                }
            break;
            
            case 'allToSource':
                if(this.props.onMoveAllToSource) {
                    this.props.onMoveAllToSource({
                        originalEvent: event.originalEvent,
                        value: this.props.target
                    })
                }
            break;
            
            default:
            break;
        }
        
        this.setState({
            selectedItemsSource: [], 
            selectedItemsTarget: []
        });
        this.handleChange(event, event.source, event.target);
    }
        
    scrollInView(listElement, direction) {
        let listContainer = DomHandler.findSingle(listElement, '.p-picklist-list');
        let listItems = listContainer.getElementsByClassName('p-highlight');
        let listItem;
        
        if(direction === -1)
            listItem = listItems[0];
        else if(direction === 1)
            listItem = listItems[listItems.length - 1];
            
        DomHandler.scrollInView(listContainer, listItem);
    }

    onSelectionChange(e, stateKey, callback) {
        this.setState({[stateKey]: e.value});

        if (callback) {
            callback(e);
        }
    }
    
    componentDidUpdate() {
        if(this.reorderedListElement) {
            this.handleScrollPosition(this.reorderedListElement, this.reorderDirection);
            this.reorderedListElement = null;
            this.reorderDirection = null;
        }
    }

    render() {
        let className = classNames('p-picklist p-component', this.props.className, {
            'p-picklist-responsive': this.props.responsive
        });
        
        return (
            <div id={this.props.id} className={className} style={this.props.style}>
                {this.props.showSourceControls && <PickListControls list={this.props.source} selection={this.state.selectedItemsSource} 
                            onReorder={this.onSourceReorder} className="p-picklist-source-controls" />}
                
                <PickListSubList ref={(el) => this.sourceListElement = ReactDOM.findDOMNode(el)} list={this.props.source} selection={this.state.selectedItemsSource} onSelectionChange={(e) => this.onSelectionChange(e, 'selectedItemsSource', this.props.onSourceSelect)} itemTemplate={this.props.itemTemplate} 
                    header={this.props.sourceHeader} style={this.props.sourceStyle} className="p-picklist-source-wrapper" listClassName="p-picklist-source" metaKeySelection={this.props.metaKeySelection} tabIndex={this.props.tabIndex}/>
                
                <PickListTransferControls onTransfer={this.onTransfer} source={this.props.source} target={this.props.target} 
                    sourceSelection={this.state.selectedItemsSource} targetSelection={this.state.selectedItemsTarget} />
                
                <PickListSubList ref={(el) => this.targetListElement = ReactDOM.findDOMNode(el)} list={this.props.target} selection={this.state.selectedItemsTarget} onSelectionChange={(e) => this.onSelectionChange(e, 'selectedItemsTarget', this.props.onTargetSelect)}  itemTemplate={this.props.itemTemplate} 
                    header={this.props.targetHeader} style={this.props.targetStyle} className="p-picklist-target-wrapper" listClassName="p-picklist-targe" metaKeySelection={this.props.metaKeySelection} tabIndex={this.props.tabIndex}/>
                
                {this.props.showTargetControls && <PickListControls list={this.props.target} selection={this.state.selectedItemsTarget} 
                            onReorder={this.onTargetReorder} className="p-picklist-target-controls" />}
            
            </div>
        );
    }
}