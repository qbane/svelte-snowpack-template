<script>
import Counter from './Counter.svelte'
let count = 42
</script>

<div class="container">
  <h1>Hello, Svelte!</h1>
  <p>Your user agent is: <strong>{window.navigator.userAgent}</strong>.</p>
  <div>
    <Counter bind:value={count}></Counter>
    <p>The value of counter is <code>{count}</code>.</p>
  </div>
</div>

<style>
/* ... */
</style>
