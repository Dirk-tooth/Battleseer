<script>
  import Game from "./game.svelte";

  const message = "Learn Svelte";
</script>

<style>
  :global(body) {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #fcfcfc;
  }
  h1,
  h5 {
    margin: 12px;
    text-align: right;
  }
  .App {
    text-align: center;
  }
  .App-header {
    background-color: blueviolet;
    box-shadow: 0px 5px 5px #dddddd;
    color: #eeeeee;
    height: 72px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    font-size: calc(10px + 2vmin);
  }
  @media only screen and (max-width: 795px) {
    .App-header {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: auto;
    }
    h1,
    h5 {
      margin: 1rem 2rem 0.5rem 2rem;
      text-align: center;
    }
  }
</style>

<div class="App">
  <header class="App-header">
    <!-- <h1>バトルフォーカス</h1> -->
    <h1>Battleseer</h1>
    <h5>A Warhammer 40,000 9th Ed. GT mission scoring tool</h5>
  </header>
  <Game />
</div>
