import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class Steps extends Component {

    static defaultProps = {
        id: null,
        model: null,
        activeIndex:0,
        readOnly:true,
        style:null,
        className:null,
        activeIndexChange:null
    };

    static propTypes = {
        id: PropTypes.string,
        model: PropTypes.array,
        activeIndex:PropTypes.number,
        readOnly:PropTypes.bool,
        style:PropTypes.object,
        className:PropTypes.string,
        activeIndexChange:PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {};
    }
    itemClick(event, item, i) {
        if(this.props.readOnly || item.disabled) {
            event.preventDefault();
            return;
        }
        if(this.props.activeIndexChange){
            this.props.activeIndexChange({
                originalEvent: event,
                index: i
            });
        }
        if(!item.url) {
            event.preventDefault();
        }

        if(item.command) {
            item.command({
                originalEvent: event,
                item: item,
                index: i
            });
        }
    }

    render() {
        let divClass=classNames('ui-steps ui-widget ui-helper-clearfix',this.props.className,{'ui-steps-readonly':this.props.readonly});
        return (
            <div id={this.props.id} className={divClass} style={this.props.style}>
                <ul role="tablist">
                    {this.props.model && this.props.model.map((item,index)=>{
                        let liClass=classNames('ui-steps-item',{'ui-state-highlight':(index === this.props.activeIndex),'ui-state-default':(index !== this.props.activeIndex),
                            'ui-state-disabled':(item.disabled || (index !== this.props.activeIndex && this.props.readOnly))})
                        return <li className={liClass} key={index}>
                            {item.url?
                                <a href={item.url||'#'} className="ui-menuitem-link" target={item.target} onClick={event=>this.itemClick(event,item,index)}>
                                    <span className="ui-steps-number">{index + 1}</span>
                                    <span className="ui-steps-title">{item.label}</span>
                                </a>:
                                <a className="ui-menuitem-link" target={item.target} onClick={event=>this.itemClick(event,item,index)}>
                                    <span className="ui-steps-number">{index + 1}</span>
                                    <span className="ui-steps-title">{item.label}</span>
                                </a>
                            }
                        </li>
                    })}
                </ul>
            </div>
        );
    }
}