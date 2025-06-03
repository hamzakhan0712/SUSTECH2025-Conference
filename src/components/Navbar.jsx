import React, { useState, useEffect } from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { menuItems } from "@/assets/values"; // Import values

// Navbar Component
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 w-full items-center font-['Playfair_Display'] z-50 transition-all duration-300 ${
        scrolled ? "top-0 bg-white shadow-md py-3" : "top-35 bg-transparent py-4"
      } hidden lg:flex`}
    >
      <div className="w-full max-w-screen-xl mx-auto flex justify-center items-center px-6 gap-5">
        {/* Desktop Navigation */}
        <NavigationMenu>
          <NavigationMenuList className="flex flex-row space-x-6">
            {menuItems.map((item, index) => (
              <NavigationMenuItem key={index} className="relative">
                {item.dropdown ? (
                  <>
                    <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                    <NavigationMenuContent className="absolute left-0 top-full w-148 bg-white shadow-lg rounded-md p-4">
                      <ul className="grid grid-cols-2 gap-1">
                        {item.dropdown.map((subItem, subIndex) => (
                          <ScrollLink key={subIndex} to={subItem.link} smooth={true} duration={500} className="cursor-pointer">
                            <ListItem title={subItem.title} description={subItem.description} />
                          </ScrollLink>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <ScrollLink to={item.link} smooth={true} duration={500} className="cursor-pointer">
                    <NavigationMenuLink className="nav-link">{item.label}</NavigationMenuLink>
                  </ScrollLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};

export default Navbar;

// List Item Component
const ListItem = React.forwardRef(({ title, description, href }, ref) => (
  <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="p-1 rounded-md transition duration-200">
    <NavigationMenuLink asChild>
      <a ref={ref} href={href} className="block">
        <h4 className="font-semibold text-gray-800">{title}</h4>
        {description && <p className="text-sm text-gray-500">{description}</p>}
      </a>
    </NavigationMenuLink>
  </motion.li>
));

ListItem.displayName = "ListItem";
