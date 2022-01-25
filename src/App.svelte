<script>
  import Game from './game';
</script>

<div class="App">
  <header class="App-header">
    <!-- <h1>バトルフォーカス</h1> -->
    <h3>Battleseer</h3>
    <h6>A Warhammer 40,000 9th Ed. GT mission scoring tool</h6>
  </header>
  <div class="banner">
    We are working to update this app for the new 2022 GT Mission Pack changes.
    We plan to have this change completed by the end of Jan 2022!
  </div>
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
    <p>
      icon by
      <a target="_blank" href="https://icons8.com">Icons8</a>
    </p>
  </div>
</div>

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

  .banner {
    background-color: #e22e2c;
    color: #eeeeee;
    padding: 1rem;
    font-weight: bold;
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
    padding: 4px 0px;
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
      padding: 12px 0px;
    }
  }
</style>
