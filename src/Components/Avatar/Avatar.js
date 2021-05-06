import react from 'react';


function Avatar ({sourceImage, name}){
    return(
        <div>
            <img src={sourceImage} alt="avatar"/>
            <h1>{name}</h1>
            <p>Saya suka belajar</p>
        </div>
    )
}

export default Avatar;