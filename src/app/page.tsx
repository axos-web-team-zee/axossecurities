
export default function Home() {
  return (
    <>
      <header>
        <div className="d-flex header-row">
          <img src="/logo.svg" alt="" width="200" height="70" />
        </div>
      </header>
      <main>
        <section className="hero-banner gradient-bg-blue">
          <div className="containment">
            <div className="hero-content d-flex mobile">
              <div className="hero-text">
                <h1 className="header-1" style={{color:"#fff"}}>Axos Securities, LLC</h1>
                <p className="push-up mobile-16">
                  A subsidiary of Axos Financial<sup>®</sup>, Inc.
                </p>
              </div>
              <div className="hero-img d-flex end" role="presentation">
                <img src="/hero.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="section-pad gray-theme">
          <div className="containment">
            <div className="grid-wrapper d-grid">
              <div className="tile-item rounded bordered framed text-center bg-white">
                <span>
                  <h2 className="gradient-text header-3">Axos Clearing LLC</h2>
                  <p className="slate push-up p-16">
                    Axos Clearing is a leading correspondent clearing firm serving independent broker-dealers in the retail,
                    active-trading and institutional markets. Axos Clearing also offers flexible custody solutions for
                    Registered Investment Advisers (RIA).
                  </p>
                </span>
                <div className="text-center push-up-24">
                  <a href="#" className="btn-block--secondary">
                    Learn More
                  </a>
                </div>
              </div>
              <div className="tile-item rounded bordered framed text-center bg-white">
                <span>
                  <h2 className="gradient-text header-3">Axos Invest</h2>
                  <p className="slate mb-0 push-up p-16">
                    Axos Invest is a digital financial advisor serving clients from its headquarters in Las Vegas, Nevada.
                    Axos Invest empowers its clients to start investing earlier, provide the best advice after they do, and
                    keep the Company’s interests fully aligned with their clients as they progress.
                  </p>
                </span>
                <div className="text-center push-up-24">
                  <a href="#" className="btn-block--secondary">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-pad gradient-bg-blue">
          <div className="containment">
            <div className="section-header">
              <img src="/transparent-logo.png" alt="" />
              <h2 className="header-1">About Axos Financial, Inc.</h2>
              <p className="push-up mobile-16">
                Axos Financial, Inc. is the holding company for Axos Bank, a nationwide bank that provides consumer and
                business banking products through its low-cost distribution channels and affinity partners. With over $20.3
                billion in assets, Axos Bank provides financing for single and multifamily residential properties,
                small-to-medium size businesses in target sectors, and selected specialty finance receivables. Its
                subsidiaries, Axos Clearing LLC and Axos Invest, Inc., provide comprehensive securities clearing services to
                introducing broker-dealers and registered investment advisor correspondents and digital investment advisory
                services to retail investors, respectively. Axos Financial, Inc.’s common stock is listed on the NYSE under
                the symbol “AX” and is a component of the Russell 2000<sup>®</sup> Index and the S&P SmallCap
                600<sup>®</sup>Index. For more
                information about Axos Financial, Inc., please visit <a href="http://www.axosfinancial.com"
                  style={{color:"#faa74a"}}>www.axosfinancial.com</a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="containment">
          <p>© 2022 Axos Securities, LLC. All rights reserved</p>
          <p>Axos Securities, LLC. Is a wholly-owned subsidiary of Axos Financial, Inc.</p>
        </div>
      </footer>
    </>
  );
}
