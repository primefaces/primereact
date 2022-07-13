async function fetchNews() {
    try {
        const response = await fetch('https://www.primefaces.org/cdn/news/primereact.json', {cache: 'no-store'});
        return response.json();
    } catch {
        return null;
    }
}

export default fetchNews;