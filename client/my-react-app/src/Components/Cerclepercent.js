import React ,{useState}from 'react'
import '../styles/Cerclepercent.css'

export default function Cerclepercent() {
    const [done,setDone]= useState(50)
    return (
        <div className='cercle'>
                <div className='cercle2'>
                    <p>{done}%
                    Done</p>
                </div>

        </div>
    )
}
