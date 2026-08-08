import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 18,
          background: "linear-gradient(135deg, #a78bfa 0%, #8b5cf6 50%, #3b82f6 100%)",
        }}
      >
        <div
          style={{
            width: 0,
            height: 0,
            borderTop: "12px solid transparent",
            borderBottom: "12px solid transparent",
            borderLeft: "18px solid white",
            marginLeft: 4,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
