import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Button} from '../button/Button';
import classNames from 'classnames';
import DomHandler from '../utils/DomHandler';
import { SplitButtonItem } from './SplitButtonItem';
import { SplitButtonPanel } from './SplitButtonPanel';
import Tooltip from "../tooltip/Tooltip";
import UniqueComponentId from "../utils/UniqueComponentId";

export class SplitButton extends Component {

    static defaultProps = {
        id: null,
        label: null,
        icon: null,
        model: null,
        disabled: null,
        style: null,
        className: null,
        menuStyle: null,
        menuClassName: null,
        tabIndex: null,
        onClick: null,
        appendTo: null,
        tooltip: null,
        tooltipOptions: null
    }

    static propTypes = {
        id: PropTypes.string,
        label: PropTypes.string,
        icon: PropTypes.string,
        model: PropTypes.array,
        disabled: PropTypes.bool,
        style: PropTypes.object,
        className: PropTypes.string,
        menustyle: PropTypes.object,
        menuClassName: PropTypes.string,
        tabIndex: PropTypes.string,
        onClick: PropTypes.func,
        appendTo: PropTypes.object,
        tooltip: PropTypes.string,
        tooltipOptions: PropTypes.object
    }

    constructor(props) {
        super(props);
        this.state = {
            overlayVisible: null
        };

        this.onDropdownButtonClick = this.onDropdownButtonClick.bind(this);
        this.id = this.props.id || UniqueComponentId();
    }

    onDropdownButtonClick(event) {
        if(this.documentClickListener) {
            this.dropdownClick = true;
        }

        if(this.panel.element.offsetParent)
            this.hide();
        else
            this.show();
    }

    show() {
        this.panel.element.style.zIndex = String(DomHandler.generateZIndex());
        this.panel.element.style.display = 'block';

        setTimeout(() => {
            DomHandler.addClass(this.panel.element, 'p-menu-overlay-visible');
            DomHandler.removeClass(this.panel.element, 'p-menu-overlay-hidden');
        }, 1);

        this.alignPanel();
        this.bindDocumentListener();
        this.setState({overlayVisible: true})
    }

    hide() {
        if (this.panel && this.panel.element) {
            DomHandler.addClass(this.panel.element, 'p-menu-overlay-hidden');
            DomHandler.removeClass(this.panel.element, 'p-menu-overlay-visible');

            setTimeout(() => {
                if (this.panel && this.panel.element) {
                    this.panel.element.style.display = 'none';
                    DomHandler.removeClass(this.panel.element, 'p-menu-overlay-hidden');
                }
            }, 150);
            this.setState({overlayVisible: false})
        }

        this.unbindDocumentListener();
        this.dropdownClick = false;
    }

    alignPanel() {
        if (this.props.appendTo) {
            this.panel.element.style.minWidth = DomHandler.getWidth(this.container) + 'px';
            DomHandler.absolutePosition(this.panel.element, this.container);
        }
        else {
            DomHandler.relativePosition(this.panel.element, this.container);
        }
    }

    bindDocumentListener() {
        if(!this.documentClickListener) {
            this.documentClickListener = () => {
                if(this.dropdownClick)
                    this.dropdownClick = false;
                else
                    this.hide();
            };

            document.addEventListener('click', this.documentClickListener);
        }
    }

    unbindDocumentListener() {
        if(this.documentClickListener) {
            document.removeEventListener('click', this.documentClickListener);
            this.documentClickListener = null;
        }
    }

    componentDidMount() {
        if (this.props.tooltip) {
            this.renderTooltip();
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.tooltip !== this.props.tooltip) {
            if (this.tooltip)
                this.tooltip.updateContent(this.props.tooltip);
            else
                this.renderTooltip();
        }
    }

    componentWillUnmount() {
        this.unbindDocumentListener();

        if (this.tooltip) {
            this.tooltip.destroy();
            this.tooltip = null;
        }
    }

    renderTooltip() {
        this.tooltip = new Tooltip({
            target: this.container,
            content: this.props.tooltip,
            options: this.props.tooltipOptions
        });
    }

    renderItems() {
        if (this.props.model) {
            return this.props.model.map((menuitem, index) => {
                return <SplitButtonItem menuitem={menuitem} key={index} />
            });
        }
        else {
            return null;
        }
    }

    render() {
        let className = classNames('p-splitbutton p-buttonset p-component', this.props.className, {'p-disabled': this.props.disabled});
        let items = this.renderItems();

        return (
            <div id={this.props.id} className={className} style={this.props.style}  ref={el => this.container = el}>
                <Button type="button" icon={this.props.icon} label={this.props.label} onClick={this.props.onClick} disabled={this.props.disabled} tabIndex={this.props.tabIndex}/>
                <Button type="button" className="p-splitbutton-menubutton" icon="pi pi-caret-down" onClick={this.onDropdownButtonClick} disabled={this.props.disabled}
                        aria-expanded={this.state.overlayVisible} aria-haspopup={true} aria-owns={this.id + '_overlay'}/>
                <SplitButtonPanel ref={(el) => this.panel = el} appendTo={this.props.appendTo} id={this.id + '_overlay'}
                                menuStyle={this.props.menuStyle} menuClassName={this.props.menuClassName}>
                    {items}
                </SplitButtonPanel>
            </div>
        );
    }
}
