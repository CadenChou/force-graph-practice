import React from 'react'
import ForceGraph2D from 'react-force-graph-2d'
import { useNavigate } from 'react-router-dom';
import './ForceGraph.css'

export default function ForceGraph() {
    // sample data
    // "Attach (source) to (target)" for links
    // Not sure if label is needed
    const exampleData = {
        nodes: [
            { id: 'Protein 1', label: 'Protein' },
            { id: 'Protein 2', label: 'Protein 2' },
            { id: 'Protein 3', label: 'Protein 3' },
            { id: 'Protein 4', label: 'Protein 4' },
            { id: 'Protein 5', label: 'Protein 6' },
            { id: 'Protein 6', label: 'Protein 7' },
            { id: 'Protein 7', label: 'Protein 8' },
            { id: 'Protein 8', label: 'Protein 9' },
        ],
        links: [
            { source: 'Protein 1', target: 'Protein 2', value: 5 },
            { source: 'Protein 2', target: 'Protein 3', value: 3 },
            { source: 'Protein 4', target: 'Protein 3', value: 2 },
            { source: 'Protein 2', target: 'Protein 5', value: 3 },
            { source: 'Protein 8', target: 'Protein 5', value: 4 },
            { source: 'Protein 7', target: 'Protein 5', value: 2 },
            { source: 'Protein 6', target: 'Protein 8', value: 1 },
        ]
    }

    // So we can use react router
    const navigate = useNavigate();

    // To be used when a node is clicked
    const handleNodeClick = (node) => {
        console.log('Node has been clicked');
        navigate('/protein-details');
    };

    return (
        <div>
            <div className='button-div'>
                <button onClick={() => {
                    navigate('/')
                }}>
                    Go back to landing page
                </button>
            </div>
            <ForceGraph2D
                graphData={exampleData}
                linkWidth={link => link.value}
                //nodeAutoColorBy="group"
                nodeCanvasObject={(node, ctx, globalScale) => {
                    const label = node.id;
                    const fontSize = 12 / globalScale;
                    ctx.font = `${fontSize}px Sans-Serif`;
                    const textWidth = ctx.measureText(label).width;
                    const bckgDimensions = [textWidth, fontSize].map(n => n + fontSize * 0.2); // some padding

                    // draw circle around text label
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, bckgDimensions[0] / 2, 0, 2 * Math.PI);
                    ctx.fillStyle = 'lightblue';
                    ctx.fill();

                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillStyle = 'black';
                    ctx.fillText(label, node.x, node.y);

                    node.__bckgDimensions = bckgDimensions;
                    // Not too sure about this stuff
                    node.pointerArea = {
                        left: node.x - bckgDimensions[0] / 2,
                        right: node.x + bckgDimensions[0] / 2,
                        top: node.y - bckgDimensions[1] / 2,
                        bottom: node.y + bckgDimensions[1] / 2,
                    };
                }}
                // When the node is clicked
                onNodeClick={handleNodeClick}
            />
        </div>
    )
}

