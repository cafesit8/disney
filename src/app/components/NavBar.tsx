"use client"
import { useState, useEffect } from "react";
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  Navbar,
  Typography,
  Menu,
  MenuList,
  Card,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import {
  RocketLaunchIcon,
  Bars2Icon,
  MagnifyingGlassIcon
} from "@heroicons/react/24/outline";
import { navListItems } from '@/app/routes/nav'
 
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 
  const triggers = {
    onMouseEnter: () => setIsMenuOpen(true),
    onMouseLeave: () => setIsMenuOpen(false),
  };
 
  return (
    <>
      <Menu open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuList
          {...triggers}
          className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid"
        >
          <Card
            color="blue"
            shadow={false}
            variant="gradient"
            className="col-span-3 grid h-full w-full place-items-center rounded-md"
          >
            <RocketLaunchIcon strokeWidth={1} className="h-28 w-28" />
          </Card>
        </MenuList>
      </Menu>
    </>
  );
}
 
function NavList() {
  return (
    <ul className="mb-4 mt-2 ml-2 flex flex-col lg:gap-20 gap-5 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center text-white">
      <NavListMenu />
      {navListItems.map(({ label, path }) => (
        <Link className={`text-[17px]`} key={label} href={path}>
          {label}
        </Link>
      ))}
    </ul>
  );
}
 
export default function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [navActive, setNavActive] = useState(false)
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
  const navigate = useRouter()
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  window.addEventListener('scroll', ()=>{
    if (window.scrollY > 100) {
        setNavActive(true)
    }else{
        setNavActive(false)
    }
  })
 
  return (
    <header className={`${navActive ? 'bg-[#171a25]' : 'bg-transparent'} w-full fixed z-50 duration-300 blur-none`}>
      <Navbar fullWidth={true} shadow={false} className="p-2 bg-transparent border-none mx-auto z-50 text-white 2xl:w-[1920px]">
        <div className="relative mx-auto flex items-center text-blue-gray-900">
          <Link className="mr-4 ml-2 cursor-pointer py-1.5 text-xl font-medium text-white font-[default]" href={'/'}>Disney App</Link>
          <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
            <NavList />
          </div>
          <IconButton
            size="sm"
            color="blue-gray"
            variant="text"
            onClick={toggleIsNavOpen}
            className="ml-auto mr-14 lg:hidden"
          >
            <Bars2Icon className="h-6 w-6 text-white" />
          </IconButton>
          <MagnifyingGlassIcon onClick={() => navigate.push("/search")} className="text-white h-6 w-6 absolute right-3" />
        </div>
        <Collapse open={isNavOpen} className="overflow-scroll">
          <NavList />
        </Collapse>
      </Navbar>
    </header>
  );
}