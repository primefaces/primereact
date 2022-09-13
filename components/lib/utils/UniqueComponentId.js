let lastId = 0;

export default function UniqueComponentId(prefix = 'pr_id_') {
    lastId++;

    return `${prefix}${lastId}`;
}
