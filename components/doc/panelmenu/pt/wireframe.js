import React from 'react';
import { DocSectionText } from '../../common/docsectiontext';

export const Wireframe = (props) => {
    return (
        <>
            <DocSectionText {...props} />
            <div>
                <img className="w-full" src="https://primefaces.org/cdn/primereact/images/pt/panelmenu.jpg" alt="panelmenu" />
            </div>
        </>
    );
};
