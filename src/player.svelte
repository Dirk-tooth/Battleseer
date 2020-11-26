<script>
  import Meta from "./meta.svelte";
  import Primaries from "./primaries.svelte";
  import Secondaries from "./secondaries.svelte";

  const playerData = {
    name: "",
    cp: 0,
    faction: "",
    primary: [0, 0, 0, 0],
    secondaries: [0, 0, 0]
  };

  function scorePrimaries(turn, newScore) {
    playerData.primary = playerData.primary.map((currentScore, idx) =>
      turn === idx ? (newScore === currentScore ? 0 : newScore) : currentScore
    );
  }

  function scoreSecondaries(objective, newScore) {
    playerData.secondaries = playerData.secondaries.map((currentScore, idx) =>
      objective === idx
        ? newScore === currentScore
          ? 0
          : newScore
        : currentScore
    );
  }

  $: primariesScore = playerData.primary.reduce((total, score) => {
    let newScore = total + score;
    return newScore >= 45 ? 45 : newScore;
  });

  $: secondariesScore = playerData.secondaries.reduce((total, score) => {
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
    align-items: center;
    /* background-color: red; */
    margin: 3rem;
  }
  .total-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    border: 1px black solid;
    margin: 1rem;
  }
</style>

<div class="player">
  <Meta
    name={playerData.name}
    cp={playerData.cp}
    faction={playerData.faction} />

  <Primaries
    scoreHeaders={['Turn 2', 'Turn 3', 'Turn 4', 'Turn 5']}
    seedArray={[5, 10, 15]}
    primaryScoreArray={playerData.primary}
    scoreCallback={(turn, newScore) => scorePrimaries(turn, newScore)}
    totalScore={primariesScore} />

  <Secondaries
    scoreHeaders={['Secondary 1', 'Secondary 2', 'Secondary 3']}
    seedArray={Array.from(Array(15), (_, i) => i + 1)}
    primaryScoreArray={playerData.secondaries}
    scoreCallback={(turn, newScore) => scoreSecondaries(turn, newScore)}
    totalScore={secondariesScore} />

  <div class="total-container">
    <h1>Total Points</h1>
    <h1>{primariesScore + secondariesScore} / 90</h1>
  </div>
</div>
