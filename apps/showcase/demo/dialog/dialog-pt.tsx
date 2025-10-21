import { Dialog } from 'primereact/dialog';

export default function DialogPT() {
    return (
        <>
            <Dialog />
            <div
                className="p-dialog-mask !relative"
                data-pc-section="mask"
                style={{
                    position: 'fixed',
                    height: '100%',
                    width: '100%',
                    left: '0px',
                    top: '0px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    pointerEvents: 'auto'
                }}
            >
                <div
                    className="p-dialog p-component"
                    data-p-focus-trap="true"
                    style={{ display: 'flex', flexDirection: 'column', pointerEvents: 'auto', width: '25rem' }}
                >
                    <span
                        className="p-hidden-accessible p-hidden-focusable"
                        tabIndex={0}
                        role="presentation"
                        aria-hidden="true"
                        data-p-hidden-accessible="true"
                        data-p-hidden-focusable="true"
                    ></span>
                    <div id="pr_id_r0_header" className="p-dialog-header" data-pc-section="root" data-pc-name="dialogheader">
                        <div className="p-dialog-title" data-pc-section="root" data-pc-name="dialogtitle">
                            Header
                        </div>
                        <div className="p-dialog-header-actions" data-pc-section="root" data-pc-name="dialogheaderactions">
                            <button
                                id="pr_id_r3a"
                                className="p-button p-component p-button-icon-only p-button-secondary p-button-rounded p-button-text"
                                type="button"
                                data-pc-name="maximizable"
                                data-pc-section="root"
                                data-pc-extend="button"
                            >
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    id="pr_id_r3e"
                                    className="p-icon"
                                    aria-hidden="true"
                                    data-pc-name="maximizableicon"
                                    data-pc-extend="windowmaximizeicon"
                                    data-pc-section="root"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </button>
                            <button
                                id="pr_id_r3k"
                                className="p-button p-component p-button-icon-only p-button-secondary p-button-rounded p-button-text p-dialog-close-button"
                                type="button"
                                data-pc-section="root"
                                data-pc-name="close"
                                data-pc-extend="button"
                            >
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    id="pr_id_r3o"
                                    className="p-icon"
                                    aria-hidden="true"
                                    data-pc-name="closeicon"
                                    data-pc-extend="timesicon"
                                    data-pc-section="root"
                                >
                                    <path
                                        d="M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="p-dialog-content" data-pc-section="root" data-pc-name="dialogcontent">
                        Dialog Content
                    </div>
                    <div className="p-dialog-footer" data-pc-section="root" data-pc-name="dialogfooter">
                        Footer
                    </div>
                    <span
                        className="p-hidden-accessible p-hidden-focusable"
                        tabIndex={0}
                        role="presentation"
                        aria-hidden="true"
                        data-p-hidden-accessible="true"
                        data-p-hidden-focusable="true"
                    ></span>
                </div>
            </div>
        </>
    );
}
