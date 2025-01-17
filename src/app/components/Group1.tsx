import Image from 'next/image'
import React from 'react'

const Group = () => {
  return (
    <div>
    <h4 style={{ fontSize: "24px", fontWeight: "bold", textAlign: "center", margin: "20px 0", color: "#333" }}>Browse The Range</h4>
    <p style={{ fontSize: "16px", lineHeight: "1.5", color: "#555", textAlign: "center", margin: "10px 0" }}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
<div className=" flex flex-auto justify-center items-center gap-10">
<div>
<Image 
src="/Dining.png"
alt="Dining"
width={381}
height={480}/>
</div>
<br />
<div>
<Image 
src="/Living.png"
alt="Dining"
width={381}
height={480}/>
</div>
<br />
<div>
<Image 
src="/Bedroom.png"
alt="Dining"
width={381}
height={480}/>
</div>
</div>
<div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
      <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>Dining</h3>
      <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>Living</h3>
      <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>Bedroom</h3>
    </div>
    </div>
  )
}

export default Group