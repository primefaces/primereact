import React, { Component } from 'react';
import { CodeHighlight } from '../codehighlight/CodeHighlight';

export class LocaleDemo extends Component {
    render() {
        return (
            <div>
                <div className="content-section documentation">
                    <h1>Internationalization and Localization</h1>
                    <p>The Locale API allows setting i18n and l7n options globally for the components.</p>

                    <h5>Getting Started</h5>
                    <p>By using the <i>locale</i>, <i>addLocale</i>, <i>updateLocaleOption</i>, <i>updateLocaleOptions</i>, <i>localeOption</i> and <i>localeOptions</i> methods, locale objects can be used in the whole application or in certain pages.</p>
<CodeHighlight lang="js">
{`
import { locale, addLocale, updateLocaleOption, updateLocaleOptions, localeOption, localeOptions } from 'primereact/api';
`}
</CodeHighlight>

                    <p>The current locale can be set with <i>locale</i> method.</p>
<CodeHighlight lang="js">
{`
locale('en');
`}
</CodeHighlight>

                    <p>New locale values ​​can be added using <i>addLocale</i> method for the application.</p>
<CodeHighlight lang="js">
{`
addLocale('es', {
    firstDayOfWeek: 1,
    dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
    dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
    dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
    monthNames: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
    monthNamesShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
    today: 'Hoy',
    clear: 'Claro'
});

locale('es');
`}
</CodeHighlight>
                    <p>Locale values ​​can be changed dynamically. (Note: please don't forget to update main or current component with state management or forceUpdate method of React.)</p>
<CodeHighlight lang="js">
{`
<Button label="EN" onClick={() => locale('en')} />
<Button label="ES" onClick={() => locale('es')} />
`}
</CodeHighlight>

                    <h5>Locale Repo</h5>
                    <p>Ready to use settings for locales are available at the community supported <a href="https://github.com/primefaces/primelocale">PrimeLocale</a> repository. We'd appreciate
                    if you could contribute to this repository with pull requests and share it with the rest of the community.</p>

                    <h5>Locale Methods</h5>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Parameters</th>
                                    <th>Return</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>locale</td>
                                    <td>currentLocale: string</td>
                                    <td>{`{locale: string, options: object}`}</td>
                                    <td>Used to determine the current locale value. Returns the name and values ​​of the current locale.</td>
                                </tr>
                                <tr>
                                    <td>addLocale</td>
                                    <td>locale: string, options: object</td>
                                    <td></td>
                                    <td>Used to add a new locale.</td>
                                </tr>
                                <tr>
                                    <td>updateLocaleOption</td>
                                    <td>key: string, value: any, locale: string</td>
                                    <td></td>
                                    <td>Used to change the option value of a current or specific locale.</td>
                                </tr>
                                <tr>
                                    <td>updateLocaleOptions</td>
                                    <td>options: object, locale: string</td>
                                    <td></td>
                                    <td>Used to change the option values of a current or specific locale.</td>
                                </tr>
                                <tr>
                                    <td>localeOption</td>
                                    <td>key: string, locale: string</td>
                                    <td></td>
                                    <td>Used to get the option value of a current or specific locale.</td>
                                </tr>
                                <tr>
                                    <td>localeOptions</td>
                                    <td>locale: string</td>
                                    <td></td>
                                    <td>Used to get the option values of a current or specific locale.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Locale Options</h5>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Key</th>
                                    <th>Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>accept</td>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <td>reject</td>
                                    <td>No</td>
                                </tr>
                                <tr>
                                    <td>choose</td>
                                    <td>Choose</td>
                                </tr>
                                <tr>
                                    <td>upload</td>
                                    <td>Upload</td>
                                </tr>
                                <tr>
                                    <td>cancel</td>
                                    <td>Cancel</td>
                                </tr>
                                <tr>
                                    <td>dayNames</td>
                                    <td>['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']</td>
                                </tr>
                                <tr>
                                    <td>dayNamesShort</td>
                                    <td>['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']</td>
                                </tr>
                                <tr>
                                    <td>dayNamesMin</td>
                                    <td>['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']</td>
                                </tr>
                                <tr>
                                    <td>monthNames</td>
                                    <td>['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']</td>
                                </tr>
                                <tr>
                                    <td>monthNamesShort</td>
                                    <td>['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']</td>
                                </tr>
                                <tr>
                                    <td>today</td>
                                    <td>Today</td>
                                </tr>
                                <tr>
                                    <td>clear</td>
                                    <td>Clear</td>
                                </tr>
                                <tr>
                                    <td>weekHeader</td>
                                    <td>Wk</td>
                                </tr>
                                <tr>
                                    <td>firstDayOfWeek</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>dateFormat</td>
                                    <td>mm/dd/yy</td>
                                </tr>
                                <tr>
                                    <td>weak</td>
                                    <td>Weak</td>
                                </tr>
                                <tr>
                                    <td>medium</td>
                                    <td>Medium</td>
                                </tr>
                                <tr>
                                    <td>strong</td>
                                    <td>Strong</td>
                                </tr>
                                <tr>
                                    <td>passwordPrompt</td>
                                    <td>Enter a password</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
