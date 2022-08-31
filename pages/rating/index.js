import React, { useState } from 'react';
import { Rating } from '../../components/lib/rating/Rating';
import RatingDoc from '../../components/doc/rating';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';
import * as CustomImage from './custom-icon.png';
import * as CustomImageActive from './custom-icon-active.png';
import * as CustomCancelImage from './cancel.png';
import Image from 'next/image';

const RatingDemo = () => {
    const [val1, setVal1] = useState(null);
    const [val2, setVal2] = useState(null);
    const [val3, setVal3] = useState(null);

    return (
        <div>
            <Head>
                <title>React Rating Component</title>
                <meta name="description" content="Rating components is a star based selection input." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Rating</h1>
                    <p>Rating componentsis a star based selection input.</p>
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
                    <h5>Customization</h5>
                    <Rating
                        value={val3}
                        onIcon={<Image src={CustomImageActive} alt="custom-image-active" width="30px" height="30px" />}
                        offIcon={<Image src={CustomImage} alt="custom-image" width="30px" height="30px" />}
                        onChange={(e) => setVal3(e.value)}
                        cancelIcon={<Image src={CustomCancelImage} alt="custom-cancel-image" width="30px" height="30px" />}
                    />
                </div>
            </div>

            <RatingDoc />
        </div>
    );
};

export default RatingDemo;
