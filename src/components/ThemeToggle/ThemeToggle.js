import React, { useEffect, useState } from "react";
import "./ThemeToggle.css";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDark"))
  );
  console.log("isDark", isDark);

  useEffect(() => {
    const rootElement = document.querySelector(":root");
    localStorage.setItem("isDark", JSON.stringify(isDark));
    if (isDark) {
      rootElement.classList.add("dark");
    } else {
      rootElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="toggle">
      <input
        type="checkbox"
        id="darkmode-toggle"
        onChange={(e) => setIsDark(e.target.checked)}
        checked={isDark}
      />
      <label for="darkmode-toggle" id="toggle-label" />
    </div>
  );
}