# Changelog

## [6.4.1](https://github.com/primefaces/primereact/tree/6.4.1) (2021-06-16)

[Full Changelog](https://github.com/primefaces/primereact/compare/6.4.0...6.4.1)

**Implemented New Features and Enhancements:**

- Responsive TabMenu and Breadcrumb [\#2120](https://github.com/primefaces/primereact/issues/2120)
- Add visible and onVisibleChange properties to Calendar [\#2119](https://github.com/primefaces/primereact/issues/2119)
- Add monthNavigatorTemplate and yearNavigatorTemplate properties to Calendar [\#2116](https://github.com/primefaces/primereact/issues/2116)
- Toast center positioning enhancement [\#2108](https://github.com/primefaces/primereact/issues/2108)

**Fixed bugs:**

- InputMask cannot read property 'length' of null [\#2113](https://github.com/primefaces/primereact/issues/2113)
- Dropdown search crashes when no match with VirtualScrollar [\#2112](https://github.com/primefaces/primereact/issues/2112)
- The panel of Calendar is not aligned inside editable DataTable [\#2111](https://github.com/primefaces/primereact/issues/2111)
- MultiSelect filtering broken in v6.4.0 [\#2110](https://github.com/primefaces/primereact/issues/2110)
- DataTable - Headers of Columns with exportable at false are exported [\#2107](https://github.com/primefaces/primereact/issues/2107)
- ColorPicker doesn't change its color \(react-hook-form\) [\#2071](https://github.com/primefaces/primereact/issues/2071)

## [6.4.0](https://github.com/primefaces/primereact/tree/6.4.0) (2021-06-11)

[Full Changelog](https://github.com/primefaces/primereact/compare/6.3.2...6.4.0)

**Breaking changes:**

- Improve onFilterValueChange event on Tree [\#2037](https://github.com/primefaces/primereact/issues/2037)
- FullCalendar component is deprecated [\#2092](https://github.com/primefaces/primereact/issues/2092)
- Remove hidden select tag and required property from MultiSelect [\#2099](https://github.com/primefaces/primereact/issues/2099)
- Update to Chart.js 3.3.2 [\#1802](https://github.com/primefaces/primereact/issues/1802)

**Implemented New Features and Enhancements:**

- New Component: VirtualScroller [\#2063](https://github.com/primefaces/primereact/issues/2063)
- Add virtualScrollerOptions property to components [\#2075](https://github.com/primefaces/primereact/issues/2075)
- Improve resize feature of Dialog [\#2102](https://github.com/primefaces/primereact/issues/2102)
- Add showSelectAll, selectAll and onSelectAll properties to MultiSelect [\#2098](https://github.com/primefaces/primereact/issues/2098)
- Add inputId property to Password [\#2096](https://github.com/primefaces/primereact/issues/2096)
- Add onAllRowsSelect and onAllRowsUnselect callbacks to DataTable [\#2093](https://github.com/primefaces/primereact/issues/2093)
- TieredMenu sub-items are not visible when there's not enough space on the right side [\#2091](https://github.com/primefaces/primereact/issues/2091)
- Add 'toast' key to ZIndex option on PrimeReact api [\#2089](https://github.com/primefaces/primereact/issues/2089)
- Add autoZIndex option to PrimReact api [\#2088](https://github.com/primefaces/primereact/issues/2088)
- Add Vite support [\#2087](https://github.com/primefaces/primereact/issues/2087)
- Add p-sidebar-view and p-sidebar-content classes to Sidebar [\#2081](https://github.com/primefaces/primereact/issues/2081)
- Add unselectable property to SelectButton [\#2077](https://github.com/primefaces/primereact/issues/2077)
- Add dropdownIcon property to components [\#2074](https://github.com/primefaces/primereact/issues/2074)
- Add emptyMessage property to Dropdown [\#2062](https://github.com/primefaces/primereact/issues/2062)
- Add showGridlines and stripedRows props to DataTable [\#2054](https://github.com/primefaces/primereact/issues/2054)
- Rangepicker for Date and Time [\#2051](https://github.com/primefaces/primereact/issues/2051)
- Add onColumnResizerClick and onColumnResizerDoubleClick callbacks for column resizers on DataTable [\#2047](https://github.com/primefaces/primereact/issues/2047)
- Improve header element on Dialog [\#2044](https://github.com/primefaces/primereact/issues/2044)
- ScrollPanel pushes content to the left in order to show scrollbar [\#2039](https://github.com/primefaces/primereact/issues/2039)
- Add appendTo property to Sidebar [\#2038](https://github.com/primefaces/primereact/issues/2038)
- Add filterValue and onFilterValueChange properties to TreeSelect [\#2033](https://github.com/primefaces/primereact/issues/2033)
- Improve Tooltip alignment [\#1973](https://github.com/primefaces/primereact/issues/1973)

**Fixed bugs:**

- The id property has no effect on Card [\#2105](https://github.com/primefaces/primereact/issues/2105)
- Items are not aligned on BreadCrumb [\#2104](https://github.com/primefaces/primereact/issues/2104)
- Drag and drop not working properly with frozen columns on TreeTable [\#2100](https://github.com/primefaces/primereact/issues/2100)
- \(Datatable\) EmptyMessage is not 'No records found' but null [\#2094](https://github.com/primefaces/primereact/issues/2094)
- Freezing Columns leads to wrong order on Column reorder of DataTable [\#2086](https://github.com/primefaces/primereact/issues/2086)
- Resizing of splitter panels doesn't work on touch devices [\#2083](https://github.com/primefaces/primereact/issues/2083)
- validateResize in splitter doesn't validate sizes if there are more than two panels [\#2082](https://github.com/primefaces/primereact/issues/2082)
- Tooltip: wrong arrow position and orientation for certain combinations of my, at, position [\#2073](https://github.com/primefaces/primereact/issues/2073)
- PageParams TypeScript interface improvement on DataTable, TreeTable and DataView [\#2070](https://github.com/primefaces/primereact/issues/2070)
- Splitter considers the height as the size of the container irrespective of the layout [\#2067](https://github.com/primefaces/primereact/issues/2067)
- DataView throws an exception when the last page is reached using Paginator [\#2066](https://github.com/primefaces/primereact/issues/2066)
- Calender Component Type Error [\#2057](https://github.com/primefaces/primereact/issues/2057)
- FileUpload - long filename [\#2055](https://github.com/primefaces/primereact/issues/2055)
- Slider doesn't work with decimal step value [\#2036](https://github.com/primefaces/primereact/issues/2036)
- PickList type definition is not in line with proptypes [\#2035](https://github.com/primefaces/primereact/issues/2035)
- Sidebar content overflows its container [\#2034](https://github.com/primefaces/primereact/issues/2034)
- options.clear\(\) NOT works in FileUpload [\#2026](https://github.com/primefaces/primereact/issues/2026)
- Edit and Sort combination support for DataTable [\#878](https://github.com/primefaces/primereact/issues/878)

**Deprecated:**

- FullCalendar component is deprecated [\#2092](https://github.com/primefaces/primereact/issues/2092)

## [6.3.2](https://github.com/primefaces/primereact/tree/6.3.2) (2021-05-10)

[Full Changelog](https://github.com/primefaces/primereact/compare/6.3.1...6.3.2)

**Breaking changes:**

- Remove activeItem property from TabMenu [\#2015](https://github.com/primefaces/primereact/issues/2015)
- Replace 'data' params name with 'value' for onContextMenuSelectionChange on DataTable [\#2021](https://github.com/primefaces/primereact/issues/2021)
- Improve nodeTemplate property on Tree [\#2019](https://github.com/primefaces/primereact/issues/2019)

**Implemented New Features and Enhancements:**

- Add options parameter to uploadHandler callback on FileUpload [\#2024](https://github.com/primefaces/primereact/issues/2024)
- Improve footer template on ConfirmDialog and ConfirmPopup [\#2020](https://github.com/primefaces/primereact/issues/2020)
- Add activeIndex property to TabMenu [\#2014](https://github.com/primefaces/primereact/issues/2014)
- onBlur/onFocus's event argument should be typed as FocusEvent [\#2009](https://github.com/primefaces/primereact/issues/2009)
- Add togglerTemplate property to Tree [\#2005](https://github.com/primefaces/primereact/issues/2005)
- ColorPicker: wrong value type definitions when using rgb or hsb format [\#2004](https://github.com/primefaces/primereact/issues/2004)
- Expand the root of filtered nodes on Tree [\#2001](https://github.com/primefaces/primereact/issues/2001)
- Export classNames function from 'primereact/utils' package [\#1990](https://github.com/primefaces/primereact/issues/1990)
- Striped class is not applied to expanded rows on DataTable [\#1987](https://github.com/primefaces/primereact/issues/1987)
- Improve type definitions for IDEs [\#1986](https://github.com/primefaces/primereact/issues/1986)

**Fixed bugs:**

- Multiselect item on 0 index is getting selected [\#2012](https://github.com/primefaces/primereact/issues/2012)
- MultiSelect is not working nested value option [\#2011](https://github.com/primefaces/primereact/issues/2011)
- DataTable checkbox-only selection:: behave as "single" mode. [\#2008](https://github.com/primefaces/primereact/issues/2008)
- ColorPicker: add missing input attributes, part 2: type definitions [\#2006](https://github.com/primefaces/primereact/issues/2006)
- ListBox fails on tap item in mobile [\#2000](https://github.com/primefaces/primereact/issues/2000)
- InputTextarea with auto resize isn't sized correctly when initially populated with a long string [\#1999](https://github.com/primefaces/primereact/issues/1999)
- The Toast component missed the 'top-center' and 'bottom-center' positions in the typings [\#1996](https://github.com/primefaces/primereact/issues/1996)
- TreeSelect onNodeExpand Event Never Fires [\#1995](https://github.com/primefaces/primereact/issues/1995)
- AccordionTab cannot be rendered conditionally [\#1992](https://github.com/primefaces/primereact/issues/1992)
- When a selected date is deselected, the inputfield is not updated. [\#1991](https://github.com/primefaces/primereact/issues/1991)
- Non-sortable columns call onSort callback in DataTable [\#1989](https://github.com/primefaces/primereact/issues/1989)
- Treetable break after toggle columns [\#1988](https://github.com/primefaces/primereact/issues/1988)
- Tooltip: Fixed tooltip doesnt work with elements inside Tooltip children \( autoHide = false \) [\#1985](https://github.com/primefaces/primereact/issues/1985)
- The emptyFilterMessage no longer working on Dropdown/MuliSelect components [\#1984](https://github.com/primefaces/primereact/issues/1984)
- InputNumber's onValueChange is called unconditionally when the onBlur event occurs. [\#1842](https://github.com/primefaces/primereact/issues/1842)
- Overlay Components not working for Mobile devices [\#1694](https://github.com/primefaces/primereact/issues/1694)

## [6.3.1](https://github.com/primefaces/primereact/tree/6.3.1) (2021-04-25)

[Full Changelog](https://github.com/primefaces/primereact/compare/6.3.0...6.3.1)

**Implemented New Features and Enhancements:**

- Improve filled control on InputText [\#1977](https://github.com/primefaces/primereact/issues/1977)

**Fixed bugs:**

- DataTable - EventParams - wrong interface attribute [\#1983](https://github.com/primefaces/primereact/issues/1983)
- The optionDisabled property is wrongly typed [\#1982](https://github.com/primefaces/primereact/issues/1982)
- Galleria and Carousel is not working as expected [\#1981](https://github.com/primefaces/primereact/issues/1981)
- Typescript: Props aren't exported anymore [\#1979](https://github.com/primefaces/primereact/issues/1979)
- The panel always stays open with browser's autofill feature on Password [\#1978](https://github.com/primefaces/primereact/issues/1978)
- The rowData has wrong type on DataTable [\#1976](https://github.com/primefaces/primereact/issues/1976)

## [6.3.0](https://github.com/primefaces/primereact/tree/6.3.0) (2021-04-22)

[Full Changelog](https://github.com/primefaces/primereact/compare/6.2.1...6.3.0)

**Breaking changes:**

- Improve type definitions on all components [\#1877](https://github.com/primefaces/primereact/issues/1877)

**Implemented New Features and Enhancements:**

- New Component: TreeSelect [\#1971](https://github.com/primefaces/primereact/issues/1971)
- New Component: MultiStateCheckbox [\#1812](https://github.com/primefaces/primereact/issues/1812)
- Add cellSelection property to DataTable [\#1942](https://github.com/primefaces/primereact/issues/1942)
- Add dragSelection property to DataTable [\#1932](https://github.com/primefaces/primereact/issues/1932)
- Improve selectionMode property on DataTable [\#1926](https://github.com/primefaces/primereact/issues/1926)
- Add zIndex option to PrimeReact api [\#1924](https://github.com/primefaces/primereact/issues/1924)
- Add appendTo option to PrimeReact api [\#1964](https://github.com/primefaces/primereact/issues/1964)
- Improve ref property on Form components [\#1920](https://github.com/primefaces/primereact/issues/1920)
- Add transitionOptions property to Components that use CSSTransition API [\#1917](https://github.com/primefaces/primereact/issues/1917)
- Add showHeader property to Tree [\#1970](https://github.com/primefaces/primereact/issues/1970)
- Add filterValue and onFilterValueChange property to Tree [\#1968](https://github.com/primefaces/primereact/issues/1968)
- Add header and footer to Tree [\#1967](https://github.com/primefaces/primereact/issues/1967)
- Constants for Message Severities  [\#1962](https://github.com/primefaces/primereact/issues/1962)
- Reimplement EventBus [\#1961](https://github.com/primefaces/primereact/issues/1961)
- Add new params to filterFunction on Column [\#1956](https://github.com/primefaces/primereact/issues/1956)
- Add headerTemplate property to TabPanel on TabView [\#1955](https://github.com/primefaces/primereact/issues/1955)
- Add showOnFocus property to Dropdown [\#1954](https://github.com/primefaces/primereact/issues/1954)
- Add onShow and onHide callbacks to Overlay and Modal Components [\#1951](https://github.com/primefaces/primereact/issues/1951)
- Add 'self' value to appendTo property on Components [\#1949](https://github.com/primefaces/primereact/issues/1949)
- Add autoHide property to Tooltip [\#1946](https://github.com/primefaces/primereact/issues/1946)
- Improve Typing for ToolTips [\#1916](https://github.com/primefaces/primereact/issues/1916)
- InputNumber with required property doesn't behave the same as html \<input required\> element. [\#1912](https://github.com/primefaces/primereact/issues/1912)
- Add sortableDisabled property to Column [\#1911](https://github.com/primefaces/primereact/issues/1911)
- Add headerTemplate property to FileUplaod [\#1907](https://github.com/primefaces/primereact/issues/1907)
- Add headerClassName, headerStyle, contentClassName and contentStyle properties to FileUpload [\#1905](https://github.com/primefaces/primereact/issues/1905)
- Add itemTemplate property to FileUpload [\#1904](https://github.com/primefaces/primereact/issues/1904)
- Add chooseOptions, uploadOptions and cancelOptions properties to FileUpload [\#1903](https://github.com/primefaces/primereact/issues/1903)
- Close multiselect dropdown on button click of panelFooterTemplate / Add onShow & onHide event [\#1891](https://github.com/primefaces/primereact/issues/1891)
- Add loading property to Button [\#1876](https://github.com/primefaces/primereact/issues/1876)
- Can't use multiple file upload when mode is set to "basic" [\#1649](https://github.com/primefaces/primereact/issues/1649)
- Use of "\[key: string\]: any;" in type definitions circumvents type safety [\#1615](https://github.com/primefaces/primereact/issues/1615)
- OverlayPanel: incorrect type definitions for show/hide arguments [\#1356](https://github.com/primefaces/primereact/issues/1356)

**Fixed bugs:**

- Striped class is not working as expected on DataTable with expanded rows [\#1972](https://github.com/primefaces/primereact/issues/1972)
- Touch event is not working on ColorPicker [\#1960](https://github.com/primefaces/primereact/issues/1960)
- The root menuitem does not support template option on PanelMenu [\#1953](https://github.com/primefaces/primereact/issues/1953)
- Dialog can't close when you press ESC key [\#1947](https://github.com/primefaces/primereact/issues/1947)
- MultiSelect Button disabled issue [\#1943](https://github.com/primefaces/primereact/issues/1943)
- Dialog minWidth and minHeight issue [\#1940](https://github.com/primefaces/primereact/issues/1940)
- Dropdown, MultiSelect, Listbox option that has disabled property is not disabled [\#1936](https://github.com/primefaces/primereact/issues/1936)
- MultiSelect, selecting disabled options [\#1934](https://github.com/primefaces/primereact/issues/1934)
- Uncaught Error: Cannot find module './images/color.png' [\#1931](https://github.com/primefaces/primereact/issues/1931)
- Randomly generated IDs in components throw a warning on SSR [\#1922](https://github.com/primefaces/primereact/issues/1922)
- Dropdown 'optionDisabled' is wrongly typed as boolean [\#1921](https://github.com/primefaces/primereact/issues/1921)
- "scrollHeight" for autocomplete doesn't work [\#1918](https://github.com/primefaces/primereact/issues/1918)
- DataTable and TreeTable Typing is wrong [\#1914](https://github.com/primefaces/primereact/issues/1914)
- Incorrect types for CascadeSelectProps and ConfirmDialogProps [\#1908](https://github.com/primefaces/primereact/issues/1908)
- Tooltip is not working with 'disabled' attribute of HTML element as expected. [\#1906](https://github.com/primefaces/primereact/issues/1906)
- Slider does not work with fractional step values [\#1901](https://github.com/primefaces/primereact/issues/1901)
- Animation "none" not working for Skeleton [\#1900](https://github.com/primefaces/primereact/issues/1900)
- PickList transfer buttons disable and items selection issue [\#1898](https://github.com/primefaces/primereact/issues/1898)
- Multiselect malfunction with 'optionValue' prop setted [\#1897](https://github.com/primefaces/primereact/issues/1897)
- SlideMenu menu model template has wrong classname [\#1894](https://github.com/primefaces/primereact/issues/1894)
- SlideMenu does not correctly accept className prop [\#1893](https://github.com/primefaces/primereact/issues/1893)
- A maximizable dialog cannot be maximized properly after its size or position has been changed [\#1888](https://github.com/primefaces/primereact/issues/1888)
- Password component doesn't visualize properly the value of the variable serving as it's value when it is programmatically changed [\#1885](https://github.com/primefaces/primereact/issues/1885)
- FullCalendar, Editor and Chart are not working with NEXT.js [\#1884](https://github.com/primefaces/primereact/issues/1884)
- editor automatically gains focus when intializing model with data [\#1851](https://github.com/primefaces/primereact/issues/1851)
- TreeTable does not account for changes in scrollHeight [\#1850](https://github.com/primefaces/primereact/issues/1850)
- Picklist reorder causes high level error. [\#1843](https://github.com/primefaces/primereact/issues/1843)
- Fieldset shows empty legend over its border [\#1433](https://github.com/primefaces/primereact/issues/1433)

## [6.2.1](https://github.com/primefaces/primereact/tree/6.2.1) (2021-03-17)

[Full Changelog](https://github.com/primefaces/primereact/compare/6.2.0...6.2.1)

**Fixed bugs:**

- Overlay Components throw an exception with Next.js [\#1880](https://github.com/primefaces/primereact/issues/1880)

## [6.2.0](https://github.com/primefaces/primereact/tree/6.2.0) (2021-03-16)

[Full Changelog](https://github.com/primefaces/primereact/compare/6.1.0...6.2.0)

**Implemented New Features and Enhancements:**

- Add zIndex options to PrimeReact api [\#1878](https://github.com/primefaces/primereact/issues/1878)
- Set appendTo as body by default [\#1875](https://github.com/primefaces/primereact/issues/1875)
- Add option group support to Dropdown [\#1874](https://github.com/primefaces/primereact/issues/1874)
- Add option group support to MultiSelect [\#1873](https://github.com/primefaces/primereact/issues/1873)
- Add option group support to Listbox [\#1872](https://github.com/primefaces/primereact/issues/1872)
- Add option group support to Autocomplete [\#1871](https://github.com/primefaces/primereact/issues/1871)
- Improve close button style on Inplace [\#1861](https://github.com/primefaces/primereact/issues/1861)
- Improve type definition of  completeMethod event on AutoComplete [\#1680](https://github.com/primefaces/primereact/issues/1680)

**Fixed bugs:**

- Datatable rows per page doesn't work [\#1870](https://github.com/primefaces/primereact/issues/1870)
- Server side error because OverlayEventBus [\#1869](https://github.com/primefaces/primereact/issues/1869)
- Cell Editing doesn't work on child nodes in TreeTable [\#1865](https://github.com/primefaces/primereact/issues/1865)
- Ability to clear password \(set value of password to blank\) [\#1854](https://github.com/primefaces/primereact/issues/1854)

## [6.1.0](https://github.com/primefaces/primereact/tree/6.1.0) (2021-03-09)

[Full Changelog](https://github.com/primefaces/primereact/compare/6.0.2...6.1.0)

**Implemented New Features and Enhancements:**

- Color Palettes for Each Theme [\#1860](https://github.com/primefaces/primereact/issues/1860)
- Add touch support to ColorPicker [\#1857](https://github.com/primefaces/primereact/issues/1857)
- Add breakpoints property to Dialog, ConfirmDialog and OverlayPanel [\#1856](https://github.com/primefaces/primereact/issues/1856)
- Add selectionOnly options to CSV export on DataTable [\#1853](https://github.com/primefaces/primereact/issues/1853)
- Add multiple property to PanelMenu [\#1846](https://github.com/primefaces/primereact/issues/1846)
- Add expanded option to MenuModel [\#1845](https://github.com/primefaces/primereact/issues/1845)
- Add panelHeaderTemplate and panelFooterTemplate properties to MultiSelect [\#1841](https://github.com/primefaces/primereact/issues/1841)
- Add paginatorClassName to DataTable, TreeTable and DataView [\#1840](https://github.com/primefaces/primereact/issues/1840)
- Improve template option on Paginator [\#1839](https://github.com/primefaces/primereact/issues/1839)
- Improve the interaction of nested overlays [\#1832](https://github.com/primefaces/primereact/issues/1832)
- Add disabled option to Tooltip [\#1827](https://github.com/primefaces/primereact/issues/1827)
- Add onClick event to Avatar [\#1819](https://github.com/primefaces/primereact/issues/1819)
- Improve checkbox selection on DataTable [\#1817](https://github.com/primefaces/primereact/issues/1817)
- \[Multiselect\] Feature request: Configure Maximum allowed number of items selectable in Multiselect [\#1815](https://github.com/primefaces/primereact/issues/1815)
- data-pr-{options} on Global Tooltip  doesn't work [\#1811](https://github.com/primefaces/primereact/issues/1811)
- Menubar and Toolbar, start/end wrong prop types, that don't accept JSX.Element type [\#1809](https://github.com/primefaces/primereact/issues/1809)
- Tooltip does not disappear when components are disabled [\#1806](https://github.com/primefaces/primereact/issues/1806)
- Add onClose callback to custom content on ToastMessage [\#1805](https://github.com/primefaces/primereact/issues/1805)
- Add draggable and resizable features to Dialog [\#1616](https://github.com/primefaces/primereact/issues/1616)
- DataTable/TreeTable: implement configurable filterDelay [\#1440](https://github.com/primefaces/primereact/issues/1440)
- Disabling a Menu Item doesnt add aria-disabled label [\#1434](https://github.com/primefaces/primereact/issues/1434)
- TreeTable/DataTable goes to edit mode when selected \(single click\) [\#1292](https://github.com/primefaces/primereact/issues/1292)
- Add removableSort property on TreeTable component [\#1275](https://github.com/primefaces/primereact/issues/1275)
- Change row navigation structure on DataTable with selection [\#1162](https://github.com/primefaces/primereact/issues/1162)
- Trigger row editing on datatable programmatically [\#1135](https://github.com/primefaces/primereact/issues/1135)
- Add showFilterClear proprty to Dropdown [\#1081](https://github.com/primefaces/primereact/issues/1081)
- Improve the parameters of onDragDrop callback on Tree [\#1020](https://github.com/primefaces/primereact/issues/1020)
- PanelMenu collapses on clicking the menu link instead of being in expanded state [\#1011](https://github.com/primefaces/primereact/issues/1011)
- Support for svg element in icon properties [\#971](https://github.com/primefaces/primereact/issues/971)
- Accessibility of the DataTable expander cell button [\#921](https://github.com/primefaces/primereact/issues/921)
- Accessibility issues in Tooltip and Dialog components [\#862](https://github.com/primefaces/primereact/issues/862)
- Add mask property to Calendar [\#765](https://github.com/primefaces/primereact/issues/765)
- Keyboard Accessibility for Slider [\#694](https://github.com/primefaces/primereact/issues/694)
- Add onBeforeEditorShow and onBeforeEditorHide callbacks to Column on DataTable with cell editing [\#589](https://github.com/primefaces/primereact/issues/589)
- Add headerTemplate property to Panel [\#1858](https://github.com/primefaces/primereact/issues/1858)

**Fixed bugs:**

- DataTable is not working with defaultSortOrder={-1} [\#1855](https://github.com/primefaces/primereact/issues/1855)
- PanelMenu animation is not working as expected [\#1844](https://github.com/primefaces/primereact/issues/1844)
- CascadeSelect is not working with appendTo property [\#1833](https://github.com/primefaces/primereact/issues/1833)
- Editing DataTable and TreeTable are not working as expected on React/ReactDOM ^17.0.1 [\#1828](https://github.com/primefaces/primereact/issues/1828)
- MenuItem interface missing template property [\#1823](https://github.com/primefaces/primereact/issues/1823)
- When the 'rows' property changes, Pagination component does not update [\#1820](https://github.com/primefaces/primereact/issues/1820)
- InputText component reference returns Invalid prop forwardRef [\#1818](https://github.com/primefaces/primereact/issues/1818)
- PickList: Move Up \(Single\) and Move Down buttons are not working [\#1814](https://github.com/primefaces/primereact/issues/1814)
- DataTable - accessibility of sorting buttons [\#1813](https://github.com/primefaces/primereact/issues/1813)
- Dropdown menu is separate from the input field [\#1808](https://github.com/primefaces/primereact/issues/1808)
- DataTable csv export fails in chrome but is working in IE [\#1098](https://github.com/primefaces/primereact/issues/1098)
- The toggler icon of Tree/TreeTable is not displaying correctly in mobile mode [\#1859](https://github.com/primefaces/primereact/issues/1859)

## [6.0.2](https://github.com/primefaces/primereact/tree/6.0.2) (2021-02-04)

[Full Changelog](https://github.com/primefaces/primereact/compare/6.0.1...6.0.2)

**Implemented New Features and Enhancements:**

- Add autoHighlight property to AutoComplete [\#1801](https://github.com/primefaces/primereact/issues/1801)
- Add forceSelection to AutoComplete [\#1800](https://github.com/primefaces/primereact/issues/1800)
- Improve Password implementation [\#1799](https://github.com/primefaces/primereact/issues/1799)
- InplaceDisplay has no ariaLabel property [\#1796](https://github.com/primefaces/primereact/issues/1796)
- Add autoFocus property to InputNumber [\#1794](https://github.com/primefaces/primereact/issues/1794)
- Change the type of loader property on DataScroller [\#1791](https://github.com/primefaces/primereact/issues/1791)
- Improve PrimeReact components for React.StrictMode [\#1790](https://github.com/primefaces/primereact/issues/1790)
- Improve rowEditor buttons on DataTable with editMode="row" [\#1788](https://github.com/primefaces/primereact/issues/1788)

**Fixed bugs:**

- AutoComplete in FireFox does not pass focus on Tab [\#1798](https://github.com/primefaces/primereact/issues/1798)
- Fullcalendar Week View Missing Vertical Lines [\#1797](https://github.com/primefaces/primereact/issues/1797)
- SplitterPanel is not exported in TypeScript [\#1795](https://github.com/primefaces/primereact/issues/1795)
- Navigator Calendar taking current year when yearRange property is less than current year [\#1793](https://github.com/primefaces/primereact/issues/1793)
- Datatable doesn't change page when the last element on a page is removed. [\#1792](https://github.com/primefaces/primereact/issues/1792)
- DataTable ContextMenu Third Reposition [\#1789](https://github.com/primefaces/primereact/issues/1789)
- TreeTable tabbing between editable cells not working [\#1617](https://github.com/primefaces/primereact/issues/1617)

## [6.0.1](https://github.com/primefaces/primereact/tree/6.0.1) (2021-01-28)

[Full Changelog](https://github.com/primefaces/primereact/compare/6.0.0...6.0.1)

**Implemented New Features and Enhancements:**

- Clearing Dropdown returns null instead of undefined [\#1784](https://github.com/primefaces/primereact/issues/1784)
- Improve template property on MenuModel API [\#1783](https://github.com/primefaces/primereact/issues/1783)
- Add CascadeSelect to FloatLabelDemo [\#1781](https://github.com/primefaces/primereact/issues/1781)
- Add imageAlt and onImageError to Avatar [\#1779](https://github.com/primefaces/primereact/issues/1779)
- Add imageAlt and onImageError property to Chip [\#1778](https://github.com/primefaces/primereact/issues/1778)
- Improve custom content option on Button [\#1777](https://github.com/primefaces/primereact/issues/1777)
- Add restoreTableState method to DataTable [\#1776](https://github.com/primefaces/primereact/issues/1776)
- If Tooltip's content is empty, the tooltip may not be rendered. [\#1770](https://github.com/primefaces/primereact/issues/1770)
- Controlled Knob does not react to value changes on props [\#1766](https://github.com/primefaces/primereact/issues/1766)
- Get filtered rows from global filter action [\#1763](https://github.com/primefaces/primereact/issues/1763)
- Feature Request: DataTable hide expander when there are no children rows [\#1762](https://github.com/primefaces/primereact/issues/1762)
- Change the type of content property in ToastMessage [\#1761](https://github.com/primefaces/primereact/issues/1761)
- Add p-component class to Calendar [\#1756](https://github.com/primefaces/primereact/issues/1756)
- Improve dynamic mask on InputMask [\#1718](https://github.com/primefaces/primereact/issues/1718)
- MultiSelect implement SelectItem disabled [\#1698](https://github.com/primefaces/primereact/issues/1698)
- Do not hide overlays on body scroll [\#1655](https://github.com/primefaces/primereact/issues/1655)
- Add template property support to MenuModel API in all menu components [\#1635](https://github.com/primefaces/primereact/issues/1635)

**Fixed bugs:**

- Button link is invisible in material themes [\#1786](https://github.com/primefaces/primereact/issues/1786)
- Inline Calendar doesn't display correctly with time/button bar  [\#1782](https://github.com/primefaces/primereact/issues/1782)
- Improve float label support in overlay selects [\#1780](https://github.com/primefaces/primereact/issues/1780)
- Avatar with image and shape="circle" doesn't have border-radius style [\#1773](https://github.com/primefaces/primereact/issues/1773)
- Primereact 6 doesn't work once compiled with Webpack [\#1771](https://github.com/primefaces/primereact/issues/1771)
- No typing for confirmPopup and confirmDialog [\#1765](https://github.com/primefaces/primereact/issues/1765)
- Cascade Select material theming is inconsistent [\#1757](https://github.com/primefaces/primereact/issues/1757)
- DataTable with editMode="cell" doesn't work as expected [\#1752](https://github.com/primefaces/primereact/issues/1752)
- Problem in entering negative value in INPUTNUMBER.  [\#1746](https://github.com/primefaces/primereact/issues/1746)
- Calendar input does not update view when hourFormat changes [\#1711](https://github.com/primefaces/primereact/issues/1711)

## [6.0.0](https://github.com/primefaces/primereact/tree/6.0.0) (2021-01-12)

[Full Changelog](https://github.com/primefaces/primereact/compare/5.0.2...6.0.0)

**Breaking changes:**

- Change the type of locale property on Calendar [\#1750](https://github.com/primefaces/primereact/issues/1750)
- Change the import of PrimeReact class [\#1751](https://github.com/primefaces/primereact/issues/1751)
- Rename 'readonly' property with 'readOnly' on all components [\#1738](https://github.com/primefaces/primereact/issues/1738)
- Remove onSourceSelect and onTargetSelect callbacks from PickList [\#1707](https://github.com/primefaces/primereact/issues/1707)
- Change the type of tabIndex property on all components [\#1566](https://github.com/primefaces/primereact/issues/1566)

**Implemented New Features and Enhancements:**

- Locale API [\#1749](https://github.com/primefaces/primereact/issues/1749)
- New Component: CascadeSelect  [\#1736](https://github.com/primefaces/primereact/issues/1736)
- New Component: Chip [\#1734](https://github.com/primefaces/primereact/issues/1734)
- New Component: ScrollTop [\#1733](https://github.com/primefaces/primereact/issues/1733)
- New Component: ConfirmPopup [\#1731](https://github.com/primefaces/primereact/issues/1731)
- New Component: ConfirmDialog [\#1730](https://github.com/primefaces/primereact/issues/1730)
- New Component: Splitter  [\#1729](https://github.com/primefaces/primereact/issues/1729)
- New Component: Knob  [\#1727](https://github.com/primefaces/primereact/issues/1727)
- New Component: Divider [\#1726](https://github.com/primefaces/primereact/issues/1726)
- New Component: Skeleton [\#1725](https://github.com/primefaces/primereact/issues/1725)
- New Component: Tag [\#1723](https://github.com/primefaces/primereact/issues/1723)
- New Component: Badge [\#1719](https://github.com/primefaces/primereact/issues/1719)
- New Component: Avatar [\#1717](https://github.com/primefaces/primereact/issues/1717)
- Add icons property to Panel [\#1748](https://github.com/primefaces/primereact/issues/1748)
- Change the type of header property on Panel [\#1747](https://github.com/primefaces/primereact/issues/1747)
- Dialog dismissableMask didn't work if hide the close icon [\#1745](https://github.com/primefaces/primereact/issues/1745)
- Chips and AutoComplete\(multiple mode\) support multiline input mode [\#1740](https://github.com/primefaces/primereact/issues/1740)
- Improving the initial focus of the Dialog [\#1737](https://github.com/primefaces/primereact/issues/1737)
- Improve Dialog implementation for ConfirmDialog [\#1732](https://github.com/primefaces/primereact/issues/1732)
- Add tabIndex property to Checkbox [\#1716](https://github.com/primefaces/primereact/issues/1716)
- Add sourceSelection and targetSelection properties to PickList [\#1708](https://github.com/primefaces/primereact/issues/1708)
- Add filterValue and onFilterValueChange properties to ListBox [\#1706](https://github.com/primefaces/primereact/issues/1706)
- Add onKeyDown event to InputNumber [\#1695](https://github.com/primefaces/primereact/issues/1695)
- Constants for PrimeIcons [\#1625](https://github.com/primefaces/primereact/issues/1625)

**Fixed bugs:**

- Chips throws a JS exception [\#1754](https://github.com/primefaces/primereact/issues/1754)
- Typo in tabIndex property name [\#1710](https://github.com/primefaces/primereact/issues/1710)
- DataTable with empty frozen column throws a JS exception [\#1703](https://github.com/primefaces/primereact/issues/1703)
- Prop type incorrect for Timeline [\#1700](https://github.com/primefaces/primereact/issues/1700)
- Datatable with stateStorage property saves filterheader as extra columnwidth [\#1697](https://github.com/primefaces/primereact/issues/1697)
- DataTable edit not work \(Input disappears immediately after clicking cell\) in react-dom@17.0.1 [\#1685](https://github.com/primefaces/primereact/issues/1685)

## [5.0.2](https://github.com/primefaces/primereact/tree/5.0.2) (2020-11-30)

[Full Changelog](https://github.com/primefaces/primereact/compare/5.0.1...5.0.2)

**Breaking changes:**
- Change params of onEditorInit, onEditorSubmit, onEditorCancel and editorValidator callbacks on Column [\#1692](https://github.com/primefaces/primereact/issues/1692)

**Implemented New Features and Enhancements:**

- Remove PrimeFlex dependency from MegaMenu [\#1690](https://github.com/primefaces/primereact/issues/1690)
- Chips display for MultiSelect [\#1689](https://github.com/primefaces/primereact/issues/1689)
- Add the 'enter' key support to InputNumber [\#1688](https://github.com/primefaces/primereact/issues/1688)
- New Component: Timeline [\#1687](https://github.com/primefaces/primereact/issues/1687)
- Improve Password implementation [\#1684](https://github.com/primefaces/primereact/issues/1684)
- Improve Tooltip implementation [\#1683](https://github.com/primefaces/primereact/issues/1683)
- Add onFocus and onBlur events on InputMask [\#1677](https://github.com/primefaces/primereact/issues/1677)
- OverlayPanel - arrow always on the left side of the panel.  [\#1671](https://github.com/primefaces/primereact/issues/1671)
- Change the types of header, footer, title, subTitle properties on Card [\#1658](https://github.com/primefaces/primereact/issues/1658)
- Add separator support to SplitButton [\#1656](https://github.com/primefaces/primereact/issues/1656)
- Do not hide overlays on body scroll [\#1655](https://github.com/primefaces/primereact/issues/1655)
- Remove 'classnames' dependency from PrimeReact components [\#1653](https://github.com/primefaces/primereact/issues/1653)
- Add showClear property to MultiSelect [\#1627](https://github.com/primefaces/primereact/issues/1627)
- Add mediumRegex and strongRegex property to Password [\#1623](https://github.com/primefaces/primereact/issues/1623)
- Add browser event param to editor callbacks on Datatable [\#1577](https://github.com/primefaces/primereact/issues/1577)

**Fixed bugs:**

- DataView throws an exception when the last page is reached using Paginator [\#1691](https://github.com/primefaces/primereact/issues/1691)
- DataTable edit not work \(Input disappears immediately after clicking cell\) in react-dom@17.0.1 [\#1685](https://github.com/primefaces/primereact/issues/1685)
- Chips is not working when the initial value sets 'null' [\#1678](https://github.com/primefaces/primereact/issues/1678)
- Global tooltip documentation missing [\#1676](https://github.com/primefaces/primereact/issues/1676)
- Calendar value change does not update UI [\#1672](https://github.com/primefaces/primereact/issues/1672)
- Tooltip with `showDelay` appears despite cursor has already left the Input [\#1667](https://github.com/primefaces/primereact/issues/1667)
- When a partial selection is made among children of a node, the minus icon doesn't appear in the checkbox of that node. [\#1657](https://github.com/primefaces/primereact/issues/1657)
- Float label is not working on Chips [\#1654](https://github.com/primefaces/primereact/issues/1654)
- DataTable with lazy mode and multiple selection doesn't work as expected [\#1636](https://github.com/primefaces/primereact/issues/1636)
- pRipple working when disabled\(etc menuitem\) [\#1634](https://github.com/primefaces/primereact/issues/1634)
- DataTable Context Menu doesn't reposition [\#1574](https://github.com/primefaces/primereact/issues/1574)
- Multiple sort in TreeTable is not working when passing multisortmeta props [\#1442](https://github.com/primefaces/primereact/issues/1442)

## [5.0.1](https://github.com/primefaces/primereact/tree/5.0.1) (2020-10-12)

[Full Changelog](https://github.com/primefaces/primereact/compare/5.0.0...5.0.1)

**Implemented New Features and Enhancements:**

- Soho Theme [\#1632](https://github.com/primefaces/primereact/issues/1632)
- FluentUI Theme [\#1631](https://github.com/primefaces/primereact/issues/1631)
- Accordion border radius visual on PrimeOne themes [\#1629](https://github.com/primefaces/primereact/issues/1629)
- Galleria and Carousel highlight item visual improvement on PrimeOne Themes [\#1626](https://github.com/primefaces/primereact/issues/1626)
- Add dropdownAppendTo property to Paginator [\#1622](https://github.com/primefaces/primereact/issues/1622)
- Add paginatorDropdownAppendTo property to DataTable, TreeTable and DataView [\#1621](https://github.com/primefaces/primereact/issues/1621)
- Tooltip doesn't close in scrollable containers [\#1607](https://github.com/primefaces/primereact/issues/1607)

**Fixed bugs:**

- Fullcalendar button styling issues [\#1633](https://github.com/primefaces/primereact/issues/1633)
- TriStateCheckbox X icon not visible on Material themes [\#1630](https://github.com/primefaces/primereact/issues/1630)
- TreeNode toggler is not readable on hover when highlighted on bootstrap theme [\#1628](https://github.com/primefaces/primereact/issues/1628)
- Dropdown items throws a JS exception [\#1624](https://github.com/primefaces/primereact/issues/1624)
- TypeScript applications cannot find the 'Tooltip' module [\#1618](https://github.com/primefaces/primereact/issues/1618)
- InputNumber with spinner mode throws a JS exception [\#1614](https://github.com/primefaces/primereact/issues/1614)
- inputNumber with numeric prefix is not working as expected [\#1613](https://github.com/primefaces/primereact/issues/1613)
- Problems when typing or pasting numbers into InputNumber [\#1612](https://github.com/primefaces/primereact/issues/1612)

## [5.0.0](https://github.com/primefaces/primereact/tree/5.0.0) (2020-10-01)

[Full Changelog](https://github.com/primefaces/primereact/compare/5.0.0-rc.2...5.0.0)

**Implemented New Features and Enhancements:**

- Lighter Highlight Color for PrimeOne Themes [\#1605](https://github.com/primefaces/primereact/issues/1605)
- Add template property support to MenuModel API [\#1597](https://github.com/primefaces/primereact/issues/1597)
- Add buttonTemplate property to SplitButton [\#1596](https://github.com/primefaces/primereact/issues/1596)
- Add headerTemplate property to AccordionTab on Accordion [\#1594](https://github.com/primefaces/primereact/issues/1594)
- Add expandIcon and collapseIcon properties to Accordion [\#1593](https://github.com/primefaces/primereact/issues/1593)
- Add id property to Password [\#1590](https://github.com/primefaces/primereact/issues/1590)
- Improvement in behavior of components that have overlay panels in scrollable containers [\#1589](https://github.com/primefaces/primereact/issues/1589)
- InputNumber feature - allow negative values [\#1585](https://github.com/primefaces/primereact/issues/1585)
- Add panelClassName and panelStyle properties for appendable overlays [\#1459](https://github.com/primefaces/primereact/issues/1459)
- TreeTable: expose the filter method for TypeScript [\#1435](https://github.com/primefaces/primereact/issues/1435)

**Fixed bugs:**

- Alignment issue on Scrollable TreeTable [\#1599](https://github.com/primefaces/primereact/issues/1599)
- Alignment issue on Scrollable Datatable [\#1598](https://github.com/primefaces/primereact/issues/1598)
- Button shows "&nbsp" text if the label property is empty [\#1595](https://github.com/primefaces/primereact/issues/1595)
- InputNumber cannot set value when format property is false [\#1582](https://github.com/primefaces/primereact/issues/1582)
- Carousel page prop not detecting changes to prop value. [\#1464](https://github.com/primefaces/primereact/issues/1464)
- Pagination \(currentPageReportTemplate\) is not showing correct page no for first [\#1453](https://github.com/primefaces/primereact/issues/1453)
- MultiSelect: error when selecting option with null value [\#1446](https://github.com/primefaces/primereact/issues/1446)
- MultiSelect: warning in console when using string array as options [\#1445](https://github.com/primefaces/primereact/issues/1445)

## [5.0.0-rc.2](https://github.com/primefaces/primereact/tree/5.0.0-rc.2) (2020-09-10)

[Full Changelog](https://github.com/primefaces/primereact/compare/5.0.0-rc.1...5.0.0-rc.2)

**Implemented New Features and Enhancements:**

- Add resetFilterOnHide property to MultiSelect [\#1565](https://github.com/primefaces/primereact/issues/1565)
- Add resetFilterOnHide property to Dropdown [\#1564](https://github.com/primefaces/primereact/issues/1564)
- Add keyboard support to MultiSelect [\#1563](https://github.com/primefaces/primereact/issues/1563)
- Improve SelectButton implementation [\#1561](https://github.com/primefaces/primereact/issues/1561)
- Add optionDisabled property to SelectButton [\#1560](https://github.com/primefaces/primereact/issues/1560)
- Add emptyFilterMessage property to MultiSelect [\#1556](https://github.com/primefaces/primereact/issues/1556)
- Add emptyFilterMessage property to Dropdown [\#1554](https://github.com/primefaces/primereact/issues/1554)
- Negative sign with InputNumber [\#1551](https://github.com/primefaces/primereact/issues/1551)
- InputNumber: pasting doesn't work correctly [\#1549](https://github.com/primefaces/primereact/issues/1549)
- InputGroup support for input components with wrappers [\#1548](https://github.com/primefaces/primereact/issues/1548)
- Update PrimeFlex documentation to 2.0.0 [\#1542](https://github.com/primefaces/primereact/issues/1542)
- Scrollable Table alignment improvement [\#1541](https://github.com/primefaces/primereact/issues/1541)
- DataTable onRowClick executes when multiple selection mode is enabled and user clicks on selection checkbox column cell [\#1534](https://github.com/primefaces/primereact/issues/1534)
- Add content property to Message component [\#1463](https://github.com/primefaces/primereact/issues/1463)
- Add color property to ProgressBar [\#1457](https://github.com/primefaces/primereact/issues/1457)
- NumberInput does not pass down validation attributes to input element. [\#1444](https://github.com/primefaces/primereact/issues/1444)

**Fixed bugs:**

- The left and right arrow keys not working on input elements inside Tree [\#1559](https://github.com/primefaces/primereact/issues/1559)
- Items in PanelMenu are highlighted wrongly with Material dark themes [\#1557](https://github.com/primefaces/primereact/issues/1557)
- Calendar misplaced layout if more than one month is shown [\#1553](https://github.com/primefaces/primereact/issues/1553)
- inputNumber cannot set value bigger than 99.999 for an ES locale [\#1552](https://github.com/primefaces/primereact/issues/1552)
- inputNumber with numeric prefix is not working as expected  [\#1550](https://github.com/primefaces/primereact/issues/1550)
- Item selection does not work on Dropdown with scrollable panel [\#1544](https://github.com/primefaces/primereact/issues/1544)
- Dialog with Long Content does not scroll in IE11 [\#1538](https://github.com/primefaces/primereact/issues/1538)
- Pill Text not centered [\#1532](https://github.com/primefaces/primereact/issues/1532)
- Ripple effect with typescript [\#1530](https://github.com/primefaces/primereact/issues/1530)
- Component TreeTable doesn't added props className [\#1473](https://github.com/primefaces/primereact/issues/1473)
- Dialog aria-labelledby references an unexisting id [\#1405](https://github.com/primefaces/primereact/issues/1405)

## [5.0.0-rc.1](https://github.com/primefaces/primereact/tree/5.0.0-rc.1) (2020-08-20)

[Full Changelog](https://github.com/primefaces/primereact/compare/4.2.2...5.0.0-rc.1)

**Breaking changes:**

- Change the values of position property on Dialog [\#1516](https://github.com/primefaces/primereact/issues/1516)
- Rename iconsTemplate property to icons property on Dialog [\#1514](https://github.com/primefaces/primereact/issues/1514)
- Rename iconsTemplate property to icons property on Sidebar [\#1513](https://github.com/primefaces/primereact/issues/1513)
- Rename Growl component to Toast component [\#1512](https://github.com/primefaces/primereact/issues/1512)
- Change some property names on Galleria [\#1503](https://github.com/primefaces/primereact/issues/1503)
- Label Nova, Luna and Rhea as Legacy Themes [\#1501](https://github.com/primefaces/primereact/issues/1501)
- Change the values of position property on Growl [\#1497](https://github.com/primefaces/primereact/issues/1497)
- Remove responsive property from OrderList [\#1494](https://github.com/primefaces/primereact/issues/1494)
- Remove responsive property from PickList [\#1493](https://github.com/primefaces/primereact/issues/1493)
- Replace dotsContainerClassName with indicatorsContentClassName property on Carousel [\#1491](https://github.com/primefaces/primereact/issues/1491)
- Remove Spinner Component [\#1488](https://github.com/primefaces/primereact/issues/1488)
- Remove Lightbox component [\#1487](https://github.com/primefaces/primereact/issues/1487)
- Migrate to PrimeOne Design Architecture [\#1484](https://github.com/primefaces/primereact/issues/1484)
- Remove responsive attribute from DataTable [\#1250](https://github.com/primefaces/primereact/issues/1250)

**Implemented New Features and Enhancements:**

- Add emptyTemplate property to FileUpload [\#1508](https://github.com/primefaces/primereact/issues/1508)
- New Component: Ripple [\#1507](https://github.com/primefaces/primereact/issues/1507)
- Add index parameter to onRowEditInit and onRowSave callbacks on DataTable [\#1505](https://github.com/primefaces/primereact/issues/1505)
- Add onEditorInit callback for cell editing mode to Column [\#1504](https://github.com/primefaces/primereact/issues/1504)
- Add left and right properties to Toolbar [\#1502](https://github.com/primefaces/primereact/issues/1502)
- Material Theme [\#1500](https://github.com/primefaces/primereact/issues/1500)
- Bootstrap Theme  [\#1499](https://github.com/primefaces/primereact/issues/1499)
- Add start and end properties to Menubar [\#1498](https://github.com/primefaces/primereact/issues/1498)
- Add valueTemplate property to Dropdown [\#1496](https://github.com/primefaces/primereact/issues/1496)
- Add iconPos property to ToggleButton [\#1495](https://github.com/primefaces/primereact/issues/1495)
- Add badge and badgeClassName properties to Button [\#1490](https://github.com/primefaces/primereact/issues/1490)
- Add Badge styles to core css [\#1489](https://github.com/primefaces/primereact/issues/1489)
- Improved Overlay Animations [\#1486](https://github.com/primefaces/primereact/issues/1486)
- PrimeOne Themes [\#1485](https://github.com/primefaces/primereact/issues/1485)
- Label Nova, Luna and Rhea as Legacy Themes [\#1483](https://github.com/primefaces/primereact/issues/1483)
- Add contentClassName property to Dialog [\#1455](https://github.com/primefaces/primereact/issues/1455)
- Add listClassName property to Listbox [\#1454](https://github.com/primefaces/primereact/issues/1454)
- Change onSlideEnd callback param on Slider [\#1437](https://github.com/primefaces/primereact/issues/1437)
- Improve Tooltip implementation [\#1436](https://github.com/primefaces/primereact/issues/1436)
- Add onValueChange property to InputNumber [\#1418](https://github.com/primefaces/primereact/issues/1418)
- It is impossible to type fractional digits on InputNumber [\#1380](https://github.com/primefaces/primereact/issues/1380)
- Remove browserslist, leave processing and transpilation to applications [\#1312](https://github.com/primefaces/primereact/issues/1312)
- Custom content support for Button [\#1258](https://github.com/primefaces/primereact/issues/1258)

**Fixed bugs:**

- Global filter is not working with invalid values on TreeTable [\#1517](https://github.com/primefaces/primereact/issues/1517)
- Captcha throws a JS exception [\#1509](https://github.com/primefaces/primereact/issues/1509)
- Calendar with appendTo property isn't working as expected [\#1506](https://github.com/primefaces/primereact/issues/1506)
- Chart does not update when its options and type properties change [\#1492](https://github.com/primefaces/primereact/issues/1492)
- Dynamic options breaks InputNumber [\#1470](https://github.com/primefaces/primereact/issues/1470)
- DatePicker Milliseconds jumps from 000 to 199 [\#1456](https://github.com/primefaces/primereact/issues/1456)
- Typing for selectedItemTemplate in AutoComplete is wrong [\#1428](https://github.com/primefaces/primereact/issues/1428)
- Can't type - as first symbol into an Inputnumber [\#1427](https://github.com/primefaces/primereact/issues/1427)
- If the invalid value is entered to Calendar with keepInvalid property, the onChange event returns null [\#1422](https://github.com/primefaces/primereact/issues/1422)
- Calling clearTimeout is required before unmounting AutoComplete [\#1421](https://github.com/primefaces/primereact/issues/1421)
- Clear button is not closing Calendar [\#1416](https://github.com/primefaces/primereact/issues/1416)
- File selection does not work after validation fails [\#1415](https://github.com/primefaces/primereact/issues/1415)
- InputNumber prevents min key number [\#1412](https://github.com/primefaces/primereact/issues/1412)
- ListBox, Dropdown: Using non-unique key [\#1397](https://github.com/primefaces/primereact/issues/1397)

## [4.2.2](https://github.com/primefaces/primereact/tree/4.2.2) (2020-06-09)

[Full Changelog](https://github.com/primefaces/primereact/compare/4.2.1...4.2.2)

**Implemented New Features and Enhancements:**

- Add onStateSave and onStateRestore callbacks to DataTable with stateStorage [\#1389](https://github.com/primefaces/primereact/issues/1389)
- Change the type of iconsTemplate property on Dialog [\#1386](https://github.com/primefaces/primereact/issues/1386)
- Calendar uses : instead of . as seperator for milliseconds [\#1385](https://github.com/primefaces/primereact/issues/1385)
- Add custom mode to stateStorage [\#1382](https://github.com/primefaces/primereact/issues/1382)
- ColorPicker: add missing input attributes [\#1323](https://github.com/primefaces/primereact/issues/1323)
- Deprecate \*styleClass props in favor of \*className [\#1262](https://github.com/primefaces/primereact/issues/1262)

**Fixed bugs:**

- Tree filter with onToggle method doesn't work as expected [\#1390](https://github.com/primefaces/primereact/issues/1390)
- Calendar navigator skips one month [\#1388](https://github.com/primefaces/primereact/issues/1388)
- Incorrect work page parameter in carousel [\#1387](https://github.com/primefaces/primereact/issues/1387)
- The className property of Column is not set to \<col\> element [\#1384](https://github.com/primefaces/primereact/issues/1384)
- EmptyMessage property is not working with empty string on DataTable [\#1383](https://github.com/primefaces/primereact/issues/1383)
- When the month is changed in Calendar inside OverlayPanel, the panel automatically closes. [\#1381](https://github.com/primefaces/primereact/issues/1381)
- TreeTable column body prop function does not contain column argument [\#1366](https://github.com/primefaces/primereact/issues/1366)
- When the input filter element is clicked, the panel closes on DropDown [\#1360](https://github.com/primefaces/primereact/issues/1360)

## [4.2.1](https://github.com/primefaces/primereact/tree/4.2.1) (2020-05-11)

[Full Changelog](https://github.com/primefaces/primereact/compare/4.2.0...4.2.1)

**Implemented New Features and Enhancements:**

- Remove filter method from ObjectUtils [\#1343](https://github.com/primefaces/primereact/issues/1343)
- AutoComplete: selectedItemTemplate gets called for query [\#1296](https://github.com/primefaces/primereact/issues/1296)

**Fixed bugs:**

- Editable Dropdown is not working as expected  [\#1359](https://github.com/primefaces/primereact/issues/1359)
- Dropdown throws an exception on console after filtering and keyboard navigation [\#1358](https://github.com/primefaces/primereact/issues/1358)
- DataTable: filters are not rerendered when their state is changed [\#1352](https://github.com/primefaces/primereact/issues/1352)
- DataTable: wrong type definition for onFilter [\#1351](https://github.com/primefaces/primereact/issues/1351)
- Autofocus property doesn't work as expected on Textarea [\#1350](https://github.com/primefaces/primereact/issues/1350)
- Editor Component readOnly property name wrong [\#1346](https://github.com/primefaces/primereact/issues/1346)
- React multiselect defaultValue warning [\#1344](https://github.com/primefaces/primereact/issues/1344)
- InputMask displayed value does not change when value changes to undefined or null [\#1342](https://github.com/primefaces/primereact/issues/1342)
- Wrong import for FilterUtils [\#1339](https://github.com/primefaces/primereact/issues/1339)

## [4.2.0](https://github.com/primefaces/primereact/tree/4.2.0) (2020-04-17)
[Full Changelog](https://github.com/primefaces/primereact/compare/4.1.2...4.2.0)

**Implemented New Features and Enhancements:**
- New Component: InputNumber [\#1311](https://github.com/primefaces/primereact/issues/1311)
- Add filterLocale property to Tree [\#1338](https://github.com/primefaces/primereact/issues/1338)
- Add filterLocale property to TreeTable [\#1337](https://github.com/primefaces/primereact/issues/1337)
- Add filterLocale property to MultiSelect [\#1336](https://github.com/primefaces/primereact/issues/1336)
- Add filterLocale property to ListBox [\#1335](https://github.com/primefaces/primereact/issues/1335)
- Add filterLocale property to Dropdown [\#1334](https://github.com/primefaces/primereact/issues/1334)
- Add filterLocale property to DataTable [\#1333](https://github.com/primefaces/primereact/issues/1333)
- Add checkValidity method to MultiSelect [\#1332](https://github.com/primefaces/primereact/issues/1332)
- onFocus - onBlur for ToggleButton [\#1330](https://github.com/primefaces/primereact/issues/1330)
- Update sortIcons [\#1329](https://github.com/primefaces/primereact/issues/1329)
- Disabled prop for TriStateCheckbox [\#1325](https://github.com/primefaces/primereact/issues/1325)
- Refactor OverlayPanel outside click detection [\#1320](https://github.com/primefaces/primereact/issues/1320)
- Refactor MultiSelect outside click detection [\#1319](https://github.com/primefaces/primereact/issues/1319)
- Refactor Menu outside click detection  [\#1318](https://github.com/primefaces/primereact/issues/1318)
- Refactor ColorPicker outside click detection [\#1317](https://github.com/primefaces/primereact/issues/1317)
- Refactor Dropdown outside click detection  [\#1310](https://github.com/primefaces/primereact/issues/1310)
- Refactor AutoComplete outside click detection [\#1308](https://github.com/primefaces/primereact/issues/1308)
- MultiSelect/Dropdown expose input attributes for labeling and validation purposes [\#1306](https://github.com/primefaces/primereact/issues/1306)
- Autocomplete dropdown button close behavior enhancement [\#1305](https://github.com/primefaces/primereact/issues/1305)
- Improve timepicker style on Calendar [\#1294](https://github.com/primefaces/primereact/issues/1294)
- Add milliseconds support to Calendar [\#1293](https://github.com/primefaces/primereact/issues/1293)
- Not nullable `dataKey` in DropDown break `selectedOption` property [\#1286](https://github.com/primefaces/primereact/issues/1286)
- Separator for Chips [\#1285](https://github.com/primefaces/primereact/issues/1285)

**Fixed bugs:**
- Dropdown checkValidity fails [\#1331](https://github.com/primefaces/primereact/issues/1331)
- Calendar.showOtherMonths property not being used [\#1328](https://github.com/primefaces/primereact/issues/1328)
- Disable prop on ToggleButton not working [\#1321](https://github.com/primefaces/primereact/issues/1321)
- IE11: Autocomplete with dropdown and multiple selection requires doubleclick [\#1316](https://github.com/primefaces/primereact/issues/1316)
- InputMask displayed value does not change when value changes to undefined or null [\#1309](https://github.com/primefaces/primereact/issues/1309)
- multiSortMeta depends on single sort [\#1307](https://github.com/primefaces/primereact/issues/1307)
- Carousel  - Button inside carousel-item is not clickable in mobile phones [\#1300](https://github.com/primefaces/primereact/issues/1300)
- AutoComplete: selectedItemTemplate ts binding claims to expect JSX.Element in return, but at runtime a string is expected [\#1297](https://github.com/primefaces/primereact/issues/1297)
- FileUpload in auto mode sends two post requests in IE11 [\#1282](https://github.com/primefaces/primereact/issues/1282)
- Today Button doesn't work on prefilled Calendar with timeonly [\#1281](https://github.com/primefaces/primereact/issues/1281)
- TreeTable goes to edit mode when expanded [\#1276](https://github.com/primefaces/primereact/issues/1276)
- Tree drag&drop not working if dragdropScope contains upper case letter [\#1182](https://github.com/primefaces/primereact/issues/1182)

## [4.1.2](https://github.com/primefaces/primereact/tree/4.1.2) (2020-03-20)

[Full Changelog](https://github.com/primefaces/primereact/compare/4.1.1...4.1.2)

**Implemented New Features and Enhancements:**

- DataView: lazy loading implementation [\#1264](https://github.com/primefaces/primereact/issues/1264)

**Fixed bugs:**

- Multiple Sort doesn't work as expected in the DataTable if a sortable column has sortField and field properties [\#1279](https://github.com/primefaces/primereact/issues/1279)
- Chips in disabled Autocomplete are not disabled [\#1278](https://github.com/primefaces/primereact/issues/1278)
- Calendar display not update when value change. [\#1277](https://github.com/primefaces/primereact/issues/1277)
- Calendar closes right away in Chrome when it has showTime={true} [\#1272](https://github.com/primefaces/primereact/issues/1272)
- Setting state in onFocus of Datatable Editors crashes app [\#1271](https://github.com/primefaces/primereact/issues/1271)
- Invalid Date in Calendar in IE11 crashes the app [\#1270](https://github.com/primefaces/primereact/issues/1270)
- Tab-Key doesn't work in Datatable with cell editing on IE11 and Edge [\#1269](https://github.com/primefaces/primereact/issues/1269)
- IE11: Autocomplete with dropdown requires doubleclick [\#1267](https://github.com/primefaces/primereact/issues/1267)
- OnComplete callback has wrong property params on InputMask.d.ts [\#1265](https://github.com/primefaces/primereact/issues/1265)
- Fix InputSwitch documentation for onLabel-offLabel [\#1263](https://github.com/primefaces/primereact/issues/1263)

## [4.1.1](https://github.com/primefaces/primereact/tree/4.1.1) (2020-03-12)

[Full Changelog](https://github.com/primefaces/primereact/compare/4.1.0...4.1.1)

**Implemented New Features and Enhancements:**

- Add onFocus-onBlur to Dropdown [\#1260](https://github.com/primefaces/primereact/issues/1260)
- InputMask OnComplete does not contain the new value [\#1255](https://github.com/primefaces/primereact/issues/1255)
- resetFilter function for Dropdown [\#1249](https://github.com/primefaces/primereact/issues/1249)
- Improve type definition for onChange of form components [\#1199](https://github.com/primefaces/primereact/issues/1199)

**Fixed bugs:**

- DataTable scrollHeight doesn't calculate correctly with frozen columns and header groups [\#1261](https://github.com/primefaces/primereact/issues/1261)
- Disabled TabPanel focussable with TAB-Key [\#1254](https://github.com/primefaces/primereact/issues/1254)
- Error on TreeTable docs about responsive [\#1253](https://github.com/primefaces/primereact/issues/1253)
- Select components don't correctly return value [\#1252](https://github.com/primefaces/primereact/issues/1252)
- currentPageReport should check for {last} boundary [\#1251](https://github.com/primefaces/primereact/issues/1251)
- onClose of GrowlMessage is also allowing onClick to fire. [\#1248](https://github.com/primefaces/primereact/issues/1248)
- loadingBody type is different to Documentation [\#1111](https://github.com/primefaces/primereact/issues/1111)

## [4.1.0](https://github.com/primefaces/primereact/tree/4.1.0) (2020-03-10)

[Full Changelog](https://github.com/primefaces/primereact/compare/4.0.0...4.1.0)

**Implemented New Features and Enhancements:**

- Add reorderable to Column [\#1246](https://github.com/primefaces/primereact/issues/1246)
- Implement filterBy and filterMatchMode for ListBox [\#1245](https://github.com/primefaces/primereact/issues/1245)
- Implement filterBy and filterMatchMode for MultiSelect [\#1244](https://github.com/primefaces/primereact/issues/1244)
- Add filterPlaceholder to MultiSelect [\#1242](https://github.com/primefaces/primereact/issues/1242)
- Deprecate icon of SelectItem API [\#1239](https://github.com/primefaces/primereact/issues/1239)
- Templating support to SelectButton [\#1238](https://github.com/primefaces/primereact/issues/1238)
- Document SelectItem [\#1237](https://github.com/primefaces/primereact/issues/1237)
- Change the type of emptyMessage property on DataTable [\#1236](https://github.com/primefaces/primereact/issues/1236)
- Deprecate Lightbox [\#1235](https://github.com/primefaces/primereact/issues/1235)
- Add optionValue to Select components [\#1230](https://github.com/primefaces/primereact/issues/1230)
- Placeholder colors are not same [\#1229](https://github.com/primefaces/primereact/issues/1229)
- Primitive values support in Select components [\#1228](https://github.com/primefaces/primereact/issues/1228)
- Add filterHeaderStyle and filterHeaderClassName to Column [\#1227](https://github.com/primefaces/primereact/issues/1227)
- Add rowHover to DataTable [\#1226](https://github.com/primefaces/primereact/issues/1226)
- New options for CurrentPageReport [\#1225](https://github.com/primefaces/primereact/issues/1225)
- New DataTable Customer Demo [\#1224](https://github.com/primefaces/primereact/issues/1224)
- New filtering modes for Table [\#1223](https://github.com/primefaces/primereact/issues/1223)
- Accents support in Table filtering [\#1222](https://github.com/primefaces/primereact/issues/1222)
- Add filterField to column [\#1221](https://github.com/primefaces/primereact/issues/1221)
- Move column filters to their own row [\#1220](https://github.com/primefaces/primereact/issues/1220)
- Time support for min date or max date in calendar component [\#1217](https://github.com/primefaces/primereact/issues/1217)
- Add filterPlaceholder to Listbox [\#1215](https://github.com/primefaces/primereact/issues/1215)
- Improve style of p-link component [\#1213](https://github.com/primefaces/primereact/issues/1213)
- Implement className in MultiSelect, Dropdown, SelectButton, ListBox options [\#1175](https://github.com/primefaces/primereact/issues/1175)
- Allow Dialogs already maximized  [\#1170](https://github.com/primefaces/primereact/issues/1170)
- Implement filterBy and filterMatchMode for Dropdown [\#1149](https://github.com/primefaces/primereact/issues/1149)
- Change the type of the 'header' property on TabPanel [\#1079](https://github.com/primefaces/primereact/issues/1079)
- DataTable Columns: Conditional reorder [\#1032](https://github.com/primefaces/primereact/issues/1032)
- Datatable Columns: Conditional select [\#1031](https://github.com/primefaces/primereact/issues/1031)

**Fixed bugs:**

- Chips cover 100% although input is visually smaller [\#1241](https://github.com/primefaces/primereact/issues/1241)
- Datatable doesn't change page when the last element on a page is removed. [\#1233](https://github.com/primefaces/primereact/issues/1233)
- Filter does not work after adding a new node to the root node on Tree [\#1232](https://github.com/primefaces/primereact/issues/1232)
- Clear Button does not clear the input value on Calendar [\#1231](https://github.com/primefaces/primereact/issues/1231)
-  Remove tabIndex from the headers of the non-sortable dataTable. [\#1219](https://github.com/primefaces/primereact/issues/1219)
- The virtualScroll height is always added to rows on DataTable [\#1218](https://github.com/primefaces/primereact/issues/1218)
- ContextMenu hide/onHide triggers even though already hidden [\#1189](https://github.com/primefaces/primereact/issues/1189)
- Tree does not support Font Awesome icons [\#1187](https://github.com/primefaces/primereact/issues/1187)
- Reset filter textbox of dropdown if options changes [\#1179](https://github.com/primefaces/primereact/issues/1179)
- Deadlock situation in range slider [\#1094](https://github.com/primefaces/primereact/issues/1094)

## [4.0.0](https://github.com/primefaces/primereact/tree/4.0.0) (2020-02-27)

[Full Changelog](https://github.com/primefaces/primereact/compare/3.4.0...4.0.0)

**Implemented New Features and Enhancements:**

- Add keepInvalid property to Calendar [\#1204](https://github.com/primefaces/primereact/issues/1204)
- Add position property to Dialog [\#1203](https://github.com/primefaces/primereact/issues/1203)
- Add FocusTrap support to Dialog [\#1202](https://github.com/primefaces/primereact/issues/1202)
- Add sortFunction support to DataTable with multiple column sorting [\#1201](https://github.com/primefaces/primereact/issues/1201)
- Remove min-width style from Dropdown [\#1196](https://github.com/primefaces/primereact/issues/1196)
- Add maskClassName property to Dialog [\#1194](https://github.com/primefaces/primereact/issues/1194)
- ReImplemented Steps styles [\#1191](https://github.com/primefaces/primereact/issues/1191)
- Leave animation for Dialog [\#1181](https://github.com/primefaces/primereact/issues/1181)
- Dialog header not visible [\#1174](https://github.com/primefaces/primereact/issues/1174)
- Dialog is not displayed correctly in mobile view [\#1165](https://github.com/primefaces/primereact/issues/1165)
- Add sort number feature to sortable columns on DataTable and TreeTable with multi sorting [\#1164](https://github.com/primefaces/primereact/issues/1164)
- Add onRemove callback to FileUpload [\#1152](https://github.com/primefaces/primereact/issues/1152)
- Add editing support to the input field on Calendar [\#1141](https://github.com/primefaces/primereact/issues/1141)
- New Component: Galleria [\#1105](https://github.com/primefaces/primereact/issues/1105)

**Fixed bugs:**

- Remove the legacy lifecycle method from Lightbox component [\#1200](https://github.com/primefaces/primereact/issues/1200)
- The  disabled items can be focused in the Steps [\#1192](https://github.com/primefaces/primereact/issues/1192)
- Alignment problem on Growl message without details [\#1190](https://github.com/primefaces/primereact/issues/1190)
- Maximizable property is not working correctly on dialog [\#1169](https://github.com/primefaces/primereact/issues/1169)
- Dismissable mask behaves over dialog [\#1167](https://github.com/primefaces/primereact/issues/1167)
- Typedefinition for DataTable OnFilter is wrong. [\#1163](https://github.com/primefaces/primereact/issues/1163)

## [3.4.0](https://github.com/primefaces/primereact/tree/3.4.0) (2020-01-17)

[Full Changelog](https://github.com/primefaces/primereact/compare/3.3.3...3.4.0)

**Implemented New Features and Enhancements:**

- Calendar component keyboard support [\#1157](https://github.com/primefaces/primereact/issues/1157)
- Add expandableRowGroups property to DataTable [\#1148](https://github.com/primefaces/primereact/issues/1148)
- Add removableSort property to DataTable [\#1142](https://github.com/primefaces/primereact/issues/1142)
- Enhance Dialog Positioning [\#1138](https://github.com/primefaces/primereact/issues/1138)

**Fixed bugs:**

- Wrong property name on the propTypes definition of Dropdown  [\#1158](https://github.com/primefaces/primereact/issues/1158)
- When the InputMask is focused, the mask disappears [\#1156](https://github.com/primefaces/primereact/issues/1156)
- When the buttons inside the components are clicked, they submit the form [\#1155](https://github.com/primefaces/primereact/issues/1155)
- The icon of the next button has wrong class name on Carousel [\#1154](https://github.com/primefaces/primereact/issues/1154)
- Some DataView lazy and loading types missing [\#1131](https://github.com/primefaces/primereact/issues/1131)
- TreeTable default filter value is not showing in the filter widget  [\#1129](https://github.com/primefaces/primereact/issues/1129)
- InputTextarea does not render props like cols and rows [\#1127](https://github.com/primefaces/primereact/issues/1127)
- PanelMenu Icon does not show for entries without sub children [\#1121](https://github.com/primefaces/primereact/issues/1121)
- ContextMenu.d.ts has wrong property name [\#1118](https://github.com/primefaces/primereact/issues/1118)
- Dropdown cannot open the panel after double clicking an option [\#1053](https://github.com/primefaces/primereact/issues/1053)
- InputMask is not changing the mask at runtime. [\#1021](https://github.com/primefaces/primereact/issues/1021)

## [3.3.3](https://github.com/primefaces/primereact/tree/3.3.3) (2019-11-29)

[Full Changelog](https://github.com/primefaces/primereact/compare/3.3.2...3.3.3)

**Implemented New Features and Enhancements:**

- Add exportable property to Column [\#1103](https://github.com/primefaces/primereact/issues/1103)
- Add exportFunction property to DataTable [\#1102](https://github.com/primefaces/primereact/issues/1102)
- Add repeat functionality to timer buttons on Calendar [\#1101](https://github.com/primefaces/primereact/issues/1101)
- Add reset method to DataTable [\#1088](https://github.com/primefaces/primereact/issues/1088)
- onColReorder in Datatable parameter missing [\#1080](https://github.com/primefaces/primereact/issues/1080)
- Add disabled property to Tree [\#1078](https://github.com/primefaces/primereact/issues/1078)
- Add selectedItemsLabel property to MultiSelect [\#1075](https://github.com/primefaces/primereact/issues/1075)
- Add maxSelectedLabels property to MultiSelect [\#1074](https://github.com/primefaces/primereact/issues/1074)
- Passing of data-\* Attributes as Props [\#1073](https://github.com/primefaces/primereact/issues/1073)

**Fixed bugs:**

- DomHandler functions throw NPE on components [\#1104](https://github.com/primefaces/primereact/issues/1104)
- Growl messages from "bottom\*" is not displaying as expected [\#1095](https://github.com/primefaces/primereact/issues/1095)
- Properties of TreeNodes on TreeTable not Working [\#1085](https://github.com/primefaces/primereact/issues/1085)
- className property of Message component not working [\#1076](https://github.com/primefaces/primereact/issues/1076)
- Tree className property not working  [\#1068](https://github.com/primefaces/primereact/issues/1068)
- Sidebar dismissable is only updating whenever the visible prop updates [\#1065](https://github.com/primefaces/primereact/issues/1065)
- selectDate\(\) set date to undefined when minDate is set and selected date is \<= minDate [\#1056](https://github.com/primefaces/primereact/issues/1056)
- Datatable multisort broken [\#617](https://github.com/primefaces/primereact/issues/617)

## [3.3.2](https://github.com/primefaces/primereact/tree/3.3.2) (2019-10-22)

[Full Changelog](https://github.com/primefaces/primereact/compare/3.3.1...3.3.2)

**Fixed bugs:**

- Table state is not working with columnResizeMode="expand" on DataTable [\#1061](https://github.com/primefaces/primereact/issues/1061)
- Calendar component throws NPE after updating the value [\#1060](https://github.com/primefaces/primereact/issues/1060)

## [3.3.1](https://github.com/primefaces/primereact/tree/3.3.1) (2019-10-18)

[Full Changelog](https://github.com/primefaces/primereact/compare/3.3.0...3.3.1)

**Implemented New Features and Enhancements:**

- Improve component styles on Luna, Nova and Rhea Themes [\#1052](https://github.com/primefaces/primereact/issues/1052)
- Improve Carousel styles [\#1051](https://github.com/primefaces/primereact/issues/1051)

**Fixed bugs:**

-  Carousel is not working with 'primereact/carousel' shortcut [\#1049](https://github.com/primefaces/primereact/issues/1049)

## [3.3.0](https://github.com/primefaces/primereact/tree/3.3.0) (2019-10-16)

[Full Changelog](https://github.com/primefaces/primereact/compare/3.2.0...3.3.0)

**Implemented New Features and Enhancements:**

- Add closeOnEscape property to Sidebar [\#1046](https://github.com/primefaces/primereact/issues/1046)
- InputTextarea: Floating Label [\#1040](https://github.com/primefaces/primereact/issues/1040)
- Upgrade QuillJS 1.3.7 [\#1037](https://github.com/primefaces/primereact/issues/1037)
- Add filterInputAutoFocus property to Dropdown [\#1036](https://github.com/primefaces/primereact/issues/1036)
- New Component: Carousel [\#1030](https://github.com/primefaces/primereact/issues/1030)
- Add className support to SelectButtonItems [\#1019](https://github.com/primefaces/primereact/issues/1019)

**Fixed bugs:**

- AutoComplete mode multiple ignores maxlength property [\#1045](https://github.com/primefaces/primereact/issues/1045)
- The datatable is broken with scrollable and no columns settings [\#1044](https://github.com/primefaces/primereact/issues/1044)
- Calendar Overlay doesnt open with current date after value update [\#999](https://github.com/primefaces/primereact/issues/999)

## [3.2.0](https://github.com/primefaces/primereact/tree/3.2.0) (2019-09-12)

[Full Changelog](https://github.com/primefaces/primereact/compare/3.1.9...3.2.0)

**Implemented New Features and Enhancements:**

- Add type property to AutoComplete [\#1010](https://github.com/primefaces/primereact/issues/1010)
- Add customUpload property to FileUpload [\#1008](https://github.com/primefaces/primereact/issues/1008)
- Improve columns' editor option on editing mode [\#1007](https://github.com/primefaces/primereact/issues/1007)
- Add keyboard support to DataTable with Checkbox selection [\#1005](https://github.com/primefaces/primereact/issues/1005)
- Add row edit support to DataTable [\#809](https://github.com/primefaces/primereact/issues/809)

**Fixed bugs:**

- DataTable with global filter and header checkbox selection select all records [\#1012](https://github.com/primefaces/primereact/issues/1012)
- DataTable column headers not displaying in nested table [\#1009](https://github.com/primefaces/primereact/issues/1009)
- DataTable has null state under certain conditions [\#1003](https://github.com/primefaces/primereact/issues/1003)
- Value doesnt change on Input mask when unmask is enabled [\#998](https://github.com/primefaces/primereact/issues/998)

## [3.1.9](https://github.com/primefaces/primereact/tree/3.1.9) (2019-08-28)

[Full Changelog](https://github.com/primefaces/primereact/compare/3.1.8...3.1.9)

**Implemented New Features and Enhancements:**

- Datatable EditRow [\#935](https://github.com/primefaces/primereact/issues/935)
- Add className option to Tooltip [\#994](https://github.com/primefaces/primereact/issues/994)
- Add focusOnShow property to Dialog [\#988](https://github.com/primefaces/primereact/issues/988)
- Add displayValueTemplate property to ProgressBar [\#978](https://github.com/primefaces/primereact/issues/978)
- Add tabIndex prop to Spinner [\#976](https://github.com/primefaces/primereact/issues/976)
- Add tabIndex prop to RadioButton [\#975](https://github.com/primefaces/primereact/issues/975)

**Fixed bugs:**

- Wrong typings for the property of Spinner [\#1001](https://github.com/primefaces/primereact/issues/1001)
- Export hide\(\) for ContextMenu in type definition file [\#1000](https://github.com/primefaces/primereact/issues/1000)
- Style props doesnt update after re-rendering with Inputmask [\#996](https://github.com/primefaces/primereact/issues/996)
- Nested originalEvent in DataTable header RowCheckbox event  [\#986](https://github.com/primefaces/primereact/issues/986)
- Typings missing in DataTable: resetColumnOrder [\#980](https://github.com/primefaces/primereact/issues/980)
- ProgressBar does not show value for 0% [\#973](https://github.com/primefaces/primereact/issues/973)
- Tooltips appear with old contents after being undefined [\#972](https://github.com/primefaces/primereact/issues/972)

## [3.1.8](https://github.com/primefaces/primereact/tree/3.1.8) (2019-07-25)

[Full Changelog](https://github.com/primefaces/primereact/compare/3.1.7...3.1.8)

**Implemented New Features and Enhancements:**

- Resizable columns support with column groups [\#518](https://github.com/primefaces/primereact/issues/518)
- Update to PrimeIcons 2.0.0 [\#970](https://github.com/primefaces/primereact/issues/970)
- Datatable rowGroup with rowSpan mode: row separator line style on group break [\#967](https://github.com/primefaces/primereact/issues/967)
- Growl detail should be placed in \<div\> not \<p\> [\#965](https://github.com/primefaces/primereact/issues/965)
- Add autoFocus attribute to Autocomplete [\#963](https://github.com/primefaces/primereact/issues/963)
- Add onTargetSelect and onSourceSelect props to Picklist [\#962](https://github.com/primefaces/primereact/issues/962)
- Add tabIndex prop to ToggleButton [\#957](https://github.com/primefaces/primereact/issues/957)
- Add required prop to RadioButton [\#953](https://github.com/primefaces/primereact/issues/953)
- Add required prop to Checkbox [\#952](https://github.com/primefaces/primereact/issues/952)
- Add shift key selection support to DataTable with multiple mode [\#934](https://github.com/primefaces/primereact/issues/934)

**Fixed bugs:**

- Calendar ButtonBar Clear button does not use clearButtonStyleClass prop [\#968](https://github.com/primefaces/primereact/issues/968)
- Datatable rowGroup with rowSpan mode and pagination fails on page break [\#961](https://github.com/primefaces/primereact/issues/961)
- DataTable fails to render if columns are mapped and has a static column [\#959](https://github.com/primefaces/primereact/issues/959)
- Month View shows a redundant week on the calendar [\#956](https://github.com/primefaces/primereact/issues/956)
- Simple DataScroller does not display items. [\#955](https://github.com/primefaces/primereact/issues/955)
- The DataTable will sort a column when shrinking it on resize [\#944](https://github.com/primefaces/primereact/issues/944)

## [3.1.7](https://github.com/primefaces/primereact/tree/3.1.7) (2019-06-25)

[Full Changelog](https://github.com/primefaces/primereact/compare/3.1.6...3.1.7)

**Fixed bugs:**

- Charts always redraw when they are updated [\#946](https://github.com/primefaces/primereact/issues/946)

## [3.1.6](https://github.com/primefaces/primereact/tree/3.1.6) (2019-06-25)

[Full Changelog](https://github.com/primefaces/primereact/compare/3.1.5...3.1.6)

**Fixed bugs:**

- The ChartJs API is not imported correctly [\#945](https://github.com/primefaces/primereact/issues/945)
- Inplace is not working with 'primereact/inplace' shortcut [\#943](https://github.com/primefaces/primereact/issues/943)

## [3.1.5](https://github.com/primefaces/primereact/tree/3.1.5) (2019-06-24)

[Full Changelog](https://github.com/primefaces/primereact/compare/3.1.4...3.1.5)

**Implemented New Features and Enhancements:**

- Add theme prop to Editor [\#938](https://github.com/primefaces/primereact/issues/938)
- Add "replace" method in Messages component [\#930](https://github.com/primefaces/primereact/issues/930)
- Add decimalSeparator and thousandSeparator props to Spinner [\#925](https://github.com/primefaces/primereact/issues/925)
- Add formatInput prop to Spinner [\#924](https://github.com/primefaces/primereact/issues/924)
- Add required, pattern and placeholder props to Spinner.  [\#920](https://github.com/primefaces/primereact/issues/920)
- Add ariaCloseIconLabel prop to Dialog [\#916](https://github.com/primefaces/primereact/issues/916)

**Fixed bugs:**

- When components are placed placed inside a label element clicking on the component fires the click event twice [\#940](https://github.com/primefaces/primereact/issues/940)
- The hide method of Dropdown throws an exception on console [\#937](https://github.com/primefaces/primereact/issues/937)
- The "required" prop is not working on Dropdown [\#933](https://github.com/primefaces/primereact/issues/933)
- Tooltip in chips does not work properly [\#932](https://github.com/primefaces/primereact/issues/932)
- Empty array crashes Messages component [\#928](https://github.com/primefaces/primereact/issues/928)
- The 'showWeek' prop throws an error with TypedScript on Calendar [\#926](https://github.com/primefaces/primereact/issues/926)
- Close icon is still active on the disabled Chips  [\#918](https://github.com/primefaces/primereact/issues/918)
- onRemove event does not exists on Growl component [\#914](https://github.com/primefaces/primereact/issues/914)
- Can't resolve 'chart.js/src/chart.js' [\#913](https://github.com/primefaces/primereact/issues/913)
- Second Sidebar reset blockScroll [\#910](https://github.com/primefaces/primereact/issues/910)
- ProgressSpinner not visible in IE11 [\#908](https://github.com/primefaces/primereact/issues/908)
- Wrong type for showWeek in Calendar.d.ts [\#907](https://github.com/primefaces/primereact/issues/907)

## [3.1.4](https://github.com/primefaces/primereact/tree/3.1.4) (2019-05-30)

[Full Changelog](https://github.com/primefaces/primereact/compare/3.1.3...3.1.4)

**Implemented New Features and Enhancements:**

- Add iconsTemplate to Dialog [\#905](https://github.com/primefaces/primereact/issues/905)
- Modules property for Editor [\#904](https://github.com/primefaces/primereact/issues/904)
- The ability to reset columnOrder in DataTable [\#899](https://github.com/primefaces/primereact/issues/899)
- onFocus and onBlur for Chips [\#897](https://github.com/primefaces/primereact/issues/897)
- Show week numbers for Calendar [\#894](https://github.com/primefaces/primereact/issues/894)
- CellEditor should have onSubmit and onCancel method. [\#891](https://github.com/primefaces/primereact/issues/891)
- Add expandIcon and collapseIcon props to Panel component [\#888](https://github.com/primefaces/primereact/issues/888)
- Support for disabling dropdown item\(s\). [\#874](https://github.com/primefaces/primereact/issues/874)
- Editable Dropdown should support maxLength [\#844](https://github.com/primefaces/primereact/issues/844)

**Fixed bugs:**

- Not able to set focus on Dropdown component [\#903](https://github.com/primefaces/primereact/issues/903)
- Calendar time parsing broken for showSeconds == false [\#901](https://github.com/primefaces/primereact/issues/901)
- DataTable sortFunction Typescript definition wrong [\#898](https://github.com/primefaces/primereact/issues/898)
- Data\*: alwaysShowPaginator prop not used [\#896](https://github.com/primefaces/primereact/issues/896)
- DataTable expanded rows collapse when modifying one property of a record [\#884](https://github.com/primefaces/primereact/issues/884)
- The scroll bar is not moving correctly on the DataTable with resizeMode="expand" [\#881](https://github.com/primefaces/primereact/issues/881)
- Dropdown showClear not always displayed [\#875](https://github.com/primefaces/primereact/issues/875)
- Unlogical editor navigation with shift+tab in DataTable [\#843](https://github.com/primefaces/primereact/issues/843)
- Cannot read property 'show' of undefined at FileUpload.validate  [\#802](https://github.com/primefaces/primereact/issues/802)
- DataTable onValueChange callback one key press behind when using custom InputText filter  [\#777](https://github.com/primefaces/primereact/issues/777)

## [3.1.3](https://github.com/primefaces/primereact/tree/3.1.3) (2019-05-06)

[Full Changelog](https://github.com/primefaces/primereact/compare/3.1.2...3.1.3)

**Implemented New Features and Enhancements:**

- Multiple target support to OverlayPanel [\#873](https://github.com/primefaces/primereact/issues/873)
- Improve outside click on OverlayPanel [\#872](https://github.com/primefaces/primereact/issues/872)
- Calendar panel is not aligned correctly on window resize [\#870](https://github.com/primefaces/primereact/issues/870)
- Improve outside click on Calendar [\#869](https://github.com/primefaces/primereact/issues/869)
- The min/max date support is added to Calendar for monthNavigation and yearNavigation [\#859](https://github.com/primefaces/primereact/issues/859)
- Add ariaLabel and ariaLabelledBy properties to DropDown [\#855](https://github.com/primefaces/primereact/issues/855)
- Add contentStyle and contentClassName props to Tree [\#842](https://github.com/primefaces/primereact/issues/842)

**Fixed bugs:**

- OverlayPanel's icon is in the wrong position after window is resized [\#871](https://github.com/primefaces/primereact/issues/871)
- Flipped OverlayPanel rendered behind browser [\#868](https://github.com/primefaces/primereact/issues/868)
- Missing method typings for OverlayPanel [\#865](https://github.com/primefaces/primereact/issues/865)
- Calendar used in DataTable is unable to switch months [\#860](https://github.com/primefaces/primereact/issues/860)
- Calendar view="month" does not allow typing [\#856](https://github.com/primefaces/primereact/issues/856)
- OnHide callback is not called when visibility property is changed [\#854](https://github.com/primefaces/primereact/issues/854)
- Add stateStorage property to DataTable.d.ts [\#851](https://github.com/primefaces/primereact/issues/851)
- The tableStyle and tableClassName props have no effect on Scrollable DataTable [\#849](https://github.com/primefaces/primereact/issues/849)
- Calendar is rendering behind the browser window. [\#840](https://github.com/primefaces/primereact/issues/840)
- onRowSelect called instead of onRowUnselect [\#835](https://github.com/primefaces/primereact/issues/835)
- Chart doesn't reload when new data is added to it [\#834](https://github.com/primefaces/primereact/issues/834)
- Datatable scrollHeight can't be changed [\#662](https://github.com/primefaces/primereact/issues/662)

## [3.1.2](https://github.com/primefaces/primereact/tree/3.1.2) (2019-04-03)

[Full Changelog](https://github.com/primefaces/primereact/compare/3.1.1...3.1.2)

**Fixed bugs:**

- DataTable selection with uncontrolled sorting broken [\#830](https://github.com/primefaces/primereact/issues/830)

## [3.1.1](https://github.com/primefaces/primereact/tree/3.1.1) (2019-03-31)

[Full Changelog](https://github.com/primefaces/primereact/compare/3.1.0...3.1.1)

**Implemented New Features and Enhancements:**

- Improve disabled header style on Accordion [\#828](https://github.com/primefaces/primereact/issues/828)
- Update to FullCalendar 4.0.1 [\#827](https://github.com/primefaces/primereact/issues/827)
- Remove autoWidth from Dropdown [\#826](https://github.com/primefaces/primereact/issues/826)
- Improve DataTable VirtualScrolling [\#825](https://github.com/primefaces/primereact/issues/825)
- Update dialog animations [\#823](https://github.com/primefaces/primereact/issues/823)
- Close datatable cell editor programmatically [\#822](https://github.com/primefaces/primereact/issues/822)
- DataTable row selection slow with sortable columns [\#813](https://github.com/primefaces/primereact/issues/813)
- Add onBlur and onFocus events to multiselect and chips [\#782](https://github.com/primefaces/primereact/issues/782)

**Fixed bugs:**

- On Accordion, the disabled head can be focused on  [\#829](https://github.com/primefaces/primereact/issues/829)
- Datatable property 'stateKey' is missing in types file [\#817](https://github.com/primefaces/primereact/issues/817)
- Datatable row onClick typescript definition does not match the function or documentation [\#815](https://github.com/primefaces/primereact/issues/815)
- Overlays wrong position on initial/first render [\#814](https://github.com/primefaces/primereact/issues/814)
- Chart with latest chart.js does not build [\#812](https://github.com/primefaces/primereact/issues/812)
- FileUpload thows JS exception in Edge [\#808](https://github.com/primefaces/primereact/issues/808)
- SlideMenu empty after model change [\#807](https://github.com/primefaces/primereact/issues/807)
- Dropdown duplicated IDs [\#805](https://github.com/primefaces/primereact/issues/805)
- DataTable crashes with a "Cannot read property 'xxx' of undefined" for nested objects [\#791](https://github.com/primefaces/primereact/issues/791)
- Syntax error in optional typescript function interface [\#790](https://github.com/primefaces/primereact/issues/790)
- Using "maxlength" of Spinner causes errors [\#787](https://github.com/primefaces/primereact/issues/787)
- "propTypes" incorrectly named as "propsTypes" [\#784](https://github.com/primefaces/primereact/issues/784)
- Changes to prop does not render ProgressBar [\#783](https://github.com/primefaces/primereact/issues/783)
- Dropdown - TypeError: Cannot read property 'element' of null [\#781](https://github.com/primefaces/primereact/issues/781)
- propTypes error using new iconsTemplate [\#780](https://github.com/primefaces/primereact/issues/780)
- Datatable does not scroll horizontally when there is no data [\#635](https://github.com/primefaces/primereact/issues/635)

## [3.1.0](https://github.com/primefaces/primereact/tree/3.1.0) (2019-02-19)

[Full Changelog](https://github.com/primefaces/primereact/compare/3.0.0...3.1.0)

**Implemented New Features and Enhancements:**

- Filtering for Tree [\#769](https://github.com/primefaces/primereact/issues/769)
- onClose event for OverlayPanel  [\#763](https://github.com/primefaces/primereact/issues/763)
- Arrow for OverlayPanel [\#762](https://github.com/primefaces/primereact/issues/762)
- Improve style of p-link component [\#760](https://github.com/primefaces/primereact/issues/760)
- TableState for DataTable [\#736](https://github.com/primefaces/primereact/issues/736)
- Filtering for TreeTable [\#380](https://github.com/primefaces/primereact/issues/380)

**Fixed bugs:**

- Datatable toggle issue after reordering [\#774](https://github.com/primefaces/primereact/issues/774)
- Inputtextarea autoresize invalid height issue after render [\#773](https://github.com/primefaces/primereact/issues/773)
- TreeTableBodyCell.js: Uncaught TypeError: Cannot read property 'removeAttribute' of null [\#772](https://github.com/primefaces/primereact/issues/772)
- Dropdown with dataKey attribute throws console errors. [\#768](https://github.com/primefaces/primereact/issues/768)
- Multiple selection in a table without data is selected by default [\#766](https://github.com/primefaces/primereact/issues/766)
- InputGroup border issue for using with other components [\#761](https://github.com/primefaces/primereact/issues/761)
- code debugger in production mode "component input calendar" [\#751](https://github.com/primefaces/primereact/issues/751)

## [3.0.0](https://github.com/primefaces/primereact/tree/3.0.0) (2019-01-22)

[Full Changelog](https://github.com/primefaces/primereact/compare/3.0.0-rc.1...3.0.0)

**Implemented New Features and Enhancements:**

- Customizable editorValidatorEvent for IncellEditing [\#746](https://github.com/primefaces/primereact/issues/746)

**Fixed bugs:**

- Spinner arrow keys not working [\#743](https://github.com/primefaces/primereact/issues/743)
- Toolbar of Editor Component with nova-dark theme does not render properly. [\#740](https://github.com/primefaces/primereact/issues/740)
- Paginator - Uncaught TypeError: this.getOptionLabel\(...\).toLowerCase is not a function [\#739](https://github.com/primefaces/primereact/issues/739)

## [3.0.0-rc.1](https://github.com/primefaces/primereact/tree/3.0.0-rc.1) (2019-01-10)

[Full Changelog](https://github.com/primefaces/primereact/compare/3.0.0-beta.1...3.0.0-rc.1)

**Implemented New Features and Enhancements:**

- Rename defaultLabel to placeholder in MultiSelect [\#733](https://github.com/primefaces/primereact/issues/733)
- Enhance accessibility for Checkbox with ARIA roles [\#729](https://github.com/primefaces/primereact/issues/729)
- Ability to use dataKey as the key in Dropdown [\#727](https://github.com/primefaces/primereact/issues/727)
- Focused editable Dropdown looks different than non-editable [\#725](https://github.com/primefaces/primereact/issues/725)
- Header and Footer templates for Calendar component [\#706](https://github.com/primefaces/primereact/issues/706)
- MultiSelect - Support a fixed defaultLabel [\#674](https://github.com/primefaces/primereact/issues/674)

**Fixed bugs:**

- InputSwitch focus visuals are missing [\#735](https://github.com/primefaces/primereact/issues/735)
- DataTable edit throws error on route change [\#734](https://github.com/primefaces/primereact/issues/734)
- Incorrect column sortable prop type definition [\#730](https://github.com/primefaces/primereact/issues/730)
- ScrollPanel: Cannot read property 'classList' of null [\#726](https://github.com/primefaces/primereact/issues/726)
- Editor component cannot refresh it's value when the state change [\#724](https://github.com/primefaces/primereact/issues/724)
- Editor active item is not highlighted in toolbar [\#722](https://github.com/primefaces/primereact/issues/722)
- InputMask doesn't update the value according to state [\#686](https://github.com/primefaces/primereact/issues/686)
- DataTable: hide column after reordering columns throws exception [\#668](https://github.com/primefaces/primereact/issues/668)
- Form validity is true, even though no Dropdown selection has been made. [\#665](https://github.com/primefaces/primereact/issues/665)

## [3.0.0-beta.1](https://github.com/primefaces/primereact/tree/3.0.0-beta.1) (2018-12-24)

[Full Changelog](https://github.com/primefaces/primereact/compare/2.0.1...3.0.0-beta.1)

**Implemented New Features and Enhancements:**

- Reimplement Menubar [\#721](https://github.com/primefaces/primereact/issues/721)
- Reimplement TieredMenu [\#720](https://github.com/primefaces/primereact/issues/720)
- Keyboard Accessibility for Menu [\#719](https://github.com/primefaces/primereact/issues/719)
- Reimplement PanelMenu Animation with CSSTransition  [\#718](https://github.com/primefaces/primereact/issues/718)
- Remove certain props from Dialog [\#717](https://github.com/primefaces/primereact/issues/717)
- Reimplement Dialog Positioning [\#715](https://github.com/primefaces/primereact/issues/715)
- Reimplement Accordion Animation with CSSTransition [\#714](https://github.com/primefaces/primereact/issues/714)
- Reimplement Fieldset Animation with CSSTransition [\#712](https://github.com/primefaces/primereact/issues/712)
- Enhance Dialog Animation [\#711](https://github.com/primefaces/primereact/issues/711)
- Reimplement Panel Animation with CSSTransition [\#710](https://github.com/primefaces/primereact/issues/710)
- Unify focus visuals in themes [\#709](https://github.com/primefaces/primereact/issues/709)
- Keyboard Accessibility for PanelMenu [\#703](https://github.com/primefaces/primereact/issues/703)
- Keyboard Accessibility for MegaMenu [\#702](https://github.com/primefaces/primereact/issues/702)
- Keyboard Accessibility for Menubar [\#701](https://github.com/primefaces/primereact/issues/701)
- Keyboard Accessibility for TieredMenu [\#700](https://github.com/primefaces/primereact/issues/700)
- Improve Lightbox [\#699](https://github.com/primefaces/primereact/issues/699)
- Keyboard Accessibility for Inplace [\#698](https://github.com/primefaces/primereact/issues/698)
- Keyboard accessibility for PickList [\#697](https://github.com/primefaces/primereact/issues/697)
- Keyboard Accessibility for OrderList [\#696](https://github.com/primefaces/primereact/issues/696)
- Keyboard Accessibility for InputSwitch [\#695](https://github.com/primefaces/primereact/issues/695)
- DataTable/TreeTable sort headers should be keyboard accessible [\#693](https://github.com/primefaces/primereact/issues/693)
- Sidebar close icon should receive focus on open [\#692](https://github.com/primefaces/primereact/issues/692)
- Keyboard Accessibility for MultiSelect [\#691](https://github.com/primefaces/primereact/issues/691)
- Improve Listbox Accessibility [\#690](https://github.com/primefaces/primereact/issues/690)
- Improve ToggleButton Accessibility [\#689](https://github.com/primefaces/primereact/issues/689)
- Improve SelectButton Accessibility [\#687](https://github.com/primefaces/primereact/issues/687)
- Keyboard navigation support for Showcsse [\#684](https://github.com/primefaces/primereact/issues/684)
- Replace anchors without href with buttons [\#683](https://github.com/primefaces/primereact/issues/683)
- Update to Babel 7 [\#682](https://github.com/primefaces/primereact/issues/682)
- Improve Radio/Checkbox Accessibility [\#681](https://github.com/primefaces/primereact/issues/681)

**Fixed bugs:**

- AutoComplete in multiple mode does not receive focus [\#713](https://github.com/primefaces/primereact/issues/713)
- OrderList droppoints are not highlighted [\#708](https://github.com/primefaces/primereact/issues/708)
- TreeTable Pagination Error [\#685](https://github.com/primefaces/primereact/issues/685)
- Problem TextArea component  "Disabled" [\#679](https://github.com/primefaces/primereact/issues/679)
- Datatable horizontal scroll trigger onVirtualScroll [\#677](https://github.com/primefaces/primereact/issues/677)
- Spinner does not show the value 0 [\#675](https://github.com/primefaces/primereact/issues/675)
- KeyFilter uses static instance of the regex [\#672](https://github.com/primefaces/primereact/issues/672)
- slider.d.ts has wrong import syntax [\#671](https://github.com/primefaces/primereact/issues/671)

## [2.0.1](https://github.com/primefaces/primereact/tree/2.0.1) (2018-12-06)

[Full Changelog](https://github.com/primefaces/primereact/compare/2.0.0...2.0.1)

**Fixed bugs:**

- Align SplitButton Overlay with other overlays [\#667](https://github.com/primefaces/primereact/issues/667)
- Standalone paginator causes replace is undefined error [\#666](https://github.com/primefaces/primereact/issues/666)
- onRowCollapse doesn't work on expanded row [\#664](https://github.com/primefaces/primereact/issues/664)

## [2.0.0](https://github.com/primefaces/primereact/tree/2.0.0) (2018-12-05)

[Full Changelog](https://github.com/primefaces/primereact/compare/2.0.0-rc.1...2.0.0)

**Implemented New Features and Enhancements:**

- More paginator options to DataView [\#657](https://github.com/primefaces/primereact/issues/657)
- Filtered Dropdown does not close after pressing Enter [\#649](https://github.com/primefaces/primereact/issues/649)
- Ability to get filtered and/or sorted data in DataTable [\#643](https://github.com/primefaces/primereact/issues/643)
- Add modal prop to Sidebar [\#639](https://github.com/primefaces/primereact/issues/639)
- Add currentPageReportTemplate property to Paginator  [\#636](https://github.com/primefaces/primereact/issues/636)
- ProgressBar avoidable re-renders [\#597](https://github.com/primefaces/primereact/issues/597)
- Feature request: Allow us to choose a different optionLabel to display selected items in MultiSelect [\#451](https://github.com/primefaces/primereact/issues/451)

**Fixed bugs:**

- Today cell is not highlighed in Calendar when selected [\#660](https://github.com/primefaces/primereact/issues/660)
- Header checkbox fails with filtering [\#659](https://github.com/primefaces/primereact/issues/659)
- Data Table resize: disable rightmost border [\#656](https://github.com/primefaces/primereact/issues/656)
- DataTable Column sortField is ignored [\#653](https://github.com/primefaces/primereact/issues/653)
- TreeTable: propagateSelectionUp Defect [\#650](https://github.com/primefaces/primereact/issues/650)
- cannot read property 'dayNamesShort' of undefined [\#647](https://github.com/primefaces/primereact/issues/647)
- this.props.onSelectionChange is not a function in DataTable [\#641](https://github.com/primefaces/primereact/issues/641)
- viewDate.getMonth\(\) is not a function [\#612](https://github.com/primefaces/primereact/issues/612)

## [2.0.0-rc.1](https://github.com/primefaces/primereact/tree/2.0.0-rc.1) (2018-11-12)

[Full Changelog](https://github.com/primefaces/primereact/compare/2.0.0-beta.9...2.0.0-rc.1)

**Implemented New Features and Enhancements:**

- Dialog default prop values [\#638](https://github.com/primefaces/primereact/issues/638)
- Reimplement InputTextarea Resize [\#629](https://github.com/primefaces/primereact/issues/629)
- Remove Schedule [\#628](https://github.com/primefaces/primereact/issues/628)
- Replace event.data with event.value at onSelectionChange of DataTable [\#626](https://github.com/primefaces/primereact/issues/626)
- Reimplement ContextMenu Selection of DataTable [\#625](https://github.com/primefaces/primereact/issues/625)
- Enter key should select a Tree node [\#624](https://github.com/primefaces/primereact/issues/624)
- Remove defaultExpanded from TreeNode [\#623](https://github.com/primefaces/primereact/issues/623)
- renderActiveOnly prop for  Tabs [\#618](https://github.com/primefaces/primereact/issues/618)
- virtualRowHeight attribute in Table component [\#616](https://github.com/primefaces/primereact/issues/616)
- Remove defaultExpanded from TreeNode API [\#606](https://github.com/primefaces/primereact/issues/606)
- Keyboard Support for Table Row Selection [\#605](https://github.com/primefaces/primereact/issues/605)
- Select a tree node with enter key [\#604](https://github.com/primefaces/primereact/issues/604)
- Improve button focus visuals on Nova and Luna [\#602](https://github.com/primefaces/primereact/issues/602)

**Fixed bugs:**

- Dropdown throws error on hide [\#631](https://github.com/primefaces/primereact/issues/631)
- AccordionTab title with custom HTML gives error [\#615](https://github.com/primefaces/primereact/issues/615)
- Datatable autoLayout not working [\#599](https://github.com/primefaces/primereact/issues/599)
- Tooltips not updating [\#598](https://github.com/primefaces/primereact/issues/598)
- Dialog z-index [\#596](https://github.com/primefaces/primereact/issues/596)

## [2.0.0-beta.9](https://github.com/primefaces/primereact/tree/2.0.0-beta.9) (2018-10-08)

[Full Changelog](https://github.com/primefaces/primereact/compare/2.0.0-beta.8...2.0.0-beta.9)

**Implemented New Features and Enhancements:**

- Reimplement Slider [\#592](https://github.com/primefaces/primereact/issues/592)
- New Component: DeferredContent [\#591](https://github.com/primefaces/primereact/issues/591)

**Fixed bugs:**

- Add disabled property to Slider [\#593](https://github.com/primefaces/primereact/issues/593)
- Floating label for TextInput with number value fails [\#588](https://github.com/primefaces/primereact/issues/588)
- Sidebar component not working when visible by default [\#587](https://github.com/primefaces/primereact/issues/587)
- Presence of step prop will slow down reactivity of the Slider component [\#586](https://github.com/primefaces/primereact/issues/586)

## [2.0.0-beta.8](https://github.com/primefaces/primereact/tree/2.0.0-beta.8) (2018-09-24)

[Full Changelog](https://github.com/primefaces/primereact/compare/2.0.0-beta.7...2.0.0-beta.8)

**Implemented New Features and Enhancements:**

- PrimeReact input events are not compatible with React forms libraries [\#537](https://github.com/primefaces/primereact/issues/537)
- Aria roles and attributes for Tree [\#580](https://github.com/primefaces/primereact/issues/580)
- New Luna Free Dark Theme Family [\#579](https://github.com/primefaces/primereact/issues/579)
- Keyboard navigation for Tree [\#578](https://github.com/primefaces/primereact/issues/578)
- Enhanced keyboard search for dropdown [\#577](https://github.com/primefaces/primereact/issues/577)

**Fixed bugs:**

- DataTable sort issue with sortIcon [\#585](https://github.com/primefaces/primereact/issues/585)
- AutoComplete does not update input when value prop changes [\#576](https://github.com/primefaces/primereact/issues/576)
- Typos in Tree.d.ts [\#573](https://github.com/primefaces/primereact/issues/573)

## [2.0.0-beta.7](https://github.com/primefaces/primereact/tree/2.0.0-beta.7) (2018-09-18)

[Full Changelog](https://github.com/primefaces/primereact/compare/2.0.0-beta.6...2.0.0-beta.7)

**Fixed bugs:**

- Uncontrolled input text does not support floating labels [\#572](https://github.com/primefaces/primereact/issues/572)
- VirtualScroll is broken [\#560](https://github.com/primefaces/primereact/issues/560)

## [2.0.0-beta.6](https://github.com/primefaces/primereact/tree/2.0.0-beta.6) (2018-09-17)

[Full Changelog](https://github.com/primefaces/primereact/compare/2.0.0-beta.5...2.0.0-beta.6)

**Fixed bugs:**

- Dialog mask has no index at initial display [\#571](https://github.com/primefaces/primereact/issues/571)
- New Tree component: duplicate key error when 2 TreeNodes has same label [\#570](https://github.com/primefaces/primereact/issues/570)

## [2.0.0-beta.5](https://github.com/primefaces/primereact/tree/2.0.0-beta.5) (2018-09-11)

[Full Changelog](https://github.com/primefaces/primereact/compare/2.0.0-beta.4...2.0.0-beta.5)

**Fixed bugs:**

- Calendar warning with omission of onChange from InputText [\#569](https://github.com/primefaces/primereact/issues/569)

## [2.0.0-beta.4](https://github.com/primefaces/primereact/tree/2.0.0-beta.4) (2018-09-11)

[Full Changelog](https://github.com/primefaces/primereact/compare/2.0.0-beta.3...2.0.0-beta.4)

**Implemented New Features and Enhancements:**

- Keyboard support for Dialog Icons [\#568](https://github.com/primefaces/primereact/issues/568)
- Pass column props to columnResizeEnd [\#564](https://github.com/primefaces/primereact/issues/564)
- New Tree Component [\#559](https://github.com/primefaces/primereact/issues/559)
- Integrate PrimeFlex Grid System [\#556](https://github.com/primefaces/primereact/issues/556)
- className parameter unsupported by Spinner component [\#548](https://github.com/primefaces/primereact/issues/548)

**Fixed bugs:**

- Dialog resize fails [\#567](https://github.com/primefaces/primereact/issues/567)
- Dialog resizer css is broken [\#566](https://github.com/primefaces/primereact/issues/566)
- OverlayPanel has no shadow [\#558](https://github.com/primefaces/primereact/issues/558)
- Border radius missing in panel components [\#557](https://github.com/primefaces/primereact/issues/557)
- Spinner does not recognize outside changes for value prop [\#555](https://github.com/primefaces/primereact/issues/555)
- DataTable in IE: TypeError: Object expected [\#554](https://github.com/primefaces/primereact/issues/554)
- DataTable's onRowUnselect causes exception [\#552](https://github.com/primefaces/primereact/issues/552)
- Optimize functionality of filtered dropdowns [\#551](https://github.com/primefaces/primereact/issues/551)
- Dialog blockScroll is undocumented [\#550](https://github.com/primefaces/primereact/issues/550)
- Body text is selected during Dialog drag [\#549](https://github.com/primefaces/primereact/issues/549)
- ui-float-label does not work properly for AutoComplete [\#517](https://github.com/primefaces/primereact/issues/517)
- Float-label does not work properly for InputMask  [\#516](https://github.com/primefaces/primereact/issues/516)

## [2.0.0-beta.3](https://github.com/primefaces/primereact/tree/2.0.0-beta.3) (2018-08-26)

[Full Changelog](https://github.com/primefaces/primereact/compare/2.0.0-beta.2...2.0.0-beta.3)

## [2.0.0-beta.2](https://github.com/primefaces/primereact/tree/2.0.0-beta.2) (2018-08-25)

[Full Changelog](https://github.com/primefaces/primereact/compare/2.0.0-beta.1...2.0.0-beta.2)

**Implemented New Features and Enhancements:**

- Reimplement Tooltip [\#547](https://github.com/primefaces/primereact/issues/547)
- Keyboard support for toggle button [\#545](https://github.com/primefaces/primereact/issues/545)
- Remove font-awesome from Demos [\#544](https://github.com/primefaces/primereact/issues/544)
- Remove DataGrid and DataList [\#543](https://github.com/primefaces/primereact/issues/543)
- New styling engine [\#539](https://github.com/primefaces/primereact/issues/539)
- Property appendTo in menus [\#535](https://github.com/primefaces/primereact/issues/535)
- Deprecate Free Themes in favor of Nova Free Theme Family [\#527](https://github.com/primefaces/primereact/issues/527)

**Fixed bugs:**

- Tooltip does not remove event listeners [\#542](https://github.com/primefaces/primereact/issues/542)
- Accordion does not work with multiple controlled tabs [\#540](https://github.com/primefaces/primereact/issues/540)
- Menubar import is not working [\#531](https://github.com/primefaces/primereact/issues/531)
- ColumnGroup can't be imported [\#530](https://github.com/primefaces/primereact/issues/530)
- InputTextProps not type correctly [\#529](https://github.com/primefaces/primereact/issues/529)
- originalEvent in TabView has swapped typing/variable name in TabView.d.ts [\#528](https://github.com/primefaces/primereact/issues/528)
- Calendar manual input doesn't work with time [\#526](https://github.com/primefaces/primereact/issues/526)
- Breadcrumb component throws warning [\#522](https://github.com/primefaces/primereact/issues/522)

## [2.0.0-beta.1](https://github.com/primefaces/primereact/tree/2.0.0-beta.1) (2018-07-19)

[Full Changelog](https://github.com/primefaces/primereact/compare/2.0.0-alpha.1...2.0.0-beta.1)

**Implemented New Features and Enhancements:**

- Improve input overlay animations [\#514](https://github.com/primefaces/primereact/issues/514)
- Reimplement InputSwitch UI [\#513](https://github.com/primefaces/primereact/issues/513)
- Common Props for AutoComplete and Spinner [\#512](https://github.com/primefaces/primereact/issues/512)
- Reimplement Calendar [\#504](https://github.com/primefaces/primereact/issues/504)
- Update Schedule component to remove jQuery [\#476](https://github.com/primefaces/primereact/issues/476)

**Fixed bugs:**

- Slider shorthand import fails [\#511](https://github.com/primefaces/primereact/issues/511)
- Error importing Column component [\#509](https://github.com/primefaces/primereact/issues/509)
- Typescript definition for Column's editor property [\#505](https://github.com/primefaces/primereact/issues/505)
- Path to primereact/components/common/common.css not correct case [\#500](https://github.com/primefaces/primereact/issues/500)
- InputText class ui-state-filled fails [\#499](https://github.com/primefaces/primereact/issues/499)
- Calendar: popup translation not updating [\#478](https://github.com/primefaces/primereact/issues/478)
- InputSwitch doesn't update programmatically [\#461](https://github.com/primefaces/primereact/issues/461)
- preventDefault\(\) and stopPropagation\(\) appear to be missing from drag and drop of DataTable - Reorder and causes redirect to 'www.b.com' [\#460](https://github.com/primefaces/primereact/issues/460)

## [2.0.0-alpha.1](https://github.com/primefaces/primereact/tree/2.0.0-alpha.1) (2018-07-06)

[Full Changelog](https://github.com/primefaces/primereact/compare/1.6.2...2.0.0-alpha.1)

**Implemented New Features and Enhancements:**

- Review/Enhance all documentation [\#497](https://github.com/primefaces/primereact/issues/497)
- Review all type definition files [\#496](https://github.com/primefaces/primereact/issues/496)
- Reimplement Chips [\#494](https://github.com/primefaces/primereact/issues/494)
- Chips should not keep value in state [\#493](https://github.com/primefaces/primereact/issues/493)
- Controlled/Uncontrolled behavior support for DataTable Features [\#492](https://github.com/primefaces/primereact/issues/492)
- Reimplement DataTable Lazy Loading [\#491](https://github.com/primefaces/primereact/issues/491)
- onClick for Fieldset [\#487](https://github.com/primefaces/primereact/issues/487)
- Refactor Sidebar [\#486](https://github.com/primefaces/primereact/issues/486)
- Horizontal scroll support to ScrollPanel [\#485](https://github.com/primefaces/primereact/issues/485)
- Reimplement DataView [\#484](https://github.com/primefaces/primereact/issues/484)
- Add name prop to Chips [\#483](https://github.com/primefaces/primereact/issues/483)
- Controlled/Uncontrolled modes for Toggleable Fieldset [\#480](https://github.com/primefaces/primereact/issues/480)
- Controlled/Uncontrolled modes for Toggleable Panel [\#479](https://github.com/primefaces/primereact/issues/479)
- Controlled/Uncontrolled modes for TabView [\#475](https://github.com/primefaces/primereact/issues/475)
- Controlled/Uncontrolled modes for Accordion [\#474](https://github.com/primefaces/primereact/issues/474)
- New Component: Inplace [\#471](https://github.com/primefaces/primereact/issues/471)
- Shorter Imports [\#470](https://github.com/primefaces/primereact/issues/470)
- Rewrite SlideMenu [\#469](https://github.com/primefaces/primereact/issues/469)
- Rewrite PanelMenu [\#468](https://github.com/primefaces/primereact/issues/468)
- Rewrite MegaMenu [\#467](https://github.com/primefaces/primereact/issues/467)
- Rewrite ContextMenu [\#466](https://github.com/primefaces/primereact/issues/466)
- Rewrite MenuBar [\#465](https://github.com/primefaces/primereact/issues/465)
- Rewrite TieredMenu [\#464](https://github.com/primefaces/primereact/issues/464)
- Rewrite Breadcrumb [\#463](https://github.com/primefaces/primereact/issues/463)
- Rewrite Steps [\#462](https://github.com/primefaces/primereact/issues/462)
- Controlled/Uncontrolled modes for TabMenu [\#459](https://github.com/primefaces/primereact/issues/459)
- Rewrite Menu [\#458](https://github.com/primefaces/primereact/issues/458)
- Maximizable Dialog [\#453](https://github.com/primefaces/primereact/issues/453)
- Dialog should not derive visible state from props [\#452](https://github.com/primefaces/primereact/issues/452)
- Add a 'closable' or 'dismissable' property to Sidebar for 'click outside' control. [\#377](https://github.com/primefaces/primereact/issues/377)

**Fixed bugs:**

- InputMask can not read property 'bind' of undefined [\#490](https://github.com/primefaces/primereact/issues/490)
- Dropdown with autoFocus prop throws a JS error [\#489](https://github.com/primefaces/primereact/issues/489)
- InputMask fail when unmask is true [\#488](https://github.com/primefaces/primereact/issues/488)
- Toggleable Panel Icon Misaligned [\#481](https://github.com/primefaces/primereact/issues/481)
- Calendar dateFormat day name or month name gives error [\#455](https://github.com/primefaces/primereact/issues/455)
- wrong typings for itemTemplate property [\#454](https://github.com/primefaces/primereact/issues/454)
- optionLabel prop is missing in MultiSelect [\#450](https://github.com/primefaces/primereact/issues/450)
- Unable to change rows per page \(Paginator/DataTable\) [\#449](https://github.com/primefaces/primereact/issues/449)

## [1.6.2](https://github.com/primefaces/primereact/tree/1.6.2) (2018-06-19)

[Full Changelog](https://github.com/primefaces/primereact/compare/1.6.1...1.6.2)

**Implemented New Features and Enhancements:**

- Refactor Rating to remove usage of state [\#447](https://github.com/primefaces/primereact/issues/447)

**Fixed bugs:**

- Accordion onTabOpen-onTabClose does not trigger correctly [\#448](https://github.com/primefaces/primereact/issues/448)

## [1.6.1](https://github.com/primefaces/primereact/tree/1.6.1) (2018-06-18)

[Full Changelog](https://github.com/primefaces/primereact/compare/1.6.0...1.6.1)

**Implemented New Features and Enhancements:**

- Migrate to PrimeIcons [\#446](https://github.com/primefaces/primereact/issues/446)

**Fixed bugs:**

- DataTable props updating issue [\#443](https://github.com/primefaces/primereact/issues/443)
- OrganizationChart is not working with React 16.4+ [\#441](https://github.com/primefaces/primereact/issues/441)
- Sortable TreeTable is not working with React 16.4+ [\#440](https://github.com/primefaces/primereact/issues/440)
- Calendar Toggle AM/PM is broken [\#438](https://github.com/primefaces/primereact/issues/438)
- Keyboard navigation is not working on DataTable [\#425](https://github.com/primefaces/primereact/issues/425)

## [1.6.0](https://github.com/primefaces/primereact/tree/1.6.0) (2018-06-07)

[Full Changelog](https://github.com/primefaces/primereact/compare/1.6.0-rc.1...1.6.0)

**Implemented New Features and Enhancements:**

- Improve sort property on DataView [\#420](https://github.com/primefaces/primereact/issues/420)

**Fixed bugs:**

- slotChar issue on InputMask [\#439](https://github.com/primefaces/primereact/issues/439)
- Missing type definition for DropDownProps [\#436](https://github.com/primefaces/primereact/issues/436)
- Sidebar throws a JS exception on componentWillUnmount hook [\#435](https://github.com/primefaces/primereact/issues/435)
- Can't set csv export filename in DataTable.js using Internet Explorer, it returns undefined.csv [\#433](https://github.com/primefaces/primereact/issues/433)
- Missing optionsLabel property in interface ListBoxProps in ListBox.d.ts [\#431](https://github.com/primefaces/primereact/issues/431)
- Width & Height props of Charts are not working [\#430](https://github.com/primefaces/primereact/issues/430)
- After a sub node is selected on Tree, its parent node is closing [\#429](https://github.com/primefaces/primereact/issues/429)
- Rating not being enabled on change from disabled=true to disabled=false [\#428](https://github.com/primefaces/primereact/issues/428)
- The 'selection' property is not working on Tree [\#426](https://github.com/primefaces/primereact/issues/426)
- Datatable missing definitions [\#423](https://github.com/primefaces/primereact/issues/423)
- Improve sort property on DataTable [\#421](https://github.com/primefaces/primereact/issues/421)
- Remove old overlay events on GMap after map is updated [\#419](https://github.com/primefaces/primereact/issues/419)
- Growl types Failed to compile. [\#414](https://github.com/primefaces/primereact/issues/414)
- InputMask is not updated if value property is changed [\#413](https://github.com/primefaces/primereact/issues/413)
- ColorPicker is not updated if value property is changed [\#412](https://github.com/primefaces/primereact/issues/412)
- Editable Dropdown content does not reflect input value [\#408](https://github.com/primefaces/primereact/issues/408)

## [1.6.0-rc.1](https://github.com/primefaces/primereact/tree/1.6.0-rc.1) (2018-06-04)

[Full Changelog](https://github.com/primefaces/primereact/compare/1.5.3...1.6.0-rc.1)

## [1.5.3](https://github.com/primefaces/primereact/tree/1.5.3) (2018-05-22)

[Full Changelog](https://github.com/primefaces/primereact/compare/1.5.2...1.5.3)

**Fixed bugs:**

- onRowReorder missing from DataTable type definition [\#411](https://github.com/primefaces/primereact/issues/411)
- Duplicate identifier 'number': DataScroller.d.ts [\#410](https://github.com/primefaces/primereact/issues/410)

## [1.5.2](https://github.com/primefaces/primereact/tree/1.5.2) (2018-05-11)

[Full Changelog](https://github.com/primefaces/primereact/compare/1.5.1...1.5.2)

**Implemented New Features and Enhancements:**

- Add metaKeySelection property to PickList [\#404](https://github.com/primefaces/primereact/issues/404)
- Add sorting feature to TreeTable [\#400](https://github.com/primefaces/primereact/issues/400)
- New mode to keyfilter to validate whole value [\#391](https://github.com/primefaces/primereact/issues/391)

**Fixed bugs:**

- BodyCell className using headerClassName prop [\#407](https://github.com/primefaces/primereact/issues/407)
- Typings missing for colorPicker component [\#405](https://github.com/primefaces/primereact/issues/405)
- Radio Button default selection throws warnings [\#403](https://github.com/primefaces/primereact/issues/403)
- Container element has wrong width on Scrollable Datatable [\#402](https://github.com/primefaces/primereact/issues/402)
- Warning when using Checkbox [\#399](https://github.com/primefaces/primereact/issues/399)
- itemTemplate is declared as void [\#397](https://github.com/primefaces/primereact/issues/397)
- FileUpload does not accept multiple files dropped or selected [\#395](https://github.com/primefaces/primereact/issues/395)
- TabView activeIndex setting programmatically will not work the second time after manually choosing another tab [\#393](https://github.com/primefaces/primereact/issues/393)
- ReadOnly attribute is not passed to the checkbox input  [\#392](https://github.com/primefaces/primereact/issues/392)
- onColReorder return columns: undefined  [\#389](https://github.com/primefaces/primereact/issues/389)
- onClick event doesn't work on Messages component [\#387](https://github.com/primefaces/primereact/issues/387)
- Typings missing for messages component [\#386](https://github.com/primefaces/primereact/issues/386)
- InputMask runtime error [\#385](https://github.com/primefaces/primereact/issues/385)
- Slider component not always provide the originalEvent [\#384](https://github.com/primefaces/primereact/issues/384)
- Org chart does not update when value property changes [\#382](https://github.com/primefaces/primereact/issues/382)
- Bug in DataTable selection and Column [\#381](https://github.com/primefaces/primereact/issues/381)
- Calendar min date does not work after primereact@1.3.0 [\#379](https://github.com/primefaces/primereact/issues/379)

## [1.5.1](https://github.com/primefaces/primereact/tree/1.5.1) (2018-04-10)

[Full Changelog](https://github.com/primefaces/primereact/compare/1.5.0...1.5.1)

**Fixed bugs:**

- placeholder not working on Chips component [\#374](https://github.com/primefaces/primereact/issues/374)
- Tree doesn't update on external change [\#372](https://github.com/primefaces/primereact/issues/372)
- Slider component does not support real values/step [\#371](https://github.com/primefaces/primereact/issues/371)
- AutoResize for InputTextarea doesn't work without cols property [\#370](https://github.com/primefaces/primereact/issues/370)
- Bug: incorrect highlight of dates in range Calendar [\#367](https://github.com/primefaces/primereact/issues/367)
- TypeDefinitions for Message Control missing [\#366](https://github.com/primefaces/primereact/issues/366)
- Dropdown autowidth is not working when it used inside the TabView [\#362](https://github.com/primefaces/primereact/issues/362)
- Calendar as cell editor is not closed after selecting value [\#358](https://github.com/primefaces/primereact/issues/358)
- Cannot format selection for single-value AutoComplete field [\#353](https://github.com/primefaces/primereact/issues/353)
- Bug: Type definition for the Column component [\#350](https://github.com/primefaces/primereact/issues/350)
- DataTable export doesn't respect filters and sorting [\#349](https://github.com/primefaces/primereact/issues/349)
- sortFunction doesn't work for DataTable [\#348](https://github.com/primefaces/primereact/issues/348)

## [1.5.0](https://github.com/primefaces/primereact/tree/1.5.0) (2018-03-15)

[Full Changelog](https://github.com/primefaces/primereact/compare/1.4.1...1.5.0)

**Implemented New Features and Enhancements:**

- Clear icon to Dropdown [\#345](https://github.com/primefaces/primereact/issues/345)
- Add event onRowDoubleClick for DataTable [\#341](https://github.com/primefaces/primereact/issues/341)
- Add minX and minY to Dialog [\#339](https://github.com/primefaces/primereact/issues/339)
- DragDrop based reorder for Table [\#337](https://github.com/primefaces/primereact/issues/337)
- DataView Component [\#334](https://github.com/primefaces/primereact/issues/334)
- InputMask required [\#321](https://github.com/primefaces/primereact/issues/321)
- Improve dialog positioning with Dynamic content [\#320](https://github.com/primefaces/primereact/issues/320)
- Custom filter for Column of the DataTable [\#312](https://github.com/primefaces/primereact/issues/312)

**Fixed bugs:**

- Datatable column reorder may not always work correctly [\#338](https://github.com/primefaces/primereact/issues/338)
- Ultima theme 1.4.2: icon buttons are cutted [\#317](https://github.com/primefaces/primereact/issues/317)
- Autocomplete input label is undefined [\#347](https://github.com/primefaces/primereact/issues/347)
- DataTable TypeScript definition error [\#346](https://github.com/primefaces/primereact/issues/346)
- Default filters not rendered at DataTable [\#344](https://github.com/primefaces/primereact/issues/344)
- Dialog selects text during dragging or resizing [\#343](https://github.com/primefaces/primereact/issues/343)
- TabView activeIndex ignored [\#342](https://github.com/primefaces/primereact/issues/342)
- Dialog dragging may stuck [\#336](https://github.com/primefaces/primereact/issues/336)
- ToolTip crashes in IE 11 [\#332](https://github.com/primefaces/primereact/issues/332)
- Pagination dropdown resets for lazy loading dataTable [\#331](https://github.com/primefaces/primereact/issues/331)
- DataTable onLazyLoad not called for advanced filter options [\#330](https://github.com/primefaces/primereact/issues/330)
- Calendar : Enable/Highlight the date of adjacent month when selectOtherMonths is true [\#329](https://github.com/primefaces/primereact/issues/329)
- Resizable DataTable rowsCountSelector not visible [\#318](https://github.com/primefaces/primereact/issues/318)
- Dropdown list inside Dialog is only partially visible and creates scroll on dialog  [\#316](https://github.com/primefaces/primereact/issues/316)
- Cannot enter Values into Spinner [\#314](https://github.com/primefaces/primereact/issues/314)

## [1.4.1](https://github.com/primefaces/primereact/tree/1.4.1) (2018-02-14)

[Full Changelog](https://github.com/primefaces/primereact/compare/1.4.0...1.4.1)

**Implemented New Features and Enhancements:**

- Filtering for OrderList [\#311](https://github.com/primefaces/primereact/issues/311)
- autoLayout mode for DataTable [\#310](https://github.com/primefaces/primereact/issues/310)
- Add baseZIndex to Dialog [\#309](https://github.com/primefaces/primereact/issues/309)
- Refactor OrderList [\#308](https://github.com/primefaces/primereact/issues/308)
- Disabled/readonly prop for Checkbox and RadioButton [\#302](https://github.com/primefaces/primereact/issues/302)
- Checkbox and Radio should mark checked/onChange props as required [\#287](https://github.com/primefaces/primereact/issues/287)
- DataTable pageLinkSize [\#276](https://github.com/primefaces/primereact/issues/276)

**Fixed bugs:**

- Dialog is displayed below topbar in showcase [\#284](https://github.com/primefaces/primereact/issues/284)
- ResizableColumns fail inside Dialog [\#281](https://github.com/primefaces/primereact/issues/281)
- File Upload Dialog opens only once if set to Auto [\#306](https://github.com/primefaces/primereact/issues/306)
- rowsPerPage missing from DataTable d.ts file [\#304](https://github.com/primefaces/primereact/issues/304)
- Dropdown does not show selected value when editable is true [\#301](https://github.com/primefaces/primereact/issues/301)
- Calendar d.ts marks all props as required [\#296](https://github.com/primefaces/primereact/issues/296)
- Dialog: closeOnEscape doesn't work [\#295](https://github.com/primefaces/primereact/issues/295)
- Calendar yearNavigator fails [\#294](https://github.com/primefaces/primereact/issues/294)
- Spinner shows weird Values [\#293](https://github.com/primefaces/primereact/issues/293)
- OrderList error [\#291](https://github.com/primefaces/primereact/issues/291)
- Duplicate identifier 'any': PickList.d.ts  [\#290](https://github.com/primefaces/primereact/issues/290)
- In Lazy load mode selection highlight doesn't work properly [\#283](https://github.com/primefaces/primereact/issues/283)
- Type Definitions incomplete for FileUpload [\#277](https://github.com/primefaces/primereact/issues/277)
- Growl does not clear timeout on unmount [\#272](https://github.com/primefaces/primereact/issues/272)
- Calender select day in adjacent month [\#266](https://github.com/primefaces/primereact/issues/266)

## [1.4.0](https://github.com/primefaces/primereact/tree/1.4.0) (2018-01-04)

[Full Changelog](https://github.com/primefaces/primereact/compare/1.4.0-rc.2...1.4.0)

**Implemented New Features and Enhancements:**

- Improve DataTable.d.ts RowExpansion config [\#269](https://github.com/primefaces/primereact/issues/269)
- KeyFilter attribute [\#265](https://github.com/primefaces/primereact/issues/265)
- Card Component [\#264](https://github.com/primefaces/primereact/issues/264)
- Migrate to react-transition-group [\#259](https://github.com/primefaces/primereact/issues/259)
- Calendar should consider props.disabled in shouldComponentUpdate [\#258](https://github.com/primefaces/primereact/issues/258)

**Fixed bugs:**

- Spinner does not accept decimal or thousand separator as input [\#270](https://github.com/primefaces/primereact/issues/270)
- Calendar does not rerender when we change "disabled" prop [\#263](https://github.com/primefaces/primereact/issues/263)
- Calendar may reset date on update [\#262](https://github.com/primefaces/primereact/issues/262)
- ExportCSV ignores headers in DataTable [\#261](https://github.com/primefaces/primereact/issues/261)
- Spinner binds invalid event [\#260](https://github.com/primefaces/primereact/issues/260)
- Autocomplete dropdown no longer working [\#254](https://github.com/primefaces/primereact/issues/254)

## [1.4.0-rc.2](https://github.com/primefaces/primereact/tree/1.4.0-rc.2) (2018-01-04)

[Full Changelog](https://github.com/primefaces/primereact/compare/1.4.0-rc.1...1.4.0-rc.2)

## [1.4.0-rc.1](https://github.com/primefaces/primereact/tree/1.4.0-rc.1) (2018-01-04)

[Full Changelog](https://github.com/primefaces/primereact/compare/1.3.1...1.4.0-rc.1)

## [1.3.1](https://github.com/primefaces/primereact/tree/1.3.1) (2017-12-22)

[Full Changelog](https://github.com/primefaces/primereact/compare/1.3.0...1.3.1)

## [1.3.0](https://github.com/primefaces/primereact/tree/1.3.0) (2017-12-13)

[Full Changelog](https://github.com/primefaces/primereact/compare/1.3.0-rc.1...1.3.0)

**Implemented New Features and Enhancements:**

- New Component: ScrollPanel [\#251](https://github.com/primefaces/primereact/issues/251)
- Keyboard accessibility for Panel components [\#250](https://github.com/primefaces/primereact/issues/250)
- Refactor FileUpload [\#247](https://github.com/primefaces/primereact/issues/247)

**Fixed bugs:**

- Missing dependency in primereact npm artifcat: 'react-addons-css-transition-group' [\#242](https://github.com/primefaces/primereact/issues/242)
- AutoComplete dosn't accept spaces [\#249](https://github.com/primefaces/primereact/issues/249)
- Calendar title month and year has no margin [\#248](https://github.com/primefaces/primereact/issues/248)
- Toggleable fieldset resets if parent is updated [\#246](https://github.com/primefaces/primereact/issues/246)
- Accordion resets if parent is updated [\#245](https://github.com/primefaces/primereact/issues/245)
- Toggleable panel resets if parent is updated [\#244](https://github.com/primefaces/primereact/issues/244)
- Growl.d.ts allow GrowlMessage.detail to be Element [\#241](https://github.com/primefaces/primereact/issues/241)
- Password's 'inputProps' missing in d.ts file [\#240](https://github.com/primefaces/primereact/issues/240)
- feedback={false} not working for Password [\#239](https://github.com/primefaces/primereact/issues/239)
- AutoCompleteProps: Missing data object in itemTemplate [\#237](https://github.com/primefaces/primereact/issues/237)
- Missing param name in d.ts-files [\#236](https://github.com/primefaces/primereact/issues/236)
- Spinner d.ts missing onChange [\#235](https://github.com/primefaces/primereact/issues/235)

## [1.3.0-rc.1](https://github.com/primefaces/primereact/tree/1.3.0-rc.1) (2017-12-07)

[Full Changelog](https://github.com/primefaces/primereact/compare/1.2.0...1.3.0-rc.1)

**Implemented New Features and Enhancements:**

- Add style/classname props to Radio and Checkbox [\#233](https://github.com/primefaces/primereact/issues/233)
- New properties to TriStateCheckbox [\#232](https://github.com/primefaces/primereact/issues/232)
- Keyboard Accessibility for TriStateCheckbox [\#230](https://github.com/primefaces/primereact/issues/230)
- Keyboard accessibility for Spinner [\#229](https://github.com/primefaces/primereact/issues/229)
- Refactor Spinner [\#228](https://github.com/primefaces/primereact/issues/228)
- Animation for FieldSet [\#223](https://github.com/primefaces/primereact/issues/223)
- Refactor Calendar [\#222](https://github.com/primefaces/primereact/issues/222)
- Resize support for Scrollable Table [\#219](https://github.com/primefaces/primereact/issues/219)
- Password does not pass all input parameters [\#216](https://github.com/primefaces/primereact/issues/216)
- Reimplement ColorPicker [\#214](https://github.com/primefaces/primereact/issues/214)
- Rewrite Button CSS [\#213](https://github.com/primefaces/primereact/issues/213)
- appendTo for MultiSelect [\#212](https://github.com/primefaces/primereact/issues/212)
- Use Portal API in Dropdown appendTo [\#211](https://github.com/primefaces/primereact/issues/211)
- Use Portal API in AutoComplete appendTo [\#210](https://github.com/primefaces/primereact/issues/210)
- Use Portal API in Overlay appendTo [\#209](https://github.com/primefaces/primereact/issues/209)
- Add inputId to Checkbox and Radio [\#208](https://github.com/primefaces/primereact/issues/208)
- Keyboard accessibility for Checkbox and RadioButton [\#207](https://github.com/primefaces/primereact/issues/207)
- Floating Labels for Inputs [\#205](https://github.com/primefaces/primereact/issues/205)
- Add appendTo to Dialog [\#204](https://github.com/primefaces/primereact/issues/204)
- Reimplement Messages [\#203](https://github.com/primefaces/primereact/issues/203)
- Reimplement Growl [\#202](https://github.com/primefaces/primereact/issues/202)
- Screen Reader and Keyboard Accessibility support for Fieldset [\#201](https://github.com/primefaces/primereact/issues/201)
- Screen Reader support for Panel [\#200](https://github.com/primefaces/primereact/issues/200)
- Screen Reader support for Dialog [\#199](https://github.com/primefaces/primereact/issues/199)
- Screen Reader support for TabView [\#198](https://github.com/primefaces/primereact/issues/198)
- Screen Reader and Keyboard Accessibility for Accordion [\#197](https://github.com/primefaces/primereact/issues/197)
- Loading status for AutoComplete [\#193](https://github.com/primefaces/primereact/issues/193)
- Custom content for paginator [\#189](https://github.com/primefaces/primereact/issues/189)
- Animation for Accordion [\#182](https://github.com/primefaces/primereact/issues/182)
- Unsortable option for DataTable columns [\#179](https://github.com/primefaces/primereact/issues/179)

**Fixed bugs:**

- Radio and Checkbox does pass props to super [\#231](https://github.com/primefaces/primereact/issues/231)
- Dropdown Filter blocks keyboard navigation of items [\#227](https://github.com/primefaces/primereact/issues/227)
- Dropdown keyboard navigation does not scroll items [\#226](https://github.com/primefaces/primereact/issues/226)
- InputTextarea ignores focus, blur, input and keyup [\#225](https://github.com/primefaces/primereact/issues/225)
- Browser textarea resize breaks autoResize of textarea [\#224](https://github.com/primefaces/primereact/issues/224)
- DataTable dataKey ignored [\#221](https://github.com/primefaces/primereact/issues/221)
- AutoComplete does not reflect model binding [\#220](https://github.com/primefaces/primereact/issues/220)
- Clicking table header throws exception [\#218](https://github.com/primefaces/primereact/issues/218)
- Resizing last column gives error on DataTable [\#217](https://github.com/primefaces/primereact/issues/217)
- OverlayPanel: appendTo="body" throws exception [\#206](https://github.com/primefaces/primereact/issues/206)
- Growl: messages appears again on any change state [\#196](https://github.com/primefaces/primereact/issues/196)
- InputText: ui-state-filled class is not added, if value chaged in parent component [\#195](https://github.com/primefaces/primereact/issues/195)
- AutoComplete Dropdown select not hiding [\#191](https://github.com/primefaces/primereact/issues/191)
- Menu components\(menu,menubar...\) reload problem [\#190](https://github.com/primefaces/primereact/issues/190)
- Datatable - not propagate prop filterMatchMode when lazyload is on [\#187](https://github.com/primefaces/primereact/issues/187)
- datatable- Not Adjusted columns with expander  [\#186](https://github.com/primefaces/primereact/issues/186)
- DataTable: page is not reseted after global filtering [\#184](https://github.com/primefaces/primereact/issues/184)
- onNodeExpand and onNodeCollapse events are not working on Tree [\#183](https://github.com/primefaces/primereact/issues/183)
- Panel Header and Dropdown problem [\#175](https://github.com/primefaces/primereact/issues/175)

## [1.2.0](https://github.com/primefaces/primereact/tree/1.2.0) (2017-11-01)

[Full Changelog](https://github.com/primefaces/primereact/compare/1.1.0...1.2.0)

**Implemented New Features and Enhancements:**

- Improve typings of some components [\#172](https://github.com/primefaces/primereact/issues/172)
- Add rowsPerPageOptions to DataTable [\#171](https://github.com/primefaces/primereact/issues/171)
- Animation for Panel toggle [\#170](https://github.com/primefaces/primereact/issues/170)
- Disabled tabs for Accordion [\#169](https://github.com/primefaces/primereact/issues/169)
- New style properties for Accordion Tab [\#168](https://github.com/primefaces/primereact/issues/168)
- Disabled tabs in TabView [\#167](https://github.com/primefaces/primereact/issues/167)
- Add style properties to TabView and TabPanel [\#166](https://github.com/primefaces/primereact/issues/166)
- Disabled prop for TabPanel [\#164](https://github.com/primefaces/primereact/issues/164)
- Use Dropdown component for Paginator rowsPerPage select [\#163](https://github.com/primefaces/primereact/issues/163)
- Support any type of object as a select option [\#162](https://github.com/primefaces/primereact/issues/162)
- Undeterminate ProgressBar [\#160](https://github.com/primefaces/primereact/issues/160)
- New Message component [\#159](https://github.com/primefaces/primereact/issues/159)
- New ProgressSpinner Component [\#143](https://github.com/primefaces/primereact/issues/143)

**Fixed bugs:**

- DataTable: `onLazyLoad` does not support `sortMode="multiple"` [\#157](https://github.com/primefaces/primereact/issues/157)
- Password not trigger onChange event [\#177](https://github.com/primefaces/primereact/issues/177)
- Virtual Scrolling Flickers [\#173](https://github.com/primefaces/primereact/issues/173)
- Type definition missing from TabPanel [\#165](https://github.com/primefaces/primereact/issues/165)
- DataTable: Changing a filter does not trigger `onLazyLoad` for async tables [\#158](https://github.com/primefaces/primereact/issues/158)
- Growl throws error [\#149](https://github.com/primefaces/primereact/issues/149)
- MultiSelect: onClick: event.stopPropagation is not a function [\#147](https://github.com/primefaces/primereact/issues/147)
- utc parameter is not working when keying in the date [\#146](https://github.com/primefaces/primereact/issues/146)
- Click on input filter causes sort [\#133](https://github.com/primefaces/primereact/issues/133)

## [1.1.0](https://github.com/primefaces/primereact/tree/1.1.0) (2017-10-18)

[Full Changelog](https://github.com/primefaces/primereact/compare/1.0.1...1.1.0)

**Implemented New Features and Enhancements:**

- Sidebar component [\#122](https://github.com/primefaces/primereact/issues/122)
- Expose show\(\),hide\(\) and toggle\(\) in props of ContextMenu [\#113](https://github.com/primefaces/primereact/issues/113)
- Reimplement AutoComplete [\#141](https://github.com/primefaces/primereact/issues/141)
- Specific styles for header, body and footer [\#140](https://github.com/primefaces/primereact/issues/140)
- Sticky mode for Growl [\#139](https://github.com/primefaces/primereact/issues/139)
- Add onClick to Growl [\#138](https://github.com/primefaces/primereact/issues/138)
- rowClassName for DataTable [\#137](https://github.com/primefaces/primereact/issues/137)
- Typescript Support [\#131](https://github.com/primefaces/primereact/issues/131)
- New Component: GMap [\#130](https://github.com/primefaces/primereact/issues/130)
- Keyboard support for SelectButton [\#129](https://github.com/primefaces/primereact/issues/129)
- Reimplement SelectButton [\#128](https://github.com/primefaces/primereact/issues/128)
- license file [\#117](https://github.com/primefaces/primereact/issues/117)
- Frozen Columns support for Column Groups [\#107](https://github.com/primefaces/primereact/issues/107)
- Loading status for DataTable [\#94](https://github.com/primefaces/primereact/issues/94)
- Editable Cells for DataTable [\#80](https://github.com/primefaces/primereact/issues/80)
- Virtual Scrolling For DataTable [\#79](https://github.com/primefaces/primereact/issues/79)
- Percentage support for DataTable ScrollWidth and ScrollHeight [\#77](https://github.com/primefaces/primereact/issues/77)

**Fixed bugs:**

- Dropdown Menu in DataTable with resizableColumns [\#123](https://github.com/primefaces/primereact/issues/123)
- Sorting does not work when you are using Column Group feature [\#115](https://github.com/primefaces/primereact/issues/115)
- TimeOnly calendar fails [\#144](https://github.com/primefaces/primereact/issues/144)
- DataTable: OnLazyLoad repeatedly calling function / infinite loop [\#132](https://github.com/primefaces/primereact/issues/132)
- Dropdown menu sits behind grid [\#126](https://github.com/primefaces/primereact/issues/126)
- SelectButton cannot have initial State [\#121](https://github.com/primefaces/primereact/issues/121)
- Calendar minDate and maxDate property does not reload dynamically [\#119](https://github.com/primefaces/primereact/issues/119)
- Growl doesn't call onClear method [\#112](https://github.com/primefaces/primereact/issues/112)
- AutoComplete completeMethod triggered twice / delay does not work as expected [\#111](https://github.com/primefaces/primereact/issues/111)
- Calendar is not updated according when props.value is changed [\#110](https://github.com/primefaces/primereact/issues/110)

## [1.0.1](https://github.com/primefaces/primereact/tree/1.0.1) (2017-09-21)

[Full Changelog](https://github.com/primefaces/primereact/compare/1.0.0...1.0.1)

**Implemented New Features and Enhancements:**

- appendTo for OverlayPanel [\#96](https://github.com/primefaces/primereact/issues/96)
- Update demo to Router v4 [\#93](https://github.com/primefaces/primereact/issues/93)
- Refactor InputText filled state implementation [\#91](https://github.com/primefaces/primereact/issues/91)
- Missing event for components [\#90](https://github.com/primefaces/primereact/issues/90)
- Customizable Paginator using Templating [\#88](https://github.com/primefaces/primereact/issues/88)
- Column Reordering for DataTable [\#81](https://github.com/primefaces/primereact/issues/81)

**Fixed bugs:**

- Wrong documentation for BreadCrumb component [\#100](https://github.com/primefaces/primereact/issues/100)
- Relative Position calculation is wrong [\#109](https://github.com/primefaces/primereact/issues/109)
- Dropdown options does not update when props is changed [\#108](https://github.com/primefaces/primereact/issues/108)
- Dynamic and Static Columns cause error [\#106](https://github.com/primefaces/primereact/issues/106)
- Broken css in Version 1.0 [\#105](https://github.com/primefaces/primereact/issues/105)
- Dropdown selected option not updated after value property changes [\#103](https://github.com/primefaces/primereact/issues/103)
- Chart is not updated when data changes [\#102](https://github.com/primefaces/primereact/issues/102)
- The value of AutoComplete is not reset after changing state [\#101](https://github.com/primefaces/primereact/issues/101)
- FileUpload does not allow multiple files [\#99](https://github.com/primefaces/primereact/issues/99)
- Dialog contentStyle doesn't work [\#92](https://github.com/primefaces/primereact/issues/92)
- InputText disabled behavior missing readonly functionality [\#89](https://github.com/primefaces/primereact/issues/89)

## [1.0.0](https://github.com/primefaces/primereact/tree/1.0.0) (2017-09-10)

[Full Changelog](https://github.com/primefaces/primereact/compare/1.0.0-rc.3...1.0.0)

**Implemented New Features and Enhancements:**

- Reimplement Listbox [\#87](https://github.com/primefaces/primereact/issues/87)
- Reimplement PickList [\#86](https://github.com/primefaces/primereact/issues/86)
- Reimplement Rating [\#84](https://github.com/primefaces/primereact/issues/84)
- Reimplement Calendar [\#83](https://github.com/primefaces/primereact/issues/83)
- Disabled Dates for Calendar [\#82](https://github.com/primefaces/primereact/issues/82)

## [1.0.0-rc.3](https://github.com/primefaces/primereact/tree/1.0.0-rc.3) (2017-09-09)

[Full Changelog](https://github.com/primefaces/primereact/compare/1.0.0-rc.2...1.0.0-rc.3)

## [1.0.0-rc.2](https://github.com/primefaces/primereact/tree/1.0.0-rc.2) (2017-09-08)

[Full Changelog](https://github.com/primefaces/primereact/compare/1.0.0-rc.1...1.0.0-rc.2)

## [1.0.0-rc.1](https://github.com/primefaces/primereact/tree/1.0.0-rc.1) (2017-08-31)

[Full Changelog](https://github.com/primefaces/primereact/compare/1.0.0-beta.6...1.0.0-rc.1)

**Implemented New Features and Enhancements:**

- Re implemented Dropdown component [\#76](https://github.com/primefaces/primereact/issues/76)
- Re-implemented Dialog Component [\#75](https://github.com/primefaces/primereact/issues/75)

**Fixed bugs:**

- PickList callbacks reference error [\#74](https://github.com/primefaces/primereact/issues/74)
- The state of user is not updated after closing dialog [\#72](https://github.com/primefaces/primereact/issues/72)
- The onClick event of Choose button is fired twice on FileUpload [\#71](https://github.com/primefaces/primereact/issues/71)

## [1.0.0-beta.6](https://github.com/primefaces/primereact/tree/1.0.0-beta.6) (2017-08-21)

[Full Changelog](https://github.com/primefaces/primereact/compare/1.0.0-beta.5...1.0.0-beta.6)

## [1.0.0-beta.5](https://github.com/primefaces/primereact/tree/1.0.0-beta.5) (2017-08-21)

[Full Changelog](https://github.com/primefaces/primereact/compare/1.0.0-beta.4...1.0.0-beta.5)

**Implemented New Features and Enhancements:**

- Add id attribute to all components [\#70](https://github.com/primefaces/primereact/issues/70)
- Inconsistent API to add CSS class with certain of your component [\#68](https://github.com/primefaces/primereact/issues/68)

**Fixed bugs:**

- InputText and InputTextarea components aren't re-rendered when props are updated [\#69](https://github.com/primefaces/primereact/issues/69)

## [1.0.0-beta.4](https://github.com/primefaces/primereact/tree/1.0.0-beta.4) (2017-08-16)

[Full Changelog](https://github.com/primefaces/primereact/compare/1.0.0-beta.3...1.0.0-beta.4)

**Implemented New Features and Enhancements:**

- Text Editor [\#66](https://github.com/primefaces/primereact/issues/66)

## [1.0.0-beta.3](https://github.com/primefaces/primereact/tree/1.0.0-beta.3) (2017-08-10)

[Full Changelog](https://github.com/primefaces/primereact/compare/1.0.0-beta.2...1.0.0-beta.3)

## [1.0.0-beta.2](https://github.com/primefaces/primereact/tree/1.0.0-beta.2) (2017-08-10)

[Full Changelog](https://github.com/primefaces/primereact/compare/1.0.0-beta.1...1.0.0-beta.2)

## [1.0.0-beta.1](https://github.com/primefaces/primereact/tree/1.0.0-beta.1) (2017-08-09)

[Full Changelog](https://github.com/primefaces/primereact/compare/1.0.0-alpha.2...1.0.0-beta.1)

**Implemented New Features and Enhancements:**

- DataTable Crud [\#63](https://github.com/primefaces/primereact/issues/63)
- MegaMenu component [\#62](https://github.com/primefaces/primereact/issues/62)
- Steps component [\#61](https://github.com/primefaces/primereact/issues/61)
- PanelMenu component [\#59](https://github.com/primefaces/primereact/issues/59)
- ContextMenu component [\#58](https://github.com/primefaces/primereact/issues/58)
- Menubar component [\#57](https://github.com/primefaces/primereact/issues/57)
- TieredMenu component [\#56](https://github.com/primefaces/primereact/issues/56)
- Breadcrumb component [\#54](https://github.com/primefaces/primereact/issues/54)
- Add tabmenu component [\#53](https://github.com/primefaces/primereact/issues/53)
- Add menu component [\#51](https://github.com/primefaces/primereact/issues/51)
- Add lightbox component [\#46](https://github.com/primefaces/primereact/issues/46)
- Add toolbar component [\#44](https://github.com/primefaces/primereact/issues/44)
- Add password component [\#43](https://github.com/primefaces/primereact/issues/43)
- Add keyboard support to dropdown [\#39](https://github.com/primefaces/primereact/issues/39)
- Implemented DataScroller component  [\#37](https://github.com/primefaces/primereact/issues/37)
- Implemented Rating component  [\#36](https://github.com/primefaces/primereact/issues/36)
- Implemented ColorPicker component [\#35](https://github.com/primefaces/primereact/issues/35)

## [1.0.0-alpha.2](https://github.com/primefaces/primereact/tree/1.0.0-alpha.2) (2017-05-25)

[Full Changelog](https://github.com/primefaces/primereact/compare/1.0.0-alpha.1...1.0.0-alpha.2)

**Implemented New Features and Enhancements:**

- TreeTable Component [\#34](https://github.com/primefaces/primereact/issues/34)
- Mobile Touch support to Slider Component [\#33](https://github.com/primefaces/primereact/issues/33)
- Implemented Captcha Component [\#32](https://github.com/primefaces/primereact/issues/32)
- Tree Component [\#31](https://github.com/primefaces/primereact/issues/31)

**Fixed bugs:**

- Accordion activeIndex doesn't work [\#30](https://github.com/primefaces/primereact/issues/30)
- Dropdown onChange invoked on same item selection [\#28](https://github.com/primefaces/primereact/issues/28)
- activeIndex property on TabView doesn't work [\#26](https://github.com/primefaces/primereact/issues/26)
- Dropdown is missing input focus [\#21](https://github.com/primefaces/primereact/issues/21)
- Spinner controls are not user friendly [\#20](https://github.com/primefaces/primereact/issues/20)
- MultiSelect Input focus is missing [\#19](https://github.com/primefaces/primereact/issues/19)
- Accordion Tab Caret icons are not toggleable [\#18](https://github.com/primefaces/primereact/issues/18)
- Radio button label toggle state is missing [\#14](https://github.com/primefaces/primereact/issues/14)
- Chips need input focus [\#13](https://github.com/primefaces/primereact/issues/13)
- Checkbox label toggle state is not working [\#12](https://github.com/primefaces/primereact/issues/12)
- Autocomplete Multiple feature missing input focus [\#10](https://github.com/primefaces/primereact/issues/10)

## [1.0.0-alpha.1](https://github.com/primefaces/primereact/tree/1.0.0-alpha.1) (2017-03-28)

[Full Changelog](https://github.com/primefaces/primereact/compare/2eb760f17382a3b3a47d70f6f6076e21f5c90cfb...1.0.0-alpha.1)

