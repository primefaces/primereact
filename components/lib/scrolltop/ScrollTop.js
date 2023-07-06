import * as React from 'react';
import PrimeReact, { PrimeReactContext } from '../api/Api';
import { CSSTransition } from '../csstransition/CSSTransition';
import { useEventListener, useStyle, useUnmountEffect } from '../hooks/Hooks';
import { ChevronUpIcon } from '../icons/chevronup';
import { Ripple } from '../ripple/Ripple';
import { DomHandler, IconUtils, ZIndexUtils, mergeProps } from '../utils/Utils';
import { ScrollTopBase } from './ScrollTopBase';

export const ScrollTop = React.memo(
    React.forwardRef((inProps, ref) => {
        const [visibleState, setVisibleState] = React.useState(false);
        const context = React.useContext(PrimeReactContext);

        useStyle(ScrollTopBase.css.styles, { name: 'primereact_scrolltop_style' });

        const props = ScrollTopBase.getProps(inProps, context);
        const { ptm, cx } = ScrollTopBase.setMetaData({
            props,
            state: {
                visible: visibleState
            }
        });

        const scrollElementRef = React.useRef(null);
        const helperRef = React.useRef(null);
        const isTargetParent = props.target === 'parent';

        const [bindParentScrollListener] = useEventListener({
            target: () => helperRef.current && helperRef.current.parentElement,
            type: 'scroll',
            listener: (event) => {
                checkVisibility(event.currentTarget.scrollTop);
            }
        });

        const [bindDocumentScrollListener] = useEventListener({
            target: 'window',
            type: 'scroll',
            listener: (event) => {
                event && checkVisibility(DomHandler.getWindowScrollTop());
            }
        });

        const onClick = () => {
            const scrollElement = props.target === 'window' ? window : helperRef.current.parentElement;

            scrollElement.scroll({
                top: 0,
                behavior: props.behavior
            });
        };

        const checkVisibility = (scrollY) => {
            setVisibleState(scrollY > props.threshold);
        };

        const onEnter = () => {
            ZIndexUtils.set('overlay', scrollElementRef.current, (context && context.autoZIndex) || PrimeReact.autoZIndex, (context && context.zIndex['overlay']) || PrimeReact.zIndex['overlay']);
        };

        const onEntered = () => {
            props.onShow && props.onShow();
        };

        const onExited = () => {
            ZIndexUtils.clear(scrollElementRef.current);

            props.onHide && props.onHide();
        };

        React.useImperativeHandle(ref, () => ({
            props,
            getElement: () => elementRef.current
        }));

        React.useEffect(() => {
            if (props.target === 'window') bindDocumentScrollListener();
            else if (props.target === 'parent') bindParentScrollListener();
        }, []); // eslint-disable-line react-hooks/exhaustive-deps

        useUnmountEffect(() => {
            ZIndexUtils.clear(scrollElementRef.current);
        });

        const iconProps = mergeProps(
            {
                className: cx('icon')
            },
            ptm('icon')
        );
        const icon = props.icon || <ChevronUpIcon {...iconProps} />;
        const scrollIcon = IconUtils.getJSXIcon(icon, { ...iconProps }, { props });
        const rootProps = mergeProps(
            {
                ref: scrollElementRef,
                type: 'button',
                className: cx('root'),
                style: props.style,
                onClick
            },
            ScrollTopBase.getOtherProps(props),
            ptm('root')
        );

        return (
            <>
                <CSSTransition nodeRef={scrollElementRef} classNames="p-scrolltop" in={visibleState} timeout={{ enter: 150, exit: 150 }} options={props.transitionOptions} unmountOnExit onEnter={onEnter} onEntered={onEntered} onExited={onExited}>
                    <button {...rootProps}>
                        {scrollIcon}
                        <Ripple />
                    </button>
                </CSSTransition>
                {isTargetParent && <span ref={helperRef} className="p-scrolltop-helper"></span>}
            </>
        );
    })
);

ScrollTop.displayName = 'ScrollTop';
