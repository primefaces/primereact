import getConfig from 'next/config';
import React from 'react';
import { DocSectionText } from './docsectiontext';

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
            <DocSectionText {...props}>Visit the API documentation for detailed information about all the properties, events and methods of the component.</DocSectionText>
            <ul {...props}>{renderApiDocs()}</ul>
        </React.Fragment>
    );
}

export default DocApiSection;
