import { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import PrimeReact from '../api/Api';
import { DomHandler } from '../utils/Utils';

export class Portal extends Component {

    static defaultProps = {
        element: null,
        appendTo: null,
        visible: false,
        onMounted: null,
        onUnmounted: null
    };

    static propTypes = {
        element: PropTypes.any,
        appendTo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        visible: PropTypes.bool,
        onMounted: PropTypes.func,
        onUnmounted: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
            mounted: props.visible
        };
    }

    componentDidMount() {
        if (DomHandler.hasDOM() && !this.state.mounted) {
            this.setState({ mounted: true }, this.props.onMounted);
        }
    }

    componentWillUnmount() {
        this.props.onUnmounted && this.props.onUnmounted();
    }

    render() {
        const element = this.props.element || this.props.children;
        if (element && this.state.mounted) {
            const appendTo = this.props.appendTo || PrimeReact.appendTo || document.body;
            return appendTo === 'self' ? element : ReactDOM.createPortal(element, appendTo);
        }

        return null;
    }
}
