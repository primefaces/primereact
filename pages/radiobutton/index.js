import React, { useState } from 'react';
import { RadioButton } from '../../components/lib/radiobutton/RadioButton';
import RadioButtonDoc from '../../components/doc/radiobutton';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

const RadioButtonDemo = () => {

    const categories = [{ name: 'Accounting', key: 'A' }, { name: 'Marketing', key: 'M' }, { name: 'Production', key: 'P' }, { name: 'Research', key: 'R' }];
    const [city, setCity] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(categories[1]);

    return (
        <div>
            <Head>
                <title>React RadioButton Component</title>
                <meta name="description" content="RadioButton is an extension to standard radio button element with skinning capabilities." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>RadioButton</h1>
                    <p>RadioButton is an extension to standard radio button element with skinning capabilities.</p>
                </div>

                <DocActions github="radiobutton/index.js" />
            </div>

            <div className="content-section implementation">
                <div className="card">
                    <h5>Basic</h5>
                    <div className="field-radiobutton">
                        <RadioButton inputId="city1" name="city" value="Chicago" onChange={(e) => setCity(e.value)} checked={city === 'Chicago'} />
                        <label htmlFor="city1">Chicago</label>
                    </div>
                    <div className="field-radiobutton">
                        <RadioButton inputId="city2" name="city" value="Los Angeles" onChange={(e) => setCity(e.value)} checked={city === 'Los Angeles'} />
                        <label htmlFor="city2">Los Angeles</label>
                    </div>
                    <div className="field-radiobutton">
                        <RadioButton inputId="city3" name="city" value="New York" onChange={(e) => setCity(e.value)} checked={city === 'New York'} />
                        <label htmlFor="city3">New York</label>
                    </div>
                    <div className="field-radiobutton">
                        <RadioButton inputId="city4" name="city" value="San Francisco" onChange={(e) => setCity(e.value)} checked={city === 'San Francisco'} />
                        <label htmlFor="city4">San Francisco</label>
                    </div>

                    <h5>Dynamic Values, Preselection, Value Binding and Disabled Option</h5>
                    {
                        categories.map((category) => {
                            return (
                                <div key={category.key} className="field-radiobutton">
                                    <RadioButton inputId={category.key} name="category" value={category} onChange={(e) => setSelectedCategory(e.value)} checked={selectedCategory.key === category.key} disabled={category.key === 'R'} />
                                    <label htmlFor={category.key}>{category.name}</label>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <RadioButtonDoc />
        </div>
    )
}

export default RadioButtonDemo;
