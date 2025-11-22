# NeuroSpace Design System

Sistema de diseño completo exportable para proyectos Lovable.

## 📋 Instrucciones de Instalación

### 1. Copiar Variables CSS
Reemplaza el contenido de tu `src/index.css` con el siguiente código:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Brand Colors - The NeuroSpace Design System v2 */
    --brand-primary: 16 95% 52%;           /* #F06317 - Orange 700 */
    --brand-primary-strong: 24 93% 53%;    /* #EB8323 - Orange 600 */
    
    /* Ink (Text/Icons) */
    --ink-strong: 0 2% 11%;                /* #1D1C1C - Black */
    --ink-muted: 0 0% 61%;                 /* #9B9C9D - Gray */
    --ink-deep-brown: 5 100% 7%;           /* #230202 - Burgundy */
    
    /* Surface (Backgrounds) */
    --surface-base: 0 0% 100%;             /* #FFFFFF - White */
    --surface-warm: 40 67% 97%;            /* #F9F5F1 - Cream */
    
    /* Accent Colors */
    --accent-navy: 210 97% 19%;            /* #01305E - Navy Blue */
    --accent-deepgreen: 175 100% 9%;       /* #002822 - Deep Green */
    --accent-burgundy: 5 100% 7%;          /* #230202 - Burgundy */
    
    /* Estados */
    --state-success: 150 52% 33%;          /* #1E8E5A */
    --state-warning: 45 94% 56%;           /* #F9A825 */
    --state-error: 4 70% 51%;              /* #D32F2F */
    --state-info: 199 100% 37%;            /* #0277BD */
    
    /* Legacy Tokens (mapped to new system) */
    --background: 40 67% 97%;
    --foreground: 0 2% 11%;
    --card: 40 67% 97%;
    --card-foreground: 0 2% 11%;
    --popover: 40 67% 97%;
    --popover-foreground: 0 2% 11%;
    --primary: 16 95% 52%;
    --primary-foreground: 0 0% 100%;
    --secondary: 24 93% 53%;
    --secondary-foreground: 0 2% 11%;
    --muted: 40 20% 94%;
    --muted-foreground: 0 0% 61%;
    --accent: 16 95% 52%;
    --accent-foreground: 0 0% 100%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 100%;
    --border: 0 0% 85%;
    --input: 0 0% 85%;
    --ring: 16 95% 52%;
    
    /* Spacing */
    --spacing-base: 8px;
    
    /* Border Radius */
    --radius: 2rem;
    --radius-sm: 12px;
    --radius-md: 16px;
    --radius-lg: 20px;
    --radius-xl: 24px;
    --radius-2xl: 28px;
    
    /* Shadows */
    --shadow-card: 0 8px 24px rgba(29, 28, 28, 0.08);
    --shadow-card-hover: 0 12px 32px rgba(29, 28, 28, 0.12);
    --shadow-elevation-low: 0 2px 8px rgba(29, 28, 28, 0.06);
    --shadow-elevation-medium: 0 4px 16px rgba(29, 28, 28, 0.08);
    --shadow-elevation-high: 0 8px 32px rgba(29, 28, 28, 0.12);
    
    /* Sidebar (legacy) */
    --sidebar-background: 0 0% 98%;
    --sidebar-foreground: 240 5.3% 26.1%;
    --sidebar-primary: 240 5.9% 10%;
    --sidebar-primary-foreground: 0 0% 98%;
    --sidebar-accent: 240 4.8% 95.9%;
    --sidebar-accent-foreground: 240 5.9% 10%;
    --sidebar-border: 220 13% 91%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }

  .dark {
    /* Dark mode uses same brand colors with adjusted surfaces */
    --surface-base: 0 2% 11%;              /* Dark background */
    --surface-warm: 0 0% 15%;              /* Slightly lighter dark */
    --ink-strong: 0 0% 100%;               /* White text */
    --ink-muted: 0 0% 65%;                 /* Light gray text */
    
    /* Legacy tokens for dark mode */
    --background: 0 2% 11%;
    --foreground: 0 0% 100%;
    --card: 0 2% 11%;
    --card-foreground: 0 0% 100%;
    --popover: 0 2% 11%;
    --popover-foreground: 0 0% 100%;
    --primary: 16 95% 52%;
    --primary-foreground: 0 0% 100%;
    --secondary: 24 93% 53%;
    --secondary-foreground: 0 2% 11%;
    --muted: 0 0% 20%;
    --muted-foreground: 0 0% 65%;
    --accent: 16 95% 52%;
    --accent-foreground: 0 0% 100%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 100%;
    --border: 0 0% 20%;
    --input: 0 0% 20%;
    --ring: 16 95% 52%;
    --sidebar-background: 240 5.9% 10%;
    --sidebar-foreground: 240 4.8% 95.9%;
    --sidebar-primary: 224.3 76.3% 48%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 240 3.7% 15.9%;
    --sidebar-accent-foreground: 240 4.8% 95.9%;
    --sidebar-border: 240 3.7% 15.9%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
    font-family: 'Manrope', system-ui, -apple-system, sans-serif;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Space Grotesk', system-ui, -apple-system, sans-serif;
    font-weight: 700;
  }
  
  h1 {
    font-size: clamp(32px, 5vw, 54px);
    line-height: 1.1;
    letter-spacing: -0.01em;
  }
  
  h2 {
    font-size: clamp(28px, 4vw, 40px);
    line-height: 1.2;
    letter-spacing: -0.005em;
  }
  
  h3 {
    font-size: 24px;
    line-height: 1.3;
  }
  
  h4 {
    font-size: 20px;
    line-height: 1.4;
  }
  
  .subhead, blockquote {
    font-family: 'Scope One', Georgia, serif;
    font-weight: 400;
  }
  
  blockquote {
    font-size: clamp(20px, 3vw, 24px);
    line-height: 1.6;
  }
}

@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&family=Scope+One&family=Manrope:wght@400;500;600;700&display=swap');
```

### 2. Actualizar Tailwind Config
Reemplaza tu `tailwind.config.ts` con:

```typescript
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        brand: {
          primary: "hsl(var(--brand-primary))",
          "primary-strong": "hsl(var(--brand-primary-strong))",
        },
        ink: {
          strong: "hsl(var(--ink-strong))",
          muted: "hsl(var(--ink-muted))",
          "deep-brown": "hsl(var(--ink-deep-brown))",
        },
        surface: {
          base: "hsl(var(--surface-base))",
          warm: "hsl(var(--surface-warm))",
        },
        "accent-navy": "hsl(var(--accent-navy))",
        "accent-deepgreen": "hsl(var(--accent-deepgreen))",
        "accent-burgundy": "hsl(var(--accent-burgundy))",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '32px',
        '3xl': '48px',
        '4xl': '64px',
      },
      fontSize: {
        'h1': ['clamp(32px, 5vw, 54px)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'h2': ['clamp(28px, 4vw, 40px)', { lineHeight: '1.2', letterSpacing: '-0.005em' }],
        'h3': ['24px', { lineHeight: '1.3' }],
        'h4': ['20px', { lineHeight: '1.4' }],
        'body-l': ['18px', { lineHeight: '1.5' }],
        'body-m': ['16px', { lineHeight: '1.6' }],
        'caption': ['14px', { lineHeight: '1.5' }],
        'quote': ['clamp(20px, 3vw, 24px)', { lineHeight: '1.6' }],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        'card': '16px',
        'tile': '24px',
        'tile-lg': '28px',
      },
      boxShadow: {
        'card': 'var(--shadow-card)',
        'card-hover': 'var(--shadow-card-hover)',
        'elevation-low': 'var(--shadow-elevation-low)',
        'elevation-medium': 'var(--shadow-elevation-medium)',
        'elevation-high': 'var(--shadow-elevation-high)',
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
```

### 3. Copiar Utilidades
Crea `src/lib/utils.ts`:

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### 4. Instalar Dependencias

En tu nuevo proyecto de Lovable, pide al AI que instale:
```
@radix-ui/react-slot
class-variance-authority
clsx
tailwind-merge
tailwindcss-animate
framer-motion
```

---

## 🎨 Paleta de Colores

### Colores de Marca

| Color | Variable CSS | Valor HSL | Hex | Uso |
|-------|-------------|-----------|-----|-----|
| **Brand Primary** | `--brand-primary` | `16 95% 52%` | `#F06317` | Color principal de marca, botones CTA |
| **Brand Primary Strong** | `--brand-primary-strong` | `24 93% 53%` | `#EB8323` | Variante más fuerte, hover states |

**Uso en Tailwind:**
```tsx
<div className="bg-brand-primary text-white">
<button className="bg-brand-primary-strong hover:bg-brand-primary">
```

### Colores de Texto (Ink)

| Color | Variable CSS | Valor HSL | Hex | Uso |
|-------|-------------|-----------|-----|-----|
| **Ink Strong** | `--ink-strong` | `0 2% 11%` | `#1D1C1C` | Texto principal |
| **Ink Muted** | `--ink-muted` | `0 0% 61%` | `#9B9C9D` | Texto secundario |
| **Ink Deep Brown** | `--ink-deep-brown` | `5 100% 7%` | `#230202` | Texto de énfasis oscuro |

**Uso en Tailwind:**
```tsx
<h1 className="text-ink-strong">
<p className="text-ink-muted">
```

### Colores de Superficie

| Color | Variable CSS | Valor HSL | Hex | Uso |
|-------|-------------|-----------|-----|-----|
| **Surface Base** | `--surface-base` | `0 0% 100%` | `#FFFFFF` | Fondo principal |
| **Surface Warm** | `--surface-warm` | `40 67% 97%` | `#F9F5F1` | Fondo cálido alternativo |

**Uso en Tailwind:**
```tsx
<section className="bg-surface-base">
<div className="bg-surface-warm">
```

### Colores de Acento

| Color | Variable CSS | Valor HSL | Hex | Uso |
|-------|-------------|-----------|-----|-----|
| **Navy** | `--accent-navy` | `210 97% 19%` | `#01305E` | Acentos azules |
| **Deep Green** | `--accent-deepgreen` | `175 100% 9%` | `#002822` | Acentos verdes |
| **Burgundy** | `--accent-burgundy` | `5 100% 7%` | `#230202` | Acentos burdeos |

**Uso en Tailwind:**
```tsx
<div className="bg-accent-navy text-white">
<button className="bg-accent-deepgreen">
```

### Estados

| Color | Variable CSS | Valor HSL | Hex | Uso |
|-------|-------------|-----------|-----|-----|
| **Success** | `--state-success` | `150 52% 33%` | `#1E8E5A` | Mensajes de éxito |
| **Warning** | `--state-warning` | `45 94% 56%` | `#F9A825` | Advertencias |
| **Error** | `--state-error` | `4 70% 51%` | `#D32F2F` | Errores |
| **Info** | `--state-info` | `199 100% 37%` | `#0277BD` | Información |

---

## 📏 Sistema de Espaciado

| Token | Valor | Uso |
|-------|-------|-----|
| `xs` | `4px` | Espaciado mínimo |
| `sm` | `8px` | Espaciado pequeño |
| `md` | `12px` | Espaciado medio |
| `lg` | `16px` | Espaciado grande |
| `xl` | `24px` | Espaciado extra grande |
| `2xl` | `32px` | Espaciado 2x extra grande |
| `3xl` | `48px` | Espaciado 3x extra grande |
| `4xl` | `64px` | Espaciado 4x extra grande |

**Ejemplos:**
```tsx
<div className="p-lg">           {/* padding: 16px */}
<div className="gap-xl">          {/* gap: 24px */}
<div className="space-y-2xl">    {/* margin-top: 32px entre hijos */}
```

---

## 📝 Tipografía

### Familias de Fuentes

```css
/* Headings */
font-family: 'Space Grotesk', system-ui, -apple-system, sans-serif;

/* Body text */
font-family: 'Manrope', system-ui, -apple-system, sans-serif;

/* Subheadings y quotes */
font-family: 'Scope One', Georgia, serif;
```

### Escalas de Texto

| Token | Tamaño | Line Height | Letter Spacing | Uso |
|-------|--------|-------------|----------------|-----|
| `text-h1` | `clamp(32px, 5vw, 54px)` | `1.1` | `-0.01em` | Títulos principales |
| `text-h2` | `clamp(28px, 4vw, 40px)` | `1.2` | `-0.005em` | Subtítulos |
| `text-h3` | `24px` | `1.3` | - | Títulos de sección |
| `text-h4` | `20px` | `1.4` | - | Títulos pequeños |
| `text-body-l` | `18px` | `1.5` | - | Texto grande |
| `text-body-m` | `16px` | `1.6` | - | Texto normal |
| `text-caption` | `14px` | `1.5` | - | Texto pequeño |
| `text-quote` | `clamp(20px, 3vw, 24px)` | `1.6` | - | Citas |

**Ejemplos:**
```tsx
<h1 className="text-h1 font-bold">Título Principal</h1>
<h2 className="text-h2">Subtítulo</h2>
<p className="text-body-m">Texto de párrafo</p>
<span className="text-caption text-ink-muted">Texto pequeño</span>
```

---

## 🔲 Border Radius

| Token | Valor | Uso |
|-------|-------|-----|
| `rounded-sm` | `calc(2rem - 4px)` | Radio pequeño |
| `rounded-md` | `calc(2rem - 2px)` | Radio medio |
| `rounded-lg` | `2rem` | Radio grande |
| `rounded-card` | `16px` | Cards |
| `rounded-tile` | `24px` | Tiles |
| `rounded-tile-lg` | `28px` | Tiles grandes |

---

## 🌓 Sombras

| Token | Valor | Uso |
|-------|-------|-----|
| `shadow-card` | `0 8px 24px rgba(29, 28, 28, 0.08)` | Cards en reposo |
| `shadow-card-hover` | `0 12px 32px rgba(29, 28, 28, 0.12)` | Cards hover |
| `shadow-elevation-low` | `0 2px 8px rgba(29, 28, 28, 0.06)` | Elevación baja |
| `shadow-elevation-medium` | `0 4px 16px rgba(29, 28, 28, 0.08)` | Elevación media |
| `shadow-elevation-high` | `0 8px 32px rgba(29, 28, 28, 0.12)` | Elevación alta |

**Ejemplos:**
```tsx
<div className="shadow-card hover:shadow-card-hover">
```

---

## 🌙 Modo Oscuro

El sistema incluye soporte completo para modo oscuro usando la clase `.dark`:

```tsx
<html className="dark">
```

En modo oscuro:
- `surface-base` → Negro oscuro (`#1D1C1C`)
- `ink-strong` → Blanco (`#FFFFFF`)
- Los colores de marca se mantienen consistentes
- Los bordes y fondos se ajustan automáticamente

---

## ✅ Checklist de Implementación

- [ ] Copiar variables CSS a `src/index.css`
- [ ] Actualizar `tailwind.config.ts`
- [ ] Crear `src/lib/utils.ts`
- [ ] Instalar dependencias necesarias
- [ ] Verificar que las fuentes se cargan correctamente
- [ ] Probar modo claro y oscuro
- [ ] Comenzar a usar los tokens semánticos en componentes

---

## 💡 Mejores Prácticas

1. **Siempre usa tokens semánticos** en lugar de colores directos:
   ```tsx
   ✅ <div className="bg-brand-primary text-white">
   ❌ <div className="bg-[#F06317] text-white">
   ```

2. **Usa las escalas de espaciado predefinidas**:
   ```tsx
   ✅ <div className="p-xl gap-lg">
   ❌ <div className="p-6 gap-4">
   ```

3. **Aprovecha las escalas de texto responsivas**:
   ```tsx
   ✅ <h1 className="text-h1">
   ❌ <h1 className="text-5xl">
   ```

4. **Usa las sombras predefinidas**:
   ```tsx
   ✅ <div className="shadow-card hover:shadow-card-hover">
   ❌ <div className="shadow-lg hover:shadow-xl">
   ```
