import {
  collection,
  query,
  orderBy,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

import { db } from "./firebase-config.js";

const newsContainer = document.querySelector(".news-container");

const q = query(collection(db, "news"), orderBy("date", "desc"));

onSnapshot(q, (snapshot) => {

    newsContainer.innerHTML = "";

    snapshot.forEach((doc) => {

        const data = doc.data();

        newsContainer.innerHTML += `

        <div class="news-card">

            <img src="${data.image}" alt="News">

            <h3>${data.title}</h3>

            <p>${data.description}</p>

            <small>${data.category}</small>

        </div>

        `;

    });

});
