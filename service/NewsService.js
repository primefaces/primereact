async function fetchNews() {
    const response = await fetch('https://www.primefaces.org/cdn/news/primereact.json', {cache: 'no-store'});
    return response.json();
}

export default fetchNews;