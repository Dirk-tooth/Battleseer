<script>
  import { players, activePlayer } from "../stores";

  function subTotal(ordinal, i) {
    return $players[i][ordinal].reduce((total, score) => {
      let newScore = total + score;
      return newScore >= 45 ? 45 : newScore;
    });
  }

  $: primaryScore = idx => subTotal("primary", idx);
  $: secondaryScore = idx => subTotal("secondaries", idx);
</script>

<style>
  .scoreBoard {
    position: sticky;
    top: 0;
    background-color: aquamarine;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  .playerScore {
    padding: 1rem;
  }
</style>

<div class="scoreBoard">
  {#each $players as player, index}
    <div class="playerScore">
      {player.name ? player.name : `Player ${player.playerID}`}: {primaryScore(index) + secondaryScore(index)}
    </div>
  {/each}
</div>
