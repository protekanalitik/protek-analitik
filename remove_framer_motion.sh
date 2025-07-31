#!/bin/bash
files=(
  "src/app/cozumler/anahtar-teslim-projeler/page.tsx"
  "src/app/cozumler/ar-ge-laboratuvarlari/page.tsx"
  "src/app/cozumler/kalite-guvence-sistemleri/page.tsx"
  "src/app/cozumler/otomasyon-sistemleri/page.tsx"
  "src/app/cozumler/endustriyel-laboratuvar-kurulumu/page.tsx"
)

for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    # Remove framer-motion import
    sed -i '' "s/import { motion, AnimatePresence } from 'framer-motion'/\/\/ Framer Motion removed for bundle size optimization/g" "$file"
    # Replace motion.div with div
    sed -i '' 's/<motion\.div/<div/g' "$file"
    sed -i '' 's/<\/motion\.div>/<\/div>/g' "$file"
    # Remove motion props
    sed -i '' '/initial=/d' "$file"
    sed -i '' '/animate=/d' "$file"
    sed -i '' '/exit=/d' "$file"
    sed -i '' '/transition=/d' "$file"
    sed -i '' '/variants=/d' "$file"
    # Remove AnimatePresence
    sed -i '' 's/<AnimatePresence[^>]*>//g' "$file"
    sed -i '' 's/<\/AnimatePresence>//g' "$file"
    echo "Processed: $file"
  fi
done
