// import css stylesheet to apply the styles to every route in the application.
import "../styles/globals.css";

import Nav from "../components/Nav";

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>{children}</body>
        <main className="main">
        <Nav/>
        </main>
        
      </html>
    )
  }