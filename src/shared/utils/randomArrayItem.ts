import {randomInt} from './randomInt';

export const randomArrayItem = <T>(arr: T[]) =>
	arr[randomInt(0, arr.length - 1)];
