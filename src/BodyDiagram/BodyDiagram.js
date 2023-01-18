import React from 'react'
import { useNavigate } from 'react-router-dom'
import './BodyDiagram.css'

export default function BodyDiagram() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>
                Body Diagram
            </h1>
            <div>
                <button onClick={() => {
                    navigate('/')
                }}>
                    Go back to landing page
                </button>
            </div>
        </div>

    )
}

