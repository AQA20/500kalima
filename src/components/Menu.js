'use client';

import Link from 'next/link';
import SubMenu from './SubMenu';
import { useEffect, useRef } from 'react';

const Menu = ({ onClose, menuItems, subMenuItems, footerItems = [] }) => {
  const menuRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        // Clicked outside the target element
        onClose();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef} className="w-[280px]">
      <ul className="py-2 bg-light-surfaceContainer rounded-lg">
        {menuItems.map((item, index) => (
          <li key={index} className="h-[48px] menu-link px-4 py-3">
            {item?.url ? (
              <Link href={item.url} className="flex gap-2 hover-pointer-light">
                <div>{item?.icon}</div>
                <div>{item.name}</div>
              </Link>
            ) : (
              <div
                className="flex gap-2 hover-pointer-light"
                role="button"
                tabIndex={0}
                onKeyDown={null}
                onClick={item.onClick}
              >
                <div>{item?.icon}</div>
                <button>{item.name}</button>
              </div>
            )}
          </li>
        ))}
        {Object.keys(subMenuItems).length > 0 && (
          <hr className="text-light-outlineVariant my-2" />
        )}
        <SubMenu items={subMenuItems} />
      </ul>
      {footerItems.length > 0 && (
        <ul className="mt-1 py-2 bg-light-surfaceContainer rounded-lg">
          {footerItems.map((item, index) => (
            <li
              key={index}
              className="h-[40px] text-sm menu-link px-4 py-3 gap-2"
            >
              <Link className="hover-pointer-light" href={item.url}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Menu;
