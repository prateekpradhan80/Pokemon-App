import React from 'react';
import Link from 'next/link';

export default function Breadcrumb({ path }: { path: { name: string, href?: string }[] }) {
  return (
    <nav className="text-sm text-gray-600">
      {path.map((item, idx) => (
        <span key={item.name}>
          {item.href ? (
            <Link href={item.href} className="hover:underline">{item.name}</Link>
          ) : (
            <span>{item.name}</span>
          )}
          {idx < path.length - 1 && ' → '}
        </span>
      ))}
    </nav>
  );
} 