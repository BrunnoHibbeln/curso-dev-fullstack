import { useState } from 'react'
import { useSelector , useDispatch } from 'react-redux'

const App = () => {
	const [inputTask, setInputTask] = useState()

	const tasks = useSelector(state => state.data)
	const dispatch = useDispatch()

	const handleInput = e => {
		setInputTask(e.target.value)
	}
	const handleSubmit = e => {
		dispatch({
			type: 'ADD_TASK',
			payload: inputTask,
		})
	}
	const handleRemove = data => {
		dispatch({
			type: 'REMOVE_TASK',
			payload: data,
		})
	}

	return (
		<>
			<ul>
				{
					tasks.map(task => 
						<li key={task}>
							{task}
							<button 
								onClick={() => handleRemove(task)}>Remove
							</button>
						</li>
					)
				}
			</ul>
			<input 
				type='text' 
				onChange={handleInput} 
				value={inputTask}>
			</input>
			<button onClick={handleSubmit}>insert</button>
		</>
	)
}

export default App
