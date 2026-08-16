<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dulcinea Graphic | Perfil & Tienda</title>
    <style>
        :root {
            --color-lila: #d8b4fe;
            --color-rosa: #f472b6;
            --color-azul: #60a5fa;
            --color-rosa-claro: #fdf2f8;
            --color-rosa-muy-claro: #fff1f2;
            --color-texto: #4b5563;
            --color-oscuro: #1f2937;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            user-select: none;
            -webkit-user-select: none;
            -webkit-touch-callout: none;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #fbcfe8, #e9d5ff, #bfdbfe);
            background-attachment: fixed;
            color: var(--color-texto);
            min-height: 100vh;
            overflow-x: hidden;
            position: relative;
        }

        /* --- EFECTO DE CORAZONES Y FLORES CAYENDO --- */
        .falling-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 9999;
            overflow: hidden;
        }

        .falling-item {
            position: absolute;
            top: -10%;
            animation: fall linear infinite;
            opacity: 0.7;
        }

        @keyframes fall {
            0% {
                transform: translateY(-10vh) rotate(0deg);
                opacity: 0.9;
            }
            100% {
                transform: translateY(110vh) rotate(360deg);
                opacity: 0;
            }
        }

        /* --- PANEL DE INICIO CONTRASEÑA --- */
        #auth-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(31, 41, 55, 0.85);
            backdrop-filter: blur(8px);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
        }

        .auth-card {
            background: #ffffff;
            padding: 30px;
            border-radius: 20px;
            text-align: center;
            box-shadow: 0 10px 25px rgba(244, 114, 182, 0.4);
            border: 3px solid var(--color-rosa);
            max-width: 320px;
            width: 90%;
        }

        .auth-card h2 {
            color: var(--color-rosa);
            margin-bottom: 15px;
            font-size: 1.5rem;
        }

        .auth-card input {
            width: 100%;
            padding: 12px;
            border: 2px solid var(--color-lila);
            border-radius: 10px;
            text-align: center;
            font-size: 1.2rem;
            margin-bottom: 15px;
            outline: none;
            background: var(--color-rosa-muy-claro);
            color: var(--color-oscuro);
        }

        .auth-card button {
            background: linear-gradient(135deg, var(--color-rosa), var(--color-lila));
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 10px;
            font-size: 1rem;
            cursor: pointer;
            font-weight: bold;
            transition: transform 0.2s;
            width: 100%;
        }

        .auth-card button:hover {
            transform: scale(1.03);
        }

        .key-hint {
            font-size: 0.75rem;
            color: #9ca3af;
            margin-top: 10px;
        }

        /* --- DISEÑO PRINCIPAL TIPO WEB (RESPONSIVE) --- */
        .main-wrapper {
            display: flex;
            min-height: 100vh;
            max-width: 1400px;
            margin: 0 auto;
            box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
            background: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(5px);
        }

        /* --- LADO IZQUIERDO: ROSITA BAJITO --- */
        .sidebar {
            width: 300px;
            background-color: var(--color-rosa-claro);
            border-right: 2px dashed rgba(244, 114, 182, 0.3);
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            flex-shrink: 0;
        }

        .admin-badge-container {
            position: absolute;
            top: 15px;
            right: 15px;
            cursor: pointer;
            font-size: 1.5rem;
            transition: transform 0.2s;
        }
        .admin-badge-container:hover {
            transform: scale(1.2);
        }

        .logo-container {
            margin-top: 25px;
            text-align: center;
            margin-bottom: 20px;
        }

        /* Logo DG 3D con profundidad lila/rosa/azul */
        .logo-dg-3d {
            font-size: 3.5rem;
            font-weight: 900;
            font-style: italic;
            background: linear-gradient(45deg, var(--color-rosa), var(--color-lila), var(--color-azul));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 3px 3px 0px #fbcfe8, 5px 5px 10px rgba(96, 165, 250, 0.5);
            letter-spacing: -2px;
            margin-bottom: 5px;
        }

        .sidebar h1 {
            font-size: 1.2rem;
            color: var(--color-oscuro);
            font-weight: bold;
            text-align: center;
            margin-bottom: 20px;
        }

        .profile-pic-box {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            border: 4px solid var(--color-rosa);
            overflow: hidden;
            margin-bottom: 20px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }

        .profile-pic-box img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .nav-sections {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .nav-btn {
            background: #ffffff;
            border: 2px solid var(--color-lila);
            padding: 10px 15px;
            border-radius: 12px;
            text-align: left;
            font-weight: bold;
            color: var(--color-oscuro);
            cursor: pointer;
            transition: all 0.2s;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .nav-btn:hover, .nav-btn.active {
            background: linear-gradient(135deg, var(--color-rosa), var(--color-lila));
            color: white;
            border-color: transparent;
        }

        /* --- CONTENIDO PRINCIPAL --- */
        .content-area {
            flex-grow: 1;
            padding: 30px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .section-panel {
            display: none;
        }

        .section-panel.active-panel {
            display: block;
            animation: fadeIn 0.4s ease-in-out;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .section-title {
            font-size: 1.8rem;
            color: var(--color-oscuro);
            margin-bottom: 20px;
            border-bottom: 3px solid var(--color-rosa);
            padding-bottom: 5px;
            display: inline-block;
        }

        /* --- PRECIOS EN XATS (INICIO) --- */
        .prices-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            gap: 15px;
            margin-top: 15px;
        }

        .price-card {
            background: rgba(255, 255, 255, 0.9);
            border: 2px solid var(--color-lila);
            border-radius: 15px;
            padding: 15px;
            text-align: center;
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
        }

        .price-card h3 {
            font-size: 1.1rem;
            color: var(--color-oscuro);
            margin-bottom: 8px;
        }

        .price-tag {
            background: linear-gradient(135deg, var(--color-azul), var(--color-lila));
            color: white;
            padding: 5px 12px;
            border-radius: 20px;
            font-weight: bold;
            display: inline-block;
            font-size: 0.95rem;
        }

        /* --- GALERÍAS Y REGLONES (TAMAÑO MEDIANO) --- */
        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 20px;
            margin-top: 15px;
        }

        .gallery-item {
            background: white;
            border-radius: 15px;
            padding: 12px;
            border: 2px solid var(--color-rosa);
            box-shadow: 0 4px 10px rgba(244, 114, 182, 0.15);
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .gallery-img-container {
            width: 100%;
            height: 160px; /* Tamaño mediano */
            border-radius: 10px;
            overflow: hidden;
            cursor: pointer;
            position: relative;
        }

        .gallery-img-container img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s;
        }

        .gallery-img-container img:hover {
            transform: scale(1.05);
        }

        .item-name {
            margin-top: 10px;
            font-size: 0.9rem;
            font-weight: bold;
            color: var(--color-oscuro);
            text-align: center;
            word-break: break-all;
        }

        /* --- MODAL PARA FOTO GRANDE --- */
        #img-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: none;
            justify-content: center;
            align-items: center;
            z-index: 20000;
        }

        .modal-content-box {
            position: relative;
            max-width: 90%;
            max-height: 90%;
            text-align: center;
        }

        .modal-content-box img {
            max-width: 100%;
            max-height: 80vh;
            border-radius: 15px;
            border: 4px solid white;
        }

        .close-modal-btn {
            position: absolute;
            top: -40px;
            right: 0;
            background: var(--color-rosa);
            color: white;
            border: none;
            padding: 8px 15px;
            border-radius: 10px;
            font-weight: bold;
            cursor: pointer;
            font-size: 1rem;
        }

        /* --- PANEL DE ADMINISTRADOR SUPER --- */
        #admin-panel-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.85);
            display: none;
            justify-content: center;
            align-items: center;
            z-index: 15000;
        }

        .admin-panel-card {
            background: #ffffff;
            width: 90%;
            max-width: 700px;
            max-height: 85vh;
            border-radius: 20px;
            padding: 25px;
            overflow-y: auto;
            border: 4px solid var(--color-azul);
            box-shadow: 0 10px 30px rgba(96, 165, 250, 0.4);
        }

        .admin-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            border-bottom: 2px solid var(--color-azul);
            padding-bottom: 10px;
        }

        .admin-header h2 {
            color: var(--color-azul);
            font-size: 1.4rem;
        }

        .close-admin-btn {
            background: #ef4444;
            color: white;
            border: none;
            padding: 5px 12px;
            border-radius: 8px;
            cursor: pointer;
            font-weight: bold;
        }

        .admin-section-group {
            margin-bottom: 15px;
            background: var(--color-rosa-muy-claro);
            padding: 12px;
            border-radius: 10px;
            border: 1px solid var(--color-lila);
        }

        .admin-section-group h3 {
            font-size: 1rem;
            color: var(--color-oscuro);
            margin-bottom: 8px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .admin-sub-options {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }

        .admin-sub-options label {
            font-size: 0.85rem;
            display: flex;
            align-items: center;
            gap: 4px;
            background: white;
            padding: 4px 8px;
            border-radius: 6px;
            border: 1px solid #d1d5db;
        }

        /* --- PIE DE PÁGINA --- */
        footer {
            margin-top: 30px;
            text-align: center;
            font-size: 0.95rem;
            color: var(--color-oscuro);
            border-top: 1px dashed rgba(244, 114, 182, 0.3);
            padding-top: 15px;
        }

        .footer-heart {
            color: var(--color-rosa);
            display: inline-block;
            animation: pulseHeart 1.2s infinite;
        }

        @keyframes pulseHeart {
            0% { transform: scale(1); }
            50% { transform: scale(1.25); }
            100% { transform: scale(1); }
        }

        .signature-text {
            font-family: 'Brush Script MT', cursive, sans-serif;
            font-size: 1.3rem;
            color: var(--color-rosa);
            font-weight: bold;
        }

        /* --- ADVERTENCIA CAPTURA DE PANTALLA --- */
        #screenshot-alert {
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%) translateY(-100px);
            background: linear-gradient(135deg, #f43f5e, #db2777);
            color: white;
            padding: 12px 25px;
            border-radius: 20px;
            font-weight: bold;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            transition: transform 0.4s ease-in-out;
            z-index: 30000;
            text-align: center;
        }

        #screenshot-alert.show {
            transform: translateX(-50%) translateY(0);
        }

        /* --- MEDIA QUERY PARA CELULAR --- */
        @media (max-width: 768px) {
            .main-wrapper {
                flex-direction: column;
            }
            .sidebar {
                width: 100%;
                border-right: none;
                border-bottom: 2px dashed rgba(244, 114, 182, 0.3);
            }
            .content-area {
                padding: 15px;
            }
        }
    </style>
</head>
<body oncontextmenu="return false;">

    <!-- EFECTO CORAZONES Y FLORES CAYENDO -->
    <div class="falling-container" id="fallingContainer"></div>

    <!-- PANEL DE INICIO CONTRASEÑA -->
    <div id="auth-overlay">
        <div class="auth-card">
            <h2>Acceso Restringido</h2>
            <input type="password" id="access-password" placeholder="Contraseña...">
            <button onclick="checkPassword()">Entrar</button>
            <div class="key-hint">Contraseña 5062 letras pequeña</div>
        </div>
    </div>

    <!-- ALERTA DE CAPTURA DE PANTALLA -->
    <div id="screenshot-alert">¡Ya caché tomando captura! 📸✨ Te pillé con las manos en la masa.</div>

    <!-- MODAL FOTO GRANDE -->
    <div id="img-modal" onclick="closeModal()">
        <div class="modal-content-box" onclick="event.stopPropagation()">
            <button class="close-modal-btn" onclick="closeModal()">Cerrar ✖</button>
            <img id="modal-img-element" src="" alt="Vista ampliada">
        </div>
    </div>

    <!-- PANEL ADMINISTRADOR SUPER -->
    <div id="admin-panel-overlay">
        <div class="admin-panel-card">
            <div class="admin-header">
                <h2>Panel de Administrador Super 👑</h2>
                <button class="close-admin-btn" onclick="closeAdminPanel()">Cerrar</button>
            </div>
            
            <div class="admin-section-group">
                <h3>Inicio</h3>
                <div class="admin-sub-options">
                    <label>Subreglón: 4d</label>
                    <label>Parpadeo</label>
                </div>
            </div>

            <div class="admin-section-group">
                <h3>GIF</h3>
                <div class="admin-sub-options">
                    <label>Pstyle: <input type="radio" name="pstyle-gif" checked> Normal <input type="radio" name="pstyle-gif"> Gif</label>
                    <label>Pcback: <input type="radio" name="pcback-gif" checked> Normal <input type="radio" name="pcback-gif"> Gif</label>
                </div>
            </div>

            <div class="admin-section-group">
                <h3>Foto Perfil</h3>
                <div class="admin-sub-options">
                    <label><input type="checkbox" checked> Activa en Panel de Inicio</label>
                </div>
            </div>

            <div class="admin-section-group">
                <h3>Galeria Principal</h3>
                <div class="admin-sub-options">
                    <label>Subreglón: 4d</label>
                    <label>Parpadeo</label>
                </div>
            </div>
        </div>
    </div>

    <!-- CONTENEDOR PRINCIPAL TIPO WEB -->
    <div class="main-wrapper">
        
        <!-- LADO IZQUIERDO: ROSITA BAJITO -->
        <aside class="sidebar">
            <!-- Corona lado derecho de la sección superior -->
            <div class="admin-badge-container" onclick="openAdminPanel()" title="Panel Administrador">👑</div>

            <div class="logo-container">
                <div class="logo-dg-3d">DG</div>
                <h1>Dulcinea Graphic</h1>
            </div>

            <div class="profile-pic-box">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80" alt="Foto Perfil" class="protected-img">
            </div>

            <div class="nav-sections">
                <button class="nav-btn active" onclick="switchSection('inicio', this)">
                    <span>🏠 Inicio</span>
                </button>
                <button class="nav-btn" onclick="switchSection('gif', this)">
                    <span>✨ GIF / Diseños</span>
                </button>
                <button class="nav-btn" onclick="switchSection('galeria', this)">
                    <span>🖼️ Galería 4D & Efectos</span>
                </button>
            </div>
        </aside>

        <!-- CONTENIDO CENTRAL -->
        <main class="content-area">
            <div>
                <!-- SECCIÓN 1: INICIO (Precios en xats) -->
                <div id="inicio" class="section-panel active-panel">
                    <h2 class="section-title">Precios y Servicios (Xats)</h2>
                    <p style="margin-bottom: 15px; font-size: 0.9rem;">Precios oficiales de diseño adaptados para celular y computadora.</p>
                    
                    <div class="prices-grid">
                        <div class="price-card">
                            <h3>Logo DG 3D Personalizado</h3>
                            <div class="price-tag">250 xats</div>
                        </div>
                        <div class="price-card">
                            <h3>Reglón 4D Estilizado</h3>
                            <div class="price-tag">150 xats</div>
                        </div>
                        <div class="price-card">
                            <h3>Animación GIF & Parpadeo</h3>
                            <div class="price-tag">200 xats</div>
                        </div>
                        <div class="price-card">
                            <h3>Pstyle & Pcback Personalizado</h3>
                            <div class="price-tag">180 xats</div>
                        </div>
                        <div class="price-card">
                            <h3>Foto de Perfil Web / Xat</h3>
                            <div class="price-tag">100 xats</div>
                        </div>
                        <div class="price-card">
                            <h3>Maquetación Web Completa</h3>
                            <div class="price-tag">500 xats</div>
                        </div>
                    </div>
                </div>

                <!-- SECCIÓN 2: GIF (Con nombres exactos y enlaces bloqueados) -->
                <div id="gif" class="section-panel">
                    <h2 class="section-title">Sección de GIF / Animaciones</h2>
                    <p style="margin-bottom: 15px; font-size: 0.9rem;">Diseños dinámicos con efectos especiales y transiciones fluidas.</p>

                    <div class="gallery-grid">
                        <!-- Elemento 1 -->
                        <div class="gallery-item">
                            <div class="gallery-img-container" onclick="openModal('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=80')">
                                <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=80" alt="gif_animado_lila_neon.gif" class="protected-img">
                            </div>
                            <div class="item-name">gif_animado_lila_neon.gif</div>
                        </div>

                        <!-- Elemento 2 -->
                        <div class="gallery-item">
                            <div class="gallery-img-container" onclick="openModal('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=500&auto=format&fit=crop&q=80')">
                                <img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=500&auto=format&fit=crop&q=80" alt="banner_rosa_cyber.gif" class="protected-img">
                            </div>
                            <div class="item-name">banner_rosa_cyber.gif</div>
                        </div>

                        <!-- Elemento 3 -->
                        <div class="gallery-item">
                            <div class="gallery-img-container" onclick="openModal('https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=500&auto=format&fit=crop&q=80')">
                                <img src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=500&auto=format&fit=crop&q=80" alt="loader_azul_pastel.gif" class="protected-img">
                            </div>
                            <div class="item-name">loader_azul_pastel.gif</div>
                        </div>

                        <!-- Elemento 4 -->
                        <div class="gallery-item">
                            <div class="gallery-img-container" onclick="openModal('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=500&auto=format&fit=crop&q=80')">
                                <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=500&auto=format&fit=crop&q=80" alt="textura_degradado_dg.gif" class="protected-img">
                            </div>
                            <div class="item-name">textura_degradado_dg.gif</div>
                        </div>
                    </div>
                </div>

                <!-- SECCIÓN 3: GALERÍA (4D y Parpadeo) -->
                <div id="galeria" class="section-panel">
                    <h2 class="section-title">Galería 4D & Efectos</h2>
                    <p style="margin-bottom: 15px; font-size: 0.9rem;">Muestra de tipografía 4D y efectos de parpadeo profesional.</p>

                    <div class="gallery-grid">
                        <!-- Elemento 1 -->
                        <div class="gallery-item">
                            <div class="gallery-img-container" onclick="openModal('https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=500&auto=format&fit=crop&q=80')">
                                <img src="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=500&auto=format&fit=crop&q=80" alt="tipografia_4d_dulcinea.png" class="protected-img">
                            </div>
                            <div class="item-name">tipografia_4d_dulcinea.png</div>
                        </div>

                        <!-- Elemento 2 -->
                        <div class="gallery-item">
                            <div class="gallery-img-container" onclick="openModal('https://images.unsplash.com/photo-1563089145-599997674d42?w=500&auto=format&fit=crop&q=80')">
                                <img src="https://images.unsplash.com/photo-1563089145-599997674d42?w=500&auto=format&fit=crop&q=80" alt="efecto_parpadeo_rosa.png" class="protected-img">
                            </div>
                            <div class="item-name">efecto_parpadeo_rosa.png</div>
                        </div>

                        <!-- Elemento 3 -->
                        <div class="gallery-item">
                            <div class="gallery-img-container" onclick="openModal('https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&auto=format&fit=crop&q=80')">
                                <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&auto=format&fit=crop&q=80" alt="pstyle_normal_pcback.png" class="protected-img">
                            </div>
                            <div class="item-name">pstyle_normal_pcback.png</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- PIE DE PÁGINA -->
            <footer>
                Hecho por <span class="signature-text">bolitadequeso</span> <span class="footer-heart">❤</span>
            </footer>
        </main>
    </div>

    <script>
        /* --- VALIDACIÓN DE CONTRASEÑA --- */
        function checkPassword() {
            const pass = document.getElementById('access-password').value;
            if (pass === '5062') {
                document.getElementById('auth-overlay').style.display = 'none';
            } else {
                alert('Contraseña incorrecta. Recuerda: contraseña 5062 en letras pequeñas.');
                document.getElementById('access-password').value = '';
            }
        }

        /* --- NAVEGACIÓN ENTRE SECCIONES (BLOQUEO DE REDIRECCIÓN A OTRA CARPETA) --- */
        function switchSection(sectionId, btnElement) {
            // Ocultar todos los paneles
            const panels = document.querySelectorAll('.section-panel');
            panels.forEach(panel => panel.classList.remove('active-panel'));

            // Mostrar el panel seleccionado
            document.getElementById(sectionId).classList.add('active-panel');

            // Actualizar botones activos
            const buttons = document.querySelectorAll('.nav-btn');
            buttons.forEach(btn => btn.classList.remove('active'));
            btnElement.classList.add('active');
        }

        /* --- MODAL PARA AMPLIAR FOTOS --- */
        function openModal(imgSrc) {
            const modal = document.getElementById('img-modal');
            const modalImg = document.getElementById('modal-img-element');
            modalImg.src = imgSrc;
            modal.style.display = 'flex';
        }

        function closeModal() {
            document.getElementById('img-modal').style.display = 'none';
        }

        /* --- PANEL DE ADMINISTRADOR SUPER --- */
        function openAdminPanel() {
            const pass = prompt('Ingrese clave de Administrador Super:');
            if (pass === '5062') {
                document.getElementById('admin-panel-overlay').style.display = 'flex';
            } else if (pass !== null) {
                alert('Clave incorrecta. Acceso denegado.');
            }
        }

        function closeAdminPanel() {
            document.getElementById('admin-panel-overlay').style.display = 'none';
        }

        /* --- BLOQUEO DE GUARDAR IMÁGENES Y MENSAJE DE CAPTURA CHISTOSO --- */
        // Bloquear menú contextual (clic derecho) en fotos
        document.addEventListener('contextmenu', function(e) {
            if (e.target.tagName === 'IMG') {
                e.preventDefault();
                showScreenshotAlert();
            }
        });

        // Detectar intento de guardar por arrastre (drag)
        document.addEventListener('dragstart', function(e) {
            if (e.target.tagName === 'IMG') {
                e.preventDefault();
            }
        });

        // Detectar tecla de captura de pantalla (PrintScreen) o atajos comunes de captura
        let alertTimeout;
        function showScreenshotAlert() {
            const alertBox = document.getElementById('screenshot-alert');
            alertBox.classList.add('show');
            clearTimeout(alertTimeout);
            alertTimeout = setTimeout(() => {
                alertBox.classList.remove('show');
            }, 4000);
        }

        window.addEventListener('keyup', function(e) {
            if (e.key === 'PrintScreen') {
                showScreenshotAlert();
            }
        });

        // Detectar combinaciones de teclas para capturas (Ctrl+Shift+S, Cmd+Shift+4, etc.)
        window.addEventListener('keydown', function(e) {
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 's' || e.key === 'S' || e.key === '4' || e.key === '3')) {
                showScreenshotAlert();
            }
        });

        /* --- GENERADOR DINÁMICO DE CORAZONES Y FLORES CAYENDO --- */
        const fallingContainer = document.getElementById('fallingContainer');
        const symbols = ['❤', '🌸', '💖', '🌷', '✨', '💕', '🌺', '💗'];

        function createFallingItem() {
            const item = document.createElement('div');
            item.classList.add('falling-item');
            item.innerText = symbols[Math.floor(Math.random() * symbols.length)];
            
            // Posición horizontal aleatoria
            item.style.left = Math.random() * 100 + 'vw';
            
            // Tamaño aleatorio
            const size = Math.random() * 1.2 + 0.8;
            item.style.fontSize = size + 'rem';
            
            // Duración de caída aleatoria (entre 4 y 9 segundos)
            const duration = Math.random() * 5 + 4;
            item.style.animationDuration = duration + 's';
            
            fallingContainer.appendChild(item);

            // Eliminar elemento al finalizar la animación
            setTimeout(() => {
                item.remove();
            }, duration * 1000);
        }

        // Generar nuevos elementos cada 400ms
        setInterval(createFallingItem, 400);
    </script>
</body>
</html>
