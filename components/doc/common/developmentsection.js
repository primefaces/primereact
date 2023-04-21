import * as React from 'react';

export const DevelopmentSection = React.memo((props) => {
    return (
        <>
            <div className="flex align-items-center line-height-3 bg-primary-600 text-white p-3 text-lg border-round">
                <i className="pi pi-info-circle text-lg text-white mr-2"></i>
                Accessibility guide documents the specification of this component based on WCAG guidelines, the implementation is in progress.
            </div>
            {props.children}
        </>
    );
});
