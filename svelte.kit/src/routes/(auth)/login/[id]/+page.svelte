<script>
    export let data
</script>

{#each data.allData as {email}, i (email)}
    <div>{email}</div>
{/each}
<div>
    <div>{data.post.id}</div>
    <div>{data.post.userId}</div>
    <div>{data.post.title}</div>
    <div>{data.post.body}</div>
</div>