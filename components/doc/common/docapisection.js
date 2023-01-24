import React from 'react';

function DocApiSection({ components }) {
    const componentList = components.map((component, index) => {
        const { name, isMain } = component;

        return (
            <li key={index} className="field doc-section-description">
                <a href={`http://127.0.0.1:5500/doc/${isMain ? `modules/${name}` : `classes/accordion.${name}`}.html`} target="_blank" rel="noreferrer">
                    {name}
                </a>
            </li>
        );
    });

    return <ul>{componentList}</ul>;
}

export default DocApiSection;
