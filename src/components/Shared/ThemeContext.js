import { createContext } from "react";

const ThemeContext = createContext(["green", () => {}]);
// createContext is a function that returns an object with two React components in it: a Provider and a Consumer.

// The object provided to context is the default state it uses when it can find no Provider above it,
export default ThemeContext;
