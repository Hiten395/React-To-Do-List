import { useState } from 'react';
import './App.css';
import AddGoal from './AddGoal/AddGoal';

function App() {
    // 1. Keep track of tasks in a state array
    const [tasks, setTasks] = useState([]);

    // 2. Keep track of whether we are showing the input form
    const [showInput, setShowInput] = useState(false);

    const [username, setUsername] = useState('');

    function toggleTheme() {
        document.body.classList.toggle('dark');
    }

    function NewUser() {
        var name = document.getElementById('Name').value;
        if (name.trim() === '')
        {
            return;
        }
        console.log(name);
        setUsername(name.trim());
    }

    // Function to add a new task to our state array
    function handleAddTask(newTask) {
        setTasks([...tasks, newTask]);
        setShowInput(false); // Hide the input form after adding
    }

    // Function to remove a task
    function handleDeleteTask(indexToRemove) {
        setTasks(tasks.filter((_, index) => index !== indexToRemove));
    }

    return (
        <div className="container">
            <div className="left">
                <header>
                    <h1 id="head">🏡 Home</h1>
                    <button onClick={toggleTheme}>Toggle Mode</button>
                </header>
                <main id="main">
                {(username === '') ? (
                    <div className="login">
                        <input
                            id='Name'
                            type="text"
                            placeholder="Enter Name" 
                            // value={username}
                            //onChange={(e) => NewUser(e.target.value)}
                        />
                        <button onClick={() => NewUser()}>Start</button>
                    </div>
                ) : (
                    <>
                            <div id="tasks">
                            {/* 3. Loop through your tasks state and render them */}
                            {tasks.map((task, index) => (
                                <div className="tasks" key={index}>
                                    <h4 className="currenttasks">{task}</h4>
                                    <button className="complete" onClick={() => handleDeleteTask(index)}>Complete</button>
                                </div>
                            ))}
                        </div>

                        <br />

                        <div id="input">
                            {/* 4. Conditionally show either the input form or the "Add Goal" button */}
                            {showInput ? (
                                <AddGoal onAdd={handleAddTask} />
                            ) : (
                                <button onClick={() => setShowInput(true)}>Add Goal</button>
                            )}
                        </div>
                        </>
                    )
                }
                </main>
                <footer id="footer">Built for students • Minimal • Mindful</footer>
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
    );
}

export default App;
