export class VersionService {

    getVersions() {
        return fetch('https://www.primefaces.org/primereact/versions.json').then(res => res.json())
                .then(d => d.versions);
    }
}
