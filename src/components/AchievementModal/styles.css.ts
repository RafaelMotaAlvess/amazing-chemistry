import { style } from "@vanilla-extract/css";
import { theme } from "../../theme.css";

export const overlay = style({
  zIndex: 9999,

  position: "fixed",

  display: "flex",

  width: "100%",
  height: "100vh",

  justifyContent: "center",
  alignItems: "center",

  inset: 0,

  border: "none",

  backgroundColor: "rgba(0, 0, 0, 0.3)",
  backdropFilter: "blur(3px)",
});

export const container = style({
  overflow: "hidden",
  borderRadius: 16,
});

export const content = style({
  overflowY: "auto",
  width: 764,
  height: 512,

  padding: "20px 32px",
  gap: 16,

  position: "relative",

  display: "flex",
  flexDirection: "column",

  borderRadius: 16,
  border: `1px solid ${theme.color.dark["1"]}`,

  backgroundColor: theme.color.dark["2"],

  color: theme.color.dark.text.secondary,

  filter: theme.effect.dropShadow.default,
});

export const closeButton = style({
  position: "absolute",
  top: 12,
  left: 12,

  width: 32,
  height: 32,

  cursor: "pointer",

  display: "flex",

  justifyContent: "center",
  alignItems: "center",

  borderRadius: 999,
  border: `1px solid ${theme.color.dark["1"]}`,

  backgroundColor: theme.color.dark["2"],

  ":hover": {
    opacity: 0.9,
  },
});

export const title = style({
  fontSize: 32,
  fontWeight: 500,

  textAlign: "center",

  color: theme.color.dark.text.primary,
});

export const achievements = style({
  display: "flex",
  flexWrap: "wrap",

  justifyContent: "center",

  gap: 12,
});
