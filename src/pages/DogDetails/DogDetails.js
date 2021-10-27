import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useService from "../../services/service";
const DogDetails = () => {
  const { id } = useParams();
  const { data: dogData} = useService(
    `http://localhost:5000/dogBreeds/${id}`
  );
  return (
    <div>
      <h1>{dogData && dogData.breed}</h1>
      <h1>{dogData && dogData.location}</h1>
      <h1>{dogData && dogData.temperament}</h1>
      <img src={dogData && dogData.img} alt="img" />
      <Link to={"/adopt"}>Go Back</Link>
    </div>
  );
};
// }
export default DogDetails;
