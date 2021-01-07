<script>
  import Game from "./game";
</script>

<style>
  :global(body) {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #fcfcfc;
  }
  h1,
  h5 {
    margin: 12px;
    text-align: left;
  }
  p {
    font-size: 1rem;
  }
  .App {
    text-align: center;
  }
  .App-header {
    background-color: blueviolet;
    box-shadow: 0px 5px 5px #dddddd;
    color: #eeeeee;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    align-content: flex-start;
    justify-content: space-between;
    font-size: calc(10px + 2vmin);
  }
  .links {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
  }
  .links p {
    margin: 6px;
  }
  @media only screen and (max-width: 795px) {
    .App-header {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: auto;
    }
    h1,
    h5 {
      margin: 1rem 2rem 0.5rem 2rem;
      text-align: center;
    }
    .links {
      width: 100%;
      flex-direction: row;
      justify-content: space-around;
      background-color: blueviolet;
      height: auto;
    }
  }
</style>

<div class="App">
  <header class="App-header">
    <!-- <h1>バトルフォーカス</h1> -->
    <div>
      <h1>Battleseer</h1>
      <h5>A Warhammer 40,000 9th Ed. GT mission scoring tool</h5>
    </div>
    <div class="links">
      <p>
        By
        <a href="https://github.com/Dirk-tooth/">Dirk-tooth</a>
      </p>
      <p>
        Github
        <a href="https://github.com/Dirk-tooth/Battleseer">repo</a>
      </p>
      <p>
        Twitter
        <a href="https://twitter.com/T_rev">@T_rev</a>
      </p>
    </div>
  </header>
  <Game />
</div>
