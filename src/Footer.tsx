export function Footer({ year }: { year: number }) {
  return (
    <>
      <footer className="container" >
	<div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
	  <span style={{width: "100%"}}>
	      © {year} Nazih Boudaakkar. All rights reserved.
	    </span>
	    <div className="container" style={{display: "flex",justifyContent: "flex-end"}}>
	      <a href="https://blog.nazih.top">
		  Check Out My Blog
	      </a>
	    </div>
	</div>
      </footer>
    </>
  );
}
