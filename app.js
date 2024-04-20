const form = document.querySelector("#searchForm")
form.addEventListener('submit',async function(e){
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config ={ params: { q: searchTerm}}
    const resp = await axios.get(`https://api.tvmaze.com/search/shows?q=`, config);
    
    addImg(resp.data);
    form.elements.query.value = ''; 
});

const addImg = (shows) => {
    const existingImages = document.querySelectorAll('img');
    existingImages.forEach(img => img.remove());
    
    for(let result of shows){
        if(result.show.image){
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            document.body.append(img)
        }
    }
}