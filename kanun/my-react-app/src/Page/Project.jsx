import React from 'react'
import {useNavigate} from 'react-router-dom';
const Project = () => {
    const navigate = useNavigate();

    const goHome =() => {
      navigate('/');
    }

    const goAbout =() => {
      navigate('/about');
    }

    const goProject =() => {
      navigate('/project');
    }

  return (
    <>
    <div>
    <button onClick={goHome}>Profile</button>
    <button onClick={goAbout}>Hobby</button>
    <button onClick={goProject}>Project</button>
    </div>
    <div className='profile-card'>
    <h1>Skill</h1>
    <div className='skill-card'>
    <img src='https://cdn-icons-png.flaticon.com/512/1183/1183672.png' style={{width: '200px', height: '200px'}} />
    <img src='https://www.shutterstock.com/image-vector/vector-image-programming-language-logos-260nw-2370541639.jpg' style={{width: '200px', height: '200px'}} />
    <img src='https://cdn-icons-png.flaticon.com/512/732/732190.png' style={{width: '200px', height: '200px'}} />
    <img src='https://static-00.iconduck.com/assets.00/javascript-js-icon-2048x2048-nyxvtvk0.png' style={{width: '200px', height: '200px'}} />
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVb0CgyIIqMtfFc_OaSGIjGPicIyJiCXzr2w&s' style={{width: '200px', height: '200px'}} />
    <img src='https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png' style={{width: '200px', height: '200px'}} />
    
    </div>
    </div>
    </>
  )
}

export default Project