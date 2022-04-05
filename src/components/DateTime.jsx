import React from 'react'
import { useState } from 'react'

function DateTime() {


    setInterval(UptadeTime, 1000);

    const [date, setDate] = useState(new Date().toLocaleString())

    function UptadeTime(){
        setDate(new Date().toLocaleString());

    }


  return (
    <div>
        <p>{date}</p>
    </div>
  )
}

export default DateTime