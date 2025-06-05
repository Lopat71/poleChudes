import React, { useEffect, useState } from "react";

export default function FullscreenButton() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
        .catch((err) => console.error("Ошибка fullscreen:", err));
    } else {
      document.exitFullscreen()
        .catch((err) => console.error("Ошибка выхода из fullscreen:", err));
    }
  };

  // Следим за входом/выходом из полноэкранного режима
  useEffect(() => {
    const handleChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleChange);
    };
  }, []);

  // Не показываем кнопку в полноэкранном режиме
  if (isFullscreen) return null;

  return (
    <button onClick={toggleFullscreen} style={{
      position: "fixed",
      top: 20,
      right: 20,
      padding: "10px 15px",
      fontSize: 16,
      cursor: "pointer",
      zIndex: 1000
    }}>
      Включить полноэкранный режим
    </button>
  );
}