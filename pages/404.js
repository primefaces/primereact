import React from 'react';

const Custom404 = () => {
    return (
        <div className="flex card flex-column align-items-center gap-5 sm:p-8">
            <div className="flex flex-column sm:flex-row align-items-center justify-content-center gap-3 text-primary">
                <span className="font-bold" style={{ fontSize: '144px' }}>
                    4
                </span>
                <div className="flex align-items-center justify-content-center bg-primary border-circle w-8rem h-8rem">
                    <i className="pi pi-prime text-7xl"></i>
                </div>
                <span className="font-bold" style={{ fontSize: '144px' }}>
                    4
                </span>
            </div>
            <div className="font-bold text-900 text-center text-6xl border-top-1 surface-border pt-5">PAGE NOT FOUND</div>
        </div>
    );
};

export default Custom404;
