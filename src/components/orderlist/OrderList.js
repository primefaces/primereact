import React, { Component, PropTypes } from 'react'
import { Button } from '../button/Button';
import DomHandler from '../utils/DomHandler';
import classNames from 'classnames'

export class OrderList extends Component {

    static defaultProps = {
        value: null,
        header: null,
        style: null,
        styleClass: null,
        listStyle: null,
        responsive: false,
        onReorder: null,
        itemTemplate: null
    }

    static propsTypes = {
        value: PropTypes.array,
        header: PropTypes.string,
        style: PropTypes.string,
        styleClass: PropTypes.string,
        listStyle: PropTypes.string,
        responsive: PropTypes.bool,
        onReorder: PropTypes.func,
        itemTemplate: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.state = {values: this.props.value, selectedItems: []};
    }

    onItemClick(event, item) {
        let metaKey = (event.metaKey || event.ctrlKey);
        let index = this.findIndexInList(item, this.selectedItems);
        let selected = (index !== -1);

        if (selected && metaKey) {
            this.selectedItems.splice(index, 1);
        }
        else {
            this.selectedItems = (metaKey) ? this.selectedItems || [] : [];
            this.selectedItems.push(item);
        }

        this.setState({selectedItems: this.selectedItems});
    }

    isSelected(item) {
        return this.findIndexInList(item, this.state.selectedItems) !== -1;
    }

    findIndexInList(item, list) {
        let index = -1;

        if (list) {
            for (let i = 0; i < list.length; i++) {
                if (list[i] === item) {
                    index = i;
                    break;
                }
            }
        }

        return index;
    }

    moveUp(event, listElement) {
        if (this.selectedItems) {
            this.value = [...this.state.values];
            for (let i = 0; i < this.selectedItems.length; i++) {
                let selectedItem = this.selectedItems[i];
                let selectedItemIndex = this.findIndexInList(selectedItem, this.value);

                if (selectedItemIndex !== 0) {
                    let movedItem = this.value[selectedItemIndex];
                    let temp = this.value[selectedItemIndex - 1];
                    this.value[selectedItemIndex - 1] = movedItem;
                    this.value[selectedItemIndex] = temp;
                }
                else {
                    break;
                }
            }
            
            this.setState({values: this.value});
            this.movedUp = true;
            if(this.props.onReorder) {
                this.props.onReorder({
                    originalEvent: event,
                    value: this.value
                })
            }
        }
    }

    moveTop(event, listElement) {
        if (this.selectedItems) {
            this.value = [...this.state.values];
            for (let i = 0; i < this.selectedItems.length; i++) {
                let selectedItem = this.selectedItems[i];
                let selectedItemIndex = this.findIndexInList(selectedItem, this.value);

                if (selectedItemIndex !== 0) {
                    let movedItem = this.value.splice(selectedItemIndex, 1)[0];
                    this.value.unshift(movedItem);
                    listElement.scrollTop = 0;
                }
                else {
                    break;
                }
            }
            this.setState({values: this.value});
            if(this.props.onReorder) {
                this.props.onReorder({
                    originalEvent: event,
                    value: this.value
                })
            }
            listElement.scrollTop = 0;
        }
    }

    moveDown(event, listElement) {
        if (this.selectedItems) {
            this.value = [...this.state.values];
            for (let i = this.selectedItems.length - 1; i >= 0; i--) {
                let selectedItem = this.selectedItems[i];
                let selectedItemIndex = this.findIndexInList(selectedItem, this.value);

                if (selectedItemIndex !== (this.value.length - 1)) {
                    let movedItem = this.value[selectedItemIndex];
                    let temp = this.value[selectedItemIndex + 1];
                    this.value[selectedItemIndex + 1] = movedItem;
                    this.value[selectedItemIndex] = temp;
                }
                else {
                    break;
                }
            }

            this.setState({values: this.value});
            this.movedDown = true;
            if(this.props.onReorder) {
                this.props.onReorder({
                    originalEvent: event,
                    value: this.value
                })
            }
        }
    }

    moveBottom(event, listElement) {
        if (this.selectedItems) {
            this.value = [...this.state.values];
            for (let i = this.selectedItems.length - 1; i >= 0; i--) {
                let selectedItem = this.selectedItems[i];
                let selectedItemIndex = this.findIndexInList(selectedItem, this.value);

                if (selectedItemIndex !== (this.value.length - 1)) {
                    let movedItem = this.value.splice(selectedItemIndex, 1)[0];
                    this.value.push(movedItem);
                }
                else {
                    break;
                }
            }

            this.setState({values: this.value});
            if(this.props.onReorder) {
                this.props.onReorder({
                    originalEvent: event,
                    value: this.value
                })
            }
            listElement.scrollTop = listElement.scrollHeight;
        }
    }

    updateScrollView() {
        if(this.movedUp||this.movedDown) {
            let listItems = this.listContainer.getElementsByClassName('ui-state-highlight');
            let listItem;
            
            if(this.movedUp)
                listItem = listItems[0];
            else
                listItem = listItems[listItems.length - 1];
            
            DomHandler.scrollInView(this.listContainer, listItem);
            this.movedUp = false;
            this.movedDown = false;
        }
    }
    
    componentWillReceiveProps(nextProps) {
        var newValue = nextProps.value;
        if (newValue !== this.state.values) {
            this.setState({values: newValue});
        } 
    }    

    componentDidUpdate(prevProps, prevState) {
        if(prevState.values !== this.state.value) { 
            this.updateScrollView();
        }
    }

    render() {
        var styleClass = classNames('ui-orderlist ui-grid ui-widget', this.props.styleClass, {
            'ui-grid-responsive': this.props.responsive
        });

        var upButton = <Button type="button" icon="fa-angle-up" onClick={(e) => this.moveUp(e, this.listContainer)}></Button>,
            topButton = <Button type="button" icon="fa-angle-double-up" onClick={(e) => this.moveTop(e, this.listContainer)}></Button>,
            downButton = <Button type="button" icon="fa-angle-down" onClick={(e) => this.moveDown(e, this.listContainer)}></Button>,
            bottomButton = <Button type="button" icon="fa-angle-double-down" onClick={(e) => this.moveBottom(e, this.listContainer)}></Button>;

        var controls = (
            <div className="ui-orderlist-controls ui-grid-col-2">
                {upButton}
                {topButton}
                {downButton}
                {bottomButton}
            </div>
        );

        var content = (
            <div className="ui-grid-col-10">
                {this.props.header && <div className="ui-orderlist-caption ui-widget-header ui-corner-top">{this.props.header}</div>}
                <ul ref={(el) => this.listContainer = el} className="ui-widget-content ui-orderlist-list ui-corner-bottom" style={this.props.listStyle}>
                    {
                        this.state.values && this.state.values.map((item, i) => {
                            
                            var listItemContent = this.props.itemTemplate ? this.props.itemTemplate(item) : item,
                            listStyleClass = classNames('ui-orderlist-item', {
                                'ui-state-highlight': this.isSelected(item)
                            });

                            return (
                                <li key={i + '_orderlistitem'} className={listStyleClass} onClick={(e) => this.onItemClick(e, item)}>
                                    {listItemContent}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );

        return (
            <div className={styleClass} style={this.props.style}>
                <div className="ui-grid-row">
                    {controls}
                    {content}
                </div>
            </div>
        );
    }
}