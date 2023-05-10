const breedDropdown = document.getElementById('breed-dropdown');
console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";
const ul = document.querySelector('ul')
const container = document.querySelector('#dog-image-container')
fetch(imgUrl)
.then(resp => resp.json())
.then((data) => {
    data.message.forEach(element => {
        console.log(element);
        let img = document.createElement('img')
        img.src = element;
        container.append(img);
    });
})
fetch(breedUrl)
.then(resp => resp.json())
.then((data) => {
        console.log(data)
       for(const dog in data.message) {
        let li = document.createElement('li')
       li.textContent = dog
       ul.append(li)
       li.addEventListener('click', () => {
            li.style.color = 'red' 
       })
       }
    });
    breedDropdown.addEventListener('change', (event) => {
        fetch(breedUrl)
.then(resp => resp.json())
.then((data) => {
        console.log(data)
        ul.textContent = ''
       for(const dog in data.message) {
        let li = document.createElement('li')
       li.textContent = dog
       const letter = event.target.value
       if (dog[0] === letter) {
        console.log(dog)
        ul.append(li)
    }
       li.addEventListener('click', () => {
            li.style.color = 'red' 
       })
       }
    });
})