import css from "bootstrap/dist/css/bootstrap.min.css";
class TempatDonasi extends HTMLElement{
 
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
            #DONASI{
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                border-radius: 5px;
                padding: 20px;
                margin-top: 20px;
            }
            
        </style>
        <div class="card text-center" id="DONASI">
            <div class="card-body">
                <h3 class="card-title">Yuk, Bersama Lawan COVID-19</h3>
                <p class="card-text">Selamatkan nyawa sesama #bersamalawancorona.</p>
                <a href="https://kitabisa.com/campaign/indonesialawancorona" class="btn btn-primary">DONASI SEKARANG</a>
            </div>
            <div class="card-footer text-muted">
                Supported By <a href="https://kitabisa.com/">kitabisa.com</a>
            </div>
        </div>
          `;
      }

}
customElements.define("tempat-donasi", TempatDonasi);