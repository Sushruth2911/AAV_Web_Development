import { useState } from "react";

export default function AAVNavbar() {
  const [hoveredDropdown, setHoveredDropdown] = useState(null);

  const styles = {
    navbar: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      backgroundColor: "#1e1e1e",
      padding: "0 40px",
      height: "64px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottom: "1px solid #444",
      fontFamily: "sans-serif",
    },
    logo: {
      fontSize: "22px",
      fontWeight: "bold",
      color: "#cccccc", // grey logo
      textDecoration: "none",
      lineHeight: "64px",
    },
    navItems: {
      display: "flex",
      alignItems: "center",
      gap: "24px",
      height: "100%",
    },
    navLink: {
      color: "#f0f0f0",
      fontSize: "14px",
      textDecoration: "none",
      cursor: "pointer",
      padding: "8px 10px",
      borderRadius: "4px",
      lineHeight: "48px",
      display: "flex",
      alignItems: "center",
      transition: "background 0.2s ease",
    },
    navLinkHover: {
      backgroundColor: "#333",
    },
    dropdown: {
      position: "absolute",
      top: "64px",
      left: 0,
      backgroundColor: "#2a2a2a",
      borderRadius: "8px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
      padding: "10px 0",
      minWidth: "180px",
      zIndex: 999,
    },
    dropdownItem: {
      padding: "8px 16px",
      fontSize: "14px",
      color: "#f0f0f0",
      cursor: "pointer",
      whiteSpace: "nowrap",
      transition: "background 0.2s ease",
    },
    dropdownItemHover: {
      backgroundColor: "#444",
    },
  };

  const NavLinkWithDropdown = ({ title, items }) => (
    <div
      style={{ position: "relative", display: "flex", alignItems: "center", height: "64px" }}
      onMouseEnter={() => setHoveredDropdown(title)}
      onMouseLeave={() => setHoveredDropdown(null)}
    >
      <span style={styles.navLink}>
        {title} ▼
      </span>
      {hoveredDropdown === title && (
        <div style={styles.dropdown}>
          {items.map((item) => (
            <div
              key={item}
              style={styles.dropdownItem}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = styles.dropdownItemHover.backgroundColor)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "transparent")
              }
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div style={styles.navbar}>
      {/* Left: Logo */}
      <a href="#" style={styles.logo}>AAV - LOGO</a>

      {/* Center: Nav Items */}
      <div style={styles.navItems}>
        <a href="#home" style={styles.navLink}>Home</a>

        <NavLinkWithDropdown
          title="About"
          items={["About", "Our Team", "Our Achievement", "Outreach"]}
        />

        <a href="#asv" style={styles.navLink}>ASV</a>

        <NavLinkWithDropdown
          title="UAV"
          items={["UAV 1.0", "UAV 2.0"]}
        />

        <NavLinkWithDropdown
          title="Competitions"
          items={["RobotX", "SUAS"]}
        />

        <a href="#sponsors" style={styles.navLink}>Sponsors</a>
        <a href="#contact" style={styles.navLink}>Contact</a>
      </div>
    </div>
  );
}
