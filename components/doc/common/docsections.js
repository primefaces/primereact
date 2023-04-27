import React from 'react';
import { DocSectionText } from './docsectiontext';

export function DocSections({ docs }) {
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
            const Comp = doc.component;

            return (
                <section key={doc.label + '_' + i} className="py-3">
                    {doc.children ? renderDocChildren(doc) : doc.component && <Comp id={doc.id} label={doc.label} />}
                </section>
            );
        });
    };

    return renderDocs();
}
