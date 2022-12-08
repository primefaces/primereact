import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export function DocSections(props) {
    const router = useRouter();

    return (
        <div className="doc-main">
            {props.docs.map((doc) => {
                const Comp = doc.component;

                return (
                    <section key={doc.label}>
                        {doc.children ? (
                            <div id={doc.id}>
                                <h1 className="doc-section-label" id={doc.id}>
                                    {doc.label}
                                    <Link href={router.basePath + router.pathname + '#' + doc.id}>
                                        <a id={doc.id}>#</a>
                                    </Link>
                                </h1>
                                <div className="doc-section-description">{doc.description || 'Section Content'}</div>
                            </div>
                        ) : null}
                        {doc.component && <Comp id={doc.id} label={doc.label} />}
                        {doc.children && !doc.component && (
                            <React.Fragment>
                                {doc.children.map((component) => {
                                    const id = component.id;
                                    const label = component.label;
                                    const Component = component.component;

                                    return <Component id={id} key={label} label={label} />;
                                })}
                            </React.Fragment>
                        )}
                    </section>
                );
            })}
        </div>
    );
}
