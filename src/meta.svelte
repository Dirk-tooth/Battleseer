<script>
  export let name, cp, faction;
</script>

<style>
  .meta {
    background-color: chartreuse;
    width: 100%;
  }
</style>

<div class="meta">
  <div>
    <label for="player-name">Player name</label>
    <input id="player-name" type="string" value={name} />
  </div>
  <div>
    <label for="CP">CP</label>
    <input id="CP" type="number" min="0" value={cp} />
  </div>
  <div>
    <label for="faction">Faction</label>
    <input id="faction" type="string" value={faction} />
  </div>
</div>
