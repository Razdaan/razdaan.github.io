export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <p className="footer-text">
        © {year} Razdaan. All rights reserved.
      </p>
    </footer>
  );
}
