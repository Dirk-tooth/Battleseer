<script>
  import { players, activePlayer } from "./stores";
  import Player from "./components/player";
  import ScoreBoard from "./components/scoreBoard";
</script>

<style>
  .game {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    justify-content: space-around;
    align-content: space-around;
    align-items: center;
  }
  .players {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    justify-content: space-around;
    align-content: space-around;
    align-items: center;
  }
  @media only screen and (max-width: 795px) {
    .players {
      flex-direction: column;
    }
  }
</style>

<div class="game">
  <ScoreBoard />
  <div class="players">
    {#each $players as player, index}
      <Player playerID={player.playerID} />
    {/each}
  </div>
</div>
