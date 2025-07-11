import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Tu configuración de Firebase (ya la usaste antes)
const firebaseConfig = {
  apiKey: "AIzaSyDGjySOMt3jY6fSJlLV9H4SU-NwYMTXYYM",
  authDomain: "crafthoria-web.firebaseapp.com",
  projectId: "crafthoria-web",
  storageBucket: "crafthoria-web.appspot.com",
  messagingSenderId: "1051661170618",
  appId: "1:1051661170618:web:eb1c48fec1ae95efa0cf83"
};

// Inicializar Firebase y Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Manejar el formulario
document.getElementById("form-contacto").addEventListener("submit", async (e) => {
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

    document.getElementById("confirmacion").classList.remove("oculto");
    document.getElementById("form-contacto").reset();
  } catch (error) {
    console.error("❌ Error al enviar mensaje:", error);
    alert("Hubo un problema al enviar tu mensaje.");
  }
});


