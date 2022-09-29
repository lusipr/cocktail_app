import React from "react";
import { Layout } from "antd";
import { useLocation } from "react-router-dom";
import { HomeOutlined, AppstoreOutlined } from "@ant-design/icons";

const { Header } = Layout;

const Navbar = (props) => {
  const { pathname } = useLocation();
  const MenuItem = [
    {
      route: "/",
      title: "Home",
      icon: <HomeOutlined className="flex" />,
    },
    {
      route: "/category/Cocktail",
      title: "Cocktail",
      icon: <AppstoreOutlined className="flex" />,
    },
    {
      route: "/category/Ordinary%20Drink",
      title: "Ordinary Drink",
      icon: <AppstoreOutlined className="flex" />,
    },
    {
      route: "/category/Beer",
      title: "Beer",
      icon: <AppstoreOutlined className="flex" />,
    },
  ];

  return (
    <header className="flex justify-center bg-bl-primary w-full h-auto">
      <div className="container flex justify-between items-center">
        <a href="/" className="text-white text-xl hover:text-white">
          The Cocktail
        </a>

        <nav className="flex flex-row items-center h-full">
          {MenuItem.map((item, i) => {
            const Icon = () => item.icon;

            return (
              <a
                key={`navbar_${i}`}
                href={item.route}
                className={
                  pathname === item.route
                    ? "flex h-full px-6 py-4 items-center text-sm gap-x-2 bg-bl-blue text-bl-primary hover:text-bl-primary"
                    : "flex h-full px-6 py-4 items-center bg-transparent text-white text-sm gap-x-2 hover:bg-bl-blue hover:text-bl-primary duration-400"
                }
              >
                <Icon />
                {item.title}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export { Navbar };
