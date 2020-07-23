import { instance } from './adapter';

export const getPing = async () => await instance.get('./ping');
