import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class Rating extends Component {

    static defaultProps = {
        id: null,
        value: null,
        disabled: false,
        readonly: false,
        stars: 5,
        cancel: true,
        style: null,
        className: null,
        onChange: null
    }

    static propsTypes = {
        id: PropTypes.string,
        value: PropTypes.string,
        disabled: PropTypes.bool,
        readonly: PropTypes.bool,
        stars: PropTypes.number,
        cancel: PropTypes.bool,
        style: PropTypes.object,
        className: PropTypes.string,
        onChange: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.state = {value: this.props.value};
        this.clear = this.clear.bind(this);
    }

    rate(event, i) {
        if(!this.props.readonly && !this.props.disabled) {
            this.props.onChange({
                originalEvent: event,
                value: i
            });
        }
        
        event.preventDefault();        
    }
    
    clear(event) {
        if(!this.props.readonly && !this.props.disabled) {
            this.props.onChange({
                originalEvent: event,
                value: null
            });
        }
        
        event.preventDefault();
    }

    componentWillReceiveProps(nextProps) {
        var newValue = nextProps.value;

        if (newValue !== this.state.value) {
            this.setState({value: newValue});
        } 
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextState.value === this.state.value) {
            return false;
        }

        return true;
    }

    render() {
        var className = classNames('ui-rating', this.props.className, {'ui-state-disabled': this.props.disabled});
                
        if(this.props.cancel) {
            var cancel = <a onClick={this.clear}>
                        <span className="fa fa-ban"></span>
                      </a>;
        }

        var starsArray = [];
        for(var i = 0; i < this.props.stars; i++) {
            starsArray[i] = i + 1;
        }
        
        var stars = starsArray.map((value) => {
            var iconClass = classNames('fa', {
                'fa-star-o': (!this.props.value || value > this.props.value), 
                'fa-star': (value <= this.props.value)
            });
            
            return <a onClick={(e) => this.rate(e, value)} key={value}>
                      <span className={iconClass}></span>
                   </a>;
        });
                
        return <div id={this.props.id} className={className} style={this.props.style}>
                    {cancel}
                    {stars}
                </div>;
    }
}