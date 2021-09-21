import { useState, useEffect } from 'react'
import style from './Adopt.module.css'


const Adopt = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [dogData, setDogData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/dogBreeds')
            .then(res => res.json())
            .then((res) => {
                setIsLoaded(true);
                setDogData(res);
            },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className={style.adopt}>
                <h2 className={style.header}>Available for adoption</h2>
                <div className={style.adoptContainer}>
                    <ul className={style.dogs}>
                        {dogData.map(el => {
                            return (
                                <li
                                    className={style.dog}
                                    key={el.id}>
                                    <img src={el.img} alt="" />
                                    <div><b>{el.breed}</b></div>
                                    <div>{el.temperament[0]}</div>
                                    <button
                                        onClick={(e)=>console.log(el.id)}
                                        className={style.adoptBtn}>Adopt</button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}
export default Adopt