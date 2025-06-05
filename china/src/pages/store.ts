import user from '@/models/user';
import { createStore } from 'ice';
console.log('app store depend on window', window);
export default createStore({ user });