import React from 'react';
import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import { Toaster } from 'sonner';

export default function Layout({ children }) {
  return (
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
            background: #d4a574;
            border-radius: 5px;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: #c4955f;
          }
        `}
      </style>
      <Toaster position="top-center" richColors />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}