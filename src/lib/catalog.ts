// Catalog details sourced from the GadgetZone ZA store.
export type ColorOption = { name: string; hex: string };
export type CatalogEntry = { images: string[]; colors: ColorOption[]; storage: string[]; description: string };

export const CATALOG: Record<string, CatalogEntry> = {
  "iPhone X": {
    "images": [
      "/images/xsmax.jpg",
      "/images/xsmax2.jpg"
    ],
    "colors": [
      {
        "name": "Space Gray",
        "hex": "#4a4a4c"
      },
      {
        "name": "Silver",
        "hex": "#e3e4e6"
      }
    ],
    "storage": [
      "64GB",
      "256GB"
    ],
    "description": "iPhone X with a premium Super Retina display, fast Apple silicon, Face ID security and an advanced camera system for stunning photos and 4K video. Available with fast nationwide delivery."
  },
  "iPhone XR": {
    "images": [
      "/images/xr.jpg",
      "/images/xr2.jpg",
      "/images/xrblue.jpg",
      "/images/xrblue2.jpg"
    ],
    "colors": [
      {
        "name": "Black",
        "hex": "#1c1c1e"
      },
      {
        "name": "White",
        "hex": "#f2f2f2"
      },
      {
        "name": "Red",
        "hex": "#c8102e"
      },
      {
        "name": "Yellow",
        "hex": "#f3d34a"
      },
      {
        "name": "Blue",
        "hex": "#4a90d9"
      },
      {
        "name": "Coral",
        "hex": "#f4785c"
      }
    ],
    "storage": [
      "64GB",
      "128GB"
    ],
    "description": "iPhone XR with a premium Super Retina display, fast Apple silicon, Face ID security and an advanced camera system for stunning photos and 4K video. Available with fast nationwide delivery."
  },
  "iPhone XS Max": {
    "images": [
      "/images/xsmax.jpg",
      "/images/xsmax2.jpg",
      "/images/xsmaxwhite.jpg",
      "/images/xsmaxwhite2.jpg"
    ],
    "colors": [
      {
        "name": "Space Gray",
        "hex": "#4a4a4c"
      },
      {
        "name": "Silver",
        "hex": "#e3e4e6"
      },
      {
        "name": "Gold",
        "hex": "#e2c9a0"
      }
    ],
    "storage": [
      "64GB",
      "256GB",
      "512GB"
    ],
    "description": "Featuring a stunning 6.5\" Super Retina OLED display, powerful A12 Bionic chip, Face ID security, 64GB/256GB/512GB storage options, and a dual 12MP camera system for incredible photos and videos. Enjoy premium performance, all-day battery life, and the luxury design that makes the iPhone XS Max one of Apple's most iconic smartphones. Perfect for social media, streaming, gaming, and everyday use. Available with fast nationwide delivery."
  },
  "iPhone 11": {
    "images": [
      "/images/Iphone11.jpg",
      "/images/iphone112.jpg"
    ],
    "colors": [
      {
        "name": "Black",
        "hex": "#1c1c1e"
      },
      {
        "name": "White",
        "hex": "#f2f2f2"
      },
      {
        "name": "Red",
        "hex": "#c8102e"
      },
      {
        "name": "Yellow",
        "hex": "#f3d34a"
      },
      {
        "name": "Green",
        "hex": "#ade0c8"
      },
      {
        "name": "Purple",
        "hex": "#d5c6e8"
      }
    ],
    "storage": [
      "64GB",
      "128GB",
      "256GB"
    ],
    "description": "Featuring a vibrant 6.1\" Liquid Retina HD display, powerful A13 Bionic chip, Face ID security,128GB storage, and a dual 12MP camera system for stunning photos and 4K videos. Enjoy excellent battery life, smooth performance, and reliable connectivity for social media, streaming, gaming, and everyday use. A perfect balance of power, style, and value. Available with fast nationwide delivery."
  },
  "iPhone 11 Pro": {
    "images": [
      "/images/11promax.jpg",
      "/images/11promax2.jpg"
    ],
    "colors": [
      {
        "name": "Space Gray",
        "hex": "#4a4a4c"
      },
      {
        "name": "Silver",
        "hex": "#e3e4e6"
      },
      {
        "name": "Gold",
        "hex": "#e2c9a0"
      },
      {
        "name": "Midnight Green",
        "hex": "#4e5851"
      }
    ],
    "storage": [
      "64GB",
      "256GB"
    ],
    "description": "iPhone 11 Pro with a premium Super Retina display, fast Apple silicon, Face ID security and an advanced camera system for stunning photos and 4K video. Available with fast nationwide delivery."
  },
  "iPhone 11 Pro Max": {
    "images": [
      "/images/11promax.jpg",
      "/images/11promax2.jpg",
      "/images/11PROMAX3.jpg",
      "/images/11PROMAX4.jpg"
    ],
    "colors": [
      {
        "name": "Space Gray",
        "hex": "#4a4a4c"
      },
      {
        "name": "Silver",
        "hex": "#e3e4e6"
      },
      {
        "name": "Gold",
        "hex": "#e2c9a0"
      },
      {
        "name": "Midnight Green",
        "hex": "#4e5851"
      }
    ],
    "storage": [
      "256GB",
      "512GB"
    ],
    "description": "Featuring a stunning 6.5\" Super Retina XDR OLED display, powerful A13 Bionic chip, Face ID security, 256GB/512GB storage options, and a professional triple 12MP camera system for exceptional photos and 4K videos. Enjoy outstanding all-day battery life, premium performance, and a sleek stainless-steel design. Perfect for photography, content creation, gaming, streaming, and everyday use. Available with fast nationwide delivery."
  },
  "iPhone 12": {
    "images": [
      "/images/12white.jpg",
      "/images/12_2.jpg",
      "/images/12.jpg"
    ],
    "colors": [
      {
        "name": "Black",
        "hex": "#1c1c1e"
      },
      {
        "name": "White",
        "hex": "#f2f2f2"
      },
      {
        "name": "Red",
        "hex": "#c8102e"
      },
      {
        "name": "Green",
        "hex": "#d3e0c8"
      },
      {
        "name": "Blue",
        "hex": "#2f4f75"
      },
      {
        "name": "Purple",
        "hex": "#c9c2e8"
      }
    ],
    "storage": [
      "64GB",
      "128GB",
      "256GB"
    ],
    "description": "Featuring a brilliant 6.1\" Super Retina XDR OLED display, powerful A14 Bionic chip, Face ID security, 64GB/128GB/256GB storage options, and a dual 12MP camera system for stunning photos and cinematic-quality videos. Enjoy ultra-fast performance, 5G connectivity, excellent battery life, and a sleek modern design. Perfect for social media, gaming, streaming, photography, and everyday use. Available with fast nationwide delivery."
  },
  "iPhone 12 Pro": {
    "images": [
      "/images/12pro.jpg",
      "/images/12pro2.jpg",
      "/images/12propro.jpg",
      "/images/12prprp.jpg"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#52514f"
      },
      {
        "name": "Silver",
        "hex": "#e3e4e6"
      },
      {
        "name": "Gold",
        "hex": "#e2c9a0"
      },
      {
        "name": "Pacific Blue",
        "hex": "#2d4f60"
      }
    ],
    "storage": [
      "128GB",
      "256GB",
      "512GB"
    ],
    "description": "Featuring a stunning 6.1\" Super Retina XDR OLED display, powerful A14 Bionic chip, Face ID security, 128GB/256GB/512GB storage options, and a professional triple 12MP camera system with LiDAR Scanner for incredible photos, videos, and low-light performance. Enjoy ultra-fast 5G connectivity, excellent battery life, and a premium stainless-steel design built for performance and style. Perfect for photography, content creation, gaming, streaming, and everyday use. Available with fast nationwide delivery."
  },
  "iPhone 12 Pro Max": {
    "images": [
      "/images/12propro.jpg",
      "/images/12prprp.jpg",
      "/images/12pro.jpg"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#52514f"
      },
      {
        "name": "Silver",
        "hex": "#e3e4e6"
      },
      {
        "name": "Gold",
        "hex": "#e2c9a0"
      },
      {
        "name": "Pacific Blue",
        "hex": "#2d4f60"
      }
    ],
    "storage": [
      "128GB",
      "256GB",
      "512GB"
    ],
    "description": "iPhone 12 Pro Max with a premium Super Retina display, fast Apple silicon, Face ID security and an advanced camera system for stunning photos and 4K video. Available with fast nationwide delivery."
  },
  "iPhone 13": {
    "images": [
      "/images/13.jpg",
      "/images/13_2.jpg",
      "/images/13RED.jpg",
      "/images/13RED2.jpg"
    ],
    "colors": [
      {
        "name": "Midnight",
        "hex": "#232a31"
      },
      {
        "name": "Starlight",
        "hex": "#faf6f2"
      },
      {
        "name": "Blue",
        "hex": "#276787"
      },
      {
        "name": "Pink",
        "hex": "#fae0dd"
      },
      {
        "name": "Green",
        "hex": "#3d4a3f"
      },
      {
        "name": "Red",
        "hex": "#c8102e"
      }
    ],
    "storage": [
      "128GB",
      "256GB",
      "512GB"
    ],
    "description": "Featuring a stunning 6.1\" Super Retina XDR OLED display, powerful A15 Bionic chip, Face ID security, 128GB/256GB/512GB storage options, and an advanced dual 12MP camera system for breathtaking photos and cinematic-quality videos. Enjoy exceptional battery life, lightning-fast performance, and 5G connectivity for seamless streaming, gaming, and everyday use. Available with fast nationwide delivery."
  },
  "iPhone 13 Pro Max": {
    "images": [
      "/images/13P.jpg",
      "/images/13P2.jpg"
    ],
    "colors": [
      {
        "name": "Graphite",
        "hex": "#52514f"
      },
      {
        "name": "Silver",
        "hex": "#e3e4e6"
      },
      {
        "name": "Gold",
        "hex": "#e2c9a0"
      },
      {
        "name": "Sierra Blue",
        "hex": "#a7c1d9"
      },
      {
        "name": "Alpine Green",
        "hex": "#576856"
      }
    ],
    "storage": [
      "128GB",
      "256GB",
      "512GB"
    ],
    "description": "iPhone 13 Pro Max with a premium Super Retina display, fast Apple silicon, Face ID security and an advanced camera system for stunning photos and 4K video. Available with fast nationwide delivery."
  },
  "iPhone 14": {
    "images": [
      "/images/14.jpg",
      "/images/13W.jpg"
    ],
    "colors": [
      {
        "name": "Midnight",
        "hex": "#232a31"
      },
      {
        "name": "Starlight",
        "hex": "#faf6f2"
      },
      {
        "name": "Blue",
        "hex": "#a0b4c7"
      },
      {
        "name": "Purple",
        "hex": "#e0dbe8"
      },
      {
        "name": "Yellow",
        "hex": "#f5e28f"
      },
      {
        "name": "Red",
        "hex": "#c8102e"
      }
    ],
    "storage": [
      "128GB",
      "256GB",
      "512GB"
    ],
    "description": "Featuring a brilliant 6.1\" Super Retina XDR OLED display, powerful A15 Bionic chip, Face ID security, 512GB storage, and an advanced dual 12MP camera system for stunning photos and cinematic-quality videos. Enjoy impressive all-day battery life, ultra-fast 5G connectivity, and enhanced safety features in a sleek, durable design. Perfect for photography, streaming, gaming, work, and everyday use. Available with fast nationwide delivery."
  },
  "iPhone 14 Pro": {
    "images": [
      "/images/14PROMAX.jpg",
      "/images/1414.jpg"
    ],
    "colors": [
      {
        "name": "Space Black",
        "hex": "#28282a"
      },
      {
        "name": "Silver",
        "hex": "#e3e4e6"
      },
      {
        "name": "Gold",
        "hex": "#e2c9a0"
      },
      {
        "name": "Deep Purple",
        "hex": "#5b5670"
      }
    ],
    "storage": [
      "128GB",
      "256GB",
      "512GB"
    ],
    "description": "iPhone 14 Pro with a premium Super Retina display, fast Apple silicon, Face ID security and an advanced camera system for stunning photos and 4K video. Available with fast nationwide delivery."
  },
  "iPhone 14 Pro Max": {
    "images": [
      "/images/14PROMAX.jpg",
      "/images/14PROMAX2.jpg",
      "/images/1414.jpg"
    ],
    "colors": [
      {
        "name": "Space Black",
        "hex": "#28282a"
      },
      {
        "name": "Silver",
        "hex": "#e3e4e6"
      },
      {
        "name": "Gold",
        "hex": "#e2c9a0"
      },
      {
        "name": "Deep Purple",
        "hex": "#5b5670"
      }
    ],
    "storage": [
      "256GB",
      "512GB",
      "1TB"
    ],
    "description": "Featuring a stunning 6.7\" Super Retina XDR OLED display with ProMotion 120Hz technology, powerful A16 Bionic chip, Face ID security, 512GB/1TB storage options, and a professional 48MP triple-camera system for incredible photos and cinematic-quality videos. Enjoy exceptional battery life, ultra-fast 5G connectivity, and Apple's innovative Dynamic Island feature in a premium stainless-steel design. Perfect for photography, content creation, gaming, streaming, and everyday use. Available with fast nationwide delivery."
  },
  "iPhone 15": {
    "images": [
      "/images/15.jpg",
      "/images/15_2.jpg"
    ],
    "colors": [
      {
        "name": "Black",
        "hex": "#3c3c3d"
      },
      {
        "name": "Blue",
        "hex": "#d5dfe0"
      },
      {
        "name": "Green",
        "hex": "#d0dccb"
      },
      {
        "name": "Yellow",
        "hex": "#f0e5c8"
      },
      {
        "name": "Pink",
        "hex": "#f4d9dc"
      }
    ],
    "storage": [
      "128GB",
      "256GB",
      "512GB"
    ],
    "description": "Featuring a stunning 6.1\" Super Retina XDR OLED display, powerful A16 Bionic chip, Face ID security, 512GB storage, and an advanced 48MP dual-camera system for incredibly detailed photos and videos. Enjoy all-day battery life, ultra-fast 5G connectivity, and the convenience of USB-C charging in a sleek, durable design. Perfect for photography, social media, gaming, streaming, and everyday use. Available with fast nationwide delivery."
  },
  "iPhone 15 Pro": {
    "images": [
      "/images/15pro.jpg",
      "/images/15pro2.jpg"
    ],
    "colors": [
      {
        "name": "Black Titanium",
        "hex": "#3b3b3d"
      },
      {
        "name": "White Titanium",
        "hex": "#f2f1ed"
      },
      {
        "name": "Blue Titanium",
        "hex": "#5c6b7a"
      },
      {
        "name": "Natural Titanium",
        "hex": "#a9a29a"
      }
    ],
    "storage": [
      "256GB",
      "512GB",
      "1TB"
    ],
    "description": "Featuring a stunning 6.1\" Super Retina XDR OLED display with ProMotion 120Hz technology, powerful A17 Pro chip, Face ID security, 512GB/1TB storage options, and a professional 48MP triple-camera system for breathtaking photos and cinematic-quality videos. Enjoy ultra-fast 5G connectivity, exceptional battery life, USB-C charging, and a lightweight titanium design built for performance and durability. Perfect for content creation, gaming, photography, business, and everyday use. Available with fast nationwide delivery."
  },
  "iPhone 15 Pro Max": {
    "images": [
      "/images/15pro.jpg",
      "/images/15pro2.jpg"
    ],
    "colors": [
      {
        "name": "Black Titanium",
        "hex": "#3b3b3d"
      },
      {
        "name": "White Titanium",
        "hex": "#f2f1ed"
      },
      {
        "name": "Blue Titanium",
        "hex": "#5c6b7a"
      },
      {
        "name": "Natural Titanium",
        "hex": "#a9a29a"
      }
    ],
    "storage": [
      "256GB",
      "512GB",
      "1TB"
    ],
    "description": "iPhone 15 Pro Max with a premium Super Retina display, fast Apple silicon, Face ID security and an advanced camera system for stunning photos and 4K video. Available with fast nationwide delivery."
  },
  "iPhone 16": {
    "images": [
      "/images/16.jpg",
      "/images/16.2.jpg",
      "/images/16.3.jpg"
    ],
    "colors": [
      {
        "name": "Black",
        "hex": "#35393b"
      },
      {
        "name": "White",
        "hex": "#f4f3ef"
      },
      {
        "name": "Pink",
        "hex": "#f3d7dc"
      },
      {
        "name": "Teal",
        "hex": "#cfdbd6"
      },
      {
        "name": "Ultramarine",
        "hex": "#a3adde"
      }
    ],
    "storage": [
      "128GB",
      "256GB",
      "512GB"
    ],
    "description": "Featuring a stunning 6.1\" Super Retina XDR OLED display, powerful A18 chip, Face ID security, 256GB/512GB storage options, and an advanced 48MP dual-camera system for crystal-clear photos and cinematic-quality videos. Enjoy exceptional battery life, ultra-fast 5G connectivity, USB-C charging, and new AI-powered features designed to make everyday tasks easier. Perfect for photography, gaming, streaming, productivity, and everyday use. Available with fast nationwide delivery."
  },
  "iPhone 16 Pro": {
    "images": [
      "/images/16pro.jpg",
      "/images/16pro2.jpg",
      "/images/1616.jpg",
      "/images/166666.jpg"
    ],
    "colors": [
      {
        "name": "Black Titanium",
        "hex": "#3b3b3d"
      },
      {
        "name": "Natural Titanium",
        "hex": "#a9a29a"
      },
      {
        "name": "White Titanium",
        "hex": "#f2f1ed"
      },
      {
        "name": "Desert Titanium",
        "hex": "#bfa48f"
      }
    ],
    "storage": [
      "256GB",
      "512GB",
      "1TB"
    ],
    "description": "Featuring a stunning 6.3\" Super Retina XDR OLED display with ProMotion 120Hz technology, powerful A18 Pro chip, Face ID security, 128GB/256GB/512GB/1TB storage options, and a professional 48MP triple-camera system for incredible photos and cinematic-quality videos. Enjoy exceptional battery life, ultra-fast 5G connectivity, USB-C charging, and a premium titanium design built for performance and durability. Perfect for photography, content creation, gaming, business, and everyday use. Available with fast nationwide delivery."
  },
  "iPhone 16 Pro Max": {
    "images": [
      "/images/16PROMAX.jpg",
      "/images/16PROMAXX.jpg"
    ],
    "colors": [
      {
        "name": "Black Titanium",
        "hex": "#3b3b3d"
      },
      {
        "name": "Natural Titanium",
        "hex": "#a9a29a"
      },
      {
        "name": "White Titanium",
        "hex": "#f2f1ed"
      },
      {
        "name": "Desert Titanium",
        "hex": "#bfa48f"
      }
    ],
    "storage": [
      "256GB",
      "512GB",
      "1TB"
    ],
    "description": "Featuring a massive 6.9\" Super Retina XDR OLED display with ProMotion 120Hz technology, powerful A18 Pro chip, Face ID security, 512GB/1TB storage options, and a professional 48MP triple-camera system for breathtaking photos and cinematic-quality videos. Enjoy exceptional battery life, ultra-fast 5G connectivity, USB-C charging, and a premium titanium design built for ultimate performance. Perfect for photography, content creation, gaming, business, and everyday use. Available with fast nationwide delivery."
  },
  "iPhone 17": {
    "images": [
      "/images/AIR.jpg",
      "/images/AIRR.jpg"
    ],
    "colors": [
      {
        "name": "Black",
        "hex": "#2b2b2d"
      },
      {
        "name": "White",
        "hex": "#f4f3ef"
      },
      {
        "name": "Lavender",
        "hex": "#ddd3ea"
      },
      {
        "name": "Mist Blue",
        "hex": "#cbd9e5"
      },
      {
        "name": "Sage",
        "hex": "#cdd8c6"
      }
    ],
    "storage": [
      "256GB",
      "512GB"
    ],
    "description": "iPhone 17 with a premium Super Retina display, fast Apple silicon, Face ID security and an advanced camera system for stunning photos and 4K video. Available with fast nationwide delivery."
  },
  "iPhone 17 Pro": {
    "images": [
      "/images/17PRO.jpg",
      "/images/17PROII.jpg"
    ],
    "colors": [
      {
        "name": "Cosmic Orange",
        "hex": "#e0703a"
      },
      {
        "name": "Deep Blue",
        "hex": "#2b3d63"
      },
      {
        "name": "Silver",
        "hex": "#e3e4e6"
      }
    ],
    "storage": [
      "256GB",
      "512GB",
      "1TB"
    ],
    "description": "iPhone 17 Pro with a premium Super Retina display, fast Apple silicon, Face ID security and an advanced camera system for stunning photos and 4K video. Available with fast nationwide delivery."
  },
  "iPhone 17 Pro Max": {
    "images": [
      "/images/17PROII.jpg",
      "/images/17PRO.jpg"
    ],
    "colors": [
      {
        "name": "Cosmic Orange",
        "hex": "#e0703a"
      },
      {
        "name": "Deep Blue",
        "hex": "#2b3d63"
      },
      {
        "name": "Silver",
        "hex": "#e3e4e6"
      }
    ],
    "storage": [
      "512GB",
      "1TB",
      "2TB"
    ],
    "description": "Featuring a massive 6.9\" Super Retina XDR OLED display with ProMotion 120Hz technology, powerful A19 Pro chip, Face ID security,1TB/2TB storage options, and a revolutionary triple 48MP camera system for professional-quality photos and videos. Enjoy exceptional battery life, ultra-fast 5G connectivity, USB-C charging, and a premium design built for ultimate performance. Perfect for content creators, professionals, gamers, and users who want Apple's most advanced iPhone. Available with fast nationwide delivery."
  }
} as const;
