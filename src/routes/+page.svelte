
<div class="text-center pt-32">
	<h1 class="text-6xl">Petname Generator</h1>

	<div class="mt-8">
		<Button on:click={generate}>Generate !</Button>
	</div>

	<div class="mt-8">
		{#if generatedPetName}
			<p class="text-4xl">{generatedPetName}</p>
		{/if}
	</div>
</div>


<script lang="ts">
	import { Button } from '$lib/components/ui/button';

	export let data;

	let generatedPetName = '';

	const generate = () => {
		// pick random nouns from the data
		const nouns = data.small.nouns[Math.floor(Math.random() * data.small.nouns.length)];
		const adjectives = data.small.adjectives[Math.floor(Math.random() * data.small.adjectives.length)];
		const adverbs = data.small.adverbs[Math.floor(Math.random() * data.small.adverbs.length)];

		generatedPetName = `${adverbs}-${adjectives}-${nouns}`;
	}

	console.log('here', data);
</script>