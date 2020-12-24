const container = document.querySelector(".container");

const display = (dogs) => {
  const newDogs = dogs
    .map((dog) => {
      // const { avatar_url, login, html_url } = person;
      return `<article class="card">
    <img src="${dog}" alt="dog-image">
    </article>
    `;
    })
    .join("");
  container.innerHTML = newDogs;
};

export default display;
