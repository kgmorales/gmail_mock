import emails from './email.json';

//I used mockaroo.com for random api data.
export const messages = emails;

export const getEmailDetails = (x, y) => x.filter((x) => x.id === Number(y));
export const getIcons = (x, y) =>
	x
		.map((x) => x[y])
		.filter((x) => x !== undefined)
		.flat();
