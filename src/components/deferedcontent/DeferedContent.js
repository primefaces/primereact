import React, {Component} from "react";
import PropTypes from "prop-types";

export class DeferedContent extends Component {

    static defaultProps = {
        onload: null
    }

    static propsTypes = {
        onLoad: PropTypes.func
    }

    constructor() {
        super();
        this.state = {
            loaded: false
        };
    }

    componentDidMount() {
        if(this.shouldLoad() && !this.state.loaded) {
            this.load();
        }

        this.documentScrollListener = () => {
            if(this.shouldLoad() && !this.state.loaded) {
                this.load();
            }
        };
        window.addEventListener('scroll', this.documentScrollListener);
    }


    shouldLoad() {
        let rect = this.container.getBoundingClientRect();
        let docElement = document.documentElement;
        let scrollTop = (window.pageYOffset||document.documentElement.scrollTop);
        let winHeight = docElement.clientHeight;

        return (winHeight >= rect.top);
    }

    load(event) {
        this.setState({loaded:true})
        if (this.props.onLoad) {
            this.props.onLoad(event);
        }
    }

    componentWillUnmount() {
        if(this.documentScrollListener) {
            window.removeEventListener('scroll', this.documentScrollListener)
        }
    }

    render() {
        return (
            <div ref={(el) => this.container = el}>
                {this.state.loaded ? this.props.children : null}
            </div>
        );
    }

}