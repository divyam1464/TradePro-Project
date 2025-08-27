"use client";
import {
  ArrowRight,
  BarChart2,
  Bell,
  Book,
  Globe,
  Menu,
  PieChart,
  Shield,
  TrendingUp,
  X,
  Zap,
} from "lucide-react";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRouter } from "next/navigation";

const Animatedsection = ({ children }: any) => {
  const ref = useRef(null);
  const isinview = useInView(ref, { once: true, amount: 0.3 });
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isinview ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.section>
  );
};

const FeatureBox = ({ icon, title, description, delay }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        boxShadow: "0 10px 40px rgba(59,130,246,0.3)",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center text-center h-full relative overflow-hidden"
    >
      <motion.div
        animate={{ scale: isHovered ? 1.2 : 1, rotate: isHovered ? 360 : 0 }}
        transition={{ duration: 0.6 }}
        className="text-blue-500 mb-4 relative z-10"
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-semibold mb-2 text-white relative z-10">
        {title}
      </h3>
      <p className="text-gray-300 mb-4 flex-grow relative z-10">
        {description}
      </p>
      <motion.button
        whileHover={{
          x: 5,
        }}
        className="mt-auto text-blue-500 flex items-center text-sm font-medium relative z-10 cursor-pointer"
      >
        Learn More <ArrowRight className="ml-1" size={16} />
      </motion.button>
      <motion.div
        className="absolute inset-0 bg-blue-600 opacity-0"
        animate={{ opacity: isHovered ? 0.1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default function Home() {
  const router = useRouter();
  const containeref = useRef(null);
  const tradingFeatures = [
    {
      icon: <Globe size={32} />,
      title: "Global Markets",
      description:
        "Access a wide range of international markets and trade various assets from a single platform.",
    },
    {
      icon: <Zap size={32} />,
      title: "Real-time Data",
      description:
        "Stay informed with lightning-fast, real-time market data and instant trade execution.",
    },
    {
      icon: <Shield size={32} />,
      title: "Secure Trading",
      description:
        "Trade with confidence using our advanced encryption and multi-factor authentication systems.",
    },
    {
      icon: <PieChart size={32} />,
      title: "Portfolio Analysis",
      description:
        "Gain insights into your portfolio performance with comprehensive analysis tools and reports.",
    },
    {
      icon: <Bell size={32} />,
      title: "Price Alerts",
      description:
        "Never miss a trading opportunity with customizable price alerts and notifications.",
    },
    {
      icon: <Book size={32} />,
      title: "Trading Education",
      description:
        "Enhance your trading skills with our extensive library of educational resources and webinars.",
    },
  ];
  const [ismenuopen, setismenuopen] = useState(false);
  return (
    <div
      ref={containeref}
      className="bg-gray-900 min-h-screen font-sans text-white"
    >
      <header className="container mx-auto px-4 py-6 flex justify-between items-center relative z-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-blue-500"
        >
          TradePro
        </motion.div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {["Markets", "Trading", "Analysis", "Learn"].map((items, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <span className="text-gray-300 hover:text-blue-500 transition-colors">
                  {items}
                </span>
              </motion.li>
            ))}
          </ul>
        </nav>
        <motion.button
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors transform hover:scale-105 cursor-pointer" onClick={()=>router.push('/dashboard')}
        >
          Start Trading
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="md:hidden text-white"
          onClick={() => setismenuopen(!ismenuopen)}
        >
          {ismenuopen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </header>
      {ismenuopen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.6 }}
          className="md:hidden bg-gray-800 px-4 py-2"
        >
          <ul className="space-y-3">
            {["Markets", "Trading", "Analysis", "Learn"].map((items, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <span className="block text-gray-300 hover:text-blue-500 transition-colors py-2">
                  {items}
                </span>
              </motion.li>
            ))}
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors transform hover:scale-105 cursor-pointer"
              >
                Start Trading
              </motion.button>
            </motion.li>
          </ul>
        </motion.div>
      )}

      {/* Hero Section */}
      <main className="container mx-auto px-4">
        <Animatedsection>
          <div className="text-center py-20 ">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl font-bold mb-6"
            >
              Trade Smarter, Not Harder
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl text-gray-400 mb-12"
            >
              Access Global Market with real-time data and advanced training
              tools
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-blue-600 text-white px-8 py-4 rounded-md text-xl hover:bg-blue-700 transition-colors flex items-center mx-auto hover:scale-105 cursor-pointer"
            >
              Open Free Account
              <ArrowRight className="ml-2 cursor-pointer" />
            </motion.button>
          </div>
        </Animatedsection>

        <Animatedsection>
          <div className="py-20">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-8 ">
                  Advanced Trading Tools
                </h2>
                <ul className="space-y-6">
                  {[
                    "Real-Time Market Data",
                    "Advanced Charting",
                    "Risk Management Tools",
                  ].map((items, index) => (
                    <motion.li
                      whileHover={{ scale: 1.05, color: "#3B82f6" }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      key={index}
                      className="flex items-center text-gray-300 text-xl"
                    >
                      <BarChart2 className="mr-4 text-blue-500" size={28} />{" "}
                      {items}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gray-800 p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 relative overflow-hidden group cursor-pointer"
              >
                <img
                  className="w-full rounded-xl"
                  src="https://i.ibb.co/XxFpDvs/3.jpg"
                  alt="Trading Platform Screenshot" width={200} height={100}
                ></img>
                <motion.div
                  whileHover={{ opacity: 0.2 }}
                  className="absolute insert-0 bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                />
              </motion.div>
            </div>
          </div>
        </Animatedsection>

        <Animatedsection>
          <div className="py-20">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 relative overflow-hidden group cursor-pointer">
                <img
                  src="https://i.ibb.co/w71CV2s/2.jpg"
                  alt="Trading Platform Screenshot" width={200} height={100}
                  className="w-full rounded-xl"
                ></img>
                <motion.div className="absolute insert-0 bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-8 ">
                  Market Analysis at your Fingertips
                </h2>
                <p className="text-gray-300 text-xl mb-8">
                  Get in-depth market analysis and informed trading
                </p>
                <div className="flex items-center bg-gray-800 p-6 rounded-xl relative overflow-hidden group">
                  <TrendingUp
                    className="text-blue-500 mr-6 relative z-10"
                    size={48}
                  />
                  <div className="relative z-10">
                    <div className="text-5xl text-blue-500 font-bold">+500</div>
                    <p className="text-gray-300 text-xl ">
                      Global markets available for trading
                    </p>
                  </div>
                  <motion.div className="absolute insert-0 bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>
              </div>
            </div>
          </div>
        </Animatedsection>

        {/* Feature Section */}
        <Animatedsection>
          <div className="bg-gray-900 py-20 ">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Why Choose TradePro
                </h2>
                <p className="text-xl text-gray-300">
                  Experience the advantage of professional grade trading tools
                  and resources
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {tradingFeatures.map((Features, index) => (
                  <FeatureBox
                    key={index}
                    icon={Features.icon}
                    title={Features.title}
                    description={Features.description}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </div>
          </div>
        </Animatedsection>

        {/* Last Section */}
        <Animatedsection>
          <div className="bg-blue-600 rounded-2xl p-12 text-center py-12 relative overflow-hidden group ">
            <motion.div className="absolute inset-0 bg-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <h2 className="text-4xl font-bold mb-6 relative z-10">
              Ready to Start Trading
            </h2>
            <p className="text-xl mb-8 relative z-10">
              Join thousands of traders and start your journey to financial
              success
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-md text-xl font-bold hover:bg-gray-300 transition-colors relative z-10 hover:scale-101 cursor-pointer">
              Create free account
            </button>
          </div>
        </Animatedsection>
      </main>
    </div>
  );
}
