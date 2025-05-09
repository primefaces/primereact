'use client';
import { useApp } from '@/hooks/useApp';
import { getPTOptions, getStyleOptions, getTokenOptions } from '@/lib/utils/getComponentOptions';
import { cn } from '@primeuix/utils';
import Link from 'next/link';
import React, { useMemo } from 'react';

type DocApiTableProps = {
    data?: unknown;
    name?: string;
    type?: 'token' | 'pt' | 'style';
};

const DocApiTable = ({ name, type, ...props }: DocApiTableProps) => {
    const { isDarkTheme } = useApp();

    const getType = (value: string) => {
        return value?.split('|').map((item) => {
            return item.replace(/(\|\|<).*$/gm, '').trim();
        });
    };

    const isLinkType = (value: string) => {
        if (value.includes('SharedPassThroughOption') || value.includes('PassThrough<')) return false;
        const validValues = ['confirmationoptions', 'toastmessageoptions'];

        return validValues.includes(value.toLowerCase());
    };

    const data = useMemo(() => {
        if (props.data) {
            return props.data;
        }
        if (!type || !name) return [];
        if (type === 'pt') {
            return getPTOptions(name);
        } else if (type === 'style') {
            return getStyleOptions(name);
        } else if (type === 'token') {
            return getTokenOptions(name);
        } else {
            return [];
        }
    }, [name, type, props.data]);

    return data[0]?.data ? (
        data[0].data.length > 0 ? (
            data.map((childData, childDataIndex) => <DocApiTable key={'child-data-' + childDataIndex} data={childData.data} />)
        ) : null
    ) : (
        <div className="doc-tablewrapper mt-4">
            <table className="doc-table">
                <thead>
                    <tr>
                        {Object.keys(data[0]).map((header) => {
                            return !['readonly', 'optional', 'deprecated'].includes(header) && <th key={header}>{header}</th>;
                        })}
                    </tr>
                </thead>
                <tbody>
                    {data.map((prop, propIndex) => (
                        <tr key={'prop-' + propIndex}>
                            {Object.entries(prop).map(([k, v], vIndex) => {
                                return (
                                    !['readonly', 'optional', 'deprecated'].includes(k) && (
                                        <td key={'prop-td-' + k + '-' + vIndex} style={{ maxWidth: k === 'default' || k === 'returnType' ? '200px' : undefined }}>
                                            {k === 'name' && (
                                                <span className={cn('doc-option-name', !!prop.deprecated && 'line-through cursor-pointer')}>
                                                    {v}
                                                    <Link href={`#${v}`}>
                                                        <i className="pi pi-link"></i>
                                                    </Link>
                                                </span>
                                            )}
                                            {k === 'type' &&
                                                getType(v).map((value, i) => (
                                                    <React.Fragment key={value}>
                                                        {i !== 0 && <span className="doc-option-type">{' | '}</span>}
                                                        {isLinkType(value) ? <Link href={`#${value}`}>{value}</Link> : <span className="doc-option-type">{value === 'T' ? 'any' : value}</span>}
                                                    </React.Fragment>
                                                ))}
                                            {k === 'options' &&
                                                v.map((val, valIndex) => (
                                                    <div key={'prop-options-' + valIndex} className="doc-option-type-options-container">
                                                        {val.name}: <span className="doc-option-type-options doc-option-type">{val.type === 'T' || (val.type.includes('\<T') && !val.type.includes('\<Tr')) ? 'any' : val.type}</span>
                                                    </div>
                                                ))}
                                            {k === 'parameters' && (
                                                <div className="doc-option-params">
                                                    {v.name && <span className="doc-option-parameter-name">{v.name}: </span>}
                                                    {getType(v.type).map((value, i) => (
                                                        <React.Fragment key={'prop-param-' + value + '-' + i}>
                                                            {i !== 0 ? ' | ' : ''}

                                                            {isLinkType(value) ? (
                                                                <Link href={`#${value}`} className="doc-option-link doc-option-parameter-type">
                                                                    {value}
                                                                </Link>
                                                            ) : (
                                                                <span dangerouslySetInnerHTML={{ __html: value }}></span>
                                                            )}
                                                        </React.Fragment>
                                                    ))}
                                                </div>
                                            )}
                                            {k === 'default' && <div className={cn('doc-option-default', isDarkTheme ? 'doc-option-dark' : 'doc-option-light')}>{v === '' || v === undefined ? 'null' : v}</div>}
                                            {k === 'returnType' && <div className={cn('doc-option-return-type', isDarkTheme ? 'doc-option-dark' : 'doc-option-light')}>{v}</div>}
                                            {k === 'CSS Variable' && <div className={cn('doc-option-css-variable', isDarkTheme ? 'doc-option-dark' : 'doc-option-light')}>{v}</div>}
                                            {!['name', 'type', 'options', 'parameters', 'default', 'returnType', 'CSS Variable'].includes(k) && (
                                                <>{typeof v === 'string' && v?.includes('<a') ? <span className="doc-option-description" dangerouslySetInnerHTML={{ __html: v }}></span> : <span className="doc-option-description">{v}</span>}</>
                                            )}
                                        </td>
                                    )
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DocApiTable;
