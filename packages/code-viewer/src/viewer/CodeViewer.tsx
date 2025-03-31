import { useProps } from '@primereact/hooks/use-props';
import { isObject, isString, mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { CodeHighlighter } from '../highlighter';
import { defaultViewerProps } from './CodeViewer.props';
import type { CodeViewerProps } from './CodeViewer.types';

function CopyToolbarItem({ code }: { code: string }) {
    const onClick = () => {
        navigator.clipboard.writeText(code);
    };

    return (
        <button type="button" className="pcv-toolbar-copy pcv-toolbar-item" onClick={onClick}>
            Copy
        </button>
    );
}

function ToggleableToolbarItem({ orders, onCodeChange }: { orders: string[]; onCodeChange: (key: string) => void }) {
    const [showItems, setShowItems] = React.useState<boolean>(false);

    const onClick = () => {
        setShowItems((prev) => !prev);
    };

    const onItemClick = (order: string) => {
        onCodeChange(order);
    };

    return (
        <>
            {showItems ? (
                <div className="pcv-toggleable-items">
                    {orders.map((order) => (
                        <button type="button" className={`pcv-toggleable-${order} pcv-toolbar-item`} key={order} onClick={() => onItemClick(order)}>
                            {order}
                        </button>
                    ))}
                </div>
            ) : null}
            <button type="button" className="pcv-toggleable-toggle pcv-toolbar-item" onClick={onClick}>
                Toggle
            </button>
        </>
    );
}

export function CodeViewer(inProps: CodeViewerProps) {
    const [code, setCode] = React.useState<string>('');
    const [orders, setOrders] = React.useState<string[]>([]);
    const { props, attrs } = useProps(inProps, defaultViewerProps);

    const onCodeChange = (key: string) => {
        setCode((props.source as Record<string, string>)[key]);
    };

    React.useEffect(() => {
        if (isString(props.source)) {
            setCode(props.source);
        } else if (isObject(props.source)) {
            const sections = Object.keys(props.source);
            const orders = sections.reduce((acc: string[], section: string) => {
                if (acc.indexOf(section) === -1) {
                    acc.push(section);
                }
                return acc;
            }, props.toggleableOrder || []);

            setCode(props.source[orders[0]]);
            setOrders(orders);
        }
    }, [props.source, props.toggleableOrder]);

    const rootProps = mergeProps(
        {
            className: 'p-code-viewer pcv'
        },
        attrs
    );

    return (
        <div {...rootProps}>
            <div className="pcv-toolbar">
                {props.toggleable ? <ToggleableToolbarItem orders={orders} onCodeChange={onCodeChange} /> : null}|{props.copy ? <CopyToolbarItem code={code} /> : null}
            </div>
            <CodeHighlighter code={code} />
        </div>
    );
}
