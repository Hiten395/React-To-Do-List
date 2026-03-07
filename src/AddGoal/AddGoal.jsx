import { useState } from 'react';
// import styles from './AddGoal.css'

function AddGoal({ onAdd }) {
    // Use state to track what the user is typing
    const [taskText, setTaskText] = useState('');

    function handleAddGoalClick() {
        if (taskText.trim() !== '') {
            onAdd(taskText); // Send the text back to App.jsx
            setTaskText(''); // Clear out the input
        }
    }

    return (
        <>
            <input 
                type="text" 
                id="task" 
                value={taskText} 
                onChange={(e) => setTaskText(e.target.value)} 
                placeholder="Enter your goal..."
            />
            <br />
            {/* Notice it is onClick, not onclick */}
            <button id="Finalise" onClick={handleAddGoalClick}>Add</button>
        </>
    );
}

export default AddGoal;