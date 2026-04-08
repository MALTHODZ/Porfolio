# AGENTS.md - Portfolio Frontend

## Visión General

**Propósito:** Portfolio personal para mostrar proyectos alojados en GitHub. La aplicación sirve como vitrina visual y explica mi perfil como desarrollador Frontend especializado en React.

**Rol del Agente de IA:** Ayudar en la generación de componentes UI reutilizables, páginas, hooks personalizados y refactorización de código. El agente debe priorizar la claridad visual, el rendimiento (Next.js) y las buenas prácticas de React.

**Tecnología principal:**
- **Framework:** Next.js (App Router recomendado)
- **UI:** React 18+
- **Lenguaje:** TypeScript estricto

## Configuración / Build & Test

Todos los comandos deben ejecutarse en la raíz del proyecto.

| Acción | Comando exacto |
|--------|----------------|
| Instalar dependencias | `npm install` |
| Servidor de desarrollo | `npm run dev` |
| Build de producción | `npm run build` |
| Iniciar en producción | `npm run start` |

**Testing:** Pendiente de implementar. Por ahora, no hay comandos de test.

## Estilo de código / Convenciones

- **Lenguaje:** TypeScript en modo estricto (`strict: true`). Evitar el uso de `any`.
- **Formateo (Prettier):** Usar configuración por defecto o personalizada si existe. Preferir comillas simples y sin punto y coma al final.
- **Linting (ESLint):** Seguir la configuración estándar de Next.js. No saltarse reglas de linting sin justificación.
- **Estructura de carpetas (Arquitectura):**
src/
├── components/ # Componentes reutilizables (UI, layout, etc.)
├── pages/ # (Si usas Pages Router) o app/ (si usas App Router)
├── hooks/ # Custom hooks de React
├── utils/ # Funciones auxiliares
├── styles/ # Archivos de estilos globales o módulos CSS
└── types/ # Definiciones de tipos TypeScript

**Patrones de diseño:** Preferir **componentes funcionales con hooks**. Usar composición sobre herencia. Mantener la lógica de negocio fuera de los componentes de UI (separación de responsabilidades).

## Testing (opcional)

*Sección reservada para cuando se implemente testing. Por ahora, el agente no debe generar tests automáticamente.*

## Flujo de trabajo (Git/PR)

- **Rama principal:** `main` (protegida, no se hace commit directo).
- **Ramas de feature:** `feature/descripcion-breve` (ej: `feature/agregar-seccion-proyectos`).
- **Mensajes de commit:** Concisos y descriptivos. Preferir el formato:
Donde `tipo` puede ser `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`. Ejemplo: `feat(proyectos): añade tarjeta de proyecto con imagen`.
- **Pull Requests:** No hay reglas estrictas aún. Se recomienda que al menos un revisor apruebe antes de fusionar.

## Seguridad

- **Variables de entorno:** Usar archivo `.env.local` (no versionado). Las variables que empiecen con `NEXT_PUBLIC_` se exponen al cliente. Ejemplos típicos:
- `NEXT_PUBLIC_API_URL` (si hay alguna API externa)
- `NEXT_PUBLIC_GA_ID` (si usas Google Analytics)
- **Buenas prácticas:**
- No hardcodear claves API o tokens en el código.
- Validar y sanitizar toda entrada de usuario (formularios, si los hay).
- Usar el sistema de imágenes optimizadas de Next.js (`next/image`) para prevenir problemas de seguridad con imágenes externas.
- **Enlaces de referencia:** [Seguridad en Next.js](https://nextjs.org/docs/security)

## Notas adicionales

- El proyecto es un **portfolio personal**, no una aplicación crítica. El equilibrio entre funcionalidad y simplicidad es clave.
- Al generar código, el agente debe priorizar la **legibilidad** y el **mantenimiento** por encima de optimizaciones prematuras.
- Si hay dudas sobre una decisión técnica, el agente debe preguntar o sugerir alternativas comentadas en el código.