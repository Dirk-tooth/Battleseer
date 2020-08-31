<script>
  import Game from "./game.svelte";

  const message = "Learn Svelte";
</script>

<style>
  :global(body) {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
  h1,
  h5 {
    margin: 12px;
  }
  .App {
    text-align: center;
  }
  .App-header {
    background-color: #f9f6f6;
    color: #333;
    height: 72px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    font-size: calc(10px + 2vmin);
  }
</style>

<div class="App">
  <header class="App-header">
    <h1>Battleseer</h1>
    <h5>A Warhammer 40,000 9th Ed. GT mission scoring tool</h5>
  </header>
  <Game />
</div>
