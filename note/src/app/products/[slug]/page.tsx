import React from 'react';

interface Props {
  params: {
    slug: string;
  };
}

export default function PantsPage({ params }: Props) {
  const { slug } = params;
  return <div>{slug} 설명 페이지</div>;
}

export function generateStaticParams() {
  const products = ['pants', 'skirt'];
  return products.map((product) => ({
    slug: product,
  }));
}