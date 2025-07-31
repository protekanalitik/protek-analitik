#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Büyük resim dosyalarını WebP'ye dönüştür
const largeImages = [
  'public/images/lab-10.jpg',
  'public/images/lab-4.jpg',
  'public/images/promo-images/banner-lab.jpg',
  'public/images/promo-images/banner-lab2.jpg',
  'public/images/promo-images/banner-lab3.jpg',
  'public/images/banner-lab.jpg'
];

async function convertToWebP() {
  console.log('🎯 Starting WebP conversion for large images...');
  
  for (const imagePath of largeImages) {
    if (fs.existsSync(imagePath)) {
      const webpPath = imagePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      
      try {
        console.log(`Converting ${imagePath} -> ${webpPath}`);
        
        // Sharp ile WebP dönüşümü (quality 80, max width 1200px)
        await sharp(imagePath)
          .resize(1200, null, { 
            withoutEnlargement: true,
            fit: 'inside'
          })
          .webp({ quality: 80 })
          .toFile(webpPath);
        
        const originalSize = fs.statSync(imagePath).size;
        const webpSize = fs.statSync(webpPath).size;
        const savings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
        
        console.log(`✅ ${path.basename(imagePath)}: ${(originalSize/1024/1024).toFixed(1)}MB -> ${(webpSize/1024/1024).toFixed(1)}MB (${savings}% tasarruf)`);
        
      } catch (error) {
        console.error(`❌ Error converting ${imagePath}:`, error.message);
      }
    } else {
      console.log(`⚠️ File not found: ${imagePath}`);
    }
  }
  
  console.log('🎉 WebP conversion completed!');
}

convertToWebP().catch(console.error);
