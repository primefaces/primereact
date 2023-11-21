import { ObjectUtils } from '@/components/lib/utils/Utils';
import { useEffect } from 'react';
import APIDoc from './apidoc';
import DocApiTable from './docapitable';
import { DocSectionNav } from './docsectionnav';
import { DocSections } from './docsections';

export function DocApiSection(props) {
    const { doc, header } = props;
    const capitalize = (s) => (s && s[0].toUpperCase() + s.slice(1)) || '';
    const exclude = props.apiExclude;

    const docs = doc.reduce((cDocs, name) => {
        const splitedName = name.split('.');
        const modName = capitalize(splitedName[0]);
        const mod = APIDoc[modName.toLowerCase()];

        const isExcluded = (option, key) => {
            return exclude && exclude[option] && exclude[option].includes(key);
        };

        const isExcludedAll = (option) => {
            return exclude && exclude[option] && exclude[option] === 'excludeAll';
        };

        if (mod) {
            const addToChildDoc = (childDoc, componentName) => {
                if (ObjectUtils.isNotEmpty(mod.events) && ObjectUtils.isNotEmpty(mod.events.values) && !isExcludedAll('events')) {
                    const eMap = {
                        id: `api.${componentName}.events`,
                        label: 'Events',
                        description: mod.events.description,
                        children: []
                    };

                    Object.entries(mod.events.values).forEach(([eKey, eValue]) => {
                        const [id, label] = [`api.${componentName}.${eKey}`, eKey];

                        if (isExcluded('event', eKey)) return;

                        eMap.children.push({
                            id,
                            label,
                            component: (inProps) => (
                                <DocApiTable
                                    name={componentName}
                                    data={eValue.props}
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

                if (ObjectUtils.isNotEmpty(mod.interfaces) && ObjectUtils.isNotEmpty(mod.interfaces.values) && !isExcludedAll('interfaces')) {
                    const iMap = {
                        id: `api.${componentName}.interfaces`,
                        label: 'Interfaces',
                        description: mod.interfaces.description,
                        children: []
                    };

                    Object.entries(mod.interfaces.values).forEach(([iKey, iValue]) => {
                        const [id, label] = [`api.${componentName}.${iKey}`, iKey];

                        if (isExcluded('interfaces', iKey)) return;

                        iMap.children.push({
                            id,
                            label,
                            component: (inProps) => (
                                <DocApiTable
                                    name={componentName}
                                    data={iValue.props}
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

                if (ObjectUtils.isNotEmpty(mod.types) && ObjectUtils.isNotEmpty(mod.types.values) && !isExcludedAll('types')) {
                    const tMap = {
                        id: `api.${componentName}.types`,
                        label: 'Types',
                        description: mod.types.description,
                        children: []
                    };

                    Object.entries(mod.types.values).forEach(([tKey, tValue]) => {
                        const [id, label] = [`api.${componentName}.${tKey}`, tKey];

                        if (isExcluded('types', tKey)) return;

                        tMap.children.push({
                            id,
                            label,
                            component: (inProps) => <DocApiTable name={componentName} data={[tValue]} allowLink={false} {...inProps} />
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
                        component: (inProps) => <DocApiTable name={modName} data={[values]} description={value.description} {...inProps} />
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
                                        component: (inProps) => <DocApiTable data={iValue.props} {...inProps} />
                                    });
                                }

                                if (ObjectUtils.isNotEmpty(iValue.callbacks)) {
                                    tMap.children.push({
                                        id: `${id}.callbacks`,
                                        label: 'Callbacks',
                                        component: (inProps) => <DocApiTable data={iValue.callbacks} {...inProps} />
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

                        if (ObjectUtils.isNotEmpty(cValue.props) && ObjectUtils.isNotEmpty(cValue.props.values) && !isExcludedAll('props')) {
                            const [id, label] = [`api.${cKey}.props`, 'Props'];

                            if (isExcluded('props', cKey)) return;

                            cMap.children.push({
                                id,
                                label,
                                component: (inProps) => <DocApiTable name={cKey} data={cValue.props.values} description={cValue.props.description} {...inProps} />
                            });
                        }

                        if (ObjectUtils.isNotEmpty(cValue.callbacks) && ObjectUtils.isNotEmpty(cValue.callbacks.values) && !isExcludedAll('callbacks')) {
                            const [id, label] = [`api.${cKey}.callbacks`, 'Callbacks'];

                            if (isExcluded('callbacks', cKey)) return;

                            cMap.children.push({
                                id,
                                label,
                                component: (inProps) => <DocApiTable name={cKey} data={cValue.callbacks.values} description={cValue.callbacks.description} {...inProps} />
                            });
                        }

                        if (ObjectUtils.isNotEmpty(cValue.methods) && ObjectUtils.isNotEmpty(cValue.methods.values) && !isExcludedAll('methods')) {
                            const [id, label] = [`api.${cKey}.methods`, 'Methods'];

                            if (isExcluded('methods', cKey)) return;

                            cMap.children.push({
                                id,
                                label,
                                component: (inProps) => <DocApiTable name={cKey} data={cValue.methods.values} description={cValue.methods.description} {...inProps} />
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
                            description: mValue.description,
                            children: []
                        };

                        if (ObjectUtils.isNotEmpty(mValue.props) && ObjectUtils.isNotEmpty(mValue.props.values) && !isExcludedAll('props')) {
                            const [id, label] = [`api.${mKey}.props`, 'Props'];

                            if (isExcluded('props', mKey)) return;

                            mMap.children.push({
                                id,
                                label,
                                component: (inProps) => <DocApiTable name={mKey} data={mValue.props.values} description={mValue.props.description} {...inProps} />
                            });
                        }

                        if (mKey.toLocaleLowerCase() === name.toLowerCase()) {
                            addToChildDoc(mMap.children, mKey);
                        }

                        cDocs.push(mMap);
                    });

                !mod.components && !mod.model && addToChildDoc(cDocs, modName);
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
