// Base de datos inicial de contenidos, nombres y precios (en xats)
let siteData = {
    inicio: [
        { name: "GIF 4D Diseño", price: "150 xats" },
        { name: "GIF Parpadeo", price: "120 xats" },
        { name: "Pstyle Normal", price: "90 xats" },
        { name: "Pstyle Gif", price: "140 xats" },
        { name: "Pcback Normal", price: "100 xats" },
        { name: "Pcback Gif", price: "160 xats" }
    ],
    "gif-4d": [
        { name: "gif_4d_1.gif", url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400" },
        { name: "gif_4d_2.gif", url: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=400" }
    ],
    "gif-parpadeo": [
        { name: "parpadeo_oro.gif", url: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=400" }
    ],
    "pstyle-normal": [
        { name: "pstyle_norm_1.png", url: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=400" }
    ],
    "pstyle-gif": [
        { name: "pstyle_anim_1.gif", url: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400" }
    ],
    "pcback-normal": [
        { name: "pcback_pink.png", url: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400" }
    ],
    "pcback-gif": [
        { name: "pcback_moving.gif", url: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400" }
    ]
};

// Cargar datos guardados si existen en localStorage
if (localStorage.getItem('dulcineaData')) {
    siteData = JSON.parse(localStorage.getItem('dulcineaData'));
}

let currentPasswordInput = "";

// FUNCIONES DE ACCESO Y CONTRASEÑA 5062
function pressNum(num) {
    if (currentPasswordInput.length < 6) {
        currentPasswordInput += num;
        updatePassDisplay();
    }
}

function clearPass() {
    currentPasswordInput = "";
    updatePassDisplay();
}

function updatePassDisplay() {
    let masked = "";
    for (let i = 0; i < currentPasswordInput.length; i++) {
        masked += "*";
    }
    document.getElementById("passInput").value = currentPasswordInput;
    document.getElementById("displayPasswordinnerText") || (document.getElementById("displayPassword").innerText = masked);
}

function togglePasswordVisibility() {
    let display = document.getElementById("displayPassword");
    let passField = document.getElementById("passInput");
    if (passField.type === "password") {
        passField.type = "text";
        display.innerText = currentPasswordInput;
    } else {
        passField.type = "password";
        display.innerText = "*".repeat(currentPasswordInput.length);
    }
}

function submitPass() {
    if (currentPasswordInput === "5062") {
        document.getElementById("lockScreen").classList.add("hidden");
        document.getElementById("mainContent").classList.remove("hidden");
        switchSection('inicio');
    } else {
        alert("¡Contraseña incorrecta!");
        clearPass();
    }
}

// ANIMACIÓN DE CORAZONES Y FLORES CAYENDO EN EL FONDO
function createFallingElements() {
    const bg = document.getElementById("fallingBg");
    const symbols = ["❤️", "💖", "🌸", "🌷", "✨", "💕"];
    
    setInterval(() => {
        const item = document.createElement("div");
        item.classList.add("fall-item");
        item.innerText = symbols[Math.floor(Math.random() * symbols.length)];
        item.style.left = Math.random() * 100 + "vw";
        item.style.animationDuration = (Math.random() * 3 + 4) + "s";
        item.style.fontSize = (Math.random() * 12 + 16) + "px";
        bg.appendChild(item);

        setTimeout(() => {
            item.remove();
        }, 7000);
    }, 400);
}
createFallingElements();

// NAVEGACIÓN ENTRE SECCIONES
function switchSection(sectionKey) {
    // Actualizar botones activos
    document.querySelectorAll('.nav-btn, .sub-btn').forEach(b => b.classList.remove('active'));
    event && event.target.classList.add('active');

    const display = document.getElementById("dynamicDisplay");
    const title = document.getElementById("sectionTitle");

    display.innerHTML = "";

    if (sectionKey === 'inicio') {
        title.innerText = "Inicio - Precios y Servicios";
        let html = `<table class="price-table">
            <tr><th>Categoría / Servicio</th><th>Precio (en Xats)</th></tr>`;
        siteData.inicio.forEach(item => {
            html += `<tr><td>${item.name}</td><td>${item.price}</td></tr>`;
        });
        html += `</table>`;
        display.innerHTML = html;
    } else {
        let sectionNameMap = {
            'gif-4d': 'GIF - 4d',
            'gif-parpadeo': 'GIF - Parpadeo',
            'pstyle-normal': 'Pstyle - Normal',
            'pstyle-gif': 'Pstyle - Gif',
            'pcback-normal': 'Pcback - Normal',
            'pcback-gif': 'Pcback - Gif'
        };
        title.innerText = sectionNameMap[sectionKey];

        let items = siteData[sectionKey] || [];
        if (items.length === 0) {
            display.innerHTML = "<p>No hay diseños subidos en esta sección todavía.</p>";
            return;
        }

        let html = `<div class="gallery-grid">`;
        items.forEach(item => {
            html += `
                <div class="gallery-item">
                    <img src="${item.url}" alt="${item.name}" onclick="openLightbox('${item.url}')">
                    <p>${item.name}</p>
                </div>
            `;
        });
        html += `</div>`;
        display.innerHTML = html;
    }
}

// LIGHTBOX PARA VER FOTO GRANDE
function openLightbox(url) {
    document.getElementById("lightboxImg").src = url;
    document.getElementById("lightboxModal").style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightboxModal").style.display = "none";
}

// DETECCIÓN DE CAPTURAS DE PANTALLA (ANTI-GUARDADO)
document.addEventListener("keydown", (e) => {
    // Detectar tecla PrintScreen o combinaciones comunes de captura
    if (e.key === "PrintScreen" || (e.ctrlKey && e.shiftKey && (e.key === "S" || e.key === "s"))) {
        alert("¡Ya te caché tomando captura! 📸😂");
    }
});

// PANEL DE ADMINISTRADOR (CONTRASEÑA: 6258)
function openAdminLogin() {
    document.getElementById("adminLoginModal").classList.remove("hidden");
}

function closeAdminLogin() {
    document.getElementById("adminLoginModal").classList.add("hidden");
    document.getElementById("adminPassInput").value = "";
}

function verifyAdminPass() {
    let pass = document.getElementById("adminPassInput").value;
    if (pass === "6258") {
        closeAdminLogin();
        openAdminPanel();
    } else {
        alert("Contraseña de Super Administrador incorrecta.");
        document.getElementById("adminPassInput").value = "";
    }
}

function openAdminPanel() {
    document.getElementById("adminPanelModal").classList.remove("hidden");
    renderAdminEditor();
}

function closeAdminPanel() {
    document.getElementById("adminPanelModal").classList.add("hidden");
}

function renderAdminEditor() {
    const editorList = document.getElementById("adminEditorList");
    let html = `<h3>Editar Precios de Inicio</h3>`;
    siteData.inicio.forEach((item, index) => {
        html += `
            <div class="admin-item-row">
                <input type="text" id="init_name_${index}" value="${item.name}" placeholder="Nombre">
                <input type="text" id="init_price_${index}" value="${item.price}" placeholder="Precio (Xats)">
            </div>
        `;
    });

    html += `<h3 style="margin-top:20px;">Editar Enlaces y Nombres de Secciones (GIF, Pstyle, Pcback)</h3>`;
    for (let key in siteData) {
        if (key === 'inicio') continue;
        html += `<h4>Sección: ${key.toUpperCase()}</h4>`;
        siteData[key].forEach((item, index) => {
            html += `
                <div class="admin-item-row">
                    <input type="text" id="${key}_name_${index}" value="${item.name}" placeholder="Nombre archivo">
                    <input type="text" id="${key}_url_${index}" value="${item.url}" placeholder="Link de imagen/gif" style="flex-grow:1;">
                </div>
            `;
        });
    }

    editorList.innerHTML = html;
}

function saveAdminChanges() {
    // Guardar inicio
    siteData.inicio.forEach((item, index) => {
        let n = document.getElementById(`init_name_${index}`).value;
        let p = document.getElementById(`init_price_${index}`).value;
        if (n) item.name = n;
        if (p) item.price = p;
    });

    // Guardar secciones
    for (let key in siteData) {
        if (key === 'inicio') continue;
        siteData[key].forEach((item, index) => {
            let n = document.getElementById(`${key}_name_${index}`).value;
            let u = document.getElementById(`${key}_url_${index}`).value;
            if (n) item.name = n;
            if (u) item.url = u;
        });
    }

    localStorage.setItem('dulcineaData', JSON.stringify(siteData));
    alert("¡Cambios guardados con éxito!");
    closeAdminPanel();
    switchSection('inicio');
}
