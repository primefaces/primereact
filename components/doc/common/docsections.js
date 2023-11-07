import React from 'react';
import APIDocs from './apidoc/index.json';
import { DocSectionText } from './docsectiontext';

export function DocSections({ docs }) {
    const getPTOption = (name) => {
        const key = name.toLowerCase();

        let values = APIDocs[key]?.interfaces?.values[`${name}PassThroughOptions`] || null;

        if (!values) {
            for (const parentKey in APIDocs) {
                if (APIDocs[parentKey]?.interfaces?.values[`${name}PassThroughOptions`]) {
                    values = APIDocs[parentKey]?.interfaces?.values[`${name}PassThroughOptions`] || null;
                    if (values) break;
                }
            }
        }

        let data = [];

        if (values) {
            for (const [i, prop] of values.props.entries()) {
                data.push({
                    value: i + 1,
                    label: prop.name,
                    description: prop.description
                });
            }
        }

        return data;
    };

    const renderDocChildren = (doc, level = 2) => {
        return (
            <React.Fragment key={doc.id + '_' + level}>
                <DocSectionText {...doc} level={level}>
                    {doc.description ? <p>{doc.description}</p> : null}
                </DocSectionText>
                {doc.children.map((d) => {
                    const { id, label, component, children } = d;
                    const Component = component;

                    return component ? <Component id={id} key={id} label={label} level={level + 1} /> : children ? renderDocChildren(d, level + 1) : null;
                })}
            </React.Fragment>
        );
    };

    const renderDocs = () => {
        return docs.map((doc, i) => {
            const { component: Comp, id, label, children } = doc;
            const isPT = label.includes('PT');
            const key = label.split(' ')[0];

            const props = {
                id,
                label,
                ...(isPT && { data: getPTOption(key) })
            };

            return (
                <section key={`${label}_${i}`} className="py-4">
                    {children ? renderDocChildren(doc) : Comp ? <Comp {...props} /> : null}
                </section>
            );
        });
    };

    return renderDocs();
}
