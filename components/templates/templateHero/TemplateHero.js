import React from 'react';
import TemplateHeroRectangle from './TemplateHeroRectangle';
import TemplateHeroLight from './TemplateHeroLight';

const TemplateHero = ({ logo, pattern, rectangle, light, dashboard1, dashboard2, description, liveHref, docHref, supportHref, storeHref, free, multipurpose }) => {
    return (
        <div className="template-hero">
            {!!pattern && <img className="template-hero-pattern" src={pattern} alt="Template Hero Pattern" />}
            {!!light && <TemplateHeroLight />}
            {!!rectangle && <TemplateHeroRectangle />}
            <div className="template-hero-card">
                <div className="template-hero-card-logo-row">
                    <div className="template-hero-card-logo">{logo}</div>
                    {multipurpose && <div className="template-hero-card-logo-row-multipurpose">Multipurpose</div>}
                </div>
                <p>{description}</p>
                <div className="template-hero-card-buttons">
                    <a href={liveHref} target="_blank" className="template-hero-card-buttons-btn1 p-button ">
                        Live Demo
                    </a>
                    <a href={storeHref ?? 'https://www.primefaces.org/store/'} target="_blank" className="template-hero-card-buttons-btn2 p-button">
                        {free ? 'Source Code' : 'Buy Now'}
                    </a>
                </div>
                <div className="template-hero-card-links">
                    <a href={supportHref ?? 'https://github.com/orgs/primefaces/discussions/categories/primereact-templates'} target="_blank">
                        <i className="pi pi-github " style={{ fontSize: '1rem' }} />
                        <span>{free ? 'Open Issues' : 'Community'}</span>
                    </a>
                    {docHref && (
                        <a href={docHref} target="_blank">
                            <i className="pi pi-book " style={{ fontSize: '1rem' }} />
                            <span>Documentation</span>
                        </a>
                    )}
                </div>
            </div>
            {!!dashboard1 && <img className="template-hero-dashboard1" src={dashboard1} alt="Template Dashboard Image 1" />}
            {!!dashboard2 && <img className="template-hero-dashboard2" src={dashboard2} alt="Template Dashboard Image 2" />}
        </div>
    );
};

export default TemplateHero;
