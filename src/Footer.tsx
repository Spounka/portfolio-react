export function Footer({ year }: { year: number }) {
  return (
    <>
      <footer>
        <div className="container">
          © {year} Nazih Boudaakkar. All rights reserved.
        </div>
      </footer>
    </>
  );
}
