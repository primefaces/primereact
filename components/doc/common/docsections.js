import Link from 'next/link';
import { useRouter } from 'next/router';
import { RadioButton } from '../../lib/radiobutton/RadioButton';
import { DeferredContent } from '../../lib/deferredcontent/DeferredContent';
import React, { useState } from 'react';
import { DocSectionText } from './docsectiontext';

export function DocSections(props) {
    const [selectedOption, setSelectedOption] = useState(null);
    const router = useRouter();

    const onRadioButtonChange = (e) => {
        setSelectedOption(e.value);
    };

    return (
        <div className="doc-main">
            {props.docs.map((doc) => {
                const Comp = doc.component;

                return (
                    <section key={doc.label}>
                        {doc.children && doc.id !== 'api' ? (
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
                                {doc.children.map((comp, i) => {
                                    const { id, label, component } = comp;
                                    const Component = component;

                                    return (
                                        <DeferredContent id={id} key={i}>
                                            <Component id={id} key={label} label={label} />
                                        </DeferredContent>
                                    );
                                })}
                            </React.Fragment>
                        )}
                        {doc.options && !doc.component && (
                            <>
                                <DocSectionText id={doc.id} label={doc.label}>
                                    {doc.description}
                                </DocSectionText>
                                <div className="mt-3 flex flex-column justify-content-center">
                                    <div className="flex flex-row justify-content-center align-items-center flex-wrap">
                                        <div className="card flex flex-wrap justify-content-center align-items-center w-full gap-3">
                                            {doc.options.map((option) => {
                                                const { id, label } = option;

                                                return (
                                                    <div className="mr-4" key={label}>
                                                        <RadioButton inputId={id} value={label} onChange={onRadioButtonChange} checked={selectedOption === label} />
                                                        <label htmlFor={id} className="ml-2">
                                                            {label}
                                                        </label>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                    {doc.options.map((option, i) => {
                                        const Component = option.component;

                                        return selectedOption === option.label ? (
                                            <DeferredContent id={option.id} key={i}>
                                                <Component key={option.label} id={option.id} label={option.label} />
                                            </DeferredContent>
                                        ) : null;
                                    })}
                                </div>
                            </>
                        )}
                    </section>
                );
            })}
        </div>
    );
}
