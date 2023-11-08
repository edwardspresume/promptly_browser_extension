import type { AuthActionMessage, AuthActionResponseHandler } from './types';

export const sendAuthActionToServiceWorker = (
	message: AuthActionMessage,
	callback: AuthActionResponseHandler = () => {}
) => {
	chrome.runtime.sendMessage(message, callback);
};
