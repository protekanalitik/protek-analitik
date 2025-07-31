#!/bin/bash
files=(
  "src/app/admin/products/[id]/edit/page.tsx"
  "src/app/admin/resources/news/edit/[id]/page.tsx"
  "src/app/admin/resources/events/[id]/edit/page.tsx"
  "src/app/kaynaklar/haber/[id]/page.tsx"
  "src/app/kaynaklar/etkinlik/[id]/page.tsx"
  "src/app/urunler/[category]/page.tsx"
  "src/app/urunler/[category]/[subcategory]/[product]/page.tsx"
  "src/app/urunler/[category]/[subcategory]/page.tsx"
)

for file in "${files[@]}"; do
  if [ -f "$file" ] && ! grep -q "export const runtime = 'edge'" "$file"; then
    sed -i '' "/export const dynamic = 'force-dynamic'/a\\
export const runtime = 'edge'" "$file"
    echo "Added edge runtime to: $file"
  fi
done
