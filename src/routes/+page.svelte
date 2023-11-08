<script>
	import { superForm } from 'sveltekit-superforms/client';

	import { EmailAuthValidationSchema } from '$lib/validations/authValidationSchemas';

	export let data;

	const { enhance, form, errors } = superForm(data.emailForm, {
		SPA: true,
		resetForm: true,
		validators: EmailAuthValidationSchema,

		onUpdate: async ({ form }) => {
			if (form.valid) {
				console.log(form);
			}
		}
	});
</script>

<form method="POST" use:enhance class="grid gap-2 w-full">
	<input bind:value={$form.email} placeholder="Email" class="text-black p-2" />

	<p class="text-red-500 min-h-[2rem]">{$errors.email || ''}</p>

	<button class="border p-2">Sign In</button>
</form>
