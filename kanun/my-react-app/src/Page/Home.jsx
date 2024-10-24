import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './ProfileCard.css';

const Home = () => {
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
   
     <div className="profile-card">
     <img src='https://img5.pic.in.th/file/secure-sv1/01e83c0a0967c53f72.jpg' />
      <h1>Profile ของฉัน</h1>
      <h2>ชื่อ นายศราวุธ ห่วงสกุลรัตน์</h2>
      <h3>สาขาวิศกรรมคอมพิวเตอร์</h3>
      <h3>มหาวิทยาลัยธุรกิจบัณฑิต</h3>
      <h3>รหัส 66111310</h3>
    </div>
    
    </>
  )
}

export default Home