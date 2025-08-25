"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Bell,
  BookOpen,
  Currency,
  Globe,
  Search,
  ShoppingCart,
  User,
  Zap,
} from "lucide-react";
import { div, li, span } from "framer-motion/client";

const fadeinup = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const Header = () => {
  const [ismenuopen, setismenuopen] = useState(false);
  const [notification, setnotification] = useState(3);
  return (
    <motion.header
      {...fadeinup}
      className="flex justify-between items-center bg-gray-900 text-white"
    >
      <div className="flex items-center space-x-8 ml-2 mt-2 mr-3 mb-4">
        <motion.span
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-blue-500 cursor-pointer"
        >
          TradePro
        </motion.span>
        <nav className="hidden md:block">
          <ul className="flex space-x-2">
            <li>
              <a
                href="/"
                className="text-blue-500 hover:text-blue-300 transition-colors font-semibold flex items-center cursor-pointer"
              >
                <Zap className="mr-1" size={16} />
                Explore
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-blue-500 hover:text-blue-300 transition-colors font-semibold flex items-center cursor-pointer"
              >
                <Globe className="mr-1" size={16} />
                Investment
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-blue-500 hover:text-blue-300 transition-colors font-semibold flex items-center cursor-pointer"
              >
                <BookOpen className="mr-1" size={16} />
                Learn
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="hidden md:flex items-center space-x-4 mt-3 mr-3 mb-4">
        <motion.div className="relative cursor-pointer">
          <Search className="absolute left-3 top-1/2 transform  -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="What are you looking for ?"
            className="pl-10 pr-4 py-2 bg-gray-800 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative cursor-pointer"
        >
          <Bell className="text-gray-300 hover:text-blue-500 transition-colors" />
          {notification > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="absolute -top-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center"
            >
              {notification}
            </motion.span>
          )}
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }}>
          <ShoppingCart className="text-gray-300 hover:text-blue-500 transition-colors cursor-pointer" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }}>
          <User className="text-gray-300 hover:text-blue-500 transition-colors cursor-pointer" />
        </motion.div>
      </div>
    </motion.header>
  );
};

const Tabsection = () => {
  const [activeTab, setactivetab] = useState("Stocks");
  return (
    <motion.div {...fadeinup} className="border-b border-gray-700 ">
      <div className="container mx-auto px-4">
        <ul className="flex space-x-8">
          {["Stocks", "Mutual Funds", "ETFs", "Options"].map((tab) => (
            <motion.li
              className={`py-2 cursor-pointer whitespace-nowrap ${
                activeTab === tab
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-300 hover:text-blue-500 transition-colors"
              }`}
              key={tab}
              onClick={() => setactivetab(tab)}
              whileHover={{ scale: 1.05 }}
            >
              {tab}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const generaterandomvalues = (value: number) => {
  const change = (Math.random() * 2 - 1) * 100;
  const percentagechange = (change / value) * 100;
  return { change, percentagechange };
};

const Marketindices = () => {
  const [marketdata, setmarketdata] = useState([
    { name: "NIFTY 50", values: 24500.86, change: 0, percentagechange: 0 },
    { name: "NIFTY BANK", values: 55139.3, change: 0, percentagechange: 0 },
    { name: "SENSEX", values: 81635.91, change: 0, percentagechange: 0 },
  ]);
  useEffect(() => {
    const interval = setInterval(() => {
      setmarketdata((prevdata) =>
        prevdata.map((index) => {
          const { change, percentagechange } = generaterandomvalues(
            index.values
          );
          const newvalue = index.values + change;
          return { ...index, values: newvalue, change, percentagechange };
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
      {marketdata.map((index) => (
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
        >
          <h3 className="font-semibold text-gray-300">{index.name}</h3>
          <div className="flex items-center space-x-2">
            <span className="text-lg text-white ">
              {index.values.toLocaleString("en-IN", {
                style: "currency",
                currency: "INR",
              })}
            </span>
            <span
              className={`text-sm flex items-center ${
                index.change >= 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {index.change >= 0 ? (
                <ArrowUpRight size={16} />
              ) : (
                <ArrowDownRight size={16} />
              )}
              {index.change.toFixed(2)} ({index.percentagechange.toFixed(2)}%)
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const page = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-gray-300">
      <Header />
      <main className="container mx-auto ">
        <Tabsection />
        <Marketindices />
      </main>
    </div>
  );
};

export default page;
