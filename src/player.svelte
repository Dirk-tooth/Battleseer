<script>
  export let playerID = null;

  import { players, activePlayer } from "./stores.js";

  import Meta from "./meta.svelte";
  import Primaries from "./primaries.svelte";
  import Secondaries from "./secondaries.svelte";

  $: primariesScore = $players[playerID - 1].primary.reduce((total, score) => {
    let newScore = total + score;
    return newScore >= 45 ? 45 : newScore;
  });

  $: secondariesScore = $players[playerID - 1].secondaries.reduce(
    (total, score) => {
      let newScore = total + score;
      return newScore >= 45 ? 45 : newScore;
    }
  );
</script>

<style>
  .player {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    align-content: space-between;
    align-items: center;
    /* background-color: red; */
    margin: 3rem;
    flex-basis: 50%;
  }
  .total-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    border: 1px black solid;
    margin: 1rem;
  }
  @media only screen and (max-width: 795px) {
    .player {
      margin: 1rem;
      flex-basis: 100%;
    }
    .total-container {
      margin: 1rem 0.25rem;
    }
  }
</style>

<div class="player">
  <Meta {playerID} />

  <Primaries
    scoreHeaders={['Primary Turn 2', 'Primary Turn 3', 'Primary Turn 4', 'Primary Turn 5']}
    seedArray={[5, 10, 15]}
    {playerID} />

  <Secondaries
    scoreHeaders={['Secondary 1', 'Secondary 2', 'Secondary 3']}
    seedArray={Array.from(Array(15), (_, i) => i + 1)}
    {playerID} />

  <div class="total-container">
    <h1>Total Points</h1>
    <!-- ToDo - calc total score from stste somehow ??? -->
    <h1>{primariesScore + secondariesScore} / 90</h1>
  </div>
</div>
