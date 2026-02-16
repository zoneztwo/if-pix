import React from 'react';
import { getDictionary } from '@/get-dictionary';
import HakkimizdaClient from '@/components/pages/HakkimizdaClient';

export default async function Hakkimizda({ params }: { params: Promise<{ locale: 'tr' | 'en' }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return <HakkimizdaClient locale={locale} dict={dict} />;
}
