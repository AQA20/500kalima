'use client';

import { useSearchParams } from 'next/navigation';

const Footer = () => {
  const searchParams = useSearchParams();

  // Convert searchParams to a string for stable dependency
  const searchParamsString = searchParams.toString();

  const activeClass = (url) => {
    return searchParamsString && url.includes(searchParamsString)
      ? 'active'
      : '';
  };

  return (
    <footer className="my-8 text-black text-sm">
      <section>
        <ul className="flex flex-wrap gap-2 underline dark:decoration-dark-outlineVariant">
          <li>
            <a
              className={`hover:text-primary dark:text-onSurfaceVariant ${activeClass('index=1')}`}
              href="/policy?index=1"
            >
              شروط الخدمة
            </a>
          </li>
          <li>
            <a
              className={`hover:text-primary dark:text-onSurfaceVariant ${activeClass('index=2')}`}
              href="/policy?index=2"
            >
              سياسة الخصوصية
            </a>
          </li>
          <li>
            <a
              className={`hover:text-primary dark:text-onSurfaceVariant ${activeClass('index=3')}`}
              href="/policy?index=3"
            >
              سياسة الكوكيز
            </a>
          </li>
          <li>
            <a
              className={`hover:text-primary dark:text-onSurfaceVariant ${activeClass('index=3')}`}
              href="/node-api/sitemap.xml"
            >
              خريطة الموقع
            </a>
          </li>
        </ul>
        <div className="mt-4 text-onSurfaceVariant">
          جميع الحقوق محفوظة &copy; 2024
        </div>
      </section>
    </footer>
  );
};

export default Footer;
