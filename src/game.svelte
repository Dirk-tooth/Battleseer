<script>
  import Player from "./player.svelte";
</script>

<style>
  .game {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    justify-content: center;
  }
</style>

<div class="game">
  <Player playerID={1} />
  <Player playerID={2} />
</div>
