import React, { useState, useEffect } from "react"

export default function Home() {
  const [data, setData] = useState("")

  useEffect(()=>{
    (async()=>{
      const response = await fetch(".netlify/functions/hello")
      const data1  = await response.json()
      setData(data1)
    }
    )()
  },[])
  return (
    <div>Hello world!
      <div>{data.message}</div>
    </div>
  )
}
