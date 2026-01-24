import React, { useEffect } from 'react';
import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import FloatingCartButton from '@/components/cart/FloatingCartButton';
import { CartProvider } from '@/components/cart/CartContext';
import { Toaster } from 'sonner';

export default function Layout({ children }) {
  useEffect(() => {
    // Set favicon
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'shortcut icon';
    link.href = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697534ce5687a77bafcb64b3/81602e853_favicon.png';
    document.getElementsByTagName('head')[0].appendChild(link);
  }, []);
  return (
    <CartProvider>
      <div className="min-h-screen bg-stone-50">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
          
          :root {
            --font-serif: 'Playfair Display', serif;
            --font-sans: 'Inter', sans-serif;
          }
          
          body {
            font-family: var(--font-sans);
          }
          
          .font-serif {
            font-family: var(--font-serif);
          }
          
          /* Smooth scrolling */
          html {
            scroll-behavior: smooth;
          }
          
          /* Custom scrollbar */
          ::-webkit-scrollbar {
            width: 10px;
          }
          
          ::-webkit-scrollbar-track {
            background: #f5f5f4;
          }
          
          ::-webkit-scrollbar-thumb {
            background: #9333ea;
            border-radius: 5px;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: #7e22ce;
          }
        `}
      </style>
      <Toaster position="top-center" richColors />
      <Header />
      <main>{children}</main>
      <FloatingCartButton />
      <Footer />
    </div>
    </CartProvider>
  );
}