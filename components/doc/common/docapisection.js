import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { ObjectUtils } from '../../lib/utils/Utils';
import APIDoc from './apidoc';
import { DocSectionNav } from './docsectionnav';
import { DocSections } from './docsections';
import { DocSectionText } from './docsectiontext';

const Component = (props) => {
    const { id, value, name, allowLink = true } = props;
    const router = useRouter();

    const createTable = (data) => {
        if (ObjectUtils.isNotEmpty(data)) {
            const headers = Object.keys(data[0]);

            const onClick = (id) => {
                document.getElementById(id).parentElement.scrollIntoView({ block: 'start', behavior: 'smooth' });
            };

            const createContent = (value) => {
                if (allowLink && value) {
                    const splitedValues = value.split('|');

                    return splitedValues.map((sValue, i) => {
                        if (sValue.includes(name)) {
                            let val = sValue.replace(/(\[|<).*$/gm, '').trim();

                            const apiId = name === val ? `api.${name}` : `api.${name}.${val === `${name}Props` ? 'props' : val}`;

                            return (
                                <React.Fragment key={i}>
                                    {i !== 0 ? '|' : ''}
                                    <Link href={router.basePath + router.pathname + `#${apiId}`} target="_self">
                                        <a onClick={() => onClick(apiId)}>{sValue}</a>
                                    </Link>
                                </React.Fragment>
                            );
                        }

                        return (
                            <React.Fragment key={i}>
                                {i !== 0 ? '|' : ''}
                                {sValue}
                            </React.Fragment>
                        );
                    });
                }

                return value && value.includes('": "') ? value.replace(/['"]+/g, '').replace(/\.,/gm, '.') : value;
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
                                                    <td key={index}>
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
                                                            ? createContent(v)
                                                            : v}
                                                        {k === 'name' && d['optional'] ? '?' : ''}
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
                <p>@todo</p>
            </DocSectionText>
            <div className="card">{createTable(value)}</div>
        </React.Fragment>
    );
};

export function DocApiSection(props) {
    const { doc, header } = props;

    const docs = doc.reduce((cDocs, name) => {
        const mod = APIDoc[name.toLowerCase()];

        if (mod) {
            const addToChildDoc = (childDoc, componentName) => {
                if (ObjectUtils.isNotEmpty(mod.events)) {
                    const eMap = {
                        id: `api.${componentName}.events`,
                        label: 'Events',
                        children: []
                    };

                    Object.entries(mod.events).forEach(([eKey, eValue]) => {
                        const [id, label] = [`api.${componentName}.${eKey}`, eKey];

                        eMap.children.push({
                            id,
                            label,
                            component: (inProps) => <Component name={componentName} value={eValue.props} {...inProps} />
                        });
                    });

                    childDoc.push(eMap);
                }

                if (ObjectUtils.isNotEmpty(mod.interfaces)) {
                    const iMap = {
                        id: `api.${componentName}.interfaces`,
                        label: 'Interfaces',
                        children: []
                    };

                    Object.entries(mod.interfaces).forEach(([iKey, iValue]) => {
                        const [id, label] = [`api.${componentName}.${iKey}`, iKey];

                        iMap.children.push({
                            id,
                            label,
                            component: (inProps) => <Component name={componentName} value={iValue.props} {...inProps} />
                        });
                    });

                    childDoc.push(iMap);
                }

                if (ObjectUtils.isNotEmpty(mod.types)) {
                    const tMap = {
                        id: `api.${componentName}.types`,
                        label: 'Types',
                        children: []
                    };

                    Object.entries(mod.types).forEach(([tKey, tValue]) => {
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

            mod.components &&
                Object.entries(mod.components).forEach(([cKey, cValue]) => {
                    const cMap = {
                        id: `api.${cKey}`,
                        label: cKey,
                        children: []
                    };

                    if (ObjectUtils.isNotEmpty(cValue.props)) {
                        const [id, label] = [`api.${cKey}.props`, 'Props'];

                        cMap.children.push({
                            id,
                            label,
                            component: (inProps) => <Component name={cKey} value={cValue.props} {...inProps} />
                        });
                    }

                    if (ObjectUtils.isNotEmpty(cValue.callbacks)) {
                        const [id, label] = [`api.${cKey}.callbacks`, 'Callbacks'];

                        cMap.children.push({
                            id,
                            label,
                            component: (inProps) => <Component name={cKey} value={cValue.callbacks} {...inProps} />
                        });
                    }

                    if (ObjectUtils.isNotEmpty(cValue.methods)) {
                        const [id, label] = [`api.${cKey}.methods`, 'Methods'];

                        cMap.children.push({
                            id,
                            label,
                            component: (inProps) => <Component name={cKey} value={cValue.methods} {...inProps} />
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

                    if (ObjectUtils.isNotEmpty(mValue.props)) {
                        const [id, label] = [`api.${mKey}.props`, 'Props'];

                        mMap.children.push({
                            id,
                            label,
                            component: (inProps) => <Component name={mKey} value={mValue.props} {...inProps} />
                        });
                    }

                    if (mKey.toLocaleLowerCase() === name.toLowerCase()) {
                        addToChildDoc(mMap.children, mKey);
                    }

                    cDocs.push(mMap);
                });
        }

        return cDocs;
    }, []);

    return (
        <>
            <div className="doc-main">
                <div className="doc-intro">
                    <h1>{header} API</h1>
                    <p>@todo</p>
                </div>
                <DocSections docs={docs} />
            </div>
            <DocSectionNav docs={docs} />
        </>
    );
}
