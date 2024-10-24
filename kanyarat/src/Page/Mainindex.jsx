import React from 'react'
import { useNavigate } from 'react-router-dom';
import Img from '../../public/02.jpg'


const Mainindex = () => {
    const navigate = useNavigate();

    const gomain = () => {
        navigate('/');
    }
    const goHome = () => {
        navigate('/home1');
    }

    const goAbout = () => {
        navigate('/about1');
    }

    const goPerformance = () => {
        navigate('/performance1');
    }

    return (

        <div style={{ textAlign: 'center', border: '3px solid blue', backgroundColor: 'white', borderRadius: '40px', width: '500px' }}>
            <p style={{ color: 'white', fontWeight: 'bold', backgroundColor: '#28b1e3', fontSize: '50px', height: '70px', textAlign: 'center', padding: '20px' }}>Hello Profile!!</p><br />
            <h2 style={{
                fontWeight: 'bold',
                fontSize: '30px',
                background: 'linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginTop: '-50px'
            }}>
                นางสาวกัลยรัตน์ อุไรพันธ์
            </h2>
            <img src={Img} style={{ width: '200px', height: '220px' }} />

            <h3>สาขาวิศวกรรมคอมพิวเตอร์</h3>
            <h3>มหาวิทยาลัยธุรกิจบัณฑิตย์</h3>
            <h2> 66111134 </h2>
            <h3>เบอร์โทร : 0989417762</h3>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
                <button onClick={gomain}>GOMAIN</button>
                <button onClick={goHome}>home</button>
                <button onClick={goAbout}>about</button>
                <button onClick={goPerformance}>performance</button>
            </div>
        </div>
    )
}

export default Mainindex
