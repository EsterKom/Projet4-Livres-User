const getBooksFromServer = async() => {
    const results = await axios.get("http://localhost:8000/api/livres");
    displayBooks(results);
}

const getBooks = async() => {
    const results = await axios.get("http://localhost:8000/api/livres");
    return results;
}

//const deleteBooks = async (id) => {
//    await axios.delete(`http://localhost:8000/api/livres/${id}`);
//    getBooks();
//}

const displayBooks = (items) => {
    const row_results = document.getElementById("books_list");
    row_results.innerHTML="";

    items.data.forEach(item => {
        const card = document.createElement("div");
        const cardBody = document.createElement("div");
        const title = document.createElement("h5");
        const description = document.createElement("p");
        const author = document.createElement ("p");
        const theme = document.createElement("p");
        const price = document.createElement("p");
        const img = document.createElement ("img");
        const deleteBtn = document.createElement("button");
    
    
        card.classList.add("card");
        card.classList.add("col-lg-4");
        card.id = `item-${item.id}`;
        cardBody.classList.add("card-body");
        description.classList.add("card-text");
        author.classList.add("card-text");
        theme.classList.add("card-text");
        price.classList.add("card-text");
        img.classList.add("card-img-top");
        title.classList.add("card-title");
        deleteBtn.classList.add("btn-warning");
    
        deleteBtn.innerText="Supprimer livre";
        deleteBtn.value=item.id;
        title.innerHTML = item.title;
        description.innerHTML = item.description;
        author.innerHTML = item.author;
        theme.innerHTML = item.theme;
        price.innerHTML = item.price;
        img.src = item.image;
    
        //deleteBtn.onclick = (e) => {
        //    axios.delete("http://localhost:8000/api/livres/" + e.target.value);
        //}
    
        cardBody.appendChild(img);
        cardBody.appendChild(title);
        cardBody.appendChild(author);
        cardBody.appendChild(price);
        cardBody.appendChild(theme);
        cardBody.appendChild(description);
        cardBody.appendChild(deleteBtn);
        card.appendChild(cardBody);
        
        row_results.appendChild(card);
    
    });
    
}   


