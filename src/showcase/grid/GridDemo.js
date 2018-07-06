import React, {Component} from 'react';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

export class GridDemo extends Component {
        
    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Grid CSS</h1>
                        <p>Grid CSS is a lightweight responsive and fluid layout utility optimized for mobile devices, tablets and desktops. 
                        Grid CSS is used internally in some PrimeReact components and can be used as standalone as well.</p>
                    </div>
                </div>

                <div className="content-section implementation grid-demo">
                    <h3 className="first">Basic</h3>
                    <div className="ui-g">
                        <div className="ui-g-1">1</div>
                        <div className="ui-g-1">1</div>
                        <div className="ui-g-1">1</div>
                        <div className="ui-g-1">1</div>
                        <div className="ui-g-1">1</div>
                        <div className="ui-g-1">1</div>
                        <div className="ui-g-1">1</div>
                        <div className="ui-g-1">1</div>
                        <div className="ui-g-1">1</div>
                        <div className="ui-g-1">1</div>
                        <div className="ui-g-1">1</div>
                        <div className="ui-g-1">1</div>
                    </div>

                    <div className="ui-g">
                        <div className="ui-g-2">2</div>
                        <div className="ui-g-2">2</div>
                        <div className="ui-g-2">2</div>
                        <div className="ui-g-2">2</div>
                        <div className="ui-g-2">2</div>
                        <div className="ui-g-2">2</div>
                    </div>

                    <div className="ui-g">
                        <div className="ui-g-3">3</div>
                        <div className="ui-g-3">3</div>
                        <div className="ui-g-3">3</div>
                        <div className="ui-g-3">3</div>
                    </div>

                    <div className="ui-g">
                        <div className="ui-g-4">4</div>
                        <div className="ui-g-4">4</div>
                        <div className="ui-g-4">4</div>
                    </div>

                    <div className="ui-g">
                        <div className="ui-g-6">6</div>
                        <div className="ui-g-6">6</div>
                    </div>

                    <div className="ui-g">
                        <div className="ui-g-12">12</div>
                    </div>

                    <div className="ui-g">
                        <div className="ui-g-4">4</div>
                        <div className="ui-g-8">8</div>
                    </div>

                    <div className="ui-g">
                        <div className="ui-g-3">3</div>
                        <div className="ui-g-9">9</div>
                    </div>

                    <div className="ui-g">
                        <div className="ui-g-3">3</div>
                        <div className="ui-g-5">5</div>
                        <div className="ui-g-4">4</div>
                    </div>

                    <div className="ui-g">
                        <div className="ui-g-4">4</div>
                        <div className="ui-g-2">2</div>
                        <div className="ui-g-2">2</div>
                        <div className="ui-g-3">3</div>
                        <div className="ui-g-1">1</div>
                    </div>
                    
                    <h3>Responsive</h3>
                    <div className="ui-g">
                        <div className="ui-g-12 ui-md-6 ui-lg-3">ui-g-12 ui-md-6 ui-lg-3</div>
                        <div className="ui-g-12 ui-md-6 ui-lg-3">ui-g-12 ui-md-6 ui-lg-3</div>
                        <div className="ui-g-12 ui-md-6 ui-lg-3">ui-g-12 ui-md-6 ui-lg-3</div>
                        <div className="ui-g-12 ui-md-6 ui-lg-3">ui-g-12 ui-md-6 ui-lg-3</div>
                    </div>
                    
                    <div className="ui-g">
                        <div className="ui-g-12 ui-md-6 ui-lg-4">ui-g-12 ui-md-6 ui-lg-4</div>
                        <div className="ui-g-12 ui-md-6 ui-lg-4">ui-g-12 ui-md-6 ui-lg-4</div>
                        <div className="ui-g-12 ui-lg-4">ui-g-12 ui-lg-4</div>
                    </div>
                    
                    <h3>Nested</h3>
                    <div className="ui-g">
                        <div className="ui-g-8 ui-g-nopad">
                            <div className="ui-g-6">6</div>
                            <div className="ui-g-6">6</div>
                            <div className="ui-g-12">12</div>
                        </div>
                        <div className="ui-g-4">4</div>
                    </div>
                    
                    <h3>Sample Layout</h3>
                    <div className="ui-g">
                        <div className="ui-g-12 ui-md-2">Menu</div>
                        <div className="ui-g-12 ui-md-10 ui-g-nopad">
                            <div className="ui-g-12">
                                Bar
                            </div>
                            <div className="ui-g-12 ui-g-nopad">
                                <div className="ui-g">
                                    <div className="ui-g-12 ui-md-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet, orci nec dictum convallis, ligula mauris vestibulum turpis, nec varius tortor quam at diam. Nullam a viverra nibh. In tincidunt tempor lectus quis vulputate. Pellentesque nec dui aliquam, lobortis est in, lobortis ante</div>
                                    <div className="ui-g-12 ui-md-4">Maecenas vel nisi aliquet, vulputate tortor id, laoreet massa. Maecenas mattis tristique bibendum. Suspendisse vel mi dictum, vestibulum lacus quis, pulvinar quam. Proin vulputate, nibh at finibus varius, leo eros lacinia elit, nec blandit odio tellus a justo. Donec nec ex auctor, tristique nulla nec, rutrum sapien.</div>
                                    <div className="ui-g-12 ui-md-4">Proin efficitur in leo eget ornare. Nam vestibulum neque sed velit sagittis sodales. Sed scelerisque hendrerit magna a hendrerit. Cras tempor sem at justo pharetra convallis. Curabitur vel sodales purus. Vestibulum interdum facilisis nulla imperdiet suscipit. Quisque lectus felis, condimentum eget hendrerit sit amet.</div>
                                </div>
                                
                                <div className="ui-g">
                                    <div className="ui-g-6 ui-md-3"><img alt="Galleria 1" src="showcase/resources/demo/images/galleria/galleria1.jpg" style={{width:'100%'}} /></div>  
                                    <div className="ui-g-6 ui-md-3"><img alt="Galleria 2" src="showcase/resources/demo/images/galleria/galleria2.jpg" style={{width:'100%'}} /></div> 
                                    <div className="ui-g-6 ui-md-3"><img alt="Galleria 3" src="showcase/resources/demo/images/galleria/galleria3.jpg" style={{width:'100%'}} /></div>    
                                    <div className="ui-g-6 ui-md-3"><img alt="Galleria 4" src="showcase/resources/demo/images/galleria/galleria4.jpg" style={{width:'100%'}} /></div>      
                                </div>
                                
                                <div className="ui-g">
                                    <div className="ui-g-12 ui-md-6">Phasellus faucibus purus volutpat mauris lacinia sodales. Ut sit amet sapien facilisis, commodo dui non, fringilla tellus. Quisque tempus facilisis nisi sodales finibus. Pellentesque neque orci, ullamcorper vitae ligula quis, dignissim euismod augue.</div>
                                    <div className="ui-g-12 ui-md-6">Fusce ullamcorper congue massa, eget ullamcorper nunc lobortis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices dui eget dolor feugiat dapibus. Aliquam pretium leo et egestas luctus. Nunc facilisis gravida tellus.</div>
                                </div>
                            </div>
                        </div>
                        <div className="ui-g-12">
                            Footer
                        </div>
                    </div>
                </div>
                <GridDoc></GridDoc>
            </div>
        );
    }
}

export class GridDoc extends Component {

    shouldComponentUpdate(){
        return false;
    }
    
    render() {
        return (
            <div className="content-section source grid-demo">
                <TabView>
                    <TabPanel header="Documentation">

                    <h3>Getting Started</h3>
                    <p>Grid CSS is based on a 12 column layout. Columns are prefixed with <i>ui-g-*</i> and they should be a descendant of a container having <i>ui-g</i> class.
                       A simple 3 column layout can be defined as;</p>
<CodeHighlight className="language-jsx">
{`
<div class="ui-g">
    <div class="ui-g-4">Col1</div>
    <div class="ui-g-4">Col2</div>
    <div class="ui-g-4">Col3</div>
</div>

`}
</CodeHighlight>

<div className="ui-g">
    <div className="ui-g-4">Col1</div>
    <div className="ui-g-4">Col2</div>
    <div className="ui-g-4">Col3</div>
</div>

                    <h3>Multi Line</h3>
                    <p>When the number of columns exceed 12, columns wrap to a new line.</p>

<CodeHighlight className="language-jsx">
{`
<div className="ui-g">
    <div className="ui-g-6">Col1</div>
    <div className="ui-g-6">Col2</div>
    <div className="ui-g-6">Col3</div>
    <div className="ui-g-6">Col4</div>
</div>

`}
</CodeHighlight>

<div className="ui-g">
    <div className="ui-g-6">Col1</div>
    <div className="ui-g-6">Col2</div>
    <div className="ui-g-6">Col3</div>
    <div className="ui-g-6">Col4</div>
</div>

<p>Same can also be achieved by having two ui-g containers to semantically define a row.</p>

<CodeHighlight className="language-jsx">
{`
<div className="ui-g">
    <div className="ui-g-6">Col1</div>
    <div className="ui-g-6">Col2</div>
</div>
<div className="ui-g">
    <div className="ui-g-6">Col3</div>
    <div className="ui-g-6">Col4</div>
</div>

`}
</CodeHighlight>

<div className="ui-g">
    <div className="ui-g-6">Col1</div>
    <div className="ui-g-6">Col2</div>
</div>
<div className="ui-g">
    <div className="ui-g-6">Col3</div>
    <div className="ui-g-6">Col4</div>
</div>

             <h3>Nested</h3>
             <p>Columns can be nested to create more complex layouts.</p>
<CodeHighlight className="language-jsx">
{`
<div className="ui-g">
    <div className="ui-g-8 ui-g-nopad">
        <div className="ui-g-6">6</div>
        <div className="ui-g-6">6</div>
        <div className="ui-g-12">12</div>
    </div>
    <div className="ui-g-4">4</div>
</div>

`}
</CodeHighlight>

<div className="ui-g">
    <div className="ui-g-8 ui-g-nopad">
        <div className="ui-g-6">6</div>
        <div className="ui-g-6">6</div>
        <div className="ui-g-12">12</div>
    </div>
    <div className="ui-g-4">4</div>
</div>

<p>Direct children of ui-g has the same height automatically, in example above if the inside columns is likely to have different height with different content.</p>

<CodeHighlight className="language-jsx">
{`
<div className="ui-g">
    <div className="ui-g-8 ui-g-nopad">
        <div className="ui-g-6">6 <br /><br /><br /> Content </div>
        <div className="ui-g-6">6</div>
        <div className="ui-g-12">12</div>
    </div>
    <div className="ui-g-4">4</div>
</div>

`}
</CodeHighlight>

<div className="ui-g">
    <div className="ui-g-8 ui-g-nopad">
        <div className="ui-g-6">6 <br /><br /><br /> Content </div>
        <div className="ui-g-6">6</div>
        <div className="ui-g-12">12</div>
    </div>
    <div className="ui-g-4">4</div>
</div>

<p>Solution is wrapping the internal divs inside a ui-g as well.</p>
<CodeHighlight className="language-jsx">
{`
<div className="ui-g">
    <div className="ui-g-8 ui-g-nopad">
        <div className="ui-g">
            <div className="ui-g-6">6 <br /><br /><br /> Content </div>
            <div className="ui-g-6">6</div>
            <div className="ui-g-12">12</div>
        </div>
    </div>
    <div className="ui-g-4">4</div>
</div>

`}
</CodeHighlight>

<div className="ui-g">
    <div className="ui-g-8 ui-g-nopad">
        <div className="ui-g">
            <div className="ui-g-6">6 <br /><br /><br /> Content </div>
            <div className="ui-g-6">6</div>
            <div className="ui-g-12">12</div>
        </div>
    </div>
    <div className="ui-g-4">4</div>
</div>

<h3>Responsive</h3>
        <p>Responsive layout is achieved by applying additional classes to the columns whereas <i>ui-g-*</i> define the default behavior. Four screen sizes are supported
        with different breakpoints.</p>
        
        <div className="doc-tablewrapper">
            <table className="doc-table">
                <thead>
                    <tr>
                        <th>Prefix</th>
                        <th>Devices</th>
                        <th>Media Query</th>
                        <th>Example</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>ui-sm-*</td>
                        <td>Small devices like phones</td>
                        <td>max-width: 40em</td>
                        <td>ui-sm-6, ui-sm-4</td>
                    </tr>
                    <tr>
                        <td>ui-md-*</td>
                        <td>Medium sized devices such as tablets</td>
                        <td>min-width: 40.063em</td>
                        <td>ui-md-2, ui-sm-8</td>
                    </tr>
                    <tr>
                        <td>ui-lg-*</td>
                        <td>Devices with large screen like desktops</td>
                        <td>min-width: 64.063em</td>
                        <td>ui-lg-6, ui-sm-12</td>
                    </tr>
                    <tr>
                        <td>ui-xl-*</td>
                        <td>Big screen monitors</td>
                        <td>min-width: 90.063em</td>
                        <td>ui-xl-2, ui-sm-10</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <p>Most of the time, ui-md-* styles are used with default ui-g-* classes, to customize small or large screens apply ui-sm, ui-lg and ui-xl can be utilized.</p>
        
        <p>In example below, large screens display 4 columns, medium screens display 2 columns in 2 rows and default behavior gets only displayed in a mobile phone
        where each column is rendered in a separate row.</p>

<CodeHighlight className="language-jsx">
{`
<div className="ui-g">
    <div className="ui-g-12 ui-md-6 ui-lg-3">ui-g-12 ui-md-6 ui-lg-3</div>
    <div className="ui-g-12 ui-md-6 ui-lg-3">ui-g-12 ui-md-6 ui-lg-3</div>
    <div className="ui-g-12 ui-md-6 ui-lg-3">ui-g-12 ui-md-6 ui-lg-3</div>
    <div className="ui-g-12 ui-md-6 ui-lg-3">ui-g-12 ui-md-6 ui-lg-3</div>
</div>

`}
</CodeHighlight>

<div className="ui-g">
    <div className="ui-g-12 ui-md-6 ui-lg-3">ui-g-12 ui-md-6 ui-lg-3</div>
    <div className="ui-g-12 ui-md-6 ui-lg-3">ui-g-12 ui-md-6 ui-lg-3</div>
    <div className="ui-g-12 ui-md-6 ui-lg-3">ui-g-12 ui-md-6 ui-lg-3</div>
    <div className="ui-g-12 ui-md-6 ui-lg-3">ui-g-12 ui-md-6 ui-lg-3</div>
</div>

<p>In this second example below, 3 columns are displayed in large screens and in medium screens
   first two columns are placed side by side where the last column displayed below them.
   In a mobile phone, they all get displayed in a separate row.</p>

<CodeHighlight className="language-jsx">
{`
<div className="ui-g">
    <div className="ui-g-12 ui-md-6 ui-lg-4">ui-g-12 ui-md-6 ui-lg-4</div>
    <div className="ui-g-12 ui-md-6 ui-lg-4">ui-g-12 ui-md-6 ui-lg-4</div>
    <div className="ui-g-12 ui-lg-4">ui-g-12 ui-lg-4</div>
</div>

`}
</CodeHighlight>

<div className="ui-g">
    <div className="ui-g-12 ui-md-6 ui-lg-4">ui-g-12 ui-md-6 ui-lg-4</div>
    <div className="ui-g-12 ui-md-6 ui-lg-4">ui-g-12 ui-md-6 ui-lg-4</div>
    <div className="ui-g-12 ui-lg-4">ui-g-12 ui-lg-4</div>
</div>

<h3>Padding</h3>
<p>A column has a default padding by default, to remove it you may apply <i>ui-g-nopad</i> style class.</p>
            </TabPanel>

            <TabPanel header="Source">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/grid" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github"></i>
                    <span>View on GitHub</span>
                </a>
<CodeHighlight className="language-javascript">
{`
export class GridDemo extends Component {
        
    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>Grid CSS</h1>
                        <p>Grid CSS is a lightweight responsive and fluid layout utility optimized for mobile devices, tablets and desktops. 
                        Grid CSS is used internally in PrimeReact components and can be used as standalone as well.</p>
                    </div>
                </div>

                <div className="content-section implementation grid-demo">
                    <h3 className="first">Basic</h3>
                    <div className="ui-g">
                        <div className="ui-g-1">1</div>
                        <div className="ui-g-1">1</div>
                        <div className="ui-g-1">1</div>
                        <div className="ui-g-1">1</div>
                        <div className="ui-g-1">1</div>
                        <div className="ui-g-1">1</div>
                        <div className="ui-g-1">1</div>
                        <div className="ui-g-1">1</div>
                        <div className="ui-g-1">1</div>
                        <div className="ui-g-1">1</div>
                        <div className="ui-g-1">1</div>
                        <div className="ui-g-1">1</div>
                    </div>

                    <div className="ui-g">
                        <div className="ui-g-2">2</div>
                        <div className="ui-g-2">2</div>
                        <div className="ui-g-2">2</div>
                        <div className="ui-g-2">2</div>
                        <div className="ui-g-2">2</div>
                        <div className="ui-g-2">2</div>
                    </div>

                    <div className="ui-g">
                        <div className="ui-g-3">3</div>
                        <div className="ui-g-3">3</div>
                        <div className="ui-g-3">3</div>
                        <div className="ui-g-3">3</div>
                    </div>

                    <div className="ui-g">
                        <div className="ui-g-4">4</div>
                        <div className="ui-g-4">4</div>
                        <div className="ui-g-4">4</div>
                    </div>

                    <div className="ui-g">
                        <div className="ui-g-6">6</div>
                        <div className="ui-g-6">6</div>
                    </div>

                    <div className="ui-g">
                        <div className="ui-g-12">12</div>
                    </div>

                    <div className="ui-g">
                        <div className="ui-g-4">4</div>
                        <div className="ui-g-8">8</div>
                    </div>

                    <div className="ui-g">
                        <div className="ui-g-3">3</div>
                        <div className="ui-g-9">9</div>
                    </div>

                    <div className="ui-g">
                        <div className="ui-g-3">3</div>
                        <div className="ui-g-5">5</div>
                        <div className="ui-g-4">4</div>
                    </div>

                    <div className="ui-g">
                        <div className="ui-g-4">4</div>
                        <div className="ui-g-2">2</div>
                        <div className="ui-g-2">2</div>
                        <div className="ui-g-3">3</div>
                        <div className="ui-g-1">1</div>
                    </div>
                    
                    <h3>Responsive</h3>
                    <div className="ui-g">
                        <div className="ui-g-12 ui-md-6 ui-lg-3">ui-g-12 ui-md-6 ui-lg-3</div>
                        <div className="ui-g-12 ui-md-6 ui-lg-3">ui-g-12 ui-md-6 ui-lg-3</div>
                        <div className="ui-g-12 ui-md-6 ui-lg-3">ui-g-12 ui-md-6 ui-lg-3</div>
                        <div className="ui-g-12 ui-md-6 ui-lg-3">ui-g-12 ui-md-6 ui-lg-3</div>
                    </div>
                    
                    <div className="ui-g">
                        <div className="ui-g-12 ui-md-6 ui-lg-4">ui-g-12 ui-md-6 ui-lg-4</div>
                        <div className="ui-g-12 ui-md-6 ui-lg-4">ui-g-12 ui-md-6 ui-lg-4</div>
                        <div className="ui-g-12 ui-lg-4">ui-g-12 ui-lg-4</div>
                    </div>
                    
                    <h3>Nested</h3>
                    <div className="ui-g">
                        <div className="ui-g-8 ui-g-nopad">
                            <div className="ui-g-6">6</div>
                            <div className="ui-g-6">6</div>
                            <div className="ui-g-12">12</div>
                        </div>
                        <div className="ui-g-4">4</div>
                    </div>
                    
                    <h3>Sample Layout</h3>
                    <div className="ui-g">
                        <div className="ui-g-12 ui-md-2">Menu</div>
                        <div className="ui-g-12 ui-md-10 ui-g-nopad">
                            <div className="ui-g-12">
                                Bar
                            </div>
                            <div className="ui-g-12 ui-g-nopad">
                                <div className="ui-g">
                                    <div className="ui-g-12 ui-md-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet, orci nec dictum convallis, ligula mauris vestibulum turpis, nec varius tortor quam at diam. Nullam a viverra nibh. In tincidunt tempor lectus quis vulputate. Pellentesque nec dui aliquam, lobortis est in, lobortis ante</div>
                                    <div className="ui-g-12 ui-md-4">Maecenas vel nisi aliquet, vulputate tortor id, laoreet massa. Maecenas mattis tristique bibendum. Suspendisse vel mi dictum, vestibulum lacus quis, pulvinar quam. Proin vulputate, nibh at finibus varius, leo eros lacinia elit, nec blandit odio tellus a justo. Donec nec ex auctor, tristique nulla nec, rutrum sapien.</div>
                                    <div className="ui-g-12 ui-md-4">Proin efficitur in leo eget ornare. Nam vestibulum neque sed velit sagittis sodales. Sed scelerisque hendrerit magna a hendrerit. Cras tempor sem at justo pharetra convallis. Curabitur vel sodales purus. Vestibulum interdum facilisis nulla imperdiet suscipit. Quisque lectus felis, condimentum eget hendrerit sit amet.</div>
                                </div>
                                
                                <div className="ui-g">
                                    <div className="ui-g-6 ui-md-3"><img alt="Galleria 1" src="showcase/resources/demo/images/galleria/galleria1.jpg" style={{width:'100%'}} /></div>  
                                    <div className="ui-g-6 ui-md-3"><img alt="Galleria 2" src="showcase/resources/demo/images/galleria/galleria2.jpg" style={{width:'100%'}} /></div> 
                                    <div className="ui-g-6 ui-md-3"><img alt="Galleria 3" src="showcase/resources/demo/images/galleria/galleria3.jpg" style={{width:'100%'}} /></div>    
                                    <div className="ui-g-6 ui-md-3"><img alt="Galleria 4" src="showcase/resources/demo/images/galleria/galleria4.jpg" style={{width:'100%'}} /></div>      
                                </div>
                                
                                <div className="ui-g">
                                    <div className="ui-g-12 ui-md-6">Phasellus faucibus purus volutpat mauris lacinia sodales. Ut sit amet sapien facilisis, commodo dui non, fringilla tellus. Quisque tempus facilisis nisi sodales finibus. Pellentesque neque orci, ullamcorper vitae ligula quis, dignissim euismod augue.</div>
                                    <div className="ui-g-12 ui-md-6">Fusce ullamcorper congue massa, eget ullamcorper nunc lobortis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices dui eget dolor feugiat dapibus. Aliquam pretium leo et egestas luctus. Nunc facilisis gravida tellus.</div>
                                </div>
                            </div>
                        </div>
                        <div className="ui-g-12">
                            Footer
                        </div>
                    </div>
                </div>
                <GridDoc></GridDoc>
            </div>
        );
    }
}

`}
</CodeHighlight>
                    </TabPanel>
                </TabView>
            </div>
        );
    }
}