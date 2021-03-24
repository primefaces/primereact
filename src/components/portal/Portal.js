import { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

export class Portal extends Component {

    static defaultProps = {
        element: null,
        appendTo: null,
        visible: false
    };

    static propTypes = {
        element: PropTypes.any,
        appendTo: PropTypes.any,
        visible: PropTypes.bool
    };

    constructor(props) {
        super(props);

        this.state = {
            mounted: props.visible
        };
    }

    hasDOM() {
        return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
    }

    componentDidMount() {
        if (this.hasDOM() && !this.state.mounted) {
            this.setState({ mounted: true });
        }
    }

    render() {
        return this.props.element && this.state.mounted ? ReactDOM.createPortal(this.props.element, this.props.appendTo || document.body) : null;
    }
}
