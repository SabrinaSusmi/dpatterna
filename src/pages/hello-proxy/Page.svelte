<script>
  import { getState } from "./proxy-provider";
  let selectedAction = "off";
  let action = ["off", "on"];

  $: state = getState(selectedAction);

  $: src = `./images/gate-state/${state}.png`;

</script>

<style>
  img {
    max-width: 100%;
    max-height: 100%;
  }
  .portrait {
    height: 300px;
    width: 500px;
  }
  table,
  th,
  td {
    border: 1px solid black;
    border-collapse: collapse;
    text-align: center;
  }

</style>

<h1>Proxy Pattern</h1>

<h2>VPN Actions</h2>

<select bind:value={selectedAction}>
  {#each action as message}
    <option value={message}>{message}</option>
  {/each}
</select>

<p>Current action: {selectedAction}. Resulted status: {state}</p>

<div class="portrait"><img {src} alt={state} /></div>
