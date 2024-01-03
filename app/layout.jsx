// no need to reference path, use @ then folder + file name
// import css stylesheet to apply the styles to every route in the application.
import "../styles/globals.css";

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    )
  }