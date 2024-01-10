import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { ContextMenu } from '@/components/lib/contextmenu/ContextMenu';
import { useState, useRef } from 'react';
import { Toast } from '@/components/lib/toast/Toast';
import { Tag } from '@/components/lib/tag/Tag';

export function CommandDoc(props) {
    const cm = useRef(null);
    const toast = useRef();
    const [selectedUser, setSelectedUser] = useState();
    const [users, setUsers] = useState([
        { id: 0, name: 'Amy Elsner', image: 'amyelsner.png', role: 'Admin' },
        { id: 1, name: 'Anna Fali', image: 'annafali.png', role: 'Member' },
        { id: 2, name: 'Asiya Javayant', image: 'asiyajavayant.png', role: 'Member' },
        { id: 3, name: 'Bernardo Dominic', image: 'bernardodominic.png', role: 'Guest' },
        { id: 4, name: 'Elwin Sharvill', image: 'elwinsharvill.png', role: 'Member' }
    ]);

    const changeUserRole = (user, role) => {
        const usersClone = [...users];
        const userIndex = usersClone.findIndex((u) => u.id === user.id);

        usersClone[userIndex].role = role;
        setUsers(usersClone);
    };

    const items = [
        {
            label: 'Roles',
            icon: 'pi pi-users',
            items: [
                {
                    label: 'Admin',
                    command: () => {
                        changeUserRole(selectedUser, 'Admin');
                    }
                },
                {
                    label: 'Member',
                    command: () => {
                        changeUserRole(selectedUser, 'Member');
                    }
                },
                {
                    label: 'Guest',
                    command: () => {
                        changeUserRole(selectedUser, 'Guest');
                    }
                }
            ]
        },
        {
            label: 'Invite',
            icon: 'pi pi-user-plus',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Success', detail: 'Invitation sent!', life: 3000 });
            }
        }
    ];

    const onRightClick = (event, user) => {
        if (cm.current) {
            setSelectedUser(user);
            cm.current.show(event);
        }
    };

    const getBadge = (user) => {
        if (user.role === 'Member') return 'info';
        else if (user.role === 'Guest') return 'warning';
        else return null;
    };

    const code = {
        basic: `
<ul className="m-0 p-0 list-none border-1 surface-border border-round p-3 flex flex-column gap-2 w-full md:w-30rem">
    {users.map((user) => (
        <li
            key={user.id}
            className={\`p-2 hover:surface-hover border-round border-1 border-transparent transition-all transition-duration-200 flex align-items-center justify-content-between \${selectedUser?.id === user.id && 'border-primary'}\`}
            onContextMenu={(event) => onRightClick(event, user)}
        >
            <div className="flex align-items-center gap-2">
                <img alt="user.name" src={\`https://primefaces.org/cdn/primevue/images/avatar/\${user.image}\`} style={{ width: '32px' }} />
                <span className="font-bold">{user.name}</span>
            </div>
            <Tag value={user.role} severity={getBadge(user)} />
        </li>
    ))}
</ul>
<ContextMenu ref={cm} model={items} onHide={() => setSelectedUser(undefined)} />
<Toast ref={toast} />
`,
        javascript: `
import { ContextMenu } from 'primereact/contextmenu';
import { useState, useRef } from 'react';
import { Toast } from 'primereact/toast';
import { Tag } from 'primerea/tag';

export default function CommandDemo() {
    const cm = useRef(null);
    const toast = useRef();
    const [selectedUser, setSelectedUser] = useState();
    const [users, setUsers] = useState([
        { id: 0, name: 'Amy Elsner', image: 'amyelsner.png', role: 'Admin' },
        { id: 1, name: 'Anna Fali', image: 'annafali.png', role: 'Member' },
        { id: 2, name: 'Asiya Javayant', image: 'asiyajavayant.png', role: 'Member' },
        { id: 3, name: 'Bernardo Dominic', image: 'bernardodominic.png', role: 'Guest' },
        { id: 4, name: 'Elwin Sharvill', image: 'elwinsharvill.png', role: 'Member' }
    ]);

    const changeUserRole = (user, role) => {
        const usersClone = [...users];
        const userIndex = usersClone.findIndex((u) => u.id === user.id);

        usersClone[userIndex].role = role;
        setUsers(usersClone);
    };

    const items = [
        {
            label: 'Roles',
            icon: 'pi pi-users',
            items: [
                {
                    label: 'Admin',
                    command: () => {
                        changeUserRole(selectedUser, 'Admin');
                    }
                },
                {
                    label: 'Member',
                    command: () => {
                        changeUserRole(selectedUser, 'Member');
                    }
                },
                {
                    label: 'Guest',
                    command: () => {
                        changeUserRole(selectedUser, 'Guest');
                    }
                }
            ]
        },
        {
            label: 'Invite',
            icon: 'pi pi-user-plus',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Success', detail: 'Invitation sent!', life: 3000 });
            }
        }
    ];

    const onRightClick = (event, user) => {
        if (cm.current) {
            setSelectedUser(user);
            cm.current.show(event);
        }
    };

    const getBadge = (user) => {
        if (user.role === 'Member') return 'info';
        else if (user.role === 'Guest') return 'warning';
        else return null;
    };

    return (
        <div className="card flex md:justify-content-center">
            <ul className="m-0 p-0 list-none border-1 surface-border border-round p-3 flex flex-column gap-2 w-full md:w-30rem">
                {users.map((user) => (
                    <li
                        key={user.id}
                        className={\`p-2 hover:surface-hover border-round border-1 border-transparent transition-all transition-duration-200 flex align-items-center justify-content-between \${selectedUser?.id === user.id && 'border-primary'}\`}
                        onContextMenu={(event) => onRightClick(event, user)}
                    >
                        <div className="flex align-items-center gap-2">
                            <img alt="user.name" src={\`https://primefaces.org/cdn/primevue/images/avatar/\${user.image}\`} style={{ width: '32px' }} />
                            <span className="font-bold">{user.name}</span>
                        </div>
                        <Tag value={user.role} severity={getBadge(user)} />
                    </li>
                ))}
            </ul>
            <ContextMenu ref={cm} model={items} onHide={() => setSelectedUser(undefined)} />
            <Toast ref={toast} />
        </div>
    )
}
        `,
        typescript: `
import { ContextMenu } from 'primereact/contextmenu';
import { useState, useRef } from 'react';
import { Toast } from 'primereact/toast';
import { Tag } from 'primerea/tag';

export default function CommandDemo() {
    const cm = useRef<ContextMenuRef | null>(null);
    const toast = useRef<ToastRef | null>(null);
    const [selectedUser, setSelectedUser] = useState<User | undefined>();
    const [users, setUsers] = useState<User[]>([
        { id: 0, name: 'Amy Elsner', image: 'amyelsner.png', role: 'Admin' },
        { id: 1, name: 'Anna Fali', image: 'annafali.png', role: 'Member' },
        { id: 2, name: 'Asiya Javayant', image: 'asiyajavayant.png', role: 'Member' },
        { id: 3, name: 'Bernardo Dominic', image: 'bernardodominic.png', role: 'Guest' },
        { id: 4, name: 'Elwin Sharvill', image: 'elwinsharvill.png', role: 'Member' }
    ]);

    const changeUserRole = (user: User, role: string) => {
        const usersClone = [...users];
        const userIndex = usersClone.findIndex((u) => u.id === user.id);

        usersClone[userIndex].role = role;
        setUsers(usersClone);
    };

    const items = [
        {
            label: 'Roles',
            icon: 'pi pi-users',
            items: [
                {
                    label: 'Admin',
                    command: () => {
                        if (selectedUser) {
                            changeUserRole(selectedUser, 'Admin');
                        }
                    }
                },
                {
                    label: 'Member',
                    command: () => {
                        if (selectedUser) {
                            changeUserRole(selectedUser, 'Member');
                        }
                    }
                },
                {
                    label: 'Guest',
                    command: () => {
                        if (selectedUser) {
                            changeUserRole(selectedUser, 'Guest');
                        }
                    }
                }
            ]
        },
        {
            label: 'Invite',
            icon: 'pi pi-user-plus',
            command: () => {
                toast.current?.show({ severity: 'success', summary: 'Success', detail: 'Invitation sent!', life: 3000 });
            }
        }
    ];

    const onRightClick = (event: MouseEvent, user: User) => {
        if (cm.current) {
            setSelectedUser(user);
            cm.current.show(event);
        }
    };

    const getBadge = (user: User) => {
        if (user.role === 'Member') return 'info';
        else if (user.role === 'Guest') return 'warning';
        else return null;
    };

    return (
        <div className="card flex md:justify-content-center">
            <ul className="m-0 p-0 list-none border-1 surface-border border-round p-3 flex flex-column gap-2 w-full md:w-30rem">
                {users.map((user) => (
                    <li
                        key={user.id}
                        className={\`p-2 hover:surface-hover border-round border-1 border-transparent transition-all transition-duration-200 flex align-items-center justify-content-between \${selectedUser?.id === user.id && 'border-primary'}\`}
                        onContextMenu={(event) => onRightClick(event, user)}
                    >
                        <div className="flex align-items-center gap-2">
                            <img alt={user.name} src={\`https://primefaces.org/cdn/primevue/images/avatar/\${user.image}\`} style={{ width: '32px' }} />
                            <span className="font-bold">{user.name}</span>
                        </div>
                        <Tag value={user.role} severity={getBadge(user)} />
                    </li>
                ))}
            </ul>
            <ContextMenu ref={cm} model={items} onHide={() => setSelectedUser(undefined)} />
            <Toast ref={toast} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    The <i>command</i> property defines the callback to run when an item is activated by click or a key event.{' '}
                </p>
            </DocSectionText>
            <div className="card flex md:justify-content-center">
                <ul className="m-0 p-0 list-none border-1 surface-border border-round p-3 flex flex-column gap-2 w-full md:w-30rem">
                    {users.map((user) => (
                        <li
                            key={user.id}
                            className={`p-2 hover:surface-hover border-round border-1 border-transparent transition-all transition-duration-200 flex align-items-center justify-content-between ${selectedUser?.id === user.id && 'border-primary'}`}
                            onContextMenu={(event) => onRightClick(event, user)}
                        >
                            <div className="flex align-items-center gap-2">
                                <img alt="user.name" src={`https://primefaces.org/cdn/primevue/images/avatar/${user.image}`} style={{ width: '32px' }} />
                                <span className="font-bold">{user.name}</span>
                            </div>
                            <Tag value={user.role} severity={getBadge(user)} />
                        </li>
                    ))}
                </ul>
                <ContextMenu ref={cm} model={items} onHide={() => setSelectedUser(undefined)} />
                <Toast ref={toast} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
