import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc, query, orderBy, where, getDocs, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-analytics.js";

// ===========================================
//       نظام الحماية (Security Layer)
// ===========================================
const allowedDomains = ["webpge.github.io", "algreb51-cloud.github.io", "daqqa-fdcf2.firebaseapp.com", "daqqa-fdcf2.web.app", "localhost", "127.0.0.1"];
if (!allowedDomains.includes(window.location.hostname)) {
    document.documentElement.innerHTML = "<div style='height:100vh;background:#000;color:red;display:flex;justify-content:center;align-items:center;font-family:sans-serif;font-weight:bold;font-size:24px;direction:rtl;'>غير مصرح بتشغيل النظام خارج النطاق الرسمي<br><span style='font-size:16px;color:#ccc;margin-top:10px;'>Unauthorized Domain Access</span></div>";
    // إيقاف التنفيذ فوراً
    throw new Error("Security Alert: Unauthorized Domain Access");
}

const firebaseConfig = {
    apiKey: "AIzaSyCOw5mtp1zctg3kLELSizpOLe7mnRmWwhY",
    authDomain: "daqqa-fdcf2.firebaseapp.com",
    projectId: "daqqa-fdcf2",
    storageBucket: "daqqa-fdcf2.firebasestorage.app",
    messagingSenderId: "910246907169",
    appId: "1:910246907169:web:b8cdb83052a9861089c260",
    measurementId: "G-S9G3PLLTST"
};

Object.freeze(firebaseConfig); // حماية الإعدادات من التعديل
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const appId = "daqqa-fdcf2";
export const fs = { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc, query, orderBy, where, getDocs, setDoc, getDoc };

window.db = db;
window.fs = fs;
window.appId = appId;
window.auth = auth;
window.analytics = analytics;

export { signInWithEmailAndPassword, signOut, onAuthStateChanged };
