import React from 'react'

export default function ItemListContainer({greeting}) {

  const styles ={
    background: "pink",
    padding: "20px",
    width: "100%",
  height: "auto"
  }



  return (
    <div style={styles}>
      <h1>{greeting}</h1>
    </div>
  )
}
