import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDGjySOMt3jY6fSJlLV9H4SU-NwYMTXYYM",
  authDomain: "crafthoria-web.firebaseapp.com",
  projectId: "crafthoria-web",
  storageBucket: "crafthoria-web.appspot.com",
  messagingSenderId: "1051661170618",
  appId: "1:1051661170618:web:eb1c48fec1ae95efa0cf83"
};

// Inicializa Firebase y Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Escucha el formulario
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-contacto");
  const confirmacion = document.getElementById("confirmacion");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    try {
      await addDoc(collection(db, "mensajes"), {
        nombre,
        email,
        mensaje,
        fecha: new Date().toISOString()
      });

      confirmacion.classList.remove("oculto");
      form.reset();
    } catch (error) {
      console.error("❌ Error al guardar mensaje:", error);
      alert("Ocurrió un error al enviar tu mensaje.");
    }
  });
});

