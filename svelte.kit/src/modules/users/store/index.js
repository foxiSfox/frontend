import { writable } from 'svelte/store';

export const usersMock = writable([
    { id: 1, name: 'Pavel', lastName: 'Volkov', birthday: '1980-03-25'},
    { id: 2, name: 'Olya', lastName: 'Ivanova', birthday: '1976-03-25'},
]);

export const userId = writable(2);
