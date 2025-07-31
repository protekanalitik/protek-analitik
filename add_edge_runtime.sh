#!/bin/bash
files=(
  "src/app/cozumler/anahtar-teslim-projeler/page.tsx"
  "src/app/cozumler/ar-ge-laboratuvarlari/page.tsx"
  "src/app/cozumler/kalite-guvence-sistemleri/page.tsx"
  "src/app/cozumler/otomasyon-sistemleri/page.tsx"
  "src/app/cozumler/page.tsx"
  "src/app/cozumler/endustriyel-laboratuvar-kurulumu/page.tsx"
  "src/app/iletisim/page.tsx"
  "src/app/admin/contact/messages/page.tsx"
  "src/app/admin/contact/page.tsx"
  "src/app/admin/categories/page.tsx"
  "src/app/admin/resources/page.tsx"
  "src/app/hakkimizda/page.tsx"
  "src/app/kaynaklar/page.tsx"
)

for file in "${files[@]}"; do
  if [ -f "$file" ] && ! grep -q "export const runtime = 'edge'" "$file"; then
    # Find line with dynamic export and add runtime after it
    sed -i '' "/export const dynamic = 'force-dynamic'/a\\
export const runtime = 'edge'" "$file"
    echo "Added edge runtime to: $file"
  fi
done
