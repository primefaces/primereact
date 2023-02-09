import * as React from 'react';
import { useMountEffect, useUnmountEffect } from '../hooks/Hooks';
import { classNames, DomHandler } from '../utils/Utils';
import { ScrollPanelBase } from './ScrollPanelBase';

export const ScrollPanel = React.forwardRef((inProps, ref) => {
    const props = ScrollPanelBase.getProps(inProps);

    const containerRef = React.useRef(null);
    const contentRef = React.useRef(null);
    const xBarRef = React.useRef(null);
    const yBarRef = React.useRef(null);
    const isXBarClicked = React.useRef(false);
    const isYBarClicked = React.useRef(false);
    const lastPageX = React.useRef(null);
    const lastPageY = React.useRef(null);
    const scrollXRatio = React.useRef(null);
    const scrollYRatio = React.useRef(null);
    const frame = React.useRef(null);
    const initialized = React.useRef(false);

    const calculateContainerHeight = () => {
        const containerStyles = getComputedStyle(containerRef.current);
        const xBarStyles = getComputedStyle(xBarRef.current);
        const pureContainerHeight = DomHandler.getHeight(containerRef.current) - parseInt(xBarStyles['height'], 10);

        if (containerStyles['max-height'] !== 'none' && pureContainerHeight === 0) {
            if (contentRef.current.offsetHeight + parseInt(xBarStyles['height'], 10) > parseInt(containerStyles['max-height'], 10)) {
                containerRef.current.style.height = containerStyles['max-height'];
            } else {
                containerRef.current.style.height =
                    contentRef.current.offsetHeight + parseFloat(containerStyles.paddingTop) + parseFloat(containerStyles.paddingBottom) + parseFloat(containerStyles.borderTopWidth) + parseFloat(containerStyles.borderBottomWidth) + 'px';
            }
        }
    };

    const moveBar = () => {
        // horizontal scroll
        const totalWidth = contentRef.current.scrollWidth;
        const ownWidth = contentRef.current.clientWidth;
        const bottom = (containerRef.current.clientHeight - xBarRef.current.clientHeight) * -1;

        scrollXRatio.current = ownWidth / totalWidth;

        // vertical scroll
        const totalHeight = contentRef.current.scrollHeight;
        const ownHeight = contentRef.current.clientHeight;
        const right = (containerRef.current.clientWidth - yBarRef.current.clientWidth) * -1;

        scrollYRatio.current = ownHeight / totalHeight;

        frame.current = window.requestAnimationFrame(() => {
            if (scrollXRatio.current >= 1) {
                DomHandler.addClass(xBarRef.current, 'p-scrollpanel-hidden');
            } else {
                DomHandler.removeClass(xBarRef.current, 'p-scrollpanel-hidden');
                xBarRef.current.style.cssText = 'width:' + Math.max(scrollXRatio.current * 100, 10) + '%; left:' + (contentRef.current.scrollLeft / totalWidth) * 100 + '%;bottom:' + bottom + 'px;';
            }

            if (scrollYRatio.current >= 1) {
                DomHandler.addClass(yBarRef.current, 'p-scrollpanel-hidden');
            } else {
                DomHandler.removeClass(yBarRef.current, 'p-scrollpanel-hidden');
                yBarRef.current.style.cssText = 'height:' + Math.max(scrollYRatio.current * 100, 10) + '%; top: calc(' + (contentRef.current.scrollTop / totalHeight) * 100 + '% - ' + xBarRef.current.clientHeight + 'px);right:' + right + 'px;';
            }
        });
    };

    const onYBarMouseDown = (event) => {
        isYBarClicked.current = true;
        lastPageY.current = event.pageY;
        DomHandler.addClass(yBarRef.current, 'p-scrollpanel-grabbed');
        DomHandler.addClass(document.body, 'p-scrollpanel-grabbed');

        document.addEventListener('mousemove', onDocumentMouseMove);
        document.addEventListener('mouseup', onDocumentMouseUp);
        event.preventDefault();
    };

    const onXBarMouseDown = (event) => {
        isXBarClicked.current = true;
        lastPageX.current = event.pageX;
        DomHandler.addClass(xBarRef.current, 'p-scrollpanel-grabbed');
        DomHandler.addClass(document.body, 'p-scrollpanel-grabbed');

        document.addEventListener('mousemove', onDocumentMouseMove);
        document.addEventListener('mouseup', onDocumentMouseUp);
        event.preventDefault();
    };

    const onDocumentMouseMove = (event) => {
        if (isXBarClicked.current) {
            onMouseMoveForXBar(event);
        } else if (isYBarClicked.current) {
            onMouseMoveForYBar(event);
        } else {
            onMouseMoveForXBar(event);
            onMouseMoveForYBar(event);
        }
    };

    const onMouseMoveForXBar = (event) => {
        const deltaX = event.pageX - lastPageX.current;

        lastPageX.current = event.pageX;

        frame.current = window.requestAnimationFrame(() => {
            contentRef.current.scrollLeft += deltaX / scrollXRatio.current;
        });
    };

    const onMouseMoveForYBar = (event) => {
        const deltaY = event.pageY - lastPageY.current;

        lastPageY.current = event.pageY;

        frame.current = window.requestAnimationFrame(() => {
            contentRef.current.scrollTop += deltaY / scrollYRatio.current;
        });
    };

    const onDocumentMouseUp = (event) => {
        DomHandler.removeClass(yBarRef.current, 'p-scrollpanel-grabbed');
        DomHandler.removeClass(xBarRef.current, 'p-scrollpanel-grabbed');
        DomHandler.removeClass(document.body, 'p-scrollpanel-grabbed');

        document.removeEventListener('mousemove', onDocumentMouseMove);
        document.removeEventListener('mouseup', onDocumentMouseUp);
        isXBarClicked.current = false;
        isYBarClicked.current = false;
    };

    const refresh = () => {
        moveBar();
    };

    useMountEffect(() => {
        moveBar();
        window.addEventListener('resize', moveBar);
        calculateContainerHeight();
        initialized.current = true;
    });

    useUnmountEffect(() => {
        if (initialized.current) {
            window.removeEventListener('resize', moveBar);
        }

        if (frame.current) {
            window.cancelAnimationFrame(frame.current);
        }
    });

    React.useImperativeHandle(ref, () => ({
        props,
        refresh,
        getElement: () => containerRef.current,
        getContent: () => contentRef.current,
        getXBar: () => xBarRef.current,
        getYBar: () => yBarRef.current
    }));

    const otherProps = ScrollPanelBase.getOtherProps(props);
    const className = classNames('p-scrollpanel p-component', props.className);

    return (
        <div ref={containerRef} id={props.id} className={className} style={props.style} {...otherProps}>
            <div className="p-scrollpanel-wrapper">
                <div ref={contentRef} className="p-scrollpanel-content" onScroll={moveBar} onMouseEnter={moveBar}>
                    {props.children}
                </div>
            </div>
            <div ref={xBarRef} className="p-scrollpanel-bar p-scrollpanel-bar-x" onMouseDown={onXBarMouseDown}></div>
            <div ref={yBarRef} className="p-scrollpanel-bar p-scrollpanel-bar-y" onMouseDown={onYBarMouseDown}></div>
        </div>
    );
});

ScrollPanel.displayName = 'ScrollPanel';
