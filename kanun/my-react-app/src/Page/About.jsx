import React from 'react'
import {useNavigate} from 'react-router-dom';
const About = () => {

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
    <h1>งานอดิเรก</h1>
    <div className='hobby-card'>
    <div>
    <h2>ทำอาหาร</h2>
    <img src='https://aboutmom.co/wp-content/uploads/2019/05/Kidscooking_web_1-500x500.jpg' style={{width: '200px', height: '200px'}}/>
    </div>
    <div>
    <h2>เล่นเกม</h2>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqVZRl8l1ncPiPK2ku-Gssz9oUL1bBQLDaxg&s' style={{width: '200px', height: '200px'}}/>
    </div>
    <div>
      <h2>เลี้ยงสัตว์</h2>
    <img src='https://png.pngtree.com/png-vector/20240807/ourmid/pngtree-fantsy-art-of-cartoon-baby-white-and-golden-dog-with-scarf-png-image_13402346.png' style={{width: '200px', height: '200px'}}/>
    </div><div>
    <h2>วาดรูป</h2>
    <img src='https://png.pngtree.com/png-vector/20240326/ourlarge/pngtree-character-mascot-of-japanese-yen-as-a-painter-png-image_12203701.png' style={{width: '200px', height: '200px'}}/>
    </div>
    
    </div>
    </div>
    
    
  
   </>
  )
}

export default About