import { usersMock } from '../../../../modules/users/store/index';

/**
 * @type {any[]}
 */
let users;
usersMock.subscribe(value => {
  users = value;
});

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  return users.find(user => user.id === parseInt(params.slug))
}
