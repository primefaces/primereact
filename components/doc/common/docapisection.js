import React from 'react';
import { DocSectionText } from './docsectiontext';
import getConfig from 'next/config';

function DocApiSection(props) {
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
            <DocSectionText {...props}>For API references of the following component(s);</DocSectionText>
            <ul {...props}>{renderApiDocs()}</ul>
        </React.Fragment>
    );
}

export default DocApiSection;
