# Estrategia de Calidad

## Herramientas utilizadas

- ESLint
- Vitest
- Playwright
- GitHub Actions

## Pruebas realizadas

### Tests unitarios
Se implementaron tests unitarios utilizando Vitest para verificar el funcionamiento de funciones de la aplicación.

### Tests End-to-End
Se implementó un test E2E con Playwright para validar el funcionamiento general de la aplicación.

## Pipeline de Integración Continua

El pipeline ejecuta automáticamente:

1. Instalación de dependencias.
2. Lint.
3. Tests unitarios.
4. Build del proyecto.

## Limitaciones

No todos los casos posibles fueron automatizados. Se priorizaron las funcionalidades principales de la aplicación.