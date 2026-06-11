# Estrategia de Calidad

## Objetivo

Garantizar el correcto funcionamiento de la aplicación de gestión de gastos mediante pruebas y automatización.

## Herramientas

- GitHub Actions
- GitHub Issues
- GitHub Pull Requests
- Astro
- Supabase

## Estrategia de Testing

### Tests Unitarios

Se verificarán funciones individuales como:

- Validación de montos
- Validación de formularios
- Cálculo de totales

### Tests End-to-End

Se probará el flujo completo:

1. Agregar un gasto
2. Mostrarlo en pantalla
3. Verificar el total actualizado

## Integración Continua (CI)

Se utiliza GitHub Actions para:

- Instalar dependencias
- Ejecutar el build del proyecto
- Detectar errores automáticamente

## Flujo de Trabajo

1. Crear Issue
2. Crear rama feature/*
3. Realizar cambios
4. Crear Pull Request
5. Revisar cambios
6. Merge a develop
7. Merge a main

## Limitaciones

- Tiempo reducido para pruebas extensivas
- Dependencia de servicios externos como Supabase