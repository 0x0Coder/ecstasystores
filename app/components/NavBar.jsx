'use client';

import React from 'react';
import Image from 'next/image';
import Logo from './logo.png';
import { useCart } from './CartContext'; // Import the cart context
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from '@nextui-org/react';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { cartItems } = useCart(); // Access cart items

  // Calculate total quantity in the cart
  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const menuItems = [
    {
      id: 1,
      title: 'Products',
      link: '/store',
    },
    {
      id: 2,
      title: 'Black Friday',
      link: '/store',
    },
    {
      id: 3,
      title: 'About',
      link: '/about',
    },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href='/'>
          <Image src={Logo} alt="Logo" width={100} />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.id}>
            <Link color="foreground" href={item.link}>
              {item.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Link href='/cart'>
          <div className="relative cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9 20c0 1.1-.9 2-2 2s-1.99-.9-1.99-2S5.9 18 7 18s2 .9 2 2m8-2c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2m.396-5a2 2 0 0 0 1.952-1.566L21 5H7V4a2 2 0 0 0-2-2H3v2h2v11a2 2 0 0 0 2 2h12a2 2 0 0 0-2-2H7v-2z" />
            </svg>
            {/* Cart item count badge */}
            {totalCartItems > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-3 h-3 flex items-center justify-center">
                {totalCartItems}
              </span>
            )}
          </div>
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Button as={Link} color="primary" href="/store" className="text-white" variant="flat">
            Shop
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-black h-50">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={item.id}>
            <Link
              color={
                index === 2 ? 'primary' : index === menuItems.length - 1 ? 'danger' : 'foreground'
              }
              className="w-full"
              href={item.link}
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
