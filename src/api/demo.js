import { icity } from './adapter';

export const getPing = async () => await icity.get('./ping');
