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
    overflow: hidden;
    top: 0;
    width: 100%;
    display: flex;
    background-color: #355360;
    justify-content: space-around;
    border-top: 2px solid white;
  }
  .playerScore {
    color: #334;
    transform: skew(-20deg);
    padding: 0rem 3rem;
    width: 20%;
    background-color: #7fffd4;
    border-left: 2px solid white;
    border-right: 2px solid white;
  }
  .scoreBoardContent {
    text-align: left;
    display: flex;
    padding: 1rem;
    transform: skew(20deg);
    justify-content: space-between;
    align-items: center;
  }
  .playerName {
    width: 100%;
    overflow: hidden;
    font-size: 1.25rem;
    font-weight: bold;
  }
  .totalScore {
    font-size: 4rem;
    font-weight: bolder;
  }

  @media only screen and (max-width: 795px) {
    .playerScore {
      /* color: #334;
      transform: skew(-20deg); */
      padding: 0rem 0rem;
      width: auto;
      /* background-color: #7fffd4;
      border-left: 2px solid white;
      border-right: 2px solid white; */
      font-size: 0.75rem;
    }
    .scoreBoardContent {
      /* text-align: left;
      display: flex; */
      padding: 0.5rem 1rem;
      /* transform: skew(20deg);
      justify-content: space-between;
      align-items: center; */
    }
    .totalScore {
      font-size: 3rem;
      font-weight: bolder;
      padding-left: 1.5rem;
    }
  }
</style>

<div class="scoreBoard">
  {#each $players as player, index}
    <div class="playerScore">
      <div class="scoreBoardContent">
        <div>
          <div class="playerName">
            {player.name ? player.name : `Player ${player.playerID}`}
          </div>
          <div>Primary: {primaryScore(index)}</div>
          <div>Secondary: {secondaryScore(index)}</div>
        </div>
        <div class="totalScore">
          {primaryScore(index) + secondaryScore(index)}
        </div>
      </div>
    </div>
  {/each}
</div>
