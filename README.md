# 🍽️ RestauranteApp — Frontend

Aplicación web desarrollada en Angular 21 para la gestión de un restaurante. Permite autenticación con JWT, manejo de roles diferenciados y operaciones CRUD sobre las entidades del dominio.

## Tecnologías
- Angular 21
- TypeScript
- JWT (JSON Web Tokens)
- HTTP Interceptors
- Guards (AuthGuard, RoleGuard)

## Requisitos previos
- Node.js v20 o superior
- Angular CLI v21
- El backend debe estar corriendo en `https://localhost:7166`

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/rodriguezppaula/RestauranteApp-front.git
```

2. Entra a la carpeta:
```bash
cd RestauranteApp-front-main
```

3. Instala las dependencias:
```bash
npm install
```

4. Inicia el servidor de desarrollo:
```bash
ng serve -o
```

5. Abre el navegador en `http://localhost:4200`

## Credenciales de prueba

| Rol | Email | Contraseña |
|-----|-------|------------|
| Admin | admin@test.com | Admin123 |
| Mesero | mesero@test.com | Mesero123 |
| Cliente | cliente@test.com | Cliente123 |

## Funcionalidades por rol

| Módulo | Admin | Mesero | Cliente |
|--------|-------|--------|---------|
| Platos (ver) | ✅ | ✅ | ✅ |
| Platos (CRUD) | ✅ | ❌ | ❌ |
| Pedidos | ✅ | ✅ | ✅ |
| Mesas | ✅ | ✅ | ❌ |
| Categorías | ✅ | ❌ | ❌ |
| Usuarios | ✅ | ❌ | ❌ |

## Estructura del proyecto

    src/
    ├── app/
    │   ├── guards/          # AuthGuard y RoleGuard
    │   ├── interceptors/    # Interceptor HTTP para JWT
    │   ├── models/          # Interfaces TypeScript
    │   ├── services/        # Servicios HTTP
    │   └── view/            # Componentes de vista
    │       ├── auth/        # Login y Registro
    │       ├── navbar/      # Barra de navegación
    │       ├── plato/       # CRUD Platos
    │       ├── categoria/   # CRUD Categorías
    │       ├── mesa/        # CRUD Mesas
    │       ├── pedido/      # CRUD Pedidos
    │       └── usuario/     # CRUD Usuarios

## Seguridad
- El token JWT se almacena en localStorage
- El interceptor HTTP inyecta el token en cada petición
- AuthGuard protege todas las rutas privadas
- RoleGuard restringe acceso según el rol del usuario
- Manejo diferenciado de errores 401 (sin sesión) y 403 (sin permiso)