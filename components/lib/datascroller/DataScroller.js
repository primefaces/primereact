import * as React from 'react';
import { localeOption } from '../api/Api';
import { useMountEffect, useUnmountEffect, useUpdateEffect } from '../hooks/Hooks';
import { classNames, ObjectUtils } from '../utils/Utils';
import { DataScrollerBase } from './DataScrollerBase';

export const DataScroller = React.memo(
    React.forwardRef((inProps, ref) => {
        const props = DataScrollerBase.getProps(inProps);

        const [dataToRenderState, setDataToRenderState] = React.useState([]);
        const elementRef = React.useRef(null);
        const contentRef = React.useRef(null);
        const value = React.useRef(props.value);
        const dataToRender = React.useRef([]);
        const first = React.useRef(0);
        const scrollFunction = React.useRef(null);

        const handleDataChange = () => {
            if (props.lazy) {
                dataToRender.current = value.current;
                setDataToRenderState([...dataToRender.current]);
            } else {
                load();
            }
        };

        const load = () => {
            if (props.lazy) {
                if (props.onLazyLoad) {
                    props.onLazyLoad(createLazyLoadMetadata());
                }

                first.current += props.rows;
            } else {
                if (value.current) {
                    for (let i = first.current; i < first.current + props.rows; i++) {
                        if (i >= value.current.length) {
                            break;
                        }

                        dataToRender.current.push(value.current[i]);
                    }

                    if (value.current.length !== 0) {
                        first.current += props.rows;
                    }

                    setDataToRenderState([...dataToRender.current]);
                }
            }
        };

        const reset = () => {
            first.current = 0;
            dataToRender.current = [];
            setDataToRenderState([...dataToRender.current]);
            load();
        };

        const isEmpty = () => {
            return !dataToRender.current || dataToRender.current.length === 0;
        };

        const createLazyLoadMetadata = () => {
            return {
                first: first.current,
                rows: props.rows
            };
        };

        const bindScrollListener = () => {
            if (props.inline) {
                scrollFunction.current = () => {
                    let scrollTop = contentRef.current.scrollTop,
                        scrollHeight = contentRef.current.scrollHeight,
                        viewportHeight = contentRef.current.clientHeight;

                    if (scrollTop >= scrollHeight * props.buffer - viewportHeight) {
                        load();
                    }
                };

                contentRef.current.addEventListener('scroll', scrollFunction.current);
            } else {
                scrollFunction.current = () => {
                    let docBody = document.body,
                        docElement = document.documentElement,
                        scrollTop = window.pageYOffset || document.documentElement.scrollTop,
                        winHeight = docElement.clientHeight,
                        docHeight = Math.max(docBody.scrollHeight, docBody.offsetHeight, winHeight, docElement.scrollHeight, docElement.offsetHeight);

                    if (scrollTop >= docHeight * props.buffer - winHeight) {
                        load();
                    }
                };

                window.addEventListener('scroll', scrollFunction.current);
            }
        };

        const unbindScrollListener = () => {
            if (scrollFunction.current) {
                if (props.inline && contentRef.current) {
                    contentRef.current.removeEventListener('scroll', scrollFunction.current);
                } else if (!props.loader) {
                    window.removeEventListener('scroll', scrollFunction.current);
                }
            }

            scrollFunction.current = null;
        };

        useMountEffect(() => {
            load();

            if (!props.loader) {
                bindScrollListener();
            }
        });

        useUpdateEffect(() => {
            if (props.value) {
                value.current = props.value;

                if (!props.lazy) {
                    first.current = 0;
                }

                dataToRender.current = [];
                handleDataChange();
            }
        }, [props.value]);

        useUpdateEffect(() => {
            if (props.loader) {
                unbindScrollListener();
            }
        }, [props.loader]);

        useUnmountEffect(() => {
            if (scrollFunction.current) {
                unbindScrollListener();
            }
        });

        React.useImperativeHandle(ref, () => ({
            props,
            load,
            reset,
            getElement: () => elementRef.current,
            getContent: () => contentRef.current
        }));

        const createHeader = () => {
            if (props.header) {
                return <div className="p-datascroller-header">{props.header}</div>;
            }

            return null;
        };

        const createFooter = () => {
            if (props.footer) {
                return <div className="p-datascroller-footer">{props.footer}</div>;
            }

            return null;
        };

        const createItem = (_value, index) => {
            const content = props.itemTemplate ? props.itemTemplate(_value) : _value;

            return <li key={index + '_datascrollitem'}>{content}</li>;
        };

        const createEmptyMessage = () => {
            const content = ObjectUtils.getJSXElement(props.emptyMessage, props) || localeOption('emptyMessage');

            return <li>{content}</li>;
        };

        const createContent = () => {
            const content = ObjectUtils.isNotEmpty(dataToRenderState) ? dataToRenderState.map(createItem) : createEmptyMessage();

            return (
                <div ref={contentRef} className="p-datascroller-content" style={{ maxHeight: props.scrollHeight }}>
                    <ul className="p-datascroller-list">{content}</ul>
                </div>
            );
        };

        const otherProps = DataScrollerBase.getOtherProps(props);
        const className = classNames('p-datascroller p-component', props.className, {
            'p-datascroller-inline': props.inline
        });

        const header = createHeader();
        const footer = createFooter();
        const content = createContent();

        return (
            <div id={props.id} ref={elementRef} className={className} {...otherProps}>
                {header}
                {content}
                {footer}
            </div>
        );
    })
);

DataScroller.displayName = 'DataScroller';
