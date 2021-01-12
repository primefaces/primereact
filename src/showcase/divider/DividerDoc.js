import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';

export class DividerDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export class DividerDemo extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <h5>Basic</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    <Divider />

                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                    architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>

                    <Divider />

                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                    cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>

                    <Divider />

                    <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur
                    a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                            Donec vel volutpat ipsum. Integer nunc magna, posuere ut tincidunt eget, egestas vitae sapien. Morbi dapibus luctus odio.</p>
                </div>

                <div className="card">
                    <h5>Text with Dashed Style</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    <Divider align="left" type="dashed">
                        <b>Left</b>
                    </Divider>

                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                    architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>

                    <Divider align="center" type="dashed">
                        <b>Center</b>
                    </Divider>

                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                    cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>

                    <Divider align="right" type="dashed">
                        <b>Right</b>
                    </Divider>

                    <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur
                    a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                            Donec vel volutpat ipsum. Integer nunc magna, posuere ut tincidunt eget, egestas vitae sapien. Morbi dapibus luctus odio.</p>
                </div>

                <div className="card">
                    <h5>Content</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    <Divider align="left">
                        <div className="p-d-inline-flex p-ai-center">
                            <i className="pi pi-user p-mr-2"></i>
                            <b>Icon</b>
                        </div>
                    </Divider>

                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                    architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>

                    <Divider align="center">
                        <span className="p-tag">Badge</span>
                    </Divider>

                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                    cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>

                    <Divider align="right">
                        <Button label="Button" icon="pi pi-search" className="p-button-outlined"></Button>
                    </Divider>

                    <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur
                    a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                            Donec vel volutpat ipsum. Integer nunc magna, posuere ut tincidunt eget, egestas vitae sapien. Morbi dapibus luctus odio.</p>
                </div>

                <div className="card">
                    <h5>Vertical</h5>
                    <div className="p-d-flex">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        <Divider layout="vertical" />

                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                        architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>

                        <Divider layout="vertical" />

                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                        cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                    </div>
                </div>

                <div className="card">
                    <h5>Vertical with Content</h5>
                    <div className="p-grid">
                        <div className="p-col-5 p-d-flex p-ai-center p-jc-center">
                            <div className="p-fluid">
                                <div className="p-field">
                                    <label htmlFor="username">Username</label>
                                    <InputText id="username" type="text" />
                                </div>
                                <div className="p-field">
                                    <label htmlFor="password">Password</label>
                                    <InputText id="password" type="password" />
                                </div>
                                <Button label="Login"></Button>
                            </div>
                        </div>
                        <div className="p-col-2">
                            <Divider layout="vertical">
                                <b>OR</b>
                            </Divider>
                        </div>
                        <div className="p-col-5 p-d-flex p-ai-center p-jc-center">
                            <Button label="Sign Up" icon="pi pi-user-plus" className="p-button-success"></Button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
`
            },
            'hooks': {
tabName: 'Hooks Source',
content: `
import React from 'react';
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export const DividerDemo = () => {

    return (
        <div>
            <div className="card">
                <h5>Basic</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <Divider />

                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                        voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>

                <Divider />

                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>

                <Divider />

                <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur
                a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                        Donec vel volutpat ipsum. Integer nunc magna, posuere ut tincidunt eget, egestas vitae sapien. Morbi dapibus luctus odio.</p>
            </div>

            <div className="card">
                <h5>Text with Dashed Style</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <Divider align="left" type="dashed">
                    <b>Left</b>
                </Divider>

                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                        voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>

                <Divider align="center" type="dashed">
                    <b>Center</b>
                </Divider>

                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>

                <Divider align="right" type="dashed">
                    <b>Right</b>
                </Divider>

                <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur
                a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                        Donec vel volutpat ipsum. Integer nunc magna, posuere ut tincidunt eget, egestas vitae sapien. Morbi dapibus luctus odio.</p>
            </div>

            <div className="card">
                <h5>Content</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <Divider align="left">
                    <div className="p-d-inline-flex p-ai-center">
                        <i className="pi pi-user p-mr-2"></i>
                        <b>Icon</b>
                    </div>
                </Divider>

                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                        voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>

                <Divider align="center">
                    <span className="p-tag">Badge</span>
                </Divider>

                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>

                <Divider align="right">
                    <Button label="Button" icon="pi pi-search" className="p-button-outlined"></Button>
                </Divider>

                <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur
                a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                        Donec vel volutpat ipsum. Integer nunc magna, posuere ut tincidunt eget, egestas vitae sapien. Morbi dapibus luctus odio.</p>
            </div>

            <div className="card">
                <h5>Vertical</h5>
                <div className="p-d-flex">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    <Divider layout="vertical" />

                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                    architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>

                    <Divider layout="vertical" />

                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                    cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                </div>
            </div>

            <div className="card">
                <h5>Vertical with Content</h5>
                <div className="p-grid">
                    <div className="p-col-5 p-d-flex p-ai-center p-jc-center">
                        <div className="p-fluid">
                            <div className="p-field">
                                <label htmlFor="username">Username</label>
                                <InputText id="username" type="text" />
                            </div>
                            <div className="p-field">
                                <label htmlFor="password">Password</label>
                                <InputText id="password" type="password" />
                            </div>
                            <Button label="Login"></Button>
                        </div>
                    </div>
                    <div className="p-col-2">
                        <Divider layout="vertical">
                            <b>OR</b>
                        </Divider>
                    </div>
                    <div className="p-col-5 p-d-flex p-ai-center p-jc-center">
                        <Button label="Sign Up" icon="pi pi-user-plus" className="p-button-success"></Button>
                    </div>
                </div>
            </div>

        </div>
    );
}
`
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React from 'react';
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export const DividerDemo = () => {

    return (
        <div>
            <div className="card">
                <h5>Basic</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <Divider />

                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                        voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>

                <Divider />

                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>

                <Divider />

                <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur
                a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                        Donec vel volutpat ipsum. Integer nunc magna, posuere ut tincidunt eget, egestas vitae sapien. Morbi dapibus luctus odio.</p>
            </div>

            <div className="card">
                <h5>Text with Dashed Style</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <Divider align="left" type="dashed">
                    <b>Left</b>
                </Divider>

                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                        voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>

                <Divider align="center" type="dashed">
                    <b>Center</b>
                </Divider>

                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>

                <Divider align="right" type="dashed">
                    <b>Right</b>
                </Divider>

                <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur
                a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                        Donec vel volutpat ipsum. Integer nunc magna, posuere ut tincidunt eget, egestas vitae sapien. Morbi dapibus luctus odio.</p>
            </div>

            <div className="card">
                <h5>Content</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <Divider align="left">
                    <div className="p-d-inline-flex p-ai-center">
                        <i className="pi pi-user p-mr-2"></i>
                        <b>Icon</b>
                    </div>
                </Divider>

                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                        voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>

                <Divider align="center">
                    <span className="p-tag">Badge</span>
                </Divider>

                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>

                <Divider align="right">
                    <Button label="Button" icon="pi pi-search" className="p-button-outlined"></Button>
                </Divider>

                <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur
                a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                        Donec vel volutpat ipsum. Integer nunc magna, posuere ut tincidunt eget, egestas vitae sapien. Morbi dapibus luctus odio.</p>
            </div>

            <div className="card">
                <h5>Vertical</h5>
                <div className="p-d-flex">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    <Divider layout="vertical" />

                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                    architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>

                    <Divider layout="vertical" />

                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                    cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                </div>
            </div>

            <div className="card">
                <h5>Vertical with Content</h5>
                <div className="p-grid">
                    <div className="p-col-5 p-d-flex p-ai-center p-jc-center">
                        <div className="p-fluid">
                            <div className="p-field">
                                <label htmlFor="username">Username</label>
                                <InputText id="username" type="text" />
                            </div>
                            <div className="p-field">
                                <label htmlFor="password">Password</label>
                                <InputText id="password" type="password" />
                            </div>
                            <Button label="Login"></Button>
                        </div>
                    </div>
                    <div className="p-col-2">
                        <Divider layout="vertical">
                            <b>OR</b>
                        </Divider>
                    </div>
                    <div className="p-col-5 p-d-flex p-ai-center p-jc-center">
                        <Button label="Sign Up" icon="pi pi-user-plus" className="p-button-success"></Button>
                    </div>
                </div>
            </div>

        </div>
    );
}
`
            }
        };
    }



    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Documentation">
                    <h5>Import</h5>
<CodeHighlight lang="js">
{`
import { Divider } from 'primereact/divider';
`}
</CodeHighlight>
                <h5>Getting Started</h5>
				<p>Divider has two orientations defined with the <i>layout</i> property, default is "horizontal" and the alternative is "vertical".</p>
<CodeHighlight>
{`
<div>Content 1</div>
<Divider />
<div>Content 2</div>
`}
</CodeHighlight>
                <h5>Border Style</h5>
                <p>Style of the border is configured with the <i>type</i> property and supports 3 values; default is "solid" and other possibilities are "dashed" and "dotted".</p>
<CodeHighlight>
{`
<div>Content 1</div>
<Divider type="dashed" />
<div>Content 2</div>
`}
</CodeHighlight>

                <h5>Vertical Divider</h5>
                <p>Vertical divider is enabled by setting the <i>layout</i> property as "vertical".</p>

<CodeHighlight>
{`
<div className="p-d-flex">
    <div>Content 1</div>
    <Divider layout="vertical" />
    <div>Content 2</div>
    <Divider layout="vertical" />
    <div>Content 3</div>
</div>
`}
</CodeHighlight>
                <h5>Content</h5>
                <p>Any content placed inside is rendered within the boundaries of the divider. In addition, location
                    of the content is configured with the <i>align</i> property. In horizontal layout, alignment options
                    are "left", "center" and "right" whereas vertical mode supports "top", "center" and "bottom".
                </p>
<CodeHighlight>
{`
<div>Content 1</div>

<Divider align="left">
    <div className="p-d-inline-flex p-ai-center">
        <i className="pi pi-user p-mr-2"></i>
        <b>Icon</b>
    </div>
</Divider>

<div>Content 2</div>

<Divider align="center">
    <span className="p-tag">Badge</span>
</Divider>

<div>Content 3</div>

<Divider align="right">
    <Button label="Button" icon="pi pi-search" className="p-button-outlined"></Button>
</Divider>

<div>Content 4</div>
`}
</CodeHighlight>
                <h5>Properties</h5>
                <p>Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.</p>
				<div className="doc-tablewrapper">
					<table className="doc-table">
						<thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Default</th>
                                <th>Description</th>
                            </tr>
						</thead>
						<tbody>
                            <tr>
                                <td>align</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Alignment of the content, options are "left", "center", "right" for horizontal layout
                                    and "top", "center", "bottom" for vertical.</td>
                            </tr>
                            <tr>
                                <td>layout</td>
                                <td>string</td>
                                <td>horizontal</td>
                                <td>Specifies the orientation, valid values are "horizontal" and "vertical".</td>
                            </tr>
                            <tr>
                                <td>type</td>
                                <td>String</td>
                                <td>solid</td>
                                <td>Border style type, default is "solid" and other options are "dashed" and "dotted".</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h5>Styling</h5>
				<p>Following is the list of structural style classes, for theming classes visit <NavLink to="/theming">theming</NavLink> page.</p>
				<div className="doc-tablewrapper">
					<table className="doc-table">
						<thead>
                            <tr>
                                <th>Name</th>
                                <th>Element</th>
                            </tr>
						</thead>
						<tbody>
                            <tr>
                                <td>p-divider</td>
                                <td>Container element.</td>
                            </tr>
                            <tr>
                                <td>p-divider-horizontal</td>
                                <td>Container element in horizontal layout.</td>
                            </tr>
                            <tr>
                                <td>p-divider-vertical</td>
                                <td>Container element in vertical layout.</td>
                            </tr>
                            <tr>
                                <td>p-divider-solid</td>
                                <td>Container element with solid border.</td>
                            </tr>
                            <tr>
                                <td>p-divider-dashed</td>
                                <td>Container element with dashed border.</td>
                            </tr>
                            <tr>
                                <td>p-divider-dotted</td>
                                <td>Container element with dotted border.</td>
                            </tr>
                            <tr>
                                <td>p-divider-left</td>
                                <td>Container element with content aligned to left.</td>
                            </tr>
                            <tr>
                                <td>p-divider-right</td>
                                <td>Container element with content aligned to right.</td>
                            </tr>
                            <tr>
                                <td>p-divider-center</td>
                                <td>Container element with content aligned to center.</td>
                            </tr>
                            <tr>
                                <td>p-divider-bottom</td>
                                <td>Container element with content aligned to bottom.</td>
                            </tr>
                            <tr>
                                <td>p-divider-top</td>
                                <td>Container element with content aligned to top.</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h5>Dependencies</h5>
				<p>None.</p>
                    </TabPanel>

                    {
                        useLiveEditorTabs({ name: 'DividerDemo', sources: this.sources })
                    }
                </TabView>
            </div>
        );
    }
}
