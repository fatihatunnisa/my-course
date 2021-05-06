function Card ({judul, deskripsi}){
    //judul dan deksripsi adalah sebuah properti karena menerima dari prent component
    return (
        <div>
        <h1>{judul}</h1>
        <p>{deskripsi}</p>
        </div>
    );
}

export default Card;