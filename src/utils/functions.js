const url = "http://localhost:5000/dogBreeds";
export const createDog = (dogName, breed, location, info, img) => {
  let dog = {
    name: dogName,
    breed,
    location,
    temperament: info,
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
export const updateDog = (dogName, breed, location, info, img) => {
  let dog = {
    name: dogName,
    breed,
    location,
    temperament: info,
    img,
  };
  return fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dog),
  });
};
export const deleteDog = (id) => {
  return fetch(`${url}/${id}`,{
      method: "DELETE",
    })
};
