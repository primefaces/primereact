import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { Button } from '../button/Button'
import DomHandler from '../utils/DomHandler'
import classNames from 'classnames'

export class PickList extends Component {

    static defaultProps = {
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
        onMoveToTarget: null,
        onMoveToSource: null,
        itemTemplate: null
    }

    static propsTypes = {
        source: PropTypes.array,
        target: PropTypes.array,
        sourceHeader: PropTypes.string,
        targetHeader: PropTypes.string,
        style: PropTypes.string,
        className: PropTypes.string,
        sourceStyle: PropTypes.string,
        targetStyle: PropTypes.string,
        responsive: PropTypes.bool,
        showSourceControls: PropTypes.bool,
        showTargetControls: PropTypes.bool,
        onMoveToTarget: PropTypes.func,
        onMoveToSource: PropTypes.func,
        itemTemplate: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.state = {source: this.props.source, target: this.props.target, selectedItemsSource: [], selectedItemsTarget: []};
    }

    onItemClick(event, item, selectedItems, listElement) {
        let _selectedItems = [...selectedItems];
        let metaKey = (event.metaKey||event.ctrlKey);
        let index = this.findIndexInSelection(item,_selectedItems);
        let selected = (index !== -1);
        
        if(selected && metaKey) {
            _selectedItems.splice(index, 1);
        }
        else {
            if(!metaKey) {
                _selectedItems.length = 0;
            }         
            _selectedItems.push(item);
        }

        this.saveSelectedItemsState(listElement, _selectedItems);
    }

    moveUp(listElement, list, selectedItems) {
        if(selectedItems && selectedItems.length) {
            list = [...list];

            for(let i = 0; i < selectedItems.length; i++) {
                let selectedItem = selectedItems[i];
                let selectedItemIndex = this.findIndexInList(selectedItem, list);

                if(selectedItemIndex !== 0) {
                    let movedItem = list[selectedItemIndex];
                    let temp = list[selectedItemIndex-1];
                    list[selectedItemIndex-1] = movedItem;
                    list[selectedItemIndex] = temp;
                }
                else {
                    break;
                }
            }
            
            this.saveListState(listElement, list);
            this.movedUp = true;
            this.reorderedListElement = listElement;
        }
    }

    moveTop(listElement, list, selectedItems) {
        if(selectedItems && selectedItems.length) {
            list = [...list];

            for(let i = 0; i < selectedItems.length; i++) {
                let selectedItem = selectedItems[i];
                let selectedItemIndex = this.findIndexInList(selectedItem, list);

                if(selectedItemIndex !== 0) {
                    let movedItem = list.splice(selectedItemIndex,1)[0];
                    list.unshift(movedItem);
                }
                else {
                    break;
                }
            }

            this.saveListState(listElement, list);
            listElement.scrollTop = 0;
        }
    }

    moveDown(listElement, list, selectedItems) {
        if(selectedItems && selectedItems.length) {
            list = [...list];

            for(let i = selectedItems.length - 1; i >= 0; i--) {
                let selectedItem = selectedItems[i];
                let selectedItemIndex = this.findIndexInList(selectedItem, list);

                if(selectedItemIndex !== (list.length - 1)) {
                    let movedItem = list[selectedItemIndex];
                    let temp = list[selectedItemIndex+1];
                    list[selectedItemIndex+1] = movedItem;
                    list[selectedItemIndex] = temp;
                }
                else {
                    break;
                }
            }

            this.saveListState(listElement, list);
            this.movedDown = true;
            this.reorderedListElement = listElement;
        }
    }

    moveBottom(listElement, list, selectedItems) {
        if(selectedItems && selectedItems.length) {
            list = [...list];

            for(let i = selectedItems.length - 1; i >= 0; i--) {
                let selectedItem = selectedItems[i];
                let selectedItemIndex = this.findIndexInList(selectedItem, list);

                if(selectedItemIndex !== (list.length - 1)) {
                    let movedItem = list.splice(selectedItemIndex,1)[0];
                    list.push(movedItem);
                }
                else {
                    break;
                }
            }

            this.saveListState(listElement, list);
            listElement.scrollTop = listElement.scrollHeight;
        }
    }

    moveRight(targetListElement) {
        if(this.state.selectedItemsSource && this.state.selectedItemsSource.length) {
            var _target = [...this.state.target],
                _source = [...this.state.source];

            for(let i = 0; i < this.state.selectedItemsSource.length; i++) {
                let selectedItem = this.state.selectedItemsSource[i];
                if(this.findIndexInList(selectedItem, this.state.target) === -1) {
                    _target.push(_source.splice(this.findIndexInList(selectedItem, _source),1)[0]);
                }
            }

            if(this.props.onMoveToTarget) {
                this.props.onMoveToTarget({
                    originalEvent: event,
                    items: this.state.selectedItemsSource
                })
            }

            this.setState({source: _source, target: _target, selectedItemsSource: []});
        }
    }

    moveAllRight() {
        if(this.state.source) {
            var _target = [...this.state.target],
                _source = [...this.state.source];

            for(let i = 0; i < _source.length; i++) {
                _target.push(_source[i]);
            }

            if(this.props.onMoveToTarget) {
                this.props.onMoveToTarget({
                    originalEvent: event,
                    items: _source
                })
            }
            _source.splice(0, _source.length);

            this.setState({source: _source, target: _target, selectedItemsSource: []});
        }
    }

    moveLeft(sourceListElement) {
        if(this.state.selectedItemsTarget && this.state.selectedItemsTarget.length) {
            var _target = [...this.state.target],
                _source = [...this.state.source];

            for(let i = 0; i < this.state.selectedItemsTarget.length; i++) {
                let selectedItem = this.state.selectedItemsTarget[i];
                if(this.findIndexInList(selectedItem, _source) === -1) {
                    _source.push(_target.splice(this.findIndexInList(selectedItem, _target),1)[0]);
                }
            }

            if(this.props.onMoveToSource) {
                this.props.onMoveToSource({
                    originalEvent: event,
                    items: this.state.selectedItemsTarget
                })
            }

            this.setState({source: _source, target: _target, selectedItemsTarget: []});
        }
    }

    moveAllLeft() {
        if(this.state.target) {
            var _target = [...this.state.target],
                _source = [...this.state.source];

            for(let i = 0; i < _target.length; i++) {
                _source.push(_target[i]);
            }

            if(this.props.onMoveToSource) {
                this.props.onMoveToSource({
                    originalEvent: event,
                    items: _target
                })
            }
            _target.splice(0, _target.length);

            this.setState({source: _source, target: _target, selectedItemsTarget: []});
        }
    }

    isSourceElement(el) {
        return DomHandler.hasClass(el, 'ui-picklist-source');
    }

    isSelected(item, selectedItems) {
        return this.findIndexInSelection(item, selectedItems) !== -1;
    }
    
    findIndexInSelection(item, selectedItems) {
        return this.findIndexInList(item, selectedItems);
    }

    saveListState(listElement, list) {
        if(this.isSourceElement(listElement)) {
            this.setState({source: list});
        }
        else {
            this.setState({target: list});
        }
    }

    saveSelectedItemsState(listElement, selectedItems) {
        if(this.isSourceElement(listElement)) {
            this.setState({selectedItemsSource: selectedItems});
        }
        else {
            this.setState({selectedItemsTarget: selectedItems});
        }
    }
    
    findIndexInList(item, list){
        let index = -1;
        
        if(list) {
            for(let i = 0; i < list.length; i++) {
                if(list[i] === item) {
                    index = i;
                    break;
                }
            }
        }
        
        return index;
    }

    updateScrollView() {
        if(this.movedUp||this.movedDown) {
            let listItems = this.reorderedListElement.getElementsByClassName('ui-state-highlight');
            let listItem;
            
            if(this.movedUp)
                listItem = listItems[0];
            else
                listItem = listItems[listItems.length - 1];
            
            DomHandler.scrollInView(this.reorderedListElement, listItem);
            this.movedUp = false;
            this.movedDown = false;
            this.reorderedListElement = null;
        }
    }

    componentWillReceiveProps(nextProps) {
        var newSourceValue = nextProps.source,
        newTargetValue = nextProps.target;
        if (newSourceValue !== this.state.source) {
            this.setState({source: newSourceValue});
        } 

        if (newTargetValue !== this.state.target) {
            this.setState({target: newTargetValue});
        } 
    }    

    componentDidUpdate(prevProps, prevState) {
        if(prevState.source !== this.state.source || prevState.target !== this.state.target) { 
            this.updateScrollView();
        }
    }

    render() {
        var className = classNames('ui-picklist ui-widget ui-helper-clearfix', this.props.className, {
            'ui-picklist-responsive': this.props.responsive
        });

        if(this.props.showSourceControls) {
            var sourceUpButton = <Button type="button" icon="fa-angle-up" onClick={(e) => this.moveUp(this.sourcelist,this.state.source,this.state.selectedItemsSource)}></Button>,
                sourceTopButton = <Button type="button" icon="fa-angle-double-up" onClick={(e) => this.moveTop(this.sourcelist,this.state.source,this.state.selectedItemsSource)}></Button>,
                sourceDownButton = <Button type="button" icon="fa-angle-down" onClick={(e) => this.moveDown(this.sourcelist,this.state.source,this.state.selectedItemsSource)}></Button>,
                sourceBottomButton = <Button type="button" icon="fa-angle-double-down" onClick={(e) => this.moveBottom(this.sourcelist,this.state.source,this.state.selectedItemsSource)}></Button>;

            var sourceControls = (
                <div className="ui-picklist-source-controls ui-picklist-buttons">
                    <div className="ui-picklist-buttons-cell">
                        {sourceUpButton}
                        {sourceTopButton}
                        {sourceDownButton}
                        {sourceBottomButton}
                    </div>
                </div>
            );
        }

        var sourceWrapperStyleClass = classNames('ui-picklist-listwrapper ui-picklist-source-wrapper', {
            'ui-picklist-listwrapper-nocontrols': !this.props.showSourceControls
        }), 
        sourceWrapper = (
            <div className={sourceWrapperStyleClass}>
                {this.props.sourceHeader && <div className="ui-picklist-caption ui-widget-header ui-corner-tl ui-corner-tr">{this.props.sourceHeader}</div>}
                <ul ref={(el) => this.sourcelist = el} className="ui-widget-content ui-picklist-list ui-picklist-source ui-corner-bottom" style={this.props.sourceStyle}>
                    {
                        this.state.source && this.state.source.map((item, i) => {
                            
                            var sourceItemContent = this.props.itemTemplate ? this.props.itemTemplate(item) : item,
                            sourceStyleClass = classNames('ui-picklist-item', {
                                'ui-state-highlight': this.isSelected(item, this.state.selectedItemsSource)
                            });

                            return (
                                <li key={i + '_sourcelistitem'} className={sourceStyleClass} onClick={(e) => this.onItemClick(e,item,this.state.selectedItemsSource, this.sourcelist)}>
                                    {sourceItemContent}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );

        var moveRightButton = <Button type="button" icon="fa-angle-right" onClick={(e) => this.moveRight(this.targetlist)}></Button>,
            moveAllRightButton = <Button type="button" icon="fa-angle-double-right" onClick={(e) => this.moveAllRight()}></Button>,
            moveLeftButton = <Button type="button" icon="fa-angle-left" onClick={(e) => this.moveLeft(this.sourcelist)}></Button>,
            moveAllLeftButton = <Button type="button" icon="fa-angle-double-left" onClick={(e) => this.moveAllLeft()}></Button>,
        moveButtonsContent = (
            <div className="ui-picklist-buttons">
                <div className="ui-picklist-buttons-cell">
                    {moveRightButton}
                    {moveAllRightButton}
                    {moveLeftButton}
                    {moveAllLeftButton}
                </div>
            </div>
        );

        var targetWrapperStyleClass = classNames('ui-picklist-listwrapper ui-picklist-target-wrapper', {
            'ui-picklist-listwrapper-nocontrols': !this.props.showTargetControls
        }), 
        targetWrapper = (
            <div className={targetWrapperStyleClass}>
                {this.props.targetHeader && <div className="ui-picklist-caption ui-widget-header ui-corner-tl ui-corner-tr">{this.props.targetHeader}</div>}
                <ul ref={(el) => this.targetlist = el} className="ui-widget-content ui-picklist-list ui-picklist-target ui-corner-bottom" style={this.props.targetStyle}>
                    {
                        this.state.target && this.state.target.map((item, i) => {
                            
                            var targetItemContent = this.props.itemTemplate ? this.props.itemTemplate(item) : item,
                            targetStyleClass = classNames('ui-picklist-item', {
                                'ui-state-highlight': this.isSelected(item, this.state.selectedItemsTarget)
                            });

                            return (
                                <li key={i + '_targetlistitem'} className={targetStyleClass} onClick={(e) => this.onItemClick(e,item,this.state.selectedItemsTarget,this.targetlist)}>
                                    {targetItemContent}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );

        if(this.props.showTargetControls) {
            var targetUpButton = <Button type="button" icon="fa-angle-up" onClick={(e) => this.moveUp(this.targetlist,this.state.target,this.state.selectedItemsTarget)}></Button>,
                targetTopButton = <Button type="button" icon="fa-angle-double-up" onClick={(e) => this.moveTop(this.targetlist,this.state.target,this.state.selectedItemsTarget)}></Button>,
                targetDownButton = <Button type="button" icon="fa-angle-down" onClick={(e) => this.moveDown(this.targetlist,this.state.target,this.state.selectedItemsTarget)}></Button>,
                targetBottomButton = <Button type="button" icon="fa-angle-double-down" onClick={(e) => this.moveBottom(this.targetlist,this.state.target,this.state.selectedItemsTarget)}></Button>;

            var targetControls = (
                <div className="ui-picklist-target-controls ui-picklist-buttons">
                    <div className="ui-picklist-buttons-cell">
                        {targetUpButton}
                        {targetTopButton}
                        {targetDownButton}
                        {targetBottomButton}
                    </div>
                </div>
            );
        }

        return (
            <div className={className} style={this.props.style}>
                {sourceControls}
                {sourceWrapper}
                {moveButtonsContent}
                {targetWrapper}
                {targetControls}
            </div>
        );
    }
}