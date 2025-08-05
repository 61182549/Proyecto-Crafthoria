import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js'
import {
  getAuth,
  createUserWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js'
import {
  getFirestore,
  collection,
  addDoc,
} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js'

// Configuración de Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyDGjySOMt3jY6fSJlLV9H4SU-NwYMTXYYM',
  authDomain: 'crafthoria-web.firebaseapp.com',
  projectId: 'crafthoria-web',
  storageBucket: 'crafthoria-web.appspot.com',
  messagingSenderId: '1051661170618',
  appId: '1:1051661170618:web:eb1c48fec1ae95efa0cf83',
}

// Inicializar Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registro-form')

  form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const nombre = document.getElementById('name').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const confirmPassword = document.getElementById('confirm-password').value

    // Validar contraseñas
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden')
      return
    }

    try {
      // 1️⃣ Registrar en Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      const user = userCredential.user

      // 2️⃣ Guardar en Firestore
      await addDoc(collection(db, 'usuarios'), {
        uid: user.uid,
        nombre,
        email,
        fecha: new Date().toISOString(),
      })

      alert('✅ Registro exitoso')
      form.reset()
    } catch (error) {
      console.error('❌ Error al registrar:', error)
      alert('Error: ' + error.message)
    }
  })
})
