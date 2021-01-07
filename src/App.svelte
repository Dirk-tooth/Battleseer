<script>
  import Game from "./game";
</script>

<style>
  :global(body) {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #fcfcfc;
  }
  h3,
  h6 {
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
    align-items: baseline;
    align-content: baseline;
    justify-content: flex-start;
    font-size: calc(10px + 2vmin);
  }
  .footer {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 100%;
    background-color: aquamarine;
    padding: 12px 6px;
  }
  @media only screen and (max-width: 795px) {
    .App-header {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: auto;
    }
    h3,
    h6 {
      margin: 0.5rem 2rem 0.25rem 2rem;
      text-align: center;
    }
    .footer {
      width: 100%;
      flex-direction: row;
      justify-content: space-around;
      height: auto;
    }
  }
</style>

<div class="App">
  <header class="App-header">
    <!-- <h1>バトルフォーカス</h1> -->
    <h3>Battleseer</h3>
    <h6>A Warhammer 40,000 9th Ed. GT mission scoring tool</h6>
  </header>
  <Game />
  <div class="footer">
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
</div>
