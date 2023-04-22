const fetcher = (url: string) => fetch('https://reqres.in/api' + url).then(response => response.json());

export default fetcher;
