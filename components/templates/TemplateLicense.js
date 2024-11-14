const TemplateLicense = ({ license }) => {
    return (
        <div className="template-license-wrapper">
            <div className="template-license">
                <div className="template-license-cards">
                    {license.licenseDetails.map(({ title, price, discountPrice, included }, i) => (
                        <div key={i} className="template-license-card">
                            <span>{title}</span>
                            <div className="template-license-price flex gap-3">
                                <h2 className={license.showDiscount && 'discount'}>{price}</h2>
                                {license.showDiscount && <h2>{discountPrice}</h2>}
                            </div>
                            <div className="template-license-card-included">
                                {included.map((txt, j) => (
                                    <p key={j}>{txt}</p>
                                ))}
                            </div>
                            <a href="https://www.primefaces.org/layouts/licenses" target="_blank">
                                <button>License Details</button>
                            </a>
                        </div>
                    ))}
                </div>
                <p className="template-license-description">{license.description}</p>
                <p className="template-license-visit">
                    Visit the{' '}
                    <a href={license.documentLink} target="_blank">
                        official documentation
                    </a>{' '}
                    for more information.
                </p>
            </div>
        </div>
    );
};

export default TemplateLicense;
