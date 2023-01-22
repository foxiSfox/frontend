<script>
    import { Button, Table } from 'sveltestrap';
    import { usersMock, userId } from '../../../modules/users/store/index';
    import Modal from '../../../modules/users/components/modalUserCreate.svelte'

    let users;
    usersMock.subscribe(value => {
        users = value;
    });

    let id;
    userId.subscribe(userId => {
        id = userId
    });

    let openScrollable = false;
    const toggleFormCreateUser = () => (openScrollable = !openScrollable);

    function onUserDelete(userId) {
        usersMock.update(value => {
            return value.filter((item) => item.id !== userId);
        })
    }
</script>
<h1>Users</h1>
<div class="users">
    <Button color="success" on:click={() => openScrollable = true}>Create</Button>
    <Table striped>
        <thead>
        <tr>
            <th>id</th>
            <th>Name</th>
            <th>Last Name</th>
            <th>Birthday</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        {#each users as user, i (user.id)}
            <tr>
                <th scope="row">
                    <a href="/users/{user.id}">{user.id}</a>
                </th>
                <td>{user.name}</td>
                <td>{user.lastName}</td>
                <td>{user.birthday}</td>
                <td><Button type="button" color="danger" on:click={() => onUserDelete(user.id)}>Delete</Button></td>
            </tr>
        {/each}
        </tbody>
    </Table>
    <Modal openScrollable="{openScrollable}" on:open={toggleFormCreateUser}/>
</div>