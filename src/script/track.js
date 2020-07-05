function track() {
    const baseUrl ="https://coronavirus-19-api.herokuapp.com/countries";

    const getResult = () => {
        fetch(`${baseUrl}/indonesia`)
         .then(response => {
             return response.json();
         })
         .then(responseJson => {
            if(responseJson.error) {
                showResponseMessage(responseJson.message);
            } else {
                const data = (responseJson);
                document.getElementById("trackVirus").innerHTML = `
                <div class="row justify-content-center">
                  <div class="column">
                    <div class="card text-white bg-dark mb-3" style="width: 18rem;">
                      <div class="card-header"><h4>Positif</h4></div>
                        <div class="card-body">
                         <h4 id="positif">${data.cases}</h4>
                        </div>
                      </div>
                    </div>
                  

                  <div class="column">
                    <div class="card text-white bg-warning mb-3" style="width: 18rem;">
                      <div class="card-header"><h4>Dirawat</h4></div>
                        <div class="card-body">
                          <h4 id="dirawat">${data.active}</h4>
                        </div>
                      </div>
                    </div>
                  

                  <div class="column">
                    <div class="card text-white bg-success mb-3" style="width: 18rem;">
                      <div class="card-header"><h4>Sembuh</h4></div>
                        <div class="card-body">
                          <h4 id="sembuh">${data.recovered}</h4>
                        </div>
                      </div>
                    </div>
                  

                  <div class="column">
                    <div class="card text-white bg-danger mb-3" style="width: 18rem;">
                      <div class="card-header"><h4>Meninggal</h4></div>
                        <div class="card-body">
                          <h4>323</h4>
                        </div>
                      </div>
                    </div>
                    </div>
                </div> 
                `
                
                
            }
         })
        
    };

    
    

    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };

    getResult();
}

export default track;
