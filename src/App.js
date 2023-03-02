import "./App.scss";

function App() {
  return (
    <main class="wrapper">
      <header>
        <div class="headerFlex">
          <h1>PICaCOLOUR</h1>
          <h2>An image search with a colourful twist</h2>
        </div>

        <form action="#">
          <div class="searchBar">
            <label for="searchInput">I want to see images of</label>
            <input type="text" placeholder="cities" id="searchInput" required />
          </div>

          <div class="colourSelector">
            <label for="colourSelection">that have a lot of</label>
            <select
              name="colourSelection"
              class="colourSelection"
              id="colourSelection"
              autocomplete="off"
              required
            >
              <option value="" selected disabled hidden>
                choose colour
              </option>
            </select>
            <input type="submit" value="Search" />
          </div>
        </form>
      </header>

      <section class="results"></section>

      <footer>
        <p>
          Created by
          <a href="https://github.com/willsmores" target="_blank">
            @willsmores
          </a>
          <br />
          and powered by
          <a href="https://pixabay.com/api/docs/" target="_blank">
            Pixabay API
          </a>
        </p>
      </footer>
    </main>
  );
}

export default App;
