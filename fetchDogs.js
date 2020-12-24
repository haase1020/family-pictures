// const url = "https://api.github.com/users/haase1020/followers?per_page=50";
const url = "https://dog.ceo/api/breed/bulldog/images";
const fetchDogs = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.message);
  return data.message;
};

export default fetchDogs;
