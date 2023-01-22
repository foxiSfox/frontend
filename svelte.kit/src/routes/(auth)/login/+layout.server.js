export async function load() {
    async function getUsers() {
        const url = 'https://jsonplaceholder.typicode.com/users';
        const res = await fetch(url);
        return await res.json();
    }
    return {
        allData: getUsers()
    }
}