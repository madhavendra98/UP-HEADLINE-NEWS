import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { db } from "./firebase-config.js";

async function publishNews() {

    const title = document.getElementById("title").value;
    const description = document.getElementById("desc").value;
    const image = document.getElementById("image").value;
    const category = document.getElementById("category").value;

    if (title === "" || description === "") {
        alert("Title और Description भरें");
        return;
    }

    try {

        await addDoc(collection(db, "news"), {

            title: title,
            description: description,
            image: image || "https://via.placeholder.com/400x250",
            category: category || "General",
            date: new Date().toLocaleString()

        });

        alert("✅ News Publish Successfully");

        document.getElementById("title").value = "";
        document.getElementById("desc").value = "";
        document.getElementById("image").value = "";
        document.getElementById("category").value = "";

    } catch (e) {

        alert("Error : " + e.message);

    }

}

window.publishNews = publishNews;
