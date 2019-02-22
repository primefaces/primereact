import React, {Component} from "react";
import PropTypes from "prop-types";

export class DeferredContent extends Component {

    static defaultProps = {
        onload: null
    }

    static propTypes = {
        onLoad: PropTypes.func
    }

    constructor() {
        super();
        this.state = {
            loaded: false
        };
    }

    componentDidMount() {
        if (!this.state.loaded) {
            if (this.shouldLoad())
                this.load();
            else
                this.bindScrollListener();
        }
    }

    bindScrollListener() {
        this.documentScrollListener = () => {
            if (this.shouldLoad()) {
                this.load();
                this.unbindScrollListener();
            }
        };

        window.addEventListener('scroll', this.documentScrollListener);
    }

    unbindScrollListener() {
        if (this.documentScrollListener) {
            window.removeEventListener('scroll', this.documentScrollListener);
            this.documentScrollListener = null;
        }
    }

    shouldLoad() {
        if (this.state.loaded) {
            return false;
        }
        else {
            let rect = this.container.getBoundingClientRect();
            let docElement = document.documentElement;
            let winHeight = docElement.clientHeight;
    
            return (winHeight >= rect.top);
        }
    }

    load(event) {
        this.setState({loaded:true});
        
        if (this.props.onLoad) {
            this.props.onLoad(event);
        }
    }

    componentWillUnmount() {
        this.unbindScrollListener();
    }

    render() {
        return (
            <div ref={(el) => this.container = el}>
                {this.state.loaded ? this.props.children : null}
            </div>
        );
    }

}