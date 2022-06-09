import { useLocation } from "react-router-dom"

const Layout = ({ children }) => {
  const location = useLocation()

  const setProperty = (selector, color) => {
    return document.documentElement.style.setProperty(selector, color)
  }

  if (location.pathname === "/404") {
    setProperty("--bg-color", "white")
  } else {
    setProperty("--bg-color", "#f0f0f0")
  }

  return <div className="my-4">{children}</div>
}

export default Layout
