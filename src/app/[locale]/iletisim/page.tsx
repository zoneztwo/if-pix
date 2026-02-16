import React from 'react';
import { getDictionary } from '@/get-dictionary';
import IletisimClient from '@/components/pages/IletisimClient';

export default async function Iletisim({ params }: { params: Promise<{ locale: 'tr' | 'en' }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return <IletisimClient locale={locale} dict={dict} />;
}
