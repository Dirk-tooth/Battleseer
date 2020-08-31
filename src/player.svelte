<script>
  import ScoreButton from "./scoreButton.svelte";

  const playerData = {
    name: "",
    cp: 0,
    faction: "",
    primary: [0, 0, 0, 0],
    secondaries: [0, 0, 0]
  };

  export let playerID;

  function scorePrimaries(turn, newScore) {
    playerData.primary = playerData.primary.map((currentScore, idx) =>
      turn === idx ? (newScore === currentScore ? 0 : newScore) : currentScore
    );
  }

  $: primariesScore = playerData.primary.reduce((total, score) => {
    let newScore = total + score;
    return newScore >= 45 ? 45 : newScore;
  });
</script>

<style>
  .player {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    align-content: space-between;
  }
  .selected {
    background-color: blueviolet;
  }
</style>

<div class="player">
  <div>
    <label for="player-name">Player name</label>
    <input id="player-name" type="string" value={playerData.name} />
  </div>
  <div>
    <label for="CP">CP</label>
    <input id="CP" type="number" min="0" />
  </div>
  <div>
    <label for="faction">Faction</label>
    <input id="faction" type="string" />
  </div>
  <p>Primary turn 2</p>
  <button
    class={playerData.primary[0] === 5 ? 'selected' : 'unselected'}
    on:click={() => scorePrimaries(0, 5)}>
    5
  </button>
  <button
    class={playerData.primary[0] === 10 ? 'selected' : 'unselected'}
    on:click={() => scorePrimaries(0, 10)}>
    10
  </button>
  <button
    class={playerData.primary[0] === 15 ? 'selected' : 'unselected'}
    on:click={() => scorePrimaries(0, 15)}>
    15
  </button>
  <p>Primary turn 3</p>
  <button
    class={playerData.primary[1] === 5 ? 'selected' : 'unselected'}
    on:click={() => scorePrimaries(1, 5)}>
    5
  </button>
  <button
    class={playerData.primary[1] === 10 ? 'selected' : 'unselected'}
    on:click={() => scorePrimaries(1, 10)}>
    10
  </button>
  <button
    class={playerData.primary[1] === 15 ? 'selected' : 'unselected'}
    on:click={() => scorePrimaries(1, 15)}>
    15
  </button>
  <p>Primary turn 4</p>
  <button
    class={playerData.primary[2] === 5 ? 'selected' : 'unselected'}
    on:click={() => scorePrimaries(2, 5)}>
    5
  </button>
  <button
    class={playerData.primary[2] === 10 ? 'selected' : 'unselected'}
    on:click={() => scorePrimaries(2, 10)}>
    10
  </button>
  <button
    class={playerData.primary[2] === 15 ? 'selected' : 'unselected'}
    on:click={() => scorePrimaries(2, 15)}>
    15
  </button>
  <p>Primary turn 5</p>
  <button
    class={playerData.primary[3] === 5 ? 'selected' : 'unselected'}
    on:click={() => scorePrimaries(3, 5)}>
    5
  </button>
  <button
    class={playerData.primary[3] === 10 ? 'selected' : 'unselected'}
    on:click={() => scorePrimaries(3, 10)}>
    10
  </button>
  <button
    class={playerData.primary[3] === 15 ? 'selected' : 'unselected'}
    on:click={() => scorePrimaries(3, 15)}>
    15
  </button>
  <p>Total Primary Points</p>
  <p>{primariesScore}</p>
  <p>Secondary 1</p>
  {#each Array.from(Array(15), (_, i) => i + 1) as idx}
    <ScoreButton
      index={1}
      currentValue={playerData.secondaries[0]}
      thisValue={idx}
      scoreCallback={() => {}} />
  {/each}
  <p>Secondary 2</p>
  <p>Secondary 3</p>
  <p>Total Secondary Points</p>
  <p>Total Points</p>
</div>
