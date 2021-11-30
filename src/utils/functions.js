const url = "http://localhost:5000/dog_breeds";
export const createDog = (breed, location, description, img) => {
  let dog = {
    breed,
    location,
    description,
    img,
  };
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dog),
  });
};
export const updateDog = (id, breed, location, description, img) => {
  let dog = {
    breed,
    location,
    description,
    img,
  };
  return fetch(`${url}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dog),
  });
};
export const deleteDog = (id) => {
  return fetch(`${url}/${id}`, {
    method: "DELETE",
  });
};
// adopted dogs
export const adoptDog = (dog) => {
  return fetch(`http://localhost:5000/adopted_dogs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dog),
  });
};
