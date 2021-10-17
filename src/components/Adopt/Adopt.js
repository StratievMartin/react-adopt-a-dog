import { useState, useEffect } from 'react'
import style from './Adopt.module.css'
import DogAvatar from './DogAvatar';
import DogDesc from './DogDesc';

const Adopt = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [dogData, setDogData] = useState([]);

    //service
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
        return <div style={{textAlign:"center"}}>Loading...</div>;
    } else {
        //dog card 
        return (
            <div className={style.adopt}>
                <h2 className={style.header}>Available for adoption</h2>
                <div className={style.adoptContainer}>
                    <ul className={style.dogs}>
                        {dogData.map(el => {
                            return (
                                <li
                                    className={style.dogCard}
                                    key={el.id}>
                                    <DogAvatar props={el} ></DogAvatar>
                                    <DogDesc props={el} />
                                    <button className={style.adoptBtn}
                                    onClick={(e) => console.log(el.id)}
                                    >Adopt</button>
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