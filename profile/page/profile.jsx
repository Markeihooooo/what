import React from 'react'
import { useNavigate } from 'react-router-dom';
const profile = () => {
    const navigate = useNavigate();
    const goKanun = () => {
        navigate('/kanun');
    }

    const goKan = () => {
        navigate('/kan');
    }
  return (
    <div style={{ textAlign: 'center', border: '3px solid red', backgroundColor: 'white', borderRadius: '40px', width: '700px' }}>
        <h1 style={{ fontWeight: 'bold', fontSize: '50px', color:'red' }}>profile</h1>
    <button onClick={goKanun}>Profile kanun</button>
    <button onClick={goKan}>Profile kanyarat</button>
    </div>
  )
}

export default profile