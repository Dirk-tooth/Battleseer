<script>
  const playerData = {
    name: "Steve",
    cp: 0,
    faction: "",
    primary: [0, 0, 0, 0],
    secondaries: [
      { name: "", score: 0 },
      { name: "", score: 0 },
      { name: "", score: 0 }
    ]
  };

  export let playerID;
</script>

<style>
  .player {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    align-content: space-between;
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
  <div>
    <input type="radio" id="5" name="drone" value={5} />
    <label for="5">5</label>
  </div>

  <div>
    <input type="radio" id="10" name="drone" value={10} />
    <label for="10">10</label>
  </div>

  <div>
    <input type="radio" id="15" name="drone" value={15} />
    <label for="15">15</label>
  </div>
  <p>Primary turn 3</p>
  <div>
    <input type="radio" id="5" name="drone" value={5} />
    <label for="5">5</label>
  </div>

  <div>
    <input type="radio" id="10" name="drone" value={10} />
    <label for="10">10</label>
  </div>

  <div>
    <input type="radio" id="15" name="drone" value={15} />
    <label for="15">15</label>
  </div>
  <p>Primary turn 4</p>
  <div>
    <input type="radio" id="5" name="drone" value={5} />
    <label for="5">5</label>
  </div>

  <div>
    <input type="radio" id="10" name="drone" value={10} />
    <label for="10">10</label>
  </div>

  <div>
    <input type="radio" id="15" name="drone" value={15} />
    <label for="15">15</label>
  </div>
  <p>Primary turn 5</p>
  <div>
    <input type="radio" id="5" name="drone" value={5} />
    <label for="5">5</label>
  </div>

  <div>
    <input type="radio" id="10" name="drone" value={10} />
    <label for="10">10</label>
  </div>

  <div>
    <input type="radio" id="15" name="drone" value={15} />
    <label for="15">15</label>
  </div>
  <p>Total Primary Points</p>
  <p>Secondary 1</p>
  <p>Secondary 2</p>
  <p>Secondary 3</p>
  <p>Total Secondary Points</p>
  <p>Total Points</p>
</div>
