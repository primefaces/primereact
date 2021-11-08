import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { classNames, ConnectedOverlayScrollHandler, DomHandler, ObjectUtils, ZIndexUtils } from '../utils/Utils';
import { Ripple } from '../ripple/Ripple';
import { OverlayService } from '../overlayservice/OverlayService';
import { CSSTransition } from '../csstransition/CSSTransition';
import { Portal } from '../portal/Portal';
import { InputTextarea } from '../inputtextarea/InputTextarea';
import PrimeReact from '../api/Api';

export class Mention extends Component {

    static defaultProps = {
        id: null,
        inputId: null,
        inputRef: null,
        style: null,
        className: null,
        trigger: '@',
        suggestions: null,
        field: null,
        inputStyle: null,
        inputClassName: null,
        panelClassName: null,
        panelStyle: null,
        scrollHeight: '200px',
        autoHighlight: true,
        delay: 0,
        headerTemplate: null,
        footerTemplate: null,
        itemTemplate: null,
        transitionOptions: null,
        onChange: null,
        onInput: null,
        onSearch: null,
        onSelect: null,
        onFocus: null,
        onBlur: null,
        onShow: null,
        onHide: null
    }

    static propTypes = {
        id: PropTypes.string,
        inputId: PropTypes.string,
        inputRef: PropTypes.any,
        style: PropTypes.object,
        className: PropTypes.string,
        trigger: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
        suggestions: PropTypes.array,
        field: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
        inputStyle: PropTypes.object,
        inputClassName: PropTypes.string,
        panelClassName: PropTypes.string,
        panelStyle: PropTypes.object,
        scrollHeight: PropTypes.string,
        autoHighlight: PropTypes.bool,
        delay: PropTypes.number,
        headerTemplate: PropTypes.any,
        footerTemplate: PropTypes.any,
        itemTemplate: PropTypes.any,
        transitionOptions: PropTypes.object,
        onChange: PropTypes.func,
        onInput: PropTypes.func,
        onSearch: PropTypes.func,
        onSelect: PropTypes.func,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func,
        onShow: PropTypes.func,
        onHide: PropTypes.func
    }

    constructor(props) {
        super(props);

        this.state = {
            overlayVisible: false,
            focused: false,
            searching: false,
            trigger: null
        };

        this.onOverlayEnter = this.onOverlayEnter.bind(this);
        this.onOverlayEntering = this.onOverlayEntering.bind(this);
        this.onOverlayEntered = this.onOverlayEntered.bind(this);
        this.onOverlayExit = this.onOverlayExit.bind(this);
        this.onOverlayExited = this.onOverlayExited.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onInput = this.onInput.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.onPanelClick = this.onPanelClick.bind(this);

        this.overlayRef = createRef();
        this.inputRef = createRef(this.props.inputRef);
    }

    showOverlay() {
        this.setState({ overlayVisible: true });
    }

    hideOverlay() {
        this.setState({ overlayVisible: false, searching: false, trigger: null });
    }

    onOverlayEnter() {
        ZIndexUtils.set('overlay', this.overlayRef.current, PrimeReact.autoZIndex, PrimeReact.zIndex['overlay']);
        this.alignOverlay();
    }

    onOverlayEntering() {
        if (this.props.autoHighlight && this.props.suggestions && this.props.suggestions.length) {
            DomHandler.addClass(this.list.firstChild, 'p-highlight');
        }
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

    alignOverlay() {
        const { key, index } = this.state.trigger;
        const value = this.inputRef.current.value;
        const position = DomHandler.getCursorOffset(this.inputRef.current, value.substring(0, index - 1), value.substring(index), key);
        this.overlayRef.current.style.transformOrigin = 'top';
        this.overlayRef.current.style.left = `calc(${position.left}px + 1rem)`;
        this.overlayRef.current.style.top = `calc(${position.top}px + 1.2rem)`;
    }

    onPanelClick(event) {
        OverlayService.emit('overlay-click', {
            originalEvent: event,
            target: this.container
        });
    }

    getTrigger(value, key, start) {
        if (!this.state.trigger) {
            const triggerKey = Array.isArray(this.props.trigger) ? this.props.trigger.find(t => t === key) : (this.props.trigger === key ? this.props.trigger : null);

            if (triggerKey) {
                return {
                    key: triggerKey,
                    index: start
                };
            }

            const latestSpaceIndex = value.substring(0, start).lastIndexOf(' ');
            const latestTrigger = this.getLatestTrigger(value, start);

            if (latestTrigger.index > latestSpaceIndex) {
                return latestTrigger;
            }
        }

        return this.state.trigger;
    }

    getLatestTrigger(value, start) {
        if (Array.isArray(this.props.trigger)) {
            let latestTrigger = {};
            this.props.trigger.forEach((t) => {
                const index = value.substring(0, start).lastIndexOf(t);

                if (index !== -1 && (index > latestTrigger.index || !latestTrigger.index)) {
                    latestTrigger = {
                        key: t,
                        index: index !== -1 ? index + 1 : -1
                    }
                }
            });

            return latestTrigger;
        }

        const index = value.substring(0, start).lastIndexOf(this.props.trigger);

        return {
            key: this.props.trigger,
            index: index !== -1 ? index + 1 : -1
        }
    }

    onSearch(event) {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }

        const { value, selectionStart } = event.target;
        const key = value.substring(selectionStart - 1, selectionStart);

        if (key === ' ') {
            this.hideOverlay();
            return;
        }

        const currentTrigger = this.getTrigger(value, key, selectionStart);

        if (currentTrigger && currentTrigger.index > -1) {
            const query = value.substring(currentTrigger.index, selectionStart);
            this.timeout = setTimeout(() => {
                this.search(event, query, currentTrigger);
            }, this.props.delay);
        }
    }

    search(event, query, trigger) {
        if (this.props.onSearch) {
            this.setState({ searching: true, trigger });
            this.props.onSearch({
                originalEvent: event,
                trigger: trigger.key,
                query
            });
        }
    }

    selectItem(event, suggestion) {
        const value = this.inputRef.current.value;
        const selectionStart = event.target.selectionStart;
        const trigger = this.state.trigger;
        const spaceIndex = value.indexOf(' ', trigger.index);
        const currentText = value.substring(trigger.index, spaceIndex > -1 ? spaceIndex : selectionStart);
        const selectedText = this.formatValue(suggestion).replace(/\s+/g, '');

        if (currentText.trim() !== selectedText) {
            let diff = 0;
            while (diff < selectedText.length) {
                const s_c = selectedText.charAt(diff);
                const c_c = currentText.charAt(diff);

                if (s_c === c_c || c_c === ' ')
                    diff++;
                else
                    break;
            }

            const prevText = value.substring(0, trigger.index);
            const nextText = value.substring(trigger.index + diff);

            this.inputRef.current.value = `${prevText}${selectedText} ${nextText}`;
            this.props.onChange && this.props.onChange(event);
        }

        const cursorStart = trigger.index + selectedText.length + 1;
        this.inputRef.current.setSelectionRange(cursorStart, cursorStart);

        this.hideOverlay();

        this.props.onSelect && this.props.onSelect({ originalEvent: event, suggestion });
    }

    formatValue(value) {
        if (value) {
            const field = Array.isArray(this.props.field) ? this.props.field[this.props.trigger.findIndex(f => f === this.state.trigger.key)] : this.props.field;
            return field ? ObjectUtils.resolveFieldData(value, field) : value;
        }

        return '';
    }

    onItemClick(event, suggestion) {
        this.inputRef.current.focus();
        this.selectItem(event, suggestion);
    }

    onFocus(event) {
        event.persist();
        this.setState({ focused: true }, () => {
            this.props.onFocus && this.props.onFocus(event);
        });
    }

    onBlur(event) {
        event.persist();
        this.setState({ focused: false }, () => {
            this.props.onBlur && this.props.onBlur(event);
        });
    }

    onInput(event) {
        this.props.onInput && this.props.onInput(event);

        if (event.target.value.length > 0)
            DomHandler.addClass(this.container, 'p-inputwrapper-filled');
        else
            DomHandler.removeClass(this.container, 'p-inputwrapper-filled');
    }

    onKeyUp(event) {
        if (event.which === 37 || event.which === 39) {
            this.onSearch(event);
        }
    }

    onChange(event) {
        this.props.onChange && this.props.onChange(event);

        this.onSearch(event);
    }

    onKeyDown(event) {
        if (this.state.overlayVisible) {
            let highlightItem = DomHandler.findSingle(this.overlayRef.current, 'li.p-highlight');

            switch (event.which) {
                //down
                case 40:
                    if (highlightItem) {
                        let nextElement = highlightItem.nextElementSibling;
                        if (nextElement) {
                            DomHandler.addClass(nextElement, 'p-highlight');
                            DomHandler.removeClass(highlightItem, 'p-highlight');
                            DomHandler.scrollInView(this.overlayRef.current, nextElement);
                        }
                    }
                    else {
                        highlightItem = DomHandler.findSingle(this.overlayRef.current, 'li');
                        if (highlightItem) {
                            DomHandler.addClass(highlightItem, 'p-highlight');
                        }
                    }

                    event.preventDefault();
                    break;

                //up
                case 38:
                    if (highlightItem) {
                        let previousElement = highlightItem.previousElementSibling;
                        if (previousElement) {
                            DomHandler.addClass(previousElement, 'p-highlight');
                            DomHandler.removeClass(highlightItem, 'p-highlight');
                            DomHandler.scrollInView(this.overlayRef.current, previousElement);
                        }
                    }

                    event.preventDefault();
                    break;

                //backspace
                case 8:
                    const { value, selectionStart } = event.target;
                    const key = value.substring(selectionStart - 1, selectionStart);
                    if (key === this.state.trigger.key) {
                        this.hideOverlay();
                    }

                    break;

                //enter
                case 13:
                    if (highlightItem) {
                        this.selectItem(event, this.props.suggestions[DomHandler.index(highlightItem)]);
                    }

                    event.preventDefault();
                    break;

                //escape
                case 27:
                    this.hideOverlay();
                    event.preventDefault();
                    break;

                default:
                    break;
            }
        }
    }

    bindDocumentClickListener() {
        if (!this.documentClickListener) {
            this.documentClickListener = (event) => {
                if (event.which === 3) { // right click
                    return;
                }

                if (this.state.overlayVisible && this.isOutsideClicked(event)) {
                    this.hideOverlay();
                }
            };

            document.addEventListener('click', this.documentClickListener);
        }
    }

    unbindDocumentClickListener() {
        if (this.documentClickListener) {
            document.removeEventListener('click', this.documentClickListener);
            this.documentClickListener = null;
        }
    }

    bindScrollListener() {
        if (!this.scrollHandler) {
            this.scrollHandler = new ConnectedOverlayScrollHandler(this.container, () => {
                if (this.state.overlayVisible) {
                    this.hideOverlay();
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
                if (this.state.overlayVisible && !DomHandler.isAndroid()) {
                    this.hideOverlay();
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

    isFilled() {
        return (this.props.value != null && this.props.value.toString().length > 0) ||
            (this.props.defaultValue != null && this.props.defaultValue.toString().length > 0) ||
            (this.inputRef && this.inputRef.current && this.inputRef.current.value.toString().length > 0);
    }

    updateInputRef() {
        let ref = this.props.inputRef;

        if (ref) {
            if (typeof ref === 'function') {
                ref(this.inputRef.current);
            }
            else {
                ref.current = this.inputRef.current;
            }
        }
    }

    componentDidMount() {
        this.updateInputRef();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.suggestions !== this.props.suggestions && this.state.searching) {
            this.props.suggestions && this.props.suggestions.length ? this.showOverlay() : this.hideOverlay();

            if (this.state.overlayVisible) {
                this.alignOverlay();
            }

            this.setState({ searching: false });
        }

        if (!this.isFilled() && DomHandler.hasClass(this.container, 'p-inputwrapper-filled')) {
            DomHandler.removeClass(this.container, 'p-inputwrapper-filled');
        }
    }

    componentWillUnmount() {
        this.unbindDocumentClickListener();
        this.unbindResizeListener();
        if (this.scrollHandler) {
            this.scrollHandler.destroy();
            this.scrollHandler = null;
        }

        ZIndexUtils.clear(this.overlayRef.current);
    }

    renderItem(suggestion, index) {
        let content = this.props.itemTemplate ?
            ObjectUtils.getJSXElement(this.props.itemTemplate, suggestion, { trigger: this.state.trigger ? this.state.trigger.key : '', index }) :
            this.formatValue(suggestion);

        return (
            <li key={index + '_item'} className="p-mention-item" onClick={(e) => this.onItemClick(e, suggestion)}>
                {content}
                <Ripple />
            </li>
        );
    }

    renderList() {
        if (this.props.suggestions) {
            const items = this.props.suggestions.map((suggestion, index) => this.renderItem(suggestion, index));
            return (
                <ul ref={(el) => this.list = el} className="p-mention-items">
                    {items}
                </ul>
            )
        }

        return null;
    }

    renderPanel() {
        const panelClassName = classNames('p-mention-panel p-component', this.props.panelClassName);
        const panelStyle = { maxHeight: this.props.scrollHeight, ...this.props.panelStyle };
        const header = ObjectUtils.getJSXElement(this.props.headerTemplate, this.props);
        const footer = ObjectUtils.getJSXElement(this.props.footerTemplate, this.props);
        const list = this.renderList();

        const panel = (
            <CSSTransition nodeRef={this.overlayRef} classNames="p-connected-overlay" in={this.state.overlayVisible} timeout={{ enter: 120, exit: 100 }} options={this.props.transitionOptions}
                unmountOnExit onEnter={this.onOverlayEnter} onEntering={this.onOverlayEntering} onEntered={this.onOverlayEntered} onExit={this.onOverlayExit} onExited={this.onOverlayExited}>
                <div ref={this.overlayRef} className={panelClassName} style={panelStyle} onClick={this.onPanelClick}>
                    {header}
                    {list}
                    {footer}
                </div>
            </CSSTransition>
        );

        return <Portal element={panel} appendTo="self" />;
    }

    render() {
        const containerClassName = classNames('p-mention p-component p-inputwrapper', {
            'p-inputwrapper-filled': this.isFilled(),
            'p-inputwrapper-focus': this.state.focused
        }, this.props.className);
        const inputClassName = classNames('p-mention-input', this.props.inputClassName)

        const inputProps = ObjectUtils.findDiffKeys(this.props, Mention.defaultProps);
        const panel = this.renderPanel();

        return (
            <div ref={el => this.container = el} id={this.props.id} className={containerClassName} style={this.props.style}>
                <InputTextarea ref={this.inputRef} id={this.props.inputId} {...inputProps} className={inputClassName} style={this.props.inputStyle}
                    onFocus={this.onFocus} onBlur={this.onBlur} onKeyDown={this.onKeyDown} onInput={this.onInput} onKeyUp={this.onKeyUp} onChange={this.onChange} />
                {panel}
            </div>
        )
    }
}
