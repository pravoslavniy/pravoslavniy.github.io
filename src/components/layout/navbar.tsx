import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@heroui/react";
import { Icon } from '@iconify/react';
import { useTheme } from "@heroui/use-theme";

const NavBar: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Courses", path: "/courses" },
    { name: "Our Partners", path: "/partners" },
    { name: "News", path: "/news" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <Navbar 
      maxWidth="xl" 
      onMenuOpenChange={setIsMenuOpen}
      className="py-2 border-b border-divider"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link to="/" className="flex items-center gap-2">
            <Icon icon="lucide:drone" width={32} height={32} className="text-primary" />
            <p className="font-bold text-xl">Drone Academy</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        <NavbarItem isActive={isActive("/")}>
          <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={isActive("/about")}>
          <Link to="/about" className={`nav-link ${isActive("/about") ? "active" : ""}`}>
            About Us
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem isActive={isActive("/courses")}>
            <DropdownTrigger>
              <Button
                disableRipple
                variant="light"
                className={`p-0 bg-transparent data-[hover=true]:bg-transparent ${isActive("/courses") ? "text-primary" : ""}`}
                endContent={<Icon icon="lucide:chevron-down" className="text-sm" />}
              >
                Our Courses
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu aria-label="Courses">
            <DropdownItem key="agro" as={Link} to="/courses/agro-drone">Agro Drone</DropdownItem>
            <DropdownItem key="sports" as={Link} to="/courses/sports-drone">Sports Drone Piloting Club</DropdownItem>
            <DropdownItem key="fpv" as={Link} to="/courses/fpv-drone">FPV Drone Specialized Courses</DropdownItem>
            <DropdownItem key="engineering" as={Link} to="/courses/engineering">Engineering School</DropdownItem>
            <DropdownItem key="piloting" as={Link} to="/courses/piloting">Drone Piloting</DropdownItem>
            <DropdownItem key="all" as={Link} to="/courses">All Courses</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem isActive={isActive("/partners")}>
          <Link to="/partners" className={`nav-link ${isActive("/partners") ? "active" : ""}`}>
            Our Partners
          </Link>
        </NavbarItem>
        <NavbarItem isActive={isActive("/news")}>
          <Link to="/news" className={`nav-link ${isActive("/news") ? "active" : ""}`}>
            News
          </Link>
        </NavbarItem>
        <NavbarItem isActive={isActive("/contact")}>
          <Link to="/contact" className={`nav-link ${isActive("/contact") ? "active" : ""}`}>
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      
      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <Button
            isIconOnly
            variant="light"
            onPress={toggleTheme}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Icon icon="lucide:sun" className="text-xl" />
            ) : (
              <Icon icon="lucide:moon" className="text-xl" />
            )}
          </Button>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button 
                variant="light" 
                startContent={<Icon icon="lucide:globe" className="text-lg" />}
                endContent={<Icon icon="lucide:chevron-down" className="text-sm" />}
              >
                EN
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu aria-label="Language">
            <DropdownItem key="en">English</DropdownItem>
            <DropdownItem key="ro">Romanian</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Button as={Link} to="/contact" color="primary" variant="solid">
            Enroll Now
          </Button>
        </NavbarItem>
      </NavbarContent>
      
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link 
              to={item.path}
              className={`w-full ${isActive(item.path) ? "text-primary" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <div className="flex items-center gap-2 mt-4">
            <Button
              isIconOnly
              variant="light"
              onPress={toggleTheme}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Icon icon="lucide:sun" className="text-xl" />
              ) : (
                <Icon icon="lucide:moon" className="text-xl" />
              )}
            </Button>
            <span className="text-sm text-foreground-500">
              {isDark ? "Light Mode" : "Dark Mode"}
            </span>
          </div>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBar;
