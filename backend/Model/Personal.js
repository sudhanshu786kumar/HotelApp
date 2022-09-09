import React from 'react'

const Personal = () => {
  return (
    <div>
        <div>
      <h1 className='display-3' style={{color:"#fff",textAlign:"center"}}>Book Rooms</h1>
      <form onSubmit={HandleSubmit}  encType="multipart/form-data" className='forms'>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label" >Name:</label>
    <input required type="text" value={hdata.name} name='name' onChange={handleChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input required type="email" value={hdata.email} name='email' onChange={handleChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Contact number</label>
    <input required type="text" value={hdata.number} name='number'onChange={handleChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">quantity</label>
    <input required type="text" name='quant' value={hdata.quant} onChange={handleChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div>
  <div class="dropdown">
  <select onChange={handleSelect} >
  <option  value="AmazingHotel">AmazingHotel</option>
  <option value="CoolHotel">CoolHotel</option>
  <option value="RajHotel">RajHotel</option>
  </select>
 
</div>
  <br/>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
{inpu ? (<p>posted !</p>):null}
    </div>
  
    </div>
  )
}

export default Personal