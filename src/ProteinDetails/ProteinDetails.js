import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./ProteinDetails.css"

export default function ProteinDetails() {
    const navigate = useNavigate();
    return (
        <div className='parent'>
            <div className='layout'>
                Protein Details
                <button onClick={() => {
                    navigate('/PPI-graph')
                }}>
                    Go back to PPI Network
                </button>
            </div>
        </div>
    )
}
