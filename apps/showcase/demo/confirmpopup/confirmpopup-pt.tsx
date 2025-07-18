import { ConfirmPopup } from 'primereact/confirmpopup';

export default function ConfirmPopupPT() {
    return (
        <>
            <ConfirmPopup>
                <ConfirmPopup.Trigger variant="outlined">Open Popup</ConfirmPopup.Trigger>
                <ConfirmPopup.Portal>
                    <ConfirmPopup.Content>
                        <ConfirmPopup.Icon className="pi pi-exclamation-triangle" />
                        <ConfirmPopup.Message>Are you sure you want to proceed?</ConfirmPopup.Message>
                    </ConfirmPopup.Content>
                    <ConfirmPopup.Footer>
                        <ConfirmPopup.Reject severity="secondary" variant="outlined">
                            Cancel
                        </ConfirmPopup.Reject>
                        <ConfirmPopup.Accept>Save</ConfirmPopup.Accept>
                    </ConfirmPopup.Footer>
                </ConfirmPopup.Portal>
            </ConfirmPopup>
            {/* <ConfirmPopup />
            <div
                id="pr_id_r4a"
                role="alertdialog"
                aria-modal="true"
                data-pc-name="motion"
                data-pc-section="root"
                className="p-confirmpopup p-component !relative"
                style={{
                    '--pui-motion-height': '82px',
                    zIndex: 1107,
                    insetInlineStart: '1648.12px',
                    top: '874.953px',
                    transformOrigin: 'center top',
                    '--p-confirmpopup-arrow-left': '0px'
                }}
            >
                <div className="p-confirmpopup-content" data-pc-section="root" data-pc-name="confirmpopupcontent">
                    <span className="p-confirmpopup-icon pi pi-exclamation-triangle" data-pc-section="root" data-pc-name="confirmpopupicon"></span>
                    <span className="p-confirmpopup-message" data-pc-section="root" data-pc-name="confirmpopupmessage">
                        Are you sure you want to proceed?
                    </span>
                </div>
                <div className="p-confirmpopup-footer" data-pc-section="root" data-pc-name="confirmpopupfooter">
                    <button id="pr_id_r5s" className="p-button p-component p-button-secondary p-button-outlined p-button-sm p-confirmpopup-reject-button" data-pc-name="reject" data-pc-section="root" data-pc-extend="button">
                        Cancel
                    </button>
                    <button id="pr_id_r62" className="p-button p-component p-button-sm p-confirmpopup-accept-button" data-pc-name="accept" data-pc-section="root" data-pc-extend="button">
                        Save
                    </button>
                </div>
            </div> */}
        </>
    );
}
