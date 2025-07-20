#!/bin/bash

# Script de despliegue para AWS Amplify
# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Script de Despliegue AWS Amplify${NC}"
echo "=================================="

# Verificar si estamos en el directorio correcto
if [ ! -f "index.html" ]; then
    echo -e "${RED}❌ Error: No se encontró index.html${NC}"
    echo "Asegúrate de estar en el directorio del proyecto"
    exit 1
fi

# Verificar estado de git
echo -e "${YELLOW}📋 Verificando estado de Git...${NC}"
if [ -n "$(git status --porcelain)" ]; then
    echo -e "${YELLOW}⚠️  Hay cambios sin commitear${NC}"
    echo "Archivos modificados:"
    git status --short
    
    read -p "¿Quieres hacer commit de estos cambios? (y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo -e "${YELLOW}💾 Haciendo commit de cambios...${NC}"
        git add .
        read -p "Mensaje del commit: " commit_message
        git commit -m "$commit_message"
    fi
fi

# Push a GitHub
echo -e "${YELLOW}📤 Subiendo cambios a GitHub...${NC}"
git push origin main

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Cambios subidos exitosamente a GitHub${NC}"
    echo ""
    echo -e "${BLUE}🎉 ¡Listo! Tu sitio se actualizará automáticamente en AWS Amplify${NC}"
    echo ""
    echo -e "${YELLOW}📋 Próximos pasos:${NC}"
    echo "1. Ve a AWS Amplify Console"
    echo "2. Tu aplicación se actualizará automáticamente"
    echo "3. Espera 2-3 minutos para que se complete el despliegue"
    echo ""
    echo -e "${GREEN}🌐 URL de tu sitio: [Se mostrará en AWS Amplify Console]${NC}"
else
    echo -e "${RED}❌ Error al subir cambios a GitHub${NC}"
    exit 1
fi 