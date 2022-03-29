import React from 'react';
import { Fieldset } from '../../components/lib/fieldset/Fieldset';
import FieldsetDoc from '../../components/doc/fieldset';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

const FieldsetDemo = () => {

    return (
        <div>
            <Head>
                <title>React Fieldset Component</title>
                <meta name="description" content="Fieldset is a grouping component with a content toggle feature." />
            </Head>
            <div className="content-section introduction">
                <div>
                    <h1>Fieldset</h1>
                    <p>Fieldset is a grouping component with a content toggle feature.</p>
                </div>
                <DocActions github="fieldset/index.js" />
            </div>

            <div className="content-section implementation">
                <div className="card">
                    <h5>Regular</h5>
                    <Fieldset legend="Header">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Fieldset>

                    <h5>Toggleable</h5>
                    <Fieldset legend="Header" toggleable>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Fieldset>
                </div>
            </div>

            <FieldsetDoc />
        </div>
    )
}

export default FieldsetDemo;
