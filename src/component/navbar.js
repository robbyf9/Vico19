import css from "bootstrap/dist/css/bootstrap.min.css";
class NavBar extends HTMLElement{
 
  constructor(){
    super();
    this.shadowDOM = this.attachShadow({mode :"open"});
  }

  connectedCallback(){
      this.render();
  }
  
  render(){
      this.shadowDOM.innerHTML = `
          <style>
            ${css}
            
            .nav-link:hover{
              font-weight: bold;
            }
            .navbar{
              font-size: 20px;
            }
          </style>
            <div class=card>
            <nav class="navbar navbar-expand-lg navbar-light id="navbar" > 
            <a class="navbar-brand" href="index.html">
              <img src="../src/styles/img/logoapp2.jpg" style="width:45px">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
  
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="index.html" >Beranda <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="index.html#berita">Berita</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#donasi">Berbagi Sesama</a>
                </li>
             
                <li class="nav-item">
                  <a class="nav-link" href="faq.html">Tanya Jawab</a>
                </li>

            </ul>
           
          </div>
        </nav>
        </div>
          `;
      }

}
customElements.define("nav-bar", NavBar);