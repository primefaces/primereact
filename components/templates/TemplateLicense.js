import React from 'react'
import { Button } from '../lib/primereact.all'

const licenseDetails = [
    {
        title: 'Basic Plan',
        price: '$59',
        included: [
            'Non Commercial Usage',
            'Single End Product, No Multi-Use',
            'Lifetime Support',
            'Unlimited Updates',
        ],
    },
    {
        title: 'Extended License',
        price: '$590',
        included: [
            'Commercial Usage',
            'Multiple End Products',
            'Lifetime Support',
            'Unlimited Updates',
        ],
    },
]

const TemplateLicense = () => {
    return (
        <div className='template-license-wrapper'>
            <div className='template-license'>
                <div className='template-license-cards'>
                    {licenseDetails.map(({ title, price, included }, i) => (
                        <div key={i} className='template-license-card'>
                            <span>{title}</span>
                            <h2>{price}</h2>
                            <div className='template-license-card-included'>
                                {included.map((txt, j) => (
                                    <p key={j}>{txt}</p>
                                ))}
                            </div>
                            <a href='https://www.primefaces.org/layouts/licenses' target='_blank'><button>License Details</button></a>

                        </div>
                    ))}
                </div>
                <p className='template-license-description'>The download package is a Vite-based project containing all source code of the application deployed at the live demo. The project is written in JavaScript. However, a TypeScript version is also being planned.</p>
                <p className='template-license-visit'>Visit the <a>official documentation</a> for more information.</p>
            </div>
        </div>
    )
}

export default TemplateLicense