    import React, {Component} from 'react';
    import {Link} from 'react-router';
    import classNames from 'classnames';
    import './App.css';
    import 'font-awesome/css/font-awesome.css';
    import 'prismjs/themes/prism-coy.css';

    class App extends Component {
            
        constructor() {
            super();
            this.state = {activeMenu: -1};
        }

        openMenu(event,val) {
            this.setState({activeMenu: val});
            event.preventDefault();
        }

        render() {
            return (
                <div className="layout-wrapper">
                    <div id="layout-sidebar">
                        <span className="layout-logo">
                            <a href="#" className="sidebar-logo">
                                <img alt="logo" src="showcase/resources/images/logo.png" />
                            </a>
                            <a href="#" id="menu-button-mobile">
                                <img alt="logo" src="showcase/resources/images/menuicon.svg"/>
                            </a>
                        </span>

                        <a href="#" onClick={(event) => this.openMenu(event,0)} className={classNames({'active-menuitem': this.state.activeMenu === 0})}>
                            <img alt="input" src="showcase/resources/images/mono/input.svg"></img>
                            <span>Input</span>
                        </a>
                        <div className={classNames({'submenu-hidden': this.state.activeMenu !== 0, 'submenu-visible': this.state.activeMenu === 0})}>
                            <Link to="/checkbox">&#9679; Checkbox</Link>
                            <Link to="/chips">&#9679; Chips</Link>
                            <Link to="/dropdown">&#9679; Dropdown</Link>
                            <Link to="/inputtext">&#9679; InputText</Link>
                            <Link to="/inputtextarea">&#9679; InputTextarea</Link>
                            <Link to="/listbox">&#9679; Listbox</Link>
                            <Link to="/multiselect">&#9679; MultiSelect</Link>
                            <Link to="/radiobutton">&#9679; RadioButton</Link>
                            <Link to="/togglebutton">&#9679; ToggleButton</Link>
                            <Link to="/selectbutton">&#9679; SelectButton</Link>
                            <Link to="/inputswitch">&#9679; InputSwitch</Link>
                            <Link to="/slider">&#9679; Slider</Link>
                            <Link to="/spinner">&#9679; Spinner</Link>
                        </div>

                        <a href="#" onClick={(event) => this.openMenu(event,1)}  className={classNames({'active-menuitem': this.state.activeMenu === 1})}>
                            <img alt="button" src="showcase/resources/images/mono/button.svg"></img>
                            <span>Button</span>
                        </a>
                        <div className={classNames({'submenu-hidden': this.state.activeMenu !== 1, 'submenu-visible': this.state.activeMenu === 1})}>
                            <Link to="/button">&#9679; Button</Link>
                        </div>

                        <a href="#" onClick={(event) => this.openMenu(event,2)} className={classNames({'active-menuitem': this.state.activeMenu === 2})}>
                            <img alt="button" src="showcase/resources/images/mono/panel.svg"></img>
                            <span>Panel</span>
                        </a>
                        <div className={classNames({'submenu-hidden': this.state.activeMenu !== 2, 'submenu-visible': this.state.activeMenu === 2})}>
                            <Link to="/accordion">&#9679; Accordion</Link>
                            <Link to="/fieldset">&#9679; Fieldset</Link>
                            <Link to="/grid">&#9679; Grid</Link>
                            <Link to="/panel">&#9679; Panel</Link>
                            <Link to="/tabview">&#9679; TabView</Link>
                        </div>

                        <a href="#" onClick={(event) => this.openMenu(event,3)} className={classNames({'active-menuitem': this.state.activeMenu === 3})}>
                            <img alt="button" src="showcase/resources/images/mono/overlay.svg"></img>
                            <span>Overlay</span>
                        </a>
                        <div className={classNames({'submenu-hidden': this.state.activeMenu !== 3, 'submenu-visible': this.state.activeMenu === 3})}>
                            <Link to="/dialog">&#9679; Dialog</Link>
                        </div>

                        <a href="#" onClick={(event) => this.openMenu(event,4)} className={classNames({'active-menuitem': this.state.activeMenu === 4})}>
                            <img alt="button" src="showcase/resources/images/mono/file.svg"></img>
                            <span>File</span>
                        </a>
                        <div className={classNames({'submenu-hidden': this.state.activeMenu !== 4, 'submenu-visible': this.state.activeMenu === 4})}>
                            <Link to="/fileupload">&#9679; Upload</Link>
                        </div>

                        <a href="#" onClick={(event) => this.openMenu(event,5)} className={classNames({'active-menuitem': this.state.activeMenu === 5})}>
                            <img alt="button" src="showcase/resources/images/mono/charts.svg"></img>
                            <span>Chart</span>
                        </a>
                        <div className={classNames({'submenu-hidden': this.state.activeMenu !== 5, 'submenu-visible': this.state.activeMenu === 5})}>
                            <Link to="/piechart">&#9679; Pie</Link>
                            <Link to="/doughnutchart">&#9679; Doughnut</Link>
                            <Link to="/barchart">&#9679; Bar</Link>
                            <Link to="/linechart">&#9679; Line</Link>
                            <Link to="/polarareachart">&#9679; PolarArea</Link>
                            <Link to="/radarchart">&#9679; Radar</Link>
                        </div>

                        <a href="#" onClick={(event) => this.openMenu(event,6)} className={classNames({'active-menuitem': this.state.activeMenu === 6})}>
                            <img alt="button" src="showcase/resources/images/mono/message.svg"></img>
                            <span>Messages</span>
                        </a>
                        <div className={classNames({'submenu-hidden': this.state.activeMenu !== 6, 'submenu-visible': this.state.activeMenu === 6})}>
                            <Link to="/messages">&#9679; Messages</Link>
                            <Link to="/growl">&#9679; Growl</Link>
                        </div>

                        <a href="#" onClick={(event) => this.openMenu(event,7)} className={classNames({'active-menuitem': this.state.activeMenu === 7})}>
                            <img alt="button" src="showcase/resources/images/mono/misc.svg"></img>
                            <span>Misc</span>
                        </a>
                        <div className={classNames({'submenu-hidden': this.state.activeMenu !== 6, 'submenu-visible': this.state.activeMenu === 7})}>
                            <Link to="/progressbar">&#9679; ProgressBar</Link>
                            <Link to="/codehighlighter">&#9679; CodeHighlighter</Link>
                        </div>
                    </div>
                    
                    <div id="layout-content">
                        <div id="topbar">
                            <a href="#" id="menu-button">
                                <img alt="logo" src="showcase/resources/images/menuicon.svg"/>
                            </a>

                            <a href="http://forum.primefaces.org/viewforum.php?f=35" className="topbar-link">
                                <img alt="mockosx" src="showcase/resources/images/forum.png" />
                            </a>

                            <span className="topbar-link" id="themeSwitcher">
                                <img alt="themeswitcher" src="showcase/resources/images/themes.png" />
                                <div id="GlobalThemeSwitcher">
                                    <span>Premium Templates</span>
                                    <a href="http://www.primefaces.org/layouts/ultima-ng"><img src="showcase/resources/images/themeswitcher-ultima.png" alt="Ultima Template" /><span className="ui-text">Ultima</span></a>
                                    <a href="http://www.primefaces.org/layouts/omega-ng"><img src="showcase/resources/images/themeswitcher-omega.png" alt="Omega Template" /><span className="ui-text">Omega</span></a>
                                    <span>Free Themes</span>
                                    <a href="#" data-theme="omega"><span className="ui-theme ui-theme-omega"></span><span className="ui-text">Omega</span></a>
                                    <a href="#" data-theme="bootstrap"><span className="ui-theme ui-theme-bootstrap"></span><span className="ui-text">Bootstrap</span></a>
                                    <a href="#" data-theme="aristo"><span className="ui-theme ui-theme-aristo"></span><span className="ui-text">Aristo</span></a>
                                    <a href="#" data-theme="cupertino"><span className="ui-theme ui-theme-cupertino"></span><span className="ui-text">Cupertino</span></a>
                                    <a href="#" data-theme="cruze"><span className="ui-theme ui-theme-cruze"></span><span className="ui-text">Cruze</span></a>
                                    <a href="#" data-theme="darkness"><span className="ui-theme ui-theme-ui-darkness"></span><span className="ui-text">Darkness</span></a>
                                    <a href="#" data-theme="delta"><span className="ui-theme ui-theme-delta"></span><span className="ui-text">Delta</span></a>
                                    <a href="#" data-theme="flick"><span className="ui-theme ui-theme-flick"></span><span className="ui-text">Flick</span></a>
                                    <a href="#" data-theme="home"><span className="ui-theme ui-theme-home"></span><span className="ui-text">Home</span></a>
                                    <a href="#" data-theme="lightness"><span className="ui-theme ui-theme-ui-lightness"></span><span className="ui-text">Lightness</span></a>
                                    <a href="#" data-theme="pepper-grinder"><span className="ui-theme ui-theme-pepper-grinder"></span><span className="ui-text">Pepper-Grinder</span></a>
                                    <a href="#" data-theme="redmond"><span className="ui-theme ui-theme-redmond"></span><span className="ui-text">Redmond</span></a>
                                    <a href="#" data-theme="rocket"><span className="ui-theme ui-theme-rocket"></span><span className="ui-text">Rocket</span></a>
                                    <a href="#" data-theme="south-street"><span className="ui-theme ui-theme-south-street"></span><span className="ui-text">South-Street</span></a>
                                    <a href="#" data-theme="start"><span className="ui-theme ui-theme-start"></span><span className="ui-text">Start</span></a>
                                    <a href="#" data-theme="trontastic"><span className="ui-theme ui-theme-trontastic"></span><span className="ui-text">Trontastic</span></a>
                                </div>
                            </span>
                            
                            <a href="setup.html" className="topbar-link">
                                <img alt="mockosx" src="showcase/resources/images/setup.png" />
                            </a>

                            <div className="mobile-logo">
                                <img alt="mobile-logo" src="showcase/resources/images/primeng-sidebar.svg" />
                            </div>
                        </div>

                        <div>
                            {this.props.children}
                        </div>

                        <div className="content-section footer clearfix">
                            <span><a href="http://www.primetek.com.tr">PrimeTek</a>, Copyright &copy; 2017</span>
                            <span>All rights reserved</span>
                        </div>
                    </div>

                </div>

            );
        }
            
    
    
    }

    export default App;
