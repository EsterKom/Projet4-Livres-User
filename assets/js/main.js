
//getBooks();

getBooksFromServer();

document.getElementById("item-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const book = {
        title: e.target.title.value,
        author: e.target.auteur.value,
        description: e.target.description.value,
    }
    axios.post("http://localhost:8000/api/livres", book)
    .then (res => {
        //console.log(response);
        if(res.data.book) {
            getBooksFromServer();
            e.target.title.value = " "
            e.target.auteur.value = " "
            e.target.description.value = " "
        } else {
            alert("Il y a un erreur !");
        }
     })
})
