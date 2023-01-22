<script>
    export let id = 'undefined';
    export let name = 'undefined';
    export let lastName = 'undefined';
    export let age = 'undefined';
</script>

<div class="user">
    <div>Name: {name}</div>
    <div>Last Name: {lastName}</div>
    <div>Age: {age}</div>
    <div>Detail Link: <a href="/users/{id}">detail</a></div>
</div>

<style>
    .user {
        border: 1px solid gray;
        padding: 10px;
        margin-bottom: 10px;
    }
</style>