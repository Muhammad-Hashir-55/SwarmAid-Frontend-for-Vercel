// app/page.js
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Brain, Activity, Map, Users, Github } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="bg-black text-gray-100 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative flex-1 flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-b from-gray-900 to-black">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          SwarmAid: <span className="text-blue-500">AI for Disaster Response</span>
        </motion.h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
          A multi-agent AI platform that simulates how Data Analysts, Medics, Logistics, 
          and Critics work together to coordinate smarter crisis response.
        </p>
        <div className="flex gap-4">
          <Link
            href="/dashboard"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 font-semibold text-white"
          >
            Launch Dashboard
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 rounded-xl border border-gray-600 hover:border-blue-500 font-semibold"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">How SwarmAid Helps</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 rounded-2xl bg-gray-900 border border-gray-800 shadow-lg hover:shadow-blue-600/20 transition">
            <Brain className="h-10 w-10 text-blue-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Data Analyst Agent</h3>
            <p className="text-gray-400 text-sm">
              Uses NASA feeds & satellite data to identify disaster zones and 
              vulnerable districts in real-time.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-gray-900 border border-gray-800 shadow-lg hover:shadow-blue-600/20 transition">
            <Activity className="h-10 w-10 text-red-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Medic Coordinator</h3>
            <p className="text-gray-400 text-sm">
              Analyzes social signals (e.g., Twitter) to triage urgent medical 
              needs and detect overwhelmed hospitals.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-gray-900 border border-gray-800 shadow-lg hover:shadow-blue-600/20 transition">
            <Map className="h-10 w-10 text-green-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Logistics Manager</h3>
            <p className="text-gray-400 text-sm">
              Plans safe delivery routes using OpenRouteService/OSRM APIs to 
              optimize transport of aid and supplies.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-gray-900 border border-gray-800 shadow-lg hover:shadow-blue-600/20 transition">
            <Users className="h-10 w-10 text-yellow-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Critic Agent</h3>
            <p className="text-gray-400 text-sm">
              Reviews and audits all plans to identify blind spots and improve 
              resilience of the response strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 bg-gray-900 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Disasters strike without warning. Our mission is to harness AI-powered agents, 
            real-world data, and geospatial insights to assist first responders, NGOs, 
            and governments in saving lives with speed and precision.
          </p>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Tech Behind SwarmAid</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">⚡ FastAPI</div>
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">⚙️ LangChain</div>
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">🧠 GPT-5 (AIML API)</div>
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">🌍 Leaflet.js</div>
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">🐦 Twitter/X API</div>
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">🛰️ NASA EONET</div>
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">🚚 OpenRouteService</div>
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">⚛️ Next.js + TailwindCSS</div>
        </div>
      </section>

    </div>
  );
}
