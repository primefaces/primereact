const TemplateConfiguration = ({ title = '', description = '' }) => {
    return (
        <div className="template-configuration-wrapper">
            <div className="template-configuration">
                <div className="template-configuration-screen">
                    <div className="template-configuration-screen-top">
                        <div className="template-configuration-screen-top-close template-configuration-screen-top-circle"></div>
                        <div className="template-configuration-screen-top-minimize template-configuration-screen-top-circle"></div>
                        <div className="template-configuration-screen-top-zoom template-configuration-screen-top-circle"></div>
                    </div>
                    <div className="template-configuration-screen-bottom">
                        <p>
                            &gt;npm install <span className="text-gray-500">or yarn</span>
                        </p>
                        <p>
                            &gt;npm run dev <span className="text-gray-500">or yarn dev</span>
                        </p>
                        <br />
                        <br />
                        <img className="template-configuration-screen-bottom-logo" src={'https://primefaces.org/cdn/primereact/images/templates/react-3d-logo.png'} alt="Angular 3D Logo" />
                    </div>
                </div>
                <h3 className="template-configuration-title">{title}</h3>
                <p className="template-configuration-description">{description}</p>
            </div>
        </div>
    );
};

export default TemplateConfiguration;
