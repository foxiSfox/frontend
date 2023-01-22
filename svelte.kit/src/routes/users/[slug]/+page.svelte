<script>
    import Detail from '../../../modules/users/components/detail.svelte'
    export let data;

    let name = data?.name || 'undefined'
    let lastName = data?.lastName || 'undefined'
</script>
<h1>Users: {name} {lastName}</h1>
<Detail {...data}/>
