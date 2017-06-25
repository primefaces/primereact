import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class Rating extends Component {

    static defaultProps = {
        value: null,
        disabled: false,
        readonly: false,
        stars: 5,
        cancel: true
    }

    static propsTypes = {
        value: PropTypes.string,
        disabled: PropTypes.bool,
        readonly: PropTypes.bool,
        stars: PropTypes.number,
        cancel: PropTypes.bool
    }

    constructor(props) {
        super(props);
        this.state = {value: this.props.value};
    }

    rate(event, i){
        if(!this.props.readonly&&!this.props.disabled) {
            var _value = (i + 1);
            this.props.onChange({
                originalEvent: event,
                value: _value
            });
            this.setState({value: _value});
        }
        event.preventDefault();        
    }
    
    clear(event){
        if(!this.props.readonly&&!this.props.disabled) {
            var _value = null;
            this.props.onChange({
                originalEvent: event,
                value: _value
            });
            this.setState({value: _value});
        }
        event.preventDefault();
    }

    componentWillMount() {
        this.starsArray = [];
        for(var i = 0; i < this.props.stars; i++) {
            this.starsArray[i] = i;
        }
    }

    componentWillReceiveProps(nextProps) {
        var newValue = nextProps.value;
        if (newValue !== this.state.value) {
            this.setState({value: newValue});
        } 
    }

    render() {
        var ratingClass = classNames('ui-rating', {
            'ui-state-disabled': this.props.disabled
        });

        var cancel = (this.props.cancel && <a href="#" onClick={this.clear.bind(this)}>
                                <span className="fa fa-ban"></span>
                            </a>),
        stars = this.starsArray && this.starsArray.map((star, index) => {
            var iconClass = classNames('fa', {
                'fa-star-o': (!this.state.value || index >= this.state.value), 
                'fa-star': (index < this.state.value)
            });

            return (
                <a href="#" onClick={(e) => this.rate(e, index)} key={'star_' + index}>
                    <span className={iconClass}></span>
                </a>
            );
        });

        return (<div className={ratingClass}>
            {cancel}
            {stars}
        </div>);
    }
}