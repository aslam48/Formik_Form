import React from 'react'

const YoutubeForm = () => {
  return (
    <div>
        <from>
            <label htmlFor='name'>Name</label>
            <input type='text' id="name" name="name"/>

            <label htmlFor='email'>Name</label>
            <input type='text' id="email" name="email"/>

            <label htmlFor='channel'>Name</label>
            <input type='text' id="channel" name="channel"/>

        </from>
    </div>
  )
}

export default YoutubeForm