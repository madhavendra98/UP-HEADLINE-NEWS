import {
  collection,
  query,
  orderBy,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

import { db } from "./firebase-config.js";

// News Container
const newsContainer = document.querySelector(".news-container");

// Firestore Collection
const q = query(collection(db, "news"), orderBy("date", "desc"));

// Load News
onSnapshot(q, (snapshot) => {

    newsContainer.innerHTML = "";

    if (snapshot.empty) {
        newsContainer.innerHTML = `
            <h2 style="text-align:center;color:gray;">
                अभी कोई समाचार उपलब्ध नहीं है।
            </h2>
        `;
        return;
    }

    snapshot.forEach((doc) => {

        const data = doc.data();

        newsContainer.innerHTML += `

        <div class="news-card">

            <img src="${data.image || 'https://via.placeholder.com/400x250?text=No+Image'}"
                 alt="News"
                 onerror="this.src='https://via.placeholder.com/400x250?text=No+Image'">

            <div class="news-content">

                <h3>${data.title || "No Title"}</h3>

                <p>${data.description || data.desc || ""}</p>

                <small><b>Category:</b> ${data.category || "General"}</small><br>

                <small><b>Date:</b> ${data.date || ""}</small>

            </div>

        </div>

        `;

    });

});
