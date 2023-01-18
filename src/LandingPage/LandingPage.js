import React from 'react'
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'


export default function LandingPage() {
    const navigate = useNavigate();
    return (
        <div className='parent'>
            <div className='layout'>
                <h1>Landing Page lol</h1>
                
                <button onClick={() => {
                    navigate('/PPI-graph');
                }}>
                    Go to PPI Network graph
                </button>
                <div className='spacer'/>
                <button onClick={() => {
                    navigate('/body-diagram');
                }}>
                    Go to body diagram
                </button>
            </div>
        </div>
    )
}
