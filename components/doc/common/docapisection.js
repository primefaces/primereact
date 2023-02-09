import getConfig from 'next/config';
import React from 'react';
import { DocSectionText } from './docsectiontext';

export function DocApiSection(props) {
    /**
     * @todo Version is hard-coded here. It should be dynamic.
     */
    const { appVersion, apiDocUrl } = getConfig().publicRuntimeConfig;

    const renderApiDocs = () => {
        return props.doc.map((apiDoc, index) => {
            const { name, pathname } = apiDoc;

            return (
                <li key={index} className="field doc-section-description">
                    <a href={`${apiDocUrl + pathname}`} target="_blank" rel="noreferrer">
                        {name}
                    </a>
                </li>
            );
        });
    };

    return (
        <React.Fragment>
            <div className="doc-main">
                <DocSectionText {...props}>
                    <p>{props.doc ? 'Visit the API documentation for detailed information about all the options.' : 'The component does not have any Javascript API.'}</p>
                </DocSectionText>
                {props.doc ? <ul {...props}>{renderApiDocs()}</ul> : null}
            </div>
        </React.Fragment>
    );
}
