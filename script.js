let currentInput = "";
let showPassState = false;

// Generar corazones y flores cayendo en el fondo
function createFallingParticles() {
    const bg = document.getElementById('fallingBg');
    const symbols = ['🌸', '💖', '✨', '🌷', '💕'];
    
    setInterval(() => {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.fontSize = (Math.random() * 15 + 15) + 'px';
        particle.style.animationDuration = (Math.random() * 4 + 3) + 's';
        bg.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 7000);
    }, 40050); // Genera partículas constantemente
}
createFallingParticles();

// Teclado Contraseña
function pressNum(num) {
    if (currentInput.length < 6) {
        currentInput += num;
        updatePassDisplay();
    }
}

function clearPass() {
    currentInput = "";
    updatePassDisplay();
}

function updatePassDisplay() {
    document.getElementById('passInput').value = currentInput;
    if (showPassState) {
        document.getElementById('passVisible').innerText = currentInput;
    } else {
        document.getElementById('passVisible').innerText = "*".repeat(currentInput.length);
    }
}

document.getElementById('toggleEye').addEventListener('click', () => {
    showPassState = !showPassState;
    updatePassDisplay();
});

function submitPass() {
    if (currentInput === "5062") {
        unlockAccess(false);
    } else if (currentInput === "6258") {
        unlockAccess(true);
    } else {
        alert("Contraseña incorrecta 💕");
        clearPass();
    }
}

function openAdminLogin() {
    let pin = prompt("Ingresa la contraseña del Super Administrador (6258):");
    if (pin === "6258") {
        unlockAccess(true);
        openAdminPanel();
    } else if (pin !== null) {
        alert("Contraseña de administrador incorrecta");
    }
}

function unlockAccess(isAdmin) {
    document.getElementById('lockScreen').classList.add('hidden');
    document.getElementById('mainContainer').classList.remove('hidden');
    if (isAdmin) {
        document.getElementById('adminNavBtn').classList.remove('hidden');
    }
    loadGalleryData();
}

// Datos iniciales precargados (se guardan en localStorage)
const defaultData = {
    items: [
        { section: 'gif-4d', title: 'Logo 4D Rosa', price: '300 xats', url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300' },
        { section: 'gif-parpadeo', title: 'Avatar Parpadeo Lindo', price: '250 xats', url: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=300' },
        { section: 'pstyle-normal', title: 'Banner Pstyle Clean', price: '400 xats', url: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=300' },
        { section: 'pstyle-gif', title: 'Pstyle Animado', price: '450 xats', url: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=300' },
        { section: 'pcback-normal', title: 'Fondo PC Pastel', price: '500 xats', url: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=300' },
        { section: 'pcback-gif', title: 'Fondo PC Animado', price: '600 xats', url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=300' }
    ]
};

function getStoredData() {
    let data = localStorage.getItem('dulcinea_data');
    if (!data) {
        localStorage.setItem('dulcinea_data', JSON.stringify(defaultData));
        return defaultData;
    }
    return JSON.parse(data);
}

function saveStoredData(data) {
    localStorage.setItem('dulcinea_data', JSON.stringify(data));
}

// Cambiar de sección
function switchSection(sectionId) {
    document.querySelectorAll('.section-pane').forEach(pane => {
        pane.classList.remove('active');
    });
    document.getElementById('sec-' + sectionId).classList.add('active');
}

// Cargar galerías y precios en pantalla
function loadGalleryData() {
    const data = getStoredData();
    
    // Limpiar contenedores
    const sections = ['gif-4d', 'gif-parpadeo', 'pstyle-normal', 'pstyle-gif', 'pcback-normal', 'pcback-gif'];
    sections.forEach(sec => {
        document.getElementById('grid-' + sec).innerHTML = '';
    });
    document.getElementById('pricesGrid').innerHTML = '';

    data.items.forEach((item, index) => {
        // Renderizar en galería correspondiente
        const grid = document.getElementById('grid-' + item.section);
        if (grid) {
            const div = document.createElement('div');
            div.className = 'gallery-item';
            div.innerHTML = `
                <img src="${item.url}" alt="${item.title}" onclick="openModal('${item.url}', '${item.title}')">
                <span>${item.title}</span>
            `;
            grid.appendChild(div);
        }

        // Renderizar en sección Inicio (Precios)
        const pricesGrid = document.getElementById('pricesGrid');
        const priceCard = document.createElement('div');
        priceCard.className = 'price-card';
        priceCard.innerHTML = `
            <h3>${item.title}</h3>
            <p>Precio: ${item.price}</p>
        `;
        pricesGrid.appendChild(priceCard);
    });

    loadAdminItemsList();
}

// Modal de imagen grande
function openModal(url, title) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    const captionText = document.getElementById('modalCaption');
    
    modal.style.display = "block";
    modalImg.src = url;
    captionText.innerHTML = title;
}

function closeModal() {
    document.getElementById('imageModal').style.display = "none";
}

// Panel Admin
function openAdminPanel() {
    document.getElementById('adminModal').style.display = "block";
}

function closeAdminPanel() {
    document.getElementById('adminModal').style.display = "none";
}

function addNewItem() {
    const section = document.getElementById('adminSection').value;
    const title = document.getElementById('adminTitle').value;
    const price = document.getElementById('adminPrice').value;
    const url = document.getElementById('adminImgUrl').value;

    if (!title || !price || !url) {
        alert("Por favor completa todos los campos 💕");
        return;
    }

    const data = getStoredData();
    data.items.push({ section, title, price: price.includes('xats') ? price : price + ' xats', url });
    saveStoredData(data);

    document.getElementById('adminTitle').value = "";
    document.getElementById('adminPrice').value = "";
    document.getElementById('adminImgUrl').value = "";

    loadGalleryData();
    alert("¡Diseño agregado con éxito! ✨");
}

function deleteItem(index) {
    const data = getStoredData();
    data.items.splice(index, 1);
    saveStoredData(data);
    loadGalleryData();
}

function loadAdminItemsList() {
    const data = getStoredData();
    const list = document.getElementById('adminItemsList');
    list.innerHTML = "";

    data.items.forEach((item, index) => {
        const row = document.createElement('div');
        row.className = 'admin-item-row';
        row.innerHTML = `
            <span><b>[${item.section}]</b> ${item.title} - ${item.price}</span>
            <button onclick="deleteItem(${index})">Eliminar</button>
        `;
        list.appendChild(row);
    });
}

// Protección contra capturas de pantalla / guardar imagen
document.addEventListener('contextmenu', e => {
    e.preventDefault();
    alert("¡Ya te caché tomando captura! 📸👀🌸");
});

document.addEventListener('keydown', e => {
    if (e.key === "PrintScreen" || (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'C' || e.key === 'J')) || (e.ctrlKey && e.key === 'u')) {
        alert("¡Ya te caché tomando captura o inspeccionando! 📸💖");
        e.preventDefault();
    }
});
