"use client";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("signin");

  return (
    <div className="flex items-center justify-center m-16">
      <div className="w-[420px] bg-white border border-gray-200 rounded-2xl shadow-xl p-6 transition-all">
        <div className="flex justify-center gap-2 mb-6">
          <button
            onClick={() => setActiveTab("signin")}
            className={`py-2 px-6 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer
              ${
                activeTab === "signin"
                  ? "bg-emerald-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setActiveTab("signup")}
            className={`py-2 px-6 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer
              ${
                activeTab === "signup"
                  ? "bg-emerald-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
          >
            Sign Up
          </button>
        </div>

        {activeTab === "signin" ? (
          <form className="flex flex-col gap-4">
            <input
              required
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-emerald-200"
            />
            <input
              required
              type="password"
              placeholder="Password"
              className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-emerald-200"
            />
            <button
              type="submit"
              className="mt-2 py-3 rounded-xl bg-emerald-500 text-white font-semibold
               hover:bg-emerald-700 shadow-md transition-all cursor-pointer"
            >
              Sign In
            </button>
          </form>
        ) : (
          <form className="flex flex-col gap-4">
            <input
              required
              type="text"
              placeholder=" Name"
              className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-emerald-200"
            />
            <input
              required
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-emerald-200"
            />
            <input
              required
              type="password"
              placeholder="Password"
              className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-emerald-200"
            />
            <button
              type="submit"
              className="mt-2 py-3 rounded-xl bg-emerald-500 text-white font-semibold
               hover:bg-emerald-700 shadow-md transition-all cursor-pointer"
            >
              Sign Up
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
