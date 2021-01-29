import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils/ClassNames';
import {MenubarSub} from './MenubarSub';
import ObjectUtils from '../utils/ObjectUtils';
import DomHandler from '../utils/DomHandler';

export class Menubar extends Component {

    static defaultProps = {
        id: null,
        model: null,
        style: null,
        className: null,
        start: null,
        end: null
    };

    static propTypes = {
        id: PropTypes.string,
        model: PropTypes.array,
        style: PropTypes.object,
        className: PropTypes.string,
        start: PropTypes.any,
        end: PropTypes.any
    };

    constructor(props) {
        super(props);

        this.state = {
            mobileActive: false
        };

        this.toggle = this.toggle.bind(this);
        this.onLeafClick = this.onLeafClick.bind(this);
    }

    toggle(event) {
        event.preventDefault();

        this.setState((prevState) => ({
            mobileActive: !prevState.mobileActive
        }), () => {
            this.rootmenu.style.zIndex = String(DomHandler.generateZIndex());
            this.bindDocumentClickListener();
        });
    }

    bindDocumentClickListener() {
        if (!this.documentClickListener) {
            this.documentClickListener = (event) => {
                if (this.state.mobileActive && this.isOutsideClicked(event)) {
                    this.setState({ mobileActive: false });
                }
            };
            document.addEventListener('click', this.documentClickListener);
        }
    }

    isOutsideClicked(event) {
        return this.rootmenu !== event.target && !this.rootmenu.contains(event.target)
            && this.menubutton !== event.target && !this.menubutton.contains(event.target)
    }

    unbindDocumentClickListener() {
        if (this.documentClickListener) {
            document.removeEventListener('click', this.documentClickListener);
            this.documentClickListener = null;
        }
    }

    onLeafClick() {
        this.setState({ mobileActive: false });
    }

    renderCustomContent() {
        if (this.props.children) {
            return (
                <div className="p-menubar-custom">
                    {this.props.children}
                </div>
            );
        }

        return null;
    }

    renderStartContent() {
        if (this.props.start) {
            const start = ObjectUtils.getJSXElement(this.props.start, this.props);

            return (
                <div className="p-menubar-start">
                    {start}
                </div>
            );
        }

        return null;
    }

    renderEndContent() {
        if (this.props.end) {
            const end = ObjectUtils.getJSXElement(this.props.end, this.props);

            return (
                <div className="p-menubar-end">
                    {end}
                </div>
            );
        }

        return null;
    }

    renderMenuButton() {
        /* eslint-disable */
        const button = (
            <a ref={(el) => this.menubutton = el} href={'#'} role="button" tabIndex={0} className="p-menubar-button" onClick={this.toggle}>
                <i className="pi pi-bars" />
            </a>
        );
        /* eslint-enable */

        return button;
    }

    render() {
        const className = classNames('p-menubar p-component', {'p-menubar-mobile-active': this.state.mobileActive}, this.props.className);
        const start = this.renderStartContent();
        const end = this.renderEndContent();
        const menuButton = this.renderMenuButton();

        return (
            <div id={this.props.id} className={className} style={this.props.style}>
                {start}
                {menuButton}
                <MenubarSub ref={(el) => this.rootmenu = el} model={this.props.model} root mobileActive={this.state.mobileActive} onLeafClick={this.onLeafClick} />
                {end}
            </div>
        );
    }
}
