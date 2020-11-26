<script>
  import Player from "./player.svelte";
</script>

<style>
  .game {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    justify-content: space-around;
    align-content: space-around;
    align-items: center;
  }
  @media only screen and (max-width: 795px) {
    .game {
      flex-direction: column;
    }
  }
</style>

<div class="game">
  <Player playerID={1} />
  <Player playerID={2} />
</div>
