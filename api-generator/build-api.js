const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '../');
const distDir = path.resolve(rootDir, 'dist');
const componentPath = path.join(__dirname, './components');

const pkg = require(path.resolve(rootDir, 'package.json'));
const library = {
    name: 'PrimeReact',
    version: pkg.version,
    repository: pkg.repository,
    license: pkg.license
};

const fileModules = {};

const files = fs.readdirSync(componentPath);
files.forEach((file) => {
    const { name } = path.parse(file);

    fileModules[name] = require(`./components//${name}`);
});

const webTypes = {
    framework: 'React',
    name: library.name,
    version: library.version,
    repository: library.repository,
    license: library.license,
    tags: []
};

const createWebTypes = (component) => {
    const { name, description, props, events } = component;

    const tag = {
        name,
        source: {
            module: library.name,
            symbol: name
        },
        description,
        ...(component['docUrl'] && { 'doc-url': component['docUrl'] }),
        props,
        events
    };

    webTypes.tags.push(tag);
};

Object.keys(fileModules).forEach((p) => {
    createWebTypes(fileModules[p][p]);
});
const webTypesJson = JSON.stringify(webTypes, null, 4);

!fs.existsSync(distDir) && fs.mkdirSync(distDir);
fs.writeFileSync(path.resolve(distDir, 'web-types.json'), webTypesJson);
