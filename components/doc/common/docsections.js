import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { DeferredContent } from '../../lib/deferredcontent/DeferredContent';
import { classNames } from '../../lib/utils/Utils';

export function DocSections(props) {
    const router = useRouter();

    return (
        <div className="doc-main">
            {props.docs.map((doc) => {
                const Comp = doc.component;

                return (
                    <section key={doc.label}>
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
                        {doc.component && <Comp id={doc.id} label={doc.label} />}
                        {doc.children && !doc.component && (
                            <React.Fragment>
                                {doc.children.map((comp, i) => {
                                    const { id, label, component } = comp;
                                    const Component = component;

                                    return (
                                        <DeferredContent id={id} key={i}>
                                            <Component id={id} key={label} label={label} level="2" />
                                        </DeferredContent>
                                    );
                                })}
                            </React.Fragment>
                        )}
                    </section>
                );
            })}
        </div>
    );
}
