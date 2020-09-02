<script>
  import ScoreButton from "./scoreButton.svelte";
  import Meta from "./meta.svelte";
  import Scores from "./scores.svelte";

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
    background-color: red;
    margin: 3rem;
  }
</style>

<div class="player">
  <Meta
    name={playerData.name}
    cp={playerData.cp}
    faction={playerData.faction} />

  <Scores
    type={'primary'}
    scoreHeaders={['Primary Turn 2', 'Primary Turn 3', 'Primary Turn 4', 'Primary Turn 5']}
    seedArray={[5, 10, 15]}
    primaryScoreArray={playerData.primary}
    scoreCallback={(turn, newScore) => scorePrimaries(turn, newScore)}
    totalScore={primariesScore} />

  <Scores
    type={'secondary'}
    scoreHeaders={['Secondary 1', 'Secondary 2', 'Secondary 3']}
    seedArray={Array.from(Array(15), (_, i) => i + 1)}
    primaryScoreArray={playerData.secondaries}
    scoreCallback={(turn, newScore) => scoreSecondaries(turn, newScore)}
    totalScore={secondariesScore} />

  <p>Total Points</p>
  <p>{primariesScore + secondariesScore}</p>
</div>
