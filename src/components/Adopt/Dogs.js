import style from './Adopt.module.css'
import DogAvatar from './DogAvatar';
import DogDesc from './DogDesc';

const Dogs = (props) => {
  const dogData = props.data; 
  return (
    <div>
      <ul className={style.dogs}>
        {dogData.map((el) => {
          return (
            <li className={style.dogCard} key={el.id}>
              <DogAvatar props={el}></DogAvatar>
              <DogDesc props={el} />
              <button
                className={style.adoptBtn}
                onClick={(e) => console.log(el.id)}
              >
                Adopt
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Dogs;
