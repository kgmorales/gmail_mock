import React, { createContext, useState } from 'react';
import { messages } from './services/utils';

export const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
	const iconList = [
		{
			menuLeft: [
				{
					name: 'plus',
					size: '2x',
				},
				{
					name: 'inbox',
					size: 'sm',
				},
				{
					name: 'star',
					size: 'sm',
				},
				{
					name: 'clock',
					size: 'sm',
				},
				{
					name: 'chevron-right',
					size: 'sm',
				},
				{
					name: 'plane',
					size: 'sm',
				},
			],
		},
		{
			menuRight: [
				{
					name: 'calendar',
					size: 'lg',
				},
				{
					name: 'sticky-note',
					size: 'lg',
				},
				{
					name: 'file',
					size: 'lg',
				},
			],
		},
		{
			titleInfo: [
				{
					name: 'print',
					size: 'lg',
				},
				{
					name: 'share',
					size: 'lg',
				},
			],
		},
		{
			headerIcons: [
				{
					name: 'question-circle',
					size: 'lg',
				},
				{
					name: 'cog',
					size: 'lg',
				},
				{
					name: 'th',
					size: 'lg',
				},
			],
		},
	];
	const [icons, setIcons] = useState(iconList);
	const [emails, setEmails] = useState(messages);
	const [selected, setSelected] = useState([]);
	const [toMessage, setToMessage] = useState(false);

	return (
		<MessageContext.Provider
			value={{
				icons: [icons, setIcons],
				emails: [emails, setEmails],
				selected: { selected, setSelected },
				toMessage: { toMessage, setToMessage },
			}}>
			{children}
		</MessageContext.Provider>
	);
};
