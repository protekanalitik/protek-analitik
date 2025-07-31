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
    # Remove intersection observer import
    sed -i '' "s/import { useInView } from 'react-intersection-observer'/\/\/ Intersection Observer removed for bundle size optimization/g" "$file"
    # Remove useInView usage
    sed -i '' '/const \[.*ref.*inView.*\] = useInView/d' "$file"
    sed -i '' '/ref={.*ref}/d' "$file"
    # Remove inView conditions
    sed -i '' 's/inView ? /true ? /g' "$file"
    sed -i '' 's/{inView && /{true && /g' "$file"
    echo "Processed: $file"
  fi
done
