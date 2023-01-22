<script>
    import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label } from 'sveltestrap';
    import { usersMock, userId } from './../store/index';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    let name = ''
    let lastName = ''
    let birthday = ''

    let invalidFields = [];

    let users;
    usersMock.subscribe(value => {
        users = value;
    });

    let id;
    userId.subscribe(userId => {
        id = userId
    });

    export let openScrollable = false;
    const toggleFormCreateUser = () => {
        dispatch('open', false);
    };

    function onSubmitFromUserCreate() {
        invalidFields = []
        if (!name.length) {
            invalidFields.push('name')
        }

        if (!lastName.length) {
            invalidFields.push('lastName')
        }

        if (!birthday.length) {
            invalidFields.push('birthday')
        }

        if (invalidFields.length) {
            return
        }

        userId.update(id => ++id);

        usersMock.update(users => {
            const newUser = {
                id,
                name,
                lastName,
                birthday,
            };
            return [...users, newUser];
        })

        toggleFormCreateUser()
    }
</script>

<Modal isOpen={openScrollable} toggle={toggleFormCreateUser} scrollable>
    <form on:submit|preventDefault={onSubmitFromUserCreate}>
        <ModalHeader toggle={toggleFormCreateUser}>Create User</ModalHeader>
        <ModalBody>
            <Form>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="text" invalid="{invalidFields.includes('name')}" name="name" id="name" placeholder="Enter your name" bind:value="{name}"/>
                </FormGroup>
                <FormGroup>
                    <Label for="lastName">Last Name</Label>
                    <Input type="text" invalid="{invalidFields.includes('lastName')}" name="lastName" id="lastName" placeholder="Enter your last name" bind:value={lastName}/>
                </FormGroup>
                <FormGroup>
                    <Label for="birthday">Date of Birth</Label>
                    <Input type="date" invalid="{invalidFields.includes('birthday')}" name="birthday" id="birthday" bind:value={birthday}/>
                </FormGroup>
            </Form>
        </ModalBody>
        <ModalFooter>
            <Button type="submit" color="primary">Create</Button>
            <Button type="button" color="secondary" on:click={toggleFormCreateUser}>Cancel</Button>
        </ModalFooter>
    </form>
</Modal>