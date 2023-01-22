<script>
    import {invalidateAll} from "$app/navigation";
    export let data

    function deletePost(id) {
        data.posts = data.posts.filter(post => id !== post.id)
    }
</script>
<svelte:head>
    <title>Тест</title>
</svelte:head>
<p>Это контент авторизации {data.testData}</p>
<div><button on:click={() => invalidateAll()}>invalid</button></div>
{#each data.posts as {userId, id, title, body}, i(id)}
    <div>
        <div>{userId}</div>
        <div><a href="/login/{id}">{id}</a></div>
        <div>{title}</div>
        <div>{body}</div>
        <div><button on:click={()=>{deletePost(id)}}>Удалить</button></div>
    </div>

{/each}
