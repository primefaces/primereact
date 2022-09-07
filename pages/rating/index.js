import getConfig from 'next/config';
import Head from 'next/head';
import React, { useState } from 'react';
import { DocActions } from '../../components/doc/common/docactions';
import RatingDoc from '../../components/doc/rating';
import { Rating } from '../../components/lib/rating/Rating';

const RatingDemo = () => {
    const [val1, setVal1] = useState(null);
    const [val2, setVal2] = useState(null);
    const [val3, setVal3] = useState(null);

    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    return (
        <div>
            <Head>
                <title>React Rating Component</title>
                <meta name="description" content="Rating component is a star based selection input." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Rating</h1>
                    <p>Rating component is a star based selection input.</p>
                </div>

                <DocActions github="rating/index.js" />
            </div>

            <div className="content-section implementation">
                <div className="card">
                    <h5>Basic {val1}</h5>
                    <Rating value={val1} onChange={(e) => setVal1(e.value)} />

                    <h5>Without Cancel</h5>
                    <Rating value={val2} cancel={false} onChange={(e) => setVal2(e.value)} />

                    <h5>ReadOnly</h5>
                    <Rating value={5} readOnly stars={10} cancel={false} />

                    <h5>Disabled</h5>
                    <Rating value={8} disabled stars={10} />

                    <h5>Template</h5>
                    <Rating
                        value={val3}
                        onChange={(e) => setVal3(e.value)}
                        cancelIcon={
                            <img src={`${contextPath}/images/rating/cancel.png`} onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} alt="custom-cancel-image" width="20px" height="20px" />
                        }
                        onIcon={
                            <img
                                src={`${contextPath}/images/rating/custom-icon-active.png`}
                                onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')}
                                alt="custom-image-active"
                                width="20px"
                                height="20px"
                            />
                        }
                        offIcon={<img src={`${contextPath}/images/rating/custom-icon.png`} onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} alt="custom-image" width="20px" height="20px" />}
                    />
                </div>
            </div>

            <RatingDoc />
        </div>
    );
};

export default RatingDemo;
