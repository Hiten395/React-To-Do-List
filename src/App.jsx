import './App.css'

function App() {
  
    function toggleTheme(){
        document.body.classList.toggle('dark');
    }

    return (
    <>
        <div className="container">

            <div className="left">
            <header>
                <h1 id="head">🏡 Home</h1>
                <button onClick={toggleTheme}>Toggle Mode</button>
            </header>

            <main id = "main">
            <div id="tasks">
            </div>
            <div id="add">
                <button onclick="AddGoal()">Add Goal</button>
            </div>
            <br/>
            <div id="input">    
            </div>
            </main>

            <footer>Built for students • Minimal • Mindful</footer>
            </div>

            <div className="right">
            <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773" alt="Relaxing nature" />
            <h2>Build Calm. Build Consistency.</h2>
            <p>
                Small habits done daily create massive change.  
                Stay focused, stay mindful, and let progress follow naturally.
            </p>
            </div>

        </div>
    </>
  )
}

export default App
