<script>
export let value = 0
</script>

<div>
  <input type="number" bind:value>
  <button on:click={() => value++}>count</button>
</div>

<style>
input, button {
  padding: 0.4em;
}
</style>
