import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { classNames } from '../../lib/utils/Utils';
import DocApiSection from './docapisection';

export function DocSections({ docs }) {
    const router = useRouter();

    const renderDocs = () => {
        return docs.map((doc) => {
            const Comp = doc.component;

            return (
                <section key={doc.label} className="py-3">
                    {doc.children && doc.id !== 'api' ? (
                        <div id={doc.id}>
                            <h2 className="doc-section-label" id={doc.id}>
                                {doc.label}
                                <Link href={router.basePath + router.pathname + '#' + doc.id}>
                                    <a id={doc.id}>#</a>
                                </Link>
                            </h2>
                            <div className={classNames('doc-section-description main')}>{doc.description || 'Section Content'}</div>
                        </div>
                    ) : null}
                    {doc.component && !doc.doc && <Comp id={doc.id} label={doc.label} />}
                    {doc.children && !doc.component && (
                        <React.Fragment>
                            {doc.children.map((comp, i) => {
                                const { id, label, component } = comp;
                                const Component = component;

                                return <Component id={id} key={label} label={label} level="2" />;
                            })}
                        </React.Fragment>
                    )}
                    {doc.id === 'api' && doc.doc ? <DocApiSection id={doc.id} label={doc.label} doc={doc.doc} /> : null}
                </section>
            );
        });
    };

    return renderDocs();
}
