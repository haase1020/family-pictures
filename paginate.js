const paginate = (dogs) => {
  const itemsPerPage = 12;
  const numberOfPages = Math.ceil(dogs.length / itemsPerPage);
  console.log(numberOfPages);
  const newDogs = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return dogs.slice(start, start + itemsPerPage);
  });
  return newDogs;
};

export default paginate;
