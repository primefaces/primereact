import * as React from 'react';
import { PrimeReactContext, localeOption } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useMergeProps, useMountEffect, useUnmountEffect, useUpdateEffect } from '../hooks/Hooks';
import { ObjectUtils, classNames } from '../utils/Utils';
import { DataScrollerBase } from './DataScrollerBase';

export const DataScroller = React.memo(
    React.forwardRef((inProps, ref) => {
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = DataScrollerBase.getProps(inProps, context);

        const [dataToRenderState, setDataToRenderState] = React.useState([]);
        const { ptm, cx, sx, isUnstyled } = DataScrollerBase.setMetaData({
            props
        });

        useHandleStyle(DataScrollerBase.css.styles, isUnstyled, { name: 'datascroller' });

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
            const headerProps = mergeProps(
                {
                    className: cx('header')
                },
                ptm('header')
            );

            if (props.header) {
                return <div {...headerProps}>{props.header}</div>;
            }

            return null;
        };

        const createFooter = () => {
            const footerProps = mergeProps(
                {
                    className: cx('footer')
                },
                ptm('footer')
            );

            if (props.footer) {
                return <div {...footerProps}>{props.footer}</div>;
            }

            return null;
        };

        const createItem = (_value, index) => {
            const itemProps = mergeProps(
                {
                    key: index + '_datascrollitem'
                },
                ptm('item')
            );
            const content = props.itemTemplate ? props.itemTemplate(_value) : _value;

            return <li {...itemProps}>{content}</li>;
        };

        const createEmptyMessage = () => {
            const emptyMessageProps = mergeProps(ptm('emptyMessage'));

            const content = ObjectUtils.getJSXElement(props.emptyMessage, props) || localeOption('emptyMessage');

            return <li {...emptyMessageProps}>{content}</li>;
        };

        const createContent = () => {
            const contentProps = mergeProps(
                {
                    ref: contentRef,
                    className: cx('content'),
                    style: sx('content')
                },
                ptm('content')
            );
            const listProps = mergeProps(
                {
                    className: cx('list')
                },
                ptm('list')
            );
            const content = ObjectUtils.isNotEmpty(dataToRenderState) ? dataToRenderState.map(createItem) : createEmptyMessage();

            return (
                <div {...contentProps}>
                    <ul {...listProps}>{content}</ul>
                </div>
            );
        };

        const header = createHeader();
        const footer = createFooter();
        const content = createContent();

        const rootProps = mergeProps(
            {
                id: props.id,
                ref: elementRef,
                className: classNames(props.className, cx('root'))
            },
            DataScrollerBase.getOtherProps(props),
            ptm('root')
        );

        return (
            <div {...rootProps}>
                {header}
                {content}
                {footer}
            </div>
        );
    })
);

DataScroller.displayName = 'DataScroller';
