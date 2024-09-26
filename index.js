class index {
  constructor() {
    this.imgMenuEl = document.getElementById("menu");
    this.modalMenuEl = document.getElementById("modal");
    this.modalDivLinksEl = document.querySelector(".div-links-modal");
    this.modalDivButtonsEl = document.querySelector(
      ".buttons-login-logout-modal"
    );
    this.shortenItButtonEl = document.querySelector("#ShortenIt");

    this.changes();
  }

  changes() {
    this.imgMenuEl.addEventListener("click", () => {
      if (
        this.modalMenuEl.style.display == "none" ||
        this.modalMenuEl.style.display == ""
      ) {
        this.modalMenuEl.style.display = "flex";
        this.modalDivLinksEl.style.display = "flex";
        this.modalDivButtonsEl.style.display = "flex";
      } else {
        this.modalMenuEl.style.display = "none";
      }
    });

    if (window.innerWidth > 931) {
      this.modalMenuEl.style.display = "none";
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth > 931) {
        this.modalMenuEl.style.display = "none";
      }
    });
  }

  shortenIt() {
    console.log(this.shortenItButtonEl.value);

    const url = "https://api.encurtador.dev/encurtamentos";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: "https://google.com" }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  }
}

const app = new index();
