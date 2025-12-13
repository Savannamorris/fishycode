import React from "react";
import { Rnd } from "react-rnd";

export default function DraggableWindow({
  title,
  children,
  onClose,
  zIndex,
  onMouseDown,
  defaultPosition,
}) {
  return (
    <Rnd
      default={{
        x: defaultPosition?.x || 150,
        y: defaultPosition?.y || 150,
        width: 800,
        height: 550,
      }}
      bounds="window"
      dragHandleClassName="handle"
      enableResizing={false}
      style={{
        zIndex,
        position: "fixed",
        background: "white",
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        border: "1px solid #333",
        borderRadius: "0.75rem",
        overflow: "hidden",
      }}
      onMouseDown={onMouseDown}
    >
      {/* MINIMAL TOP BAR */}
      <div
        className="handle h-10 bg-black flex items-center justify-between px-4 cursor-move select-none"
      >
        {/* Title (left) */}
        <span className="text-white text-sm font-semibold">
          {title}
        </span>

        {/* Close button (right) */}
        <button
          onClick={onClose}
          className="text-white text-xl leading-none hover:text-red-500 transition"
          aria-label="Close window"
        >
          ×
        </button>
      </div>

      {/* Window content */}
      <div className="p-4 overflow-auto h-[calc(100%-40px)]">
        {children}
      </div>
    </Rnd>
  );
}
