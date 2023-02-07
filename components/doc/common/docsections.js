import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { classNames } from '../../lib/utils/Utils';

export function DocSections({ docs }) {
    const router = useRouter();

    const renderDocs = () => {
        return docs.map((doc) => {
            const Comp = doc.component;

            return (
                <section key={doc.label} className="py-3">
                    {doc.children ? (
                        <React.Fragment>
                            <div id={doc.id}>
                                <h2 className="doc-section-label" id={doc.id}>
                                    {doc.label}
                                    <Link href={router.basePath + router.pathname + '#' + doc.id}>
                                        <a id={doc.id}>#</a>
                                    </Link>
                                </h2>
                                <div className={classNames('doc-section-description')}>
                                    <p>{doc.description || 'Section Content'}</p>
                                </div>
                            </div>
                            {doc.children.map((comp, i) => {
                                const { id, label, component } = comp;
                                const Component = component;

                                return <Component id={id} key={label} label={label} level="2" />;
                            })}
                        </React.Fragment>
                    ) : (
                        doc.component && <Comp id={doc.id} label={doc.label} />
                    )}
                </section>
            );
        });
    };

    return renderDocs();
}
