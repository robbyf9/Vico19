function berita() {
    const baseUrl ="http://newsapi.org/v2";

    const getData = () => {
        fetch(`${baseUrl}/top-headlines?country=id&apiKey=97e2ccbd38754170a47ba99beff2f68f`)
         .then(response => {
             return response.json();
         })
         .then(responseJson => {
            if(responseJson.error) {
                showResponseMessage(responseJson.message);
            } else {
                
                renderAllArticles(responseJson.articles);
                
            }
         })
        
    };


    const renderAllArticles = (articles) => {
        const listArticleElement = document.querySelector("#listBerita");
        listArticleElement.innerHTML = "";

        (articles).forEach((article) => {
            listArticleElement.innerHTML += `
            
        
            <div class="col-6 d-flex">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">${article.title}</h4>
                <p class="card-text">${article.description}</p>
                <a href="${article.url}" class="btn btn-primary">Selengkapnya -></a>
              </div>
            </div>
            </div>
          `
            ;
        });
    };

    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };

    getData();
}

export default berita;
