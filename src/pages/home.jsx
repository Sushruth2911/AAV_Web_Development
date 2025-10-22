export default function Home() {
  const blocks = [
    { label: "Category", title: "ASV" },
    { label: "Category", title: "UAV" },
    { label: "Competition", title: "RobotX" },
    { label: "Competition", title: "SUAS" },
  ];

  const styles = {
    page: {
      backgroundColor: "#121212",
      color: "#f0f0f0",
      paddingTop: "64px",
      fontFamily: "sans-serif",
    },
    section: {
      padding: "160px 60px",
      borderBottom: "1px solid #2a2a2a",
    },
    trailer: {
      fontSize: "30px",
      textAlign: "center",
      marginBottom: "40px",
    },
    imageSlider: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "60px",
      flexWrap: "wrap",
    },
    imageSliderText: {
      flex: "1",
      fontSize: "18px",
      lineHeight: "1.7",
    },
    imageSliderImages: {
      flex: "1",
      display: "flex",
      gap: "16px",
      justifyContent: "center",
    },
    fakeImage: {
      width: "140px",
      height: "100px",
      backgroundColor: "#2c2c2c",
      borderRadius: "8px",
    },
    ferrariSection: {
      width: "100%",
      padding: 0,
    },
    ferrariGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "50vh 50vh",
      width: "100%",
    },
    ferrariBlock: {
      position: "relative",
      color: "#fff",
      padding: "40px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      backgroundSize: "cover",
      backgroundPosition: "center",
      transition: "transform 0.4s ease",
    },
    ferrariLabel: {
      fontSize: "13px",
      textTransform: "uppercase",
      opacity: 0.7,
      marginBottom: "6px",
    },
    ferrariTitle: {
      fontSize: "30px",
      fontWeight: "bold",
      marginBottom: "12px",
    },
    discoverLink: {
      fontSize: "14px",
      color: "#fff",
      opacity: 0.85,
      textDecoration: "none",
      fontWeight: "500",
      marginTop: "auto",
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
    },
    threeButtons: {
      display: "flex",
      justifyContent: "center",
      gap: "32px",
      flexWrap: "wrap",
      marginTop: "20px",
    },
    sleekButton: {
      padding: "18px 28px",
      fontSize: "16px",
      fontWeight: "bold",
      border: "none",
      borderRadius: "10px",
      background: "#444",
      color: "#fff",
      cursor: "pointer",
      transition: "transform 0.3s ease",
      minWidth: "200px",
    },
    footer: {
      padding: "80px 20px",
      textAlign: "center",
      backgroundColor: "#1a1a1a",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      alignItems: "center",
    },
    socialIcons: {
      display: "flex",
      gap: "24px",
    },
    icon: {
      fontSize: "24px",
      color: "#f0f0f0",
      cursor: "pointer",
      transition: "color 0.3s",
    },
infoCardSection: {
  backgroundColor: "#121212",
  padding: "0",
  width: "100%",
},

infoCardContainer: {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  width: "100%",
  height: "400px",           // adjust height as needed
},

infoCard: {
  position: "relative",
  borderRadius: "0px",       // makes it fill cleanly
  backgroundSize: "cover",
  backgroundPosition: "center",
  overflow: "hidden",
  textDecoration: "none",
  transition: "transform 0.4s ease, filter 0.4s ease",
  display: "flex",
  alignItems: "flex-end",
},

overlay: {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))",
  transition: "opacity 0.4s ease",
},

infoCardText: {
  position: "relative",
  zIndex: 2,
  color: "#fff",
  padding: "20px",
  display: "flex",
  alignItems: "center",
  gap: "10px",
},

infoCardTitle: {
  fontSize: "18px",
  fontWeight: "bold",
  margin: 0,
},

infoCardLink: {
  fontSize: "20px",
  transition: "transform 0.3s ease",
},

    responsive: `
      @media (max-width: 768px) {
        .ferrari-grid {
          grid-template-columns: 1fr !important;
          grid-template-rows: auto !important;
        }
        .image-slider {
          flex-direction: column !important;
          text-align: center;
        }
      }
      .ferrari-block:hover {
        transform: scale(1.03) !important;
      }
      .sleek-button:hover {
        transform: scale(1.08) !important;
      }
    `,
  };

  return (
    <>
      <style>{styles.responsive}</style>
      <div style={styles.page}>
        <section style={styles.section}>
          <div style={styles.trailer}>🚀 Trailer Section (Coming Soon)</div>
        </section>

        <section style={styles.section}>
          <div className="image-slider" style={styles.imageSlider}>
            <div style={styles.imageSliderText}>
              <h2>Innovation in Motion</h2>
              <p>
                Our team at NTU AAV is constantly pushing boundaries in UAV and
                autonomous vehicle technologies. Here's a glimpse of what we’ve
                been working on — from lab tests to global competitions.
              </p>
            </div>
            <div style={styles.imageSliderImages}>
              <div style={styles.fakeImage}></div>
              <div style={styles.fakeImage}></div>
              <div style={styles.fakeImage}></div>
            </div>
          </div>
        </section>

        <section style={styles.ferrariSection}>
          <div className="ferrari-grid" style={styles.ferrariGrid}>
            {blocks.map((b, idx) => (
              <div
                key={idx}
                className="ferrari-block"
                style={{
                  ...styles.ferrariBlock,
                  backgroundColor: ["#1e1e1e", "#222", "#1e1e1e", "#222"][idx],
                }}
              >
                <div>
                  <div style={styles.ferrariLabel}>{b.label}</div>
                  <div style={styles.ferrariTitle}>{b.title}</div>
                </div>
                <a href="#" style={styles.discoverLink}>
                  View More →
                </a>
              </div>
            ))}
          </div>
        </section>

        <section style={styles.infoCardSection}>
          <div className="info-card-container" style={styles.infoCardContainer}>
            <a href="#team" className="info-card" style={{ ...styles.infoCard, backgroundImage: "url('/images/team.jpg')" }}>
              <div className="overlay" style={styles.overlay}></div>
              <div style={styles.infoCardText}>
                <h3 style={styles.infoCardTitle}>Our Team</h3>
                <span className="info-card-link" style={styles.infoCardLink}>→</span>
              </div>
            </a>

            <a href="#achievements" className="info-card" style={{ ...styles.infoCard, backgroundImage: "url('/images/achievements.jpg')" }}>
              <div className="overlay" style={styles.overlay}></div>
              <div style={styles.infoCardText}>
                <h3 style={styles.infoCardTitle}>Our Achievements</h3>
                <span className="info-card-link" style={styles.infoCardLink}>→</span>
              </div>
            </a>

            <a href="#outreach" className="info-card" style={{ ...styles.infoCard, backgroundImage: "url('/images/outreach.jpg')" }}>
              <div className="overlay" style={styles.overlay}></div>
              <div style={styles.infoCardText}>
                <h3 style={styles.infoCardTitle}>Outreach</h3>
                <span className="info-card-link" style={styles.infoCardLink}>→</span>
              </div>
            </a>
          </div>
        </section>


        <footer style={styles.footer}>
          <div>Follow Us</div>
          <div style={styles.socialIcons}>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              style={styles.icon}
            >
              📷
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              style={styles.icon}
            >
              💼
            </a>
          </div>
          <small style={{ color: "#888" }}>
            © 2025 NTU AAV. All rights reserved.
          </small>
        </footer>
      </div>
    </>
  );
}



