import React from 'react';
import { getDictionary } from '@/get-dictionary';
import ToplantiTalebiClient from '@/components/pages/ToplantiTalebiClient';

export default async function ToplantiTalebi({ params }: { params: Promise<{ locale: 'tr' | 'en' }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return <ToplantiTalebiClient locale={locale} dict={dict} />;
}
