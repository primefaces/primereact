import React from 'react';
import { CodeHighlight } from '../../components/doc/common/codehighlight';
import Head from 'next/head';

const ColorsDemo = (props) => {
    const colors = ['blue', 'green', 'yellow', 'cyan', 'pink', 'indigo', 'teal', 'orange', 'bluegray', 'purple', 'red', 'gray'];
    const shades = [0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

    return (
        <div>
            <Head>
                <title>Color System - PrimeReact</title>
                <meta name="description" content="Each PrimeReact theme exports its own color palette." />
            </Head>
            <div className="content-section documentation colors-page">
                <h1>Colors</h1>
                <p>Each PrimeReact theme exports its own color palette.</p>

                <h5>Getting Started</h5>
                <p>Colors are exported as CSS variables and used with the standard <i>var</i> syntax such as <i>var(--text-color)</i>.</p>
<CodeHighlight>
{`
<span style={{ color: var(--text-color) }} />
`}
</CodeHighlight>

                <h5>General Colors</h5>
                <p>These are common variables used throughout the theme.</p>

                <div className="doc-tablewrapper">
                    <table className="doc-table">
                        <thead>
                            <tr>
                                <th>Variable</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><i>--text-color</i></td>
                                <td>Font text color.</td>
                            </tr>
                            <tr>
                                <td><i>--text-secondary-color</i></td>
                                <td>Muted font text color with a secondary level.</td>
                            </tr>
                            <tr>
                                <td><i>--primary-color</i></td>
                                <td>Primary color of the theme.</td>
                            </tr>
                            <tr>
                                <td><i>--primary-color-text</i></td>
                                <td>Text color when background is primary color.</td>
                            </tr>
                            <tr>
                                <td><i>--font-family</i></td>
                                <td>Font family of the theme.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h5>Color Palette</h5>
                <p>A palette consists of 9 colors where each color provides tints/shades from 50 to 900.</p>
<CodeHighlight>
{`
<div style={{ backgroundColor: var(--blue-500) }} />
`}
</CodeHighlight>

                <div className="card">
                    <div className="flex flex-wrap">
                        {
                            colors.map((color) => {
                                return (
                                    <div key={color} className="color-stack mr-6 mb-6">
                                        {
                                            shades.map(shade => {
                                                return (
                                                    <React.Fragment key={shade}>
                                                        { shade !== 0 && (
                                                            <div className="color-box"
                                                                style={{backgroundColor:`var(--${color}-${shade})`, color: (shade > 500 ? '#fff': '#000')}}>
                                                                {color}-{shade}
                                                            </div>
                                                            )
                                                        }
                                                    </React.Fragment>
                                                )
                                            })
                                        }
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>

                <h5>Surfaces</h5>
                <p>In addition, a theme brings a special palette called surfaces that can be used as the base when designing the surface layers and separators.</p>
                <div className="card">
                    <div className="color-stack">
                        {
                            shades.map(shade => {
                                return (
                                    <div key={shade} className="color-box"
                                        style={{backgroundColor:`var(--surface-${shade})`, color: props.dark ? '#fff':  (shade > 500 ? '#fff': '#000')}}>
                                        surface-{shade}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ColorsDemo;
