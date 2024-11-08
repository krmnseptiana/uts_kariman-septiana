"use client";

import React, { useState, useEffect } from "react";

export default function WarnaFavorit() {
  const [warna, setWarna] = useState<string>("blue"); // Warna default untuk tema favorit
  const [theme, setTheme] = useState<"light" | "dark" | "myFavorite">("light");

  // Efek untuk mengubah warna latar berdasarkan tema yang dipilih
  useEffect(() => {
    if (theme === "myFavorite") {
      document.body.style.backgroundColor = warna; // Warna favorit
    } else if (theme === "dark") {
      document.body.style.backgroundColor = "#1a1a2e"; // Warna untuk tema dark
    } else {
      document.body.style.backgroundColor = "#f4f4f9"; // Warna untuk tema light
    }
  }, [warna, theme]);

  // Fungsi untuk toggle tema
  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("myFavorite");
    else setTheme("light");
  };

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        maxWidth: "400px",
        margin: "50px auto",
        backgroundColor: theme === "dark" ? "#333" : "white",
        color: theme === "dark" ? "#f4f4f9" : "#333",
      }}
    >
      <h1
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        Pilih Tema Favorit
      </h1>

      {/* Tombol Theme Toggle */}
      <button
        onClick={toggleTheme}
        style={{
          padding: "10px 20px",
          backgroundColor: theme === "dark" ? "#444" : "#e0e0e0",
          color: theme === "dark" ? "#f4f4f9" : "#333",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold",
          textTransform: "uppercase",
          transition: "background-color 0.2s",
        }}
      >
        {theme === "light"
          ? "Switch to Dark Theme"
          : theme === "dark"
          ? "Switch to My Favorite Theme"
          : "Switch to Light Theme"}
      </button>
    </section>
  );
}