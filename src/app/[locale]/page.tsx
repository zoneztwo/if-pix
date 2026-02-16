import React from 'react';
import { getDictionary } from '@/get-dictionary';
import HomeClient from '@/components/pages/HomeClient';

export default async function Home({ params }: { params: Promise<{ locale: 'tr' | 'en' }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return <HomeClient locale={locale} dict={dict} />;
}
