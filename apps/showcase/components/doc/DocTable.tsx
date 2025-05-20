import { useApp } from '@/hooks/useApp';
import { getApiDocs, getPTOptions, getStyleOptions, getTokenOptions } from '@/lib/utils/getComponentOptions';
import { ApiChild, ApiData, ApiDataItem, NestedApiData } from '@/types/Doc.types';
import { cn } from '@primeuix/utils';
import Link from 'next/link';
import React, { useMemo } from 'react';

type ApiDataType = ApiData | NestedApiData | ApiChild | unknown[] | { data: unknown[]; description?: string };

interface DocTableProps {
    name?: string;
    category?: 'api' | 'token' | 'pt' | 'style';
    type?: string;
    data?: ApiDataType;
}

const DocTable = ({ name, category, type, ...props }: DocTableProps) => {
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

        if (!category || !name) return null;

        if (category === 'api') {
            const item = getApiDocs(name)[0]?.children.find((item: ApiChild) => item.label.toLowerCase() === type);

            if (item) {
                return {
                    label: item.label,
                    description: item.description,
                    data: Array.isArray(item.data) ? (item.data as ApiDataItem[]) : []
                } as ApiData;
            }

            return null;
        } else if (category === 'token') {
            return getTokenOptions(name);
        } else if (category === 'style') {
            return getStyleOptions(name);
        } else if (category === 'pt') {
            return getPTOptions(name);
        } else {
            return null;
        }
    }, [name, type, category, props.data]);

    const isNestedApiData = (data: ApiDataType): data is NestedApiData => {
        return data !== null && data !== undefined && 'data' in data && Array.isArray(data.data) && data.data.length > 0 && typeof data.data[0] === 'object' && data.data[0] !== null && 'data' in data.data[0];
    };

    const isApiData = (data: ApiDataType): data is ApiData => {
        return data !== null && data !== undefined && 'data' in data && Array.isArray(data.data) && !isNestedApiData(data);
    };

    const renderValue = (value: unknown): React.ReactNode => {
        if (value === undefined || value === '') return 'null';

        if (typeof value === 'string') return value;

        if (typeof value === 'number' || typeof value === 'boolean') return String(value);

        return 'null';
    };

    if (!data || (isApiData(data) && data.data.length === 0)) {
        return null;
    }

    if (isNestedApiData(data)) {
        return data.data && data.data.length > 0 ? (
            <>
                {data.data.map((childData, childDataIndex) => {
                    if (childData) {
                        return (
                            <React.Fragment key={`child-data-${childDataIndex}`}>
                                {childData.label && (
                                    <h4 className="doc-section-label" id={`${type}.${String(childData.label)}`}>
                                        {String(childData.label)}
                                        <Link href={`#${type}.${String(childData.label)}`}>
                                            <i className="pi pi-link"></i>
                                        </Link>
                                    </h4>
                                )}
                                <DocTable data={childData} />
                            </React.Fragment>
                        );
                    }

                    return null;
                })}
            </>
        ) : null;
    }

    if (isApiData(data)) {
        return (
            <>
                <p>{data.description}</p>
                <div className="doc-tablewrapper mt-4">
                    <table className="doc-table">
                        <thead>
                            <tr>
                                {Object.keys(data.data[0])
                                    .filter((header) => !['readonly', 'optional', 'deprecated'].includes(header))
                                    .map((header) => (
                                        <th key={`header-${header}`}>{header}</th>
                                    ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data.data.map((prop, propIndex) => (
                                <tr key={`prop-${propIndex}`}>
                                    {Object.entries(prop).map(([k, v], vIndex) => {
                                        return (
                                            !['readonly', 'optional', 'deprecated'].includes(k) && (
                                                <td
                                                    key={'prop-td-' + k + '-' + vIndex}
                                                    style={{
                                                        maxWidth: k === 'default' || k === 'returnType' ? '200px' : undefined
                                                    }}
                                                >
                                                    {k === 'name' && (
                                                        <span className={cn('doc-option-name', !!prop.deprecated && 'line-through cursor-pointer')}>
                                                            {v as React.ReactNode}
                                                            <Link href={`#${type}.${String(v)}`} className="doc-option-link">
                                                                <i className="pi pi-link"></i>
                                                            </Link>
                                                        </span>
                                                    )}
                                                    {k === 'type' &&
                                                        typeof v === 'string' &&
                                                        getType(v).map((value, i) => (
                                                            <React.Fragment key={value}>
                                                                {i !== 0 && <span className="doc-option-type">{' | '}</span>}
                                                                {isLinkType(value) ? <Link href={`#${value}`}>{value}</Link> : <span className="doc-option-type">{value === 'T' ? 'any' : value}</span>}
                                                            </React.Fragment>
                                                        ))}
                                                    {k === 'options' &&
                                                        Array.isArray(v) &&
                                                        v.map((val, valIndex) => (
                                                            <div key={'prop-options-' + valIndex} className="doc-option-type-options-container">
                                                                {val.name}: <span className="doc-option-type-options doc-option-type">{val.type === 'T' || (val.type.includes('<T') && !val.type.includes('<Tr')) ? 'any' : val.type}</span>
                                                            </div>
                                                        ))}
                                                    {k === 'parameters' && v && typeof v === 'object' && (
                                                        <div className="doc-option-params">
                                                            {(v as { name?: string; type: string }).name && <span className="doc-option-parameter-name">{(v as { name?: string; type: string }).name}: </span>}
                                                            {(v as { name?: string; type: string }).type &&
                                                                getType((v as { name?: string; type: string }).type).map((value, i) => (
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
                                                    {k === 'default' && <div className={cn('doc-option-default', isDarkTheme ? 'doc-option-dark' : 'doc-option-light')}>{renderValue(v)}</div>}
                                                    {k === 'returnType' && <div className={cn('doc-option-return-type', isDarkTheme ? 'doc-option-dark' : 'doc-option-light')}>{renderValue(v)}</div>}
                                                    {k === 'CSS Variable' && <div className={cn('doc-option-css-variable', isDarkTheme ? 'doc-option-dark' : 'doc-option-light')}>{renderValue(v)}</div>}
                                                    {!['name', 'type', 'options', 'parameters', 'default', 'returnType', 'CSS Variable'].includes(k) && (
                                                        <>
                                                            {typeof v === 'string' && v?.includes('<a') ? (
                                                                <span className="doc-option-description" dangerouslySetInnerHTML={{ __html: v }}></span>
                                                            ) : (
                                                                <span className="doc-option-description">{v as React.ReactNode}</span>
                                                            )}
                                                        </>
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
            </>
        );
    }

    return null;
};

export default DocTable;
