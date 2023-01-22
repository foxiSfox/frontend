export async function load() {
    async function getPost() {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const res = await fetch(url);
        return await res.json()
    }

    return {
        posts: await getPost()
    }
}