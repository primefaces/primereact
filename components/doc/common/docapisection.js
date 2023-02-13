import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { classNames, ObjectUtils } from '../../lib/utils/Utils';
import APIDoc from './apidoc';
import { DocSectionNav } from './docsectionnav';
import { DocSections } from './docsections';
import { DocSectionText } from './docsectiontext';

const Component = (props) => {
    const { id, value, name, description, allowLink = true } = props;
    const router = useRouter();

    const createCard = (data) => {
        if (ObjectUtils.isNotEmpty(data)) {
            const headers = Object.keys(data[0]);

            const onClick = (id, behavior) => {
                const element = document.getElementById(id);

                element && element.parentElement.scrollIntoView({ block: 'start', behavior });
            };

            const createContent = (value, isLinkableOption) => {
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
                                    <span id={id + '.' + sValue} className="doc-option">
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
                    <span id={id + '.' + val} className="doc-option">
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

            return (
                <div className="doc-tablewrapper">
                    <table className="doc-table">
                        <thead>
                            <tr>{headers.map((h) => h !== 'readonly' && h !== 'optional' && <th key={h}>{h}</th>)}</tr>
                        </thead>
                        <tbody>
                            {data.map((d, i) => {
                                return (
                                    <tr key={i}>
                                        {Object.entries(d).map(
                                            ([k, v], index) =>
                                                k !== 'readonly' &&
                                                k !== 'optional' && (
                                                    <td key={index} className={classNames({ highlight: k === 'type' })}>
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
                                                            ? createContent(v, k === 'name')
                                                            : v}
                                                    </td>
                                                )
                                        )}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            );
        }

        return null;
    };

    return (
        <React.Fragment key={id}>
            <DocSectionText {...props}>
                <p>{description}</p>
            </DocSectionText>
            {createCard(value)}
        </React.Fragment>
    );
};

export function DocApiSection(props) {
    const { doc, header } = props;
    const capitalize = (s) => (s && s[0].toUpperCase() + s.slice(1)) || '';

    const docs = doc.reduce((cDocs, name) => {
        const splitedName = name.split('.');
        const modName = capitalize(splitedName[0]);
        const mod = APIDoc[modName.toLowerCase()];

        if (mod) {
            const addToChildDoc = (childDoc, componentName) => {
                if (ObjectUtils.isNotEmpty(mod.events) && ObjectUtils.isNotEmpty(mod.events.values)) {
                    const eMap = {
                        id: `api.${componentName}.events`,
                        label: 'Events',
                        description: mod.events.description,
                        children: []
                    };

                    Object.entries(mod.events.values).forEach(([eKey, eValue]) => {
                        const [id, label] = [`api.${componentName}.${eKey}`, eKey];

                        eMap.children.push({
                            id,
                            label,
                            component: (inProps) => (
                                <Component
                                    name={componentName}
                                    value={eValue.props}
                                    description={
                                        <>
                                            {eValue.description} See <i>{eValue.relatedProp}</i>.
                                        </>
                                    }
                                    {...inProps}
                                />
                            )
                        });
                    });

                    childDoc.push(eMap);
                }

                if (ObjectUtils.isNotEmpty(mod.interfaces) && ObjectUtils.isNotEmpty(mod.interfaces.values)) {
                    const iMap = {
                        id: `api.${componentName}.interfaces`,
                        label: 'Interfaces',
                        description: mod.interfaces.description,
                        children: []
                    };

                    Object.entries(mod.interfaces.values).forEach(([iKey, iValue]) => {
                        const [id, label] = [`api.${componentName}.${iKey}`, iKey];

                        iMap.children.push({
                            id,
                            label,
                            component: (inProps) => (
                                <Component
                                    name={componentName}
                                    value={iValue.props}
                                    description={
                                        <>
                                            {iValue.description}{' '}
                                            {iValue.extendedTypes && (
                                                <>
                                                    Extends <i>{iValue.extendedTypes}</i>.
                                                </>
                                            )}
                                        </>
                                    }
                                    {...inProps}
                                />
                            )
                        });
                    });

                    childDoc.push(iMap);
                }

                if (ObjectUtils.isNotEmpty(mod.types) && ObjectUtils.isNotEmpty(mod.types.values)) {
                    const tMap = {
                        id: `api.${componentName}.types`,
                        label: 'Types',
                        description: mod.types.description,
                        children: []
                    };

                    Object.entries(mod.types.values).forEach(([tKey, tValue]) => {
                        const [id, label] = [`api.${componentName}.${tKey}`, tKey];

                        tMap.children.push({
                            id,
                            label,
                            component: (inProps) => <Component name={componentName} value={[tValue]} allowLink={false} {...inProps} />
                        });
                    });

                    childDoc.push(tMap);
                }
            };

            if (splitedName.length === 3) {
                const type = splitedName[1];
                const selectedName = splitedName[2];

                if (type === 'functions') {
                    const value = mod[type].values[selectedName];

                    const fMap = {
                        id: `api.${modName}`,
                        label: modName,
                        children: []
                    };

                    const [id, label] = [`api.${modName}.function`, 'Function'];

                    const values = Object.entries(value).reduce((avs, [k, v]) => {
                        k !== 'description' && (avs[k] = v);

                        return avs;
                    }, {});

                    fMap.children.push({
                        id,
                        label,
                        component: (inProps) => <Component name={modName} value={[values]} description={value.description} {...inProps} />
                    });

                    const types = value.parameters && value.parameters.map((p) => p.type);

                    if (ObjectUtils.isNotEmpty(mod.interfaces) && ObjectUtils.isNotEmpty(mod.interfaces.values)) {
                        const iMap = {
                            id: `api.${modName}.interfaces`,
                            label: 'Interfaces',
                            description: mod.interfaces.description,
                            children: []
                        };

                        Object.entries(mod.interfaces.values).forEach(([iKey, iValue]) => {
                            if (types.includes(iKey)) {
                                const [id, label] = [`api.${modName}.${iKey}`, iKey];

                                const tMap = {
                                    id,
                                    label,
                                    description: (
                                        <>
                                            {iValue.description}{' '}
                                            {iValue.extendedTypes && (
                                                <>
                                                    Extends <i>{iValue.extendedTypes}</i>.
                                                </>
                                            )}
                                        </>
                                    ),
                                    children: []
                                };

                                if (ObjectUtils.isNotEmpty(iValue.props)) {
                                    tMap.children.push({
                                        id: `${id}.props`,
                                        label: 'Props',
                                        component: (inProps) => <Component value={iValue.props} {...inProps} />
                                    });
                                }

                                if (ObjectUtils.isNotEmpty(iValue.callbacks)) {
                                    tMap.children.push({
                                        id: `${id}.callbacks`,
                                        label: 'Callbacks',
                                        component: (inProps) => <Component value={iValue.callbacks} {...inProps} />
                                    });
                                }

                                iMap.children.push(tMap);
                            }
                        });

                        ObjectUtils.isNotEmpty(iMap.children) && fMap.children.push(iMap);
                    }

                    cDocs.push(fMap);
                }
            } else {
                mod.components &&
                    Object.entries(mod.components).forEach(([cKey, cValue]) => {
                        const cMap = {
                            id: `api.${cKey}`,
                            label: cKey,
                            description: cValue.description,
                            children: []
                        };

                        if (ObjectUtils.isNotEmpty(cValue.props) && ObjectUtils.isNotEmpty(cValue.props.values)) {
                            const [id, label] = [`api.${cKey}.props`, 'Props'];

                            cMap.children.push({
                                id,
                                label,
                                component: (inProps) => <Component name={cKey} value={cValue.props.values} description={cValue.props.description} {...inProps} />
                            });
                        }

                        if (ObjectUtils.isNotEmpty(cValue.callbacks) && ObjectUtils.isNotEmpty(cValue.callbacks.values)) {
                            const [id, label] = [`api.${cKey}.callbacks`, 'Callbacks'];

                            cMap.children.push({
                                id,
                                label,
                                component: (inProps) => <Component name={cKey} value={cValue.callbacks.values} description={cValue.callbacks.description} {...inProps} />
                            });
                        }

                        if (ObjectUtils.isNotEmpty(cValue.methods) && ObjectUtils.isNotEmpty(cValue.methods.values)) {
                            const [id, label] = [`api.${cKey}.methods`, 'Methods'];

                            cMap.children.push({
                                id,
                                label,
                                component: (inProps) => <Component name={cKey} value={cValue.methods.values} description={cValue.methods.description} {...inProps} />
                            });
                        }

                        if (cKey.toLocaleLowerCase() === name.toLowerCase()) {
                            addToChildDoc(cMap.children, cKey);
                        }

                        cDocs.push(cMap);
                    });

                mod.model &&
                    Object.entries(mod.model).forEach(([mKey, mValue]) => {
                        const mMap = {
                            id: `api.${mKey}`,
                            label: mKey,
                            children: []
                        };

                        if (ObjectUtils.isNotEmpty(mValue.props) && ObjectUtils.isNotEmpty(mValue.props.values)) {
                            const [id, label] = [`api.${mKey}.props`, 'Props'];

                            mMap.children.push({
                                id,
                                label,
                                component: (inProps) => <Component name={mKey} value={mValue.props.values} description={mValue.props.description} {...inProps} />
                            });
                        }

                        if (mKey.toLocaleLowerCase() === name.toLowerCase()) {
                            addToChildDoc(mMap.children, mKey);
                        }

                        cDocs.push(mMap);
                    });
            }
        }

        return cDocs;
    }, []);

    useEffect(() => {
        const hash = window.location.hash.substring(1);
        const element = document.getElementById(hash);

        setTimeout(() => {
            element && element.scrollIntoView({ block: 'start' });
        }, 1);
    }, []);

    return (
        <>
            <div className="doc-main">
                <div className="doc-intro">
                    <h1>{header} API</h1>
                    <p>API defines helper props, events and others for the PrimeReact {header} module.</p>
                </div>
                <DocSections docs={docs} />
            </div>
            <DocSectionNav docs={docs} />
        </>
    );
}
