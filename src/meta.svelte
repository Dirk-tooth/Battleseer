<script>
  export let name, cp, faction;
</script>

<style>
  .meta {
    /* background-color: chartreuse; */
    width: 100%;
  }
  .name {
    width: 100%;
    padding: 0 1rem;
  }
  .name input {
    width: auto;
  }
  .second-row {
    display: flex;
  }
  .cp {
    width: 25%;
  }
  .cp input {
    width: 20%;
  }
  .faction {
    width: 80%;
  }
</style>

<div class="meta">
  <div class="name">
    <label for="player-name">Player name</label>
    <input id="player-name" type="string" value={name} />
  </div>
  <div class="second-row">
    <div class="cp">
      <label for="CP">CP</label>
      <input id="CP" type="number" min="0" value={cp} />
    </div>
    <div class="faction">
      <label for="faction">Faction</label>
      <input id="faction" type="string" value={faction} />
    </div>
  </div>
</div>
