// Catalog details sourced from the GadgetZone ZA store.
export type ColorOption = { name: string; hex: string };
export type CatalogEntry = { images: string[]; colors: ColorOption[]; storage: string[]; description: string };

export const CATALOG: Record<string, CatalogEntry> = {
  "iPhone X": {
    "images": [
      "/__l5e/assets-v1/dd7a6455-3b37-4597-b455-29f07a1df86b/xsmax.jpg",
      "/__l5e/assets-v1/7688415a-d7d3-4f51-b2ba-26ae3da02403/xsmax2.jpg"
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
      "/__l5e/assets-v1/864eff7f-0f1d-4492-b1d8-47a52a108d9c/xr.jpg",
      "/__l5e/assets-v1/c4430c6d-f404-4f54-aa0b-ce4dfa4b8d83/xr2.jpg",
      "/__l5e/assets-v1/e1b70725-be3c-47ff-8bec-43dafe598a54/xrblue.jpg",
      "/__l5e/assets-v1/1b4da14c-d752-4964-8170-e92bfdd599c0/xrblue2.jpg"
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
      "/__l5e/assets-v1/dd7a6455-3b37-4597-b455-29f07a1df86b/xsmax.jpg",
      "/__l5e/assets-v1/7688415a-d7d3-4f51-b2ba-26ae3da02403/xsmax2.jpg",
      "/__l5e/assets-v1/d7042c18-1466-46b2-a068-2565f33df47b/xsmaxwhite.jpg",
      "/__l5e/assets-v1/fc1f5ad1-7412-4fb3-a098-557f30034293/xsmaxwhite2.jpg"
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
      "/__l5e/assets-v1/a5ce6eca-0f28-49b3-a652-03c56b0944d1/Iphone11.jpg",
      "/__l5e/assets-v1/e813ff20-f7a5-497b-b9bf-920834957780/iphone112.jpg"
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
      "/__l5e/assets-v1/ed689c62-e002-46a4-93b1-345c20a34d61/11promax.jpg",
      "/__l5e/assets-v1/94f9c454-05c9-4b1d-8d3f-aa9b9eae9245/11promax2.jpg"
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
      "/__l5e/assets-v1/ed689c62-e002-46a4-93b1-345c20a34d61/11promax.jpg",
      "/__l5e/assets-v1/94f9c454-05c9-4b1d-8d3f-aa9b9eae9245/11promax2.jpg",
      "/__l5e/assets-v1/4029decd-c0dd-4410-83cf-28eb2e918846/11PROMAX3.jpg",
      "/__l5e/assets-v1/ea630a27-791b-45c5-98fd-2453086ef488/11PROMAX4.jpg"
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
      "/__l5e/assets-v1/a8d8076a-b371-4524-9e38-9e524638a0db/12white.jpg",
      "/__l5e/assets-v1/34f69501-b52b-4094-8700-7aa0c1985522/12_2.jpg",
      "/__l5e/assets-v1/3f549717-a278-4213-9f56-caeedf50936f/12.jpg"
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
      "/__l5e/assets-v1/2dd60b15-e131-44e6-9921-fd92f75d259c/12pro.jpg",
      "/__l5e/assets-v1/569de6d1-d3dc-4bfb-9808-4925dc7a729f/12pro2.jpg",
      "/__l5e/assets-v1/db3bad64-7f27-4493-bec2-8e6c45984872/12propro.jpg",
      "/__l5e/assets-v1/5f976ed5-c48e-4ee7-a647-ab0407924066/12prprp.jpg"
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
      "/__l5e/assets-v1/db3bad64-7f27-4493-bec2-8e6c45984872/12propro.jpg",
      "/__l5e/assets-v1/5f976ed5-c48e-4ee7-a647-ab0407924066/12prprp.jpg",
      "/__l5e/assets-v1/2dd60b15-e131-44e6-9921-fd92f75d259c/12pro.jpg"
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
      "/__l5e/assets-v1/6d77000e-f699-47e3-926c-3b2d682ee935/13.jpg",
      "/__l5e/assets-v1/91d48a5b-824d-4dd0-80ab-36f97dfc926b/13_2.jpg",
      "/__l5e/assets-v1/73ddf979-b8dc-468d-8930-495f254baf20/13RED.jpg",
      "/__l5e/assets-v1/0f2e7dc2-4141-49aa-971e-07b807512866/13RED2.jpg"
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
      "/__l5e/assets-v1/2d523590-37c7-4beb-a131-43f43786390b/13P.jpg",
      "/__l5e/assets-v1/2ac029bf-df1f-44e3-99de-4f0a056d1490/13P2.jpg"
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
      "/__l5e/assets-v1/e4d7573d-4f8a-4f73-885a-bc3cece0abc1/14.jpg",
      "/__l5e/assets-v1/d46d4cdd-b54a-4569-b6a1-50977f70f28e/13W.jpg"
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
      "/__l5e/assets-v1/9ee585eb-c613-4e84-9208-f6bc0c337719/14PROMAX.jpg",
      "/__l5e/assets-v1/62713d85-1d88-4ea5-ab04-9af26ae2ee24/1414.jpg"
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
      "/__l5e/assets-v1/9ee585eb-c613-4e84-9208-f6bc0c337719/14PROMAX.jpg",
      "/__l5e/assets-v1/9d6b07c4-f2ea-41be-96c9-6daa83fc7234/14PROMAX2.jpg",
      "/__l5e/assets-v1/62713d85-1d88-4ea5-ab04-9af26ae2ee24/1414.jpg"
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
      "/__l5e/assets-v1/68300039-b401-4fd4-b3a6-f49304f250f4/15.jpg",
      "/__l5e/assets-v1/4afd7ba9-5e13-440e-bc86-04a23dfde0e2/15_2.jpg"
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
      "/__l5e/assets-v1/029859a0-b01c-4851-85e5-6c2eedbead4b/15pro.jpg",
      "/__l5e/assets-v1/ac802da3-5cce-4bab-8f7f-44c41069bc3f/15pro2.jpg"
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
      "/__l5e/assets-v1/029859a0-b01c-4851-85e5-6c2eedbead4b/15pro.jpg",
      "/__l5e/assets-v1/ac802da3-5cce-4bab-8f7f-44c41069bc3f/15pro2.jpg"
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
      "/__l5e/assets-v1/c0c46475-a72b-488a-b81a-c97e96db1431/16.jpg",
      "/__l5e/assets-v1/64fab5a6-efdc-44a1-9a00-e06f39519061/16.2.jpg",
      "/__l5e/assets-v1/4c456f0a-3033-4a90-af82-8619072ff0b4/16.3.jpg"
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
      "/__l5e/assets-v1/6aafd56f-5a32-4f82-b9bf-6c0ca40f2749/16pro.jpg",
      "/__l5e/assets-v1/13529d64-66a4-45a4-bd48-57a50ee10e8b/16pro2.jpg",
      "/__l5e/assets-v1/85c8abfe-ab2d-41e4-8d2a-1e3c8629b3eb/1616.jpg",
      "/__l5e/assets-v1/beaaa5ae-fde4-4a2f-b21b-0ba0cd8232dd/166666.jpg"
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
      "/__l5e/assets-v1/33f6f065-e845-4728-9cdd-1e7a8f94f284/16PROMAX.jpg",
      "/__l5e/assets-v1/23f5a87f-45cd-48d1-b7b5-2d320adb32c1/16PROMAXX.jpg"
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
      "/__l5e/assets-v1/fce502d8-5196-492f-9571-ce5322535362/AIR.jpg",
      "/__l5e/assets-v1/1a11a639-4720-4f92-a1a4-081e29e61ded/AIRR.jpg"
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
      "/__l5e/assets-v1/22a6321c-cdb8-49d7-8b1c-48a64f6acd5b/17PRO.jpg",
      "/__l5e/assets-v1/479f7ebd-d592-44da-a6c9-222849b2d084/17PROII.jpg"
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
      "/__l5e/assets-v1/479f7ebd-d592-44da-a6c9-222849b2d084/17PROII.jpg",
      "/__l5e/assets-v1/22a6321c-cdb8-49d7-8b1c-48a64f6acd5b/17PRO.jpg"
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
