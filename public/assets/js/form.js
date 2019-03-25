const form = document.querySelector('#burger-form');
const devour = document.querySelectorAll('.devour');
const burgerName = document.querySelector('#burger-name');

// create new burger
form.onsubmit = e => {
  e.preventDefault();
  const newBurger = burgerName.value.trim();
  const burger = {
    burger_name: newBurger,
    devoured: false,
  };

  // add new item to page
  const div = document.createElement('div');
  const h3 = document.createElement('h3');
  const button = document.createElement('button');
  const btnTxt = document.createTextNode('devour');
  div.classList.add('burger', 'new', 'arriving');
  button.classList.add('devour');
  button.appendChild(btnTxt);

  // post new burger to server
  axios.post('/api/burgers', burger).then(response => {
    const newId = response.data.insertId;
    const text = document.createTextNode(`${newId} ${newBurger}`);
    div.id = newId;
    button.id = `btn-${newId}`;
    button.value = newId;
    h3.appendChild(text);
    div.appendChild(h3);
    div.appendChild(button);
    uneaten.appendChild(div);
    setTimeout(() => {
      div.classList.remove('arriving');
    }, 20);
    setTimeout(() => {
      location.reload();
    }, 600);
  });
  burgerName.value = '';
};

// update burger boolean on server
devour.forEach(ele => {
  ele.onclick = function(e) {
    e.preventDefault();
    const id = this.value;

    // update page with new information
    const burger = document.getElementById(`${id}`);
    const button = document.getElementById(`btn-${id}`);
    burger.classList.add('leaving');
    burger.removeChild(button);
    burger.classList.replace('new', 'devoured');
    setTimeout(() => {
      burger.classList.replace('leaving', 'arriving');
      eaten.appendChild(burger);
    }, 600);
    setTimeout(() => burger.classList.remove('arriving'), 620);

    // logic to update info on server
    const devoured = { devoured: true };
    axios.put(`/api/burgers/${id}`, devoured).then(response => {
      console.log(response);
    });
  };
});
