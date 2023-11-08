import type { Session } from '@supabase/supabase-js';

export enum AlertType {
	ERROR = 'error',
	SUCCESS = 'success'
}

export enum AuthAction {
	SIGN_IN = 'signIn',
	SIGN_OUT = 'signOut',
	GET_SESSION = 'getSession'
}

export type AuthActionMessage =
	| { action: AuthAction.SIGN_IN; email: string }
	| { action: AuthAction.SIGN_OUT }
	| { action: AuthAction.GET_SESSION };

export type AuthResponse = {
	alertType: AlertType;
	alertText: string;
	sessionData?: Session;
};

export type AuthActionResponseHandler = (response: AuthResponse) => void;
