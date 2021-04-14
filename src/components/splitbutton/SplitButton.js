import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../button/Button';
import { classNames } from '../utils/ClassNames';
import DomHandler from '../utils/DomHandler';
import { SplitButtonItem } from './SplitButtonItem';
import { SplitButtonPanel } from './SplitButtonPanel';
import { tip } from '../tooltip/Tooltip';
import UniqueComponentId from '../utils/UniqueComponentId';
import ObjectUtils from '../utils/ObjectUtils';
import ConnectedOverlayScrollHandler from '../utils/ConnectedOverlayScrollHandler';
import OverlayEventBus from '../overlayeventbus/OverlayEventBus';
import { ZIndexUtils } from '../utils/ZIndexUtils';

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
        appendTo: null,
        tooltip: null,
        tooltipOptions: null,
        buttonTemplate: null,
        transitionOptions: null,
        onClick: null,
        onShow: null,
        onHide: null
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
        tabIndex: PropTypes.number,
        appendTo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        tooltip: PropTypes.string,
        tooltipOptions: PropTypes.object,
        buttonTemplate: PropTypes.any,
        transitionOptions: PropTypes.object,
        onClick: PropTypes.func,
        onShow: PropTypes.func,
        onHide: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            overlayVisible: false
        };

        this.onDropdownButtonClick = this.onDropdownButtonClick.bind(this);
        this.onItemClick = this.onItemClick.bind(this);
        this.onOverlayEnter = this.onOverlayEnter.bind(this);
        this.onOverlayEntered = this.onOverlayEntered.bind(this);
        this.onOverlayExit = this.onOverlayExit.bind(this);
        this.onOverlayExited = this.onOverlayExited.bind(this);
        this.onPanelClick = this.onPanelClick.bind(this);

        this.overlayRef = React.createRef();
    }

    onPanelClick(event) {
        OverlayEventBus.emit('overlay-click', {
            originalEvent: event,
            target: this.container
        });
    }

    onDropdownButtonClick() {
        if (this.state.overlayVisible)
            this.hide();
        else
            this.show();
    }

    onItemClick() {
        this.hide();
    }

    show() {
        this.setState({ overlayVisible: true });
    }

    hide() {
        this.setState({ overlayVisible: false });
    }

    onOverlayEnter() {
        ZIndexUtils.set('overlay', this.overlayRef.current);
        this.alignPanel();
    }

    onOverlayEntered() {
        this.bindDocumentClickListener();
        this.bindScrollListener();
        this.bindResizeListener();

        this.props.onShow && this.props.onShow();
    }

    onOverlayExit() {
        this.unbindDocumentClickListener();
        this.unbindScrollListener();
        this.unbindResizeListener();
    }

    onOverlayExited() {
        ZIndexUtils.clear(this.overlayRef.current);

        this.props.onHide && this.props.onHide();
    }

    alignPanel() {
        const container = this.defaultButton.parentElement;

        if (this.props.appendTo === 'self') {
            DomHandler.relativePosition(this.overlayRef.current, container);
        }
        else {
            this.overlayRef.current.style.minWidth = DomHandler.getOuterWidth(container) + 'px';
            DomHandler.absolutePosition(this.overlayRef.current, container);
        }
    }

    bindDocumentClickListener() {
        if (!this.documentClickListener) {
            this.documentClickListener = (event) => {
                if (this.state.overlayVisible && this.isOutsideClicked(event)) {
                    this.hide();
                }
            };

            document.addEventListener('click', this.documentClickListener);
        }
    }

    bindScrollListener() {
        if (!this.scrollHandler) {
            this.scrollHandler = new ConnectedOverlayScrollHandler(this.container, () => {
                if (this.state.overlayVisible) {
                    this.hide();
                }
            });
        }

        this.scrollHandler.bindScrollListener();
    }

    unbindScrollListener() {
        if (this.scrollHandler) {
            this.scrollHandler.unbindScrollListener();
        }
    }

    bindResizeListener() {
        if (!this.resizeListener) {
            this.resizeListener = () => {
                if (this.state.overlayVisible) {
                    this.hide();
                }
            };
            window.addEventListener('resize', this.resizeListener);
        }
    }

    unbindResizeListener() {
        if (this.resizeListener) {
            window.removeEventListener('resize', this.resizeListener);
            this.resizeListener = null;
        }
    }

    isOutsideClicked(event) {
        return this.container && (this.overlayRef && this.overlayRef.current && !this.overlayRef.current.contains(event.target));
    }

    unbindDocumentClickListener() {
        if (this.documentClickListener) {
            document.removeEventListener('click', this.documentClickListener);
            this.documentClickListener = null;
        }
    }

    componentDidMount() {
        if (!this.state.id) {
            this.setState({ id: UniqueComponentId() });
        }

        if (this.props.tooltip) {
            this.renderTooltip();
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.tooltip !== this.props.tooltip || prevProps.tooltipOptions !== this.props.tooltipOptions) {
            if (this.tooltip)
                this.tooltip.update({ content: this.props.tooltip, ...(this.props.tooltipOptions || {}) });
            else
                this.renderTooltip();
        }
    }

    componentWillUnmount() {
        this.unbindDocumentClickListener();
        this.unbindResizeListener();
        if (this.scrollHandler) {
            this.scrollHandler.destroy();
            this.scrollHandler = null;
        }

        if (this.tooltip) {
            this.tooltip.destroy();
            this.tooltip = null;
        }

        ZIndexUtils.clear(this.overlayRef.current);
    }

    renderTooltip() {
        this.tooltip = tip({
            target: this.container,
            content: this.props.tooltip,
            options: this.props.tooltipOptions
        });
    }

    renderItems() {
        if (this.props.model) {
            return this.props.model.map((menuitem, index) => {
                return <SplitButtonItem menuitem={menuitem} key={index} onItemClick={this.onItemClick} />
            });
        }

        return null;
    }

    render() {
        let className = classNames('p-splitbutton p-component', this.props.className, { 'p-disabled': this.props.disabled });
        let items = this.renderItems();
        const buttonContent = this.props.buttonTemplate ? ObjectUtils.getJSXElement(this.props.buttonTemplate, this.props) : null;

        return (
            <div id={this.state.id} className={className} style={this.props.style} ref={el => this.container = el}>
                <Button ref={(el) => this.defaultButton = el} type="button" className="p-splitbutton-defaultbutton" icon={this.props.icon} label={this.props.label} onClick={this.props.onClick} disabled={this.props.disabled} tabIndex={this.props.tabIndex}>
                    {buttonContent}
                </Button>
                <Button type="button" className="p-splitbutton-menubutton" icon="pi pi-chevron-down" onClick={this.onDropdownButtonClick} disabled={this.props.disabled}
                    aria-expanded={this.state.overlayVisible} aria-haspopup aria-owns={this.state.id + '_overlay'} />
                <SplitButtonPanel ref={this.overlayRef} appendTo={this.props.appendTo} id={this.state.id + '_overlay'}
                    menuStyle={this.props.menuStyle} menuClassName={this.props.menuClassName} onClick={this.onPanelClick}
                    in={this.state.overlayVisible} onEnter={this.onOverlayEnter} onEntered={this.onOverlayEntered} onExit={this.onOverlayExit} onExited={this.onOverlayExited}
                    transitionOptions={this.props.transitionOptions}>
                    {items}
                </SplitButtonPanel>
            </div>
        );
    }
}
