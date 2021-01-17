<script>
  import { players, activePlayer } from "../stores";

  // function subTotal(ordinal, i) {
  //   console.log("subtotal:", ordinal, i);

  //   return $players[i][ordinal].reduce((total, score) => {
  //     let newScore = total + score;
  //     return newScore >= 45 ? 45 : newScore;
  //   });
  // }

  // $: primaryScore = idx => subTotal("primary", idx);
  // $: secondaryScore = idx => subTotal("secondaries", idx);

  $: primaryPlayer0 = $players[0].primary.reduce((total, score) => {
    let newScore = total + score;
    return newScore >= 45 ? 45 : newScore;
  });
  $: secondaryPlayer0 = $players[0].secondaries.reduce((total, score) => {
    let newScore = total + score;
    return newScore >= 45 ? 45 : newScore;
  });

  $: primaryPlayer1 = $players[1].primary.reduce((total, score) => {
    let newScore = total + score;
    return newScore >= 45 ? 45 : newScore;
  });
  $: secondaryPlayer1 = $players[1].secondaries.reduce((total, score) => {
    let newScore = total + score;
    return newScore >= 45 ? 45 : newScore;
  });
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
    z-index: 1000;
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
    .scoreBoard {
      justify-content: center;
    }
    .playerScore {
      padding: 0rem 0rem;
      width: 50%;
      font-size: 0.75rem;
    }
    .scoreBoardContent {
      padding: 0.5rem 1rem;
    }
    .totalScore {
      font-size: 2.5rem;
      font-weight: bolder;
      padding-left: 1.5rem;
    }
  }
</style>

<div class="scoreBoard">
  <!-- {#each $players as player, index} -->
  <div class="playerScore">
    <div class="scoreBoardContent">
      <div>
        <div class="playerName">
          {$players[0].name ? $players[0].name : `Player ${$players[0].playerID}`}
        </div>
        <div>Primary: {primaryPlayer0}</div>
        <div>Secondary: {secondaryPlayer0}</div>
        <div>CP: {$players[0].cp}</div>
      </div>
      <div class="totalScore">{primaryPlayer0 + secondaryPlayer0}</div>
    </div>
  </div>
  <!-- {/each} -->
  <div class="playerScore">
    <div class="scoreBoardContent">
      <div>
        <div class="playerName">
          {$players[1].name ? $players[1].name : `Player ${$players[1].playerID}`}
        </div>
        <div>Primary: {primaryPlayer1}</div>
        <div>Secondary: {secondaryPlayer1}</div>
        <div>CP: {$players[1].cp}</div>
      </div>
      <div class="totalScore">{primaryPlayer1 + secondaryPlayer1}</div>
    </div>
  </div>
</div>
