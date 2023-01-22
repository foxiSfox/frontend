// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export async function load({params}) {
    async function getPost() {
        const url = 'https://jsonplaceholder.typicode.com/posts/'+params.id;
        const res = await fetch(url);
        return await res.json()
    }

    return {
        post: await getPost()
    }
}