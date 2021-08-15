<script>

  import {action} from "./light-controller.ts"

  let commands = {
    on: "on",
    off : "off",
    red0: "red/0",
    red1: "red/1",
    red2: "red/2",
    red3: "red/3",
  };

  let command = "on"

  let src = `./images/light-receiver/${commands[command]}.png`;

  function onPress(string){
        $: command=action(string);
        $: src=`./images/light-receiver/${commands[command]}.png`;
    }

</script>

<style>
  .btn-group button {
    padding: 10px 24px;
    cursor: pointer;
    width: 20%;
    display: block;
  }

  .btn-group button:not(:last-child) {
    border-bottom: none; /* Prevent double borders */
  }

  /* Add a background color on hover */
  .btn-group button:hover {
    filter: brightness(85%);
  }

  .decrease-lum {
    background-color: #a9c1c9;
  }
  .red-light {
    background-color: #f44336;
  }
  .increase-lum {
    background-color: #8bb19b;
  }
  .on {
    background-color: #e7e7e7;
    color: black;
  }
  .off {
    background-color: #555555;
    color: white;
  }
  img {
    max-width: 100%;
    max-height: 100%;
  }
  .portrait {
    height: 300px;
    width: 500px;
  }

</style>

<h1>Command buttons</h1>

<div class="btn-group">
  <button class="on" on:click={()=>{onPress('on')}}>On</button>
  <button class="off" on:click={()=>{onPress('off')}}>Off</button>

  <button class="increase-lum" on:click={()=>{onPress('increase-lum')}}>+</button>
  <button class="decrease-lum" on:click={()=>{onPress('decrease-lum')}}>-</button>

  <button class="red-light" on:click={()=>{onPress('red-light')}}>Red</button>
</div>

<div class="portrait"><img {src} alt={src} /></div>
