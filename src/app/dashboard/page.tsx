"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import {
  Activity,
  ArrowDownRight,
  ArrowUpRight,
  BarChart2,
  Bell,
  BookOpen,
  ChevronRight,
  Currency,
  DollarSign,
  Globe,
  PieChart,
  Search,
  ShoppingCart,
  TrendingUp,
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
          key={index.name}
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

const StockCard = ({
  name,
  initialPrice,
}: {
  name: String;
  initialPrice: number;
}) => {
  const [price, setprice] = useState(initialPrice);
  const [change, setchange] = useState(0);
  const [percentage, setpercentage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      const { change: randomChange, percentagechange: randomPercentChange } =
        generaterandomvalues(price);
      setprice((precprice) => precprice + randomChange);
      setchange(randomChange);
      setpercentage(randomPercentChange);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [price]);
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
    >
      <h3 className="font-semibold text-white mb-2">{name}</h3>
      <span className="flex items-center justify-between ">
        {price.toLocaleString("en-IN", {
          style: "currency",
          currency: "INR",
        })}
      </span>
      <motion.span
        key={change}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className={`text-sm flex items-center ${
          change >= 0 ? "text-green-500" : "text-red-500"
        }`}
      >
        {change >= 0 ? (
          <ArrowUpRight size={16} />
        ) : (
          <ArrowDownRight size={16} />
        )}
        {percentage.toFixed(2)} ({percentage.toFixed(2)}%)
      </motion.span>
    </motion.div>
  );
};

const MostBought = () => (
  <motion.div {...fadeinup} className="my-8">
    <div className="flex justify-between items-center mb-4 ">
      <h2 className="text-xl font-semibold text-white">
        Most Bought on TradePro
      </h2>
      <motion.a
        className="text-blue-500 text-sm hover:underline flex items-center "
        href="#"
      >
        View All <ChevronRight className="ml-1" size={16} />
      </motion.a>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
      <StockCard name="Reliance Industries Ltd." initialPrice={1413.7} />
      <StockCard name="Tata Motors Ltd." initialPrice={686.1} />
      <StockCard name="Adani Energy Solutions Ltd." initialPrice={805.0} />
      <StockCard name="Swiggy Ltd." initialPrice={427.0} />
    </div>
  </motion.div>
);

const Productandtools = () => {
  const products = [
    { name: "F&O", icon: BarChart2 },
    { name: "IPO", icon: DollarSign },
    { name: "ETF's", icon: PieChart },
    { name: "FD's", icon: TrendingUp },
    { name: "US Stocks", icon: Activity },
  ];
  return (
    <motion.div {...fadeinup} className="my-8">
      <h2 className="text-xl font-semibold text-white mb-4">
        Products & Tools
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {products.map((product) => (
          <motion.div
            whileHover={{ scale: 1.03, backgroundColor: "#2D3748" }}
            key={product.name}
            className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center cursor-pointer"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              className="bg-blue-500 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-2"
            >
              <product.icon className="text-white" />
            </motion.div>
            <span className="text-gray-300">{product.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Topgainers = () => (
  <motion.div {...fadeinup} className="my-8">
    <div className="flex justify-between items-center mb-4 ">
      <h2 className="text-xl font-semibold text-white">
        Top Gainers on TradePro
      </h2>
      <motion.a
        className="text-blue-500 text-sm hover:underline flex items-center "
        href="#"
      >
        View All <ChevronRight className="ml-1" size={16} />
      </motion.a>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
      <StockCard name="Tata Consultancy Services" initialPrice={3140.6} />
      <StockCard name="HDFC Bank" initialPrice={1964.1} />
      <StockCard name="ICICI Bank" initialPrice={1433.2} />
      <StockCard name="Infosys" initialPrice={1532.1} />
    </div>
  </motion.div>
);

const page = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-gray-300">
      <Header />
      <main className="container mx-auto ">
        <Tabsection />
        <Marketindices />
        <MostBought />
        <Productandtools />
        <Topgainers />
      </main>
    </div>
  );
};

export default page;
