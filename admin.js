import { ref, push } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";
import { db } from "./firebase-config.js";

function publishNews() {
  let title = document.getElementById("title").value;
  let desc = document.getElementById("desc").value;
  let image = document.getElementById("image").value;

  if (!title || !desc) {
    alert("Title और Description जरूरी है");
    return;
  }

  push(ref(db, "news"), {
    title: title,
    desc: desc,
    image: image || "https://via.placeholder.com/300x180",
    date: new Date().toLocaleString()
  });

  alert("News Firebase में save हो गई ✅");

  document.getElementById("title").value = "";
  document.getElementById("desc").value = "";
  document.getElementById("image").value = "";
}

window.publishNews = publishNews;