import { DocSectionText } from '../common/docsectiontext';

export function APIDoc(props) {
    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Configuration is managed by the Locale API imported from <i>primereact/api</i>.
                </p>
            </DocSectionText>
            <h3>Locale Methods</h3>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Parameters</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>locale</td>
                            <td>currentLocale: string</td>
                            <td>Sets the current locale if installed.</td>
                        </tr>
                        <tr>
                            <td>addLocale</td>
                            <td>
                                locale: string, <br />
                                options: object
                            </td>
                            <td>Installs a new locale.</td>
                        </tr>
                        <tr>
                            <td>updateLocaleOption</td>
                            <td>
                                key: string, <br />
                                value: any, <br />
                                locale: string
                            </td>
                            <td>Changes the specific option value of a locale.</td>
                        </tr>
                        <tr>
                            <td>updateLocaleOptions</td>
                            <td>
                                options: object, <br />
                                locale: string
                            </td>
                            <td>Changes the option values of a locale.</td>
                        </tr>
                        <tr>
                            <td>localeOption</td>
                            <td>
                                key: string, <br /> locale: string
                            </td>
                            <td>Return the value of a specific locale option.</td>
                        </tr>
                        <tr>
                            <td>localeOptions</td>
                            <td>locale: string</td>
                            <td>Returns the values of locale options.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Locale Options</h3>
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
                            <td>startsWith</td>
                            <td>Starts with</td>
                        </tr>
                        <tr>
                            <td>contains</td>
                            <td>Contains</td>
                        </tr>
                        <tr>
                            <td>notContains</td>
                            <td>Not contains</td>
                        </tr>
                        <tr>
                            <td>endsWith</td>
                            <td>Ends with</td>
                        </tr>
                        <tr>
                            <td>equals</td>
                            <td>Equals</td>
                        </tr>
                        <tr>
                            <td>notEquals</td>
                            <td>Not equals</td>
                        </tr>
                        <tr>
                            <td>noFilter</td>
                            <td>No Filter</td>
                        </tr>
                        <tr>
                            <td>filter</td>
                            <td>Filter</td>
                        </tr>
                        <tr>
                            <td>lt</td>
                            <td>Less than</td>
                        </tr>
                        <tr>
                            <td>lte</td>
                            <td>Less than or equal to</td>
                        </tr>
                        <tr>
                            <td>gt</td>
                            <td>Greater than</td>
                        </tr>
                        <tr>
                            <td>gte</td>
                            <td>Greater than or equal to</td>
                        </tr>
                        <tr>
                            <td>dateIs</td>
                            <td>Date is</td>
                        </tr>
                        <tr>
                            <td>dateIsNot</td>
                            <td>Date is not</td>
                        </tr>
                        <tr>
                            <td>dateBefore</td>
                            <td>Date is before</td>
                        </tr>
                        <tr>
                            <td>dateAfter</td>
                            <td>Date is after</td>
                        </tr>
                        <tr>
                            <td>custom</td>
                            <td>Custom</td>
                        </tr>
                        <tr>
                            <td>clear</td>
                            <td>Clear</td>
                        </tr>
                        <tr>
                            <td>apply</td>
                            <td>Apply</td>
                        </tr>
                        <tr>
                            <td>matchAll</td>
                            <td>Match All</td>
                        </tr>
                        <tr>
                            <td>matchAny</td>
                            <td>Match Any</td>
                        </tr>
                        <tr>
                            <td>addRule</td>
                            <td>Add Rule</td>
                        </tr>
                        <tr>
                            <td>removeRule</td>
                            <td>Remove Rule</td>
                        </tr>
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
                            <td>close</td>
                            <td>Close</td>
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
                        <tr>
                            <td>emptyFilterMessage</td>
                            <td>No available options</td>
                        </tr>
                        <tr>
                            <td>emptyMessage</td>
                            <td>No results found</td>
                        </tr>
                        <tr>
                            <td>aria.trueLabel</td>
                            <td>True</td>
                        </tr>
                        <tr>
                            <td>aria.falseLabel</td>
                            <td>False</td>
                        </tr>
                        <tr>
                            <td>aria.nullLabel</td>
                            <td>Not Selected</td>
                        </tr>
                        <tr>
                            <td>aria.pageLabel</td>
                            <td>Page</td>
                        </tr>
                        <tr>
                            <td>aria.firstPageLabel</td>
                            <td>First Page</td>
                        </tr>
                        <tr>
                            <td>aria.lastPageLabel</td>
                            <td>Last Page</td>
                        </tr>
                        <tr>
                            <td>aria.nextPageLabel</td>
                            <td>Next Page</td>
                        </tr>
                        <tr>
                            <td>aria.previousPageLabel</td>
                            <td>Previous Page</td>
                        </tr>
                        <tr>
                            <td>aria.selectLabel</td>
                            <td>Select</td>
                        </tr>
                        <tr>
                            <td>aria.unselectLabel</td>
                            <td>Unselect</td>
                        </tr>
                        <tr>
                            <td>aria.expandLabel</td>
                            <td>Expand</td>
                        </tr>
                        <tr>
                            <td>aria.collapseLabel</td>
                            <td>Collapse</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
