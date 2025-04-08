/****************************************************************************
****************** PrimeReact Demo Source (Auto-Generated) ******************
*****************************************************************************/

export const source = {
    "code": "import { CheckIcon } from '@primereact/icons';\nimport { Avatar } from 'primereact/avatar';\nexport default function IconDemo() {\n    return (\n        <div className=\"card\">\n            <div className=\"flex flex-wrap gap-8\">\n                <div className=\"flex-auto\">\n                    <h5>Icon</h5>\n                    <Avatar icon=\"pi pi-user\" className=\"mr-2\" size=\"xlarge\">\n                        <Avatar.Fallback icon=\"pi pi-user\" />\n                    </Avatar>\n                    <Avatar icon=\"pi pi-user\" className=\"mr-2\" size=\"large\" style={{ backgroundColor: '#ece9fc', color: '#2a1261' }}>\n                        <Avatar.Fallback icon=\"pi pi-user\" />\n                    </Avatar>\n                    <Avatar icon=\"pi pi-user\" style={{ backgroundColor: '#dee9fc', color: '#1a2551' }}>\n                        <Avatar.Fallback icon=\"pi pi-user\" />\n                    </Avatar>\n                </div>\n\n                <div className=\"flex-auto\">\n                    <h5>Circle</h5>\n                    <Avatar className=\"mr-2\" size=\"xlarge\" shape=\"circle\">\n                        <Avatar.Fallback icon=\"pi pi-user\" />\n                    </Avatar>\n                    <Avatar className=\"mr-2\" size=\"large\" style={{ backgroundColor: '#ece9fc', color: '#2a1261' }} shape=\"circle\">\n                        <Avatar.Fallback icon=\"pi pi-user\" />\n                    </Avatar>\n                    <Avatar style={{ backgroundColor: '#dee9fc', color: '#1a2551' }} shape=\"circle\">\n                        <Avatar.Fallback icon=\"pi pi-user\" />\n                    </Avatar>\n                </div>\n\n                <div className=\"flex-auto\">\n                    <h5>Test</h5>\n                    <Avatar className=\"mr-2\" size=\"xlarge\" shape=\"circle\">\n                        <Avatar.Fallback className=\"w-full h-full flex items-center justify-center\">\n                            <CheckIcon className=\"!size-7\" />\n                        </Avatar.Fallback>\n                    </Avatar>\n                    <Avatar className=\"mr-2 !bg-blue-500 !text-blue-50\" size=\"large\" shape=\"circle\">\n                        <Avatar.Fallback className=\"w-full h-full flex items-center justify-center text-xl font-semibold\">TE</Avatar.Fallback>\n                    </Avatar>\n                    <Avatar className=\"mr-2 !bg-blue-500 !text-blue-50\" shape=\"circle\">\n                        <Avatar.Image src=\"https://pbs.twimg.com/media/Gh7-TJNWEAAizSV?format=png&name=900x900\" />\n                        <Avatar.Fallback className=\"w-full h-full flex items-center justify-center text-xl font-semibold\">TE</Avatar.Fallback>\n                    </Avatar>\n                </div>\n\n                {/* <div className=\"flex-auto\">\n                <h5>Badge</h5>\n                <OverlayBadge value=\"4\" severity=\"danger\" className=\"inline-flex\">\n                    <Avatar icon=\"pi pi-user\" size=\"xlarge\" />\n                </OverlayBadge>\n            </div> */}\n            </div>\n        </div>\n    );\n}\n"
};
