class index {
  constructor() {
    this.imgMenuEl = document.getElementById("menu");
    this.modalMenuEl = document.getElementById("modal");
    this.modalDivLinksEl = document.querySelector(".div-links-modal");
    this.modalDivBttons = document.querySelector(".buttons-login-logout-modal");

    this.changes();
  }

  changes() {
    this.imgMenuEl.addEventListener("click", () => {
      if (this.modalMenuEl.style.display == "none" || this.modalMenuEl.style.display == "") 
      {
        this.modalMenuEl.style.display = "flex";
        this.modalDivLinksEl.style.display = "flex";
        this.modalDivBttons.style.display = "flex";
      } else {
        this.modalMenuEl.style.display = "none";
      }
    });
    
    if(window.innerWidth > 931){
      this.modalMenuEl.style.display = "none";
    }
    
    window.addEventListener("resize", () => {
      if(window.innerWidth > 931){
        this.modalMenuEl.style.display = "none";
      }
    });
  }
}

const app = new index();
