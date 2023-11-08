import type { PageServerLoad } from './$types';

import { superValidate } from 'sveltekit-superforms/server';

import { EmailAuthValidationSchema } from '$lib/validations/authValidationSchemas';

export const load = (async () => {
	const emailForm = await superValidate(EmailAuthValidationSchema);

	return {
		emailForm
	};
}) satisfies PageServerLoad;
