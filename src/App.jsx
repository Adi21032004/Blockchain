import './App.css'
import { MoodContract } from './provider.js'
import { useState } from 'react';

//console.log(MoodContract.setMood("happy"))

function App() {
  
  const [mood,setMood] = useState("")
  const [realMood,setRealMood] = useState("")

  const handleSetMood = async () => {
    try {
      await MoodContract.setMood(mood); 
      console.log('Mood set successfully.');
    } catch (error) {
      console.error('Error setting mood:', error);
    }
  }
  
  const handleGetMood = async () => {
    try {
      const mood = await MoodContract.getMood();
      setRealMood(mood) 
      console.log('Current mood:', mood);
    } catch (error) {
      console.error('Error getting mood:', error);
    }

  }

  return (
    <>
        <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold mb-4">This is my dApp!</h1>
          <p className="text-lg mb-4">Here we can set or get the mood:</p>
          <div className="flex items-center mb-4">
            <label htmlFor="mood" className="mr-2">Input Mood:</label>
            <input
            type='text'
            id='mood'
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            className="border border-gray-300 px-2 py-1 rounded" />
          </div>
          <div className="flex">
          <button className="bg-blue-500 text-white px-4 py-2 rounded mr-4 hover:bg-blue-600" onClick={handleGetMood}>Get Mood</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={handleSetMood}>Set Mood</button>
          </div>
      </div>
      <div>
      {realMood && <p className="mt-4">Current mood: {realMood}</p>}
      </div>

    </>
  )
}

export default App
