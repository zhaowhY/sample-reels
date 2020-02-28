import { demo } from './adapter';

export const getPing = async () => await demo.get('./ping');
