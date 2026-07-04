import { ref, onValue } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";
import { db } from "./firebase-config.js";

const newsContainer = document.querySelector(".news-container");

function loadNews() {
  const newsRef = ref(db, "news");

  onValue(newsRef, (snapshot) => {
    newsContainer.innerHTML = "";

    snapshot.forEach((child) => {
      let data = child.val();

      newsContainer.innerHTML += `
        <div class="news-card">
          <img src="${data.image}">
          <h3>${data.title}</h3>
          <p>${data.desc}</p>
        </div>
      `;
    });
  });
}

loadNews();