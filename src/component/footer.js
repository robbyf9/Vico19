import css from "bootstrap/dist/css/bootstrap.min.css";
class FooterApp extends HTMLElement{
 
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
        </style>
        <div class="container" style="grid-auto-flow: column;"> 
        <div class="row">
          <div class="col" style="text-align: left;">
            &#169; 2020, VICO19 App
            <i class='fab fa-facebook' style='font-size:24px'></i>
          </div>
          <div class="col" style="text-align: center;">
          <a href="https://facebook.com/vico19"><img src="../src/styles/img/facebook.png" style="width: 10%;";></a>
          <a href="https://instagram.com/vico19"><img src="../src/styles/img/instagram.png" style="width: 10%;";></a>
          <a href="https://twitter.com/vico19"><img src="../src/styles/img/twitter.png" style="width: 10%;";></a>
          </div>
          <div class="col" style="text-align: right;">
            <a href="privacypolicy.html" >Kebijakan Privasi</a>
          </div>
        </div>
        <div class="row">
          <div class="col" style="text-align: center;">
            <a href="https://appstore.com/vico19"><img src="../src/styles/img/appstore_badge.png" style="width: 10%;";></a>
            <a href="https://playstore.com/vico19"><img src="../src/styles/img/playstore_badge.png" style="width: 13%;";></a>
          <div>
        </div>
      </div>`;
      
    }
    
}

customElements.define("footer-app", FooterApp);