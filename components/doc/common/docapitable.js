import React from 'react';
import { DocSectionText } from './docsectiontext';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ObjectUtils, classNames } from '../../lib/utils/Utils';

const DocApiTable = (props) => {
    const { id, data, name, description, allowLink = true } = props;
    const isPT = id.startsWith('pt.');

    const router = useRouter();

    if (ObjectUtils.isNotEmpty(data)) {
        const headers = Object.keys(data[0]);

        const onClick = (id, behavior) => {
            const element = document.getElementById(id);

            element && element.parentElement.scrollIntoView({ block: 'start', behavior });
        };

        const createContent = (value, isLinkableOption, deprecated) => {
            if (allowLink && value) {
                const splitedValues = value.split('|');

                return splitedValues.map((sValue, i) => {
                    if (sValue.includes(name)) {
                        let matchedIndex = sValue.indexOf(name);
                        let val = sValue
                            .substring(matchedIndex)
                            .replace(/(\[|\]|<|>).*$/gm, '')
                            .trim();

                        const apiId = name === val ? `api.${name}` : `api.${name}.${val === `${name}Props` ? 'props' : val}`;

                        return (
                            <React.Fragment key={i}>
                                {i !== 0 ? '|' : ''}
                                <Link href={router.basePath + router.pathname + `#${apiId}`} target="_self">
                                    <a onClick={() => onClick(apiId, 'smooth')}>{sValue}</a>
                                </Link>
                            </React.Fragment>
                        );
                    }

                    return (
                        <React.Fragment key={i}>
                            {i !== 0 ? '|' : ''}
                            {isLinkableOption ? (
                                <span id={id + '.' + sValue} className={classNames('doc-option-name', { 'line-through cursor-pointer': !!deprecated })} title={deprecated}>
                                    {sValue}
                                    <Link href={router.basePath + router.pathname + `#${id + '.' + sValue}`} target="_self">
                                        <a onClick={() => onClick(id + '.' + sValue)} className="doc-option-link">
                                            <i className="pi pi-link"></i>
                                        </a>
                                    </Link>
                                </span>
                            ) : (
                                sValue
                            )}
                        </React.Fragment>
                    );
                });
            }

            const val = value && value.includes('": "') ? value.replace(/['"]+/g, '').replace(/\.,/gm, '.') : value;

            return isLinkableOption ? (
                <span id={id + '.' + val} className={classNames('doc-option-name', { 'line-through cursor-pointer': !!deprecated })} title={deprecated}>
                    {val}
                    <Link href={router.basePath + router.pathname + `#${id + '.' + val}`} target="_self">
                        <a onClick={() => onClick(id + '.' + val)} className="doc-option-link">
                            <i className="pi pi-link"></i>
                        </a>
                    </Link>
                </span>
            ) : (
                val
            );
        };

        const createTBody = () => {
            return (
                <React.Fragment>
                    {data.map((d, i) => {
                        if (isPT) {
                            const { value, label, description } = d;

                            return (
                                <tr key={i}>
                                    <td>{value}</td>
                                    <td>{label}</td>
                                    <td>{description}</td>
                                </tr>
                            );
                        } else {
                            return (
                                <tr key={i}>
                                    {Object.entries(d).map(
                                        ([k, v], index) =>
                                            k !== 'readonly' &&
                                            k !== 'optional' &&
                                            k !== 'deprecated' && (
                                                <td key={index} className={classNames({ 'doc-option-type': k === 'type', 'doc-option-default': k === 'defaultValue' })}>
                                                    {k === 'parameters'
                                                        ? v.map((_v, i) => {
                                                              return (
                                                                  <React.Fragment key={i}>
                                                                      {_v.name}:{createContent(_v.type)}
                                                                      <br />
                                                                  </React.Fragment>
                                                              );
                                                          })
                                                        : k !== 'description'
                                                        ? createContent(v, k === 'name', d['deprecated'])
                                                        : v}
                                                </td>
                                            )
                                    )}
                                </tr>
                            );
                        }
                    })}
                </React.Fragment>
            );
        };

        const createTHead = () => {
            return (
                <React.Fragment>
                    {isPT ? (
                        <tr>
                            {headers.map((h) => (
                                <th key={h}>{h}</th>
                            ))}
                        </tr>
                    ) : (
                        <tr>{headers.map((h) => h !== 'readonly' && h !== 'optional' && h !== 'deprecated' && <th key={h}>{h}</th>)}</tr>
                    )}
                </React.Fragment>
            );
        };

        const thead = createTHead();
        const tbody = createTBody();

        return (
            <React.Fragment key={id}>
                <DocSectionText {...props}>
                    <p>{description}</p>
                </DocSectionText>
                <div className="doc-tablewrapper">
                    <table className="doc-table">
                        <thead>{thead}</thead>
                        <tbody>{tbody}</tbody>
                    </table>
                </div>
            </React.Fragment>
        );
    }

    return null;
};

export default DocApiTable;
