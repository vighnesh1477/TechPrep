import './CreditsScroll.css';

function CreditsScroll() {
  const creditsContent = (
    <>
      <div className="cs-block">
        <p className="cs-role">Technical Quiz</p>
        <h2 className="cs-title">Every great developer starts with one question.</h2>
      </div>

      <div className="cs-divider" />

      <div className="cs-block">
        <p className="cs-role">Our Philosophy</p>
        <p className="cs-name">Knowledge should never have a paywall.</p>
        <p className="cs-name">Curiosity should never require permission.</p>
        <p className="cs-name">Learning should be open.</p>
      </div>

      <div className="cs-divider" />

      <div className="cs-block">
        <p className="cs-role">Built For</p>
        <p className="cs-name">Students</p>
        <p className="cs-name">Developers</p>
        <p className="cs-name">Problem Solvers</p>
        <p className="cs-name">Lifelong Learners</p>
      </div>

      <div className="cs-divider" />

      <div className="cs-block">
        <p className="cs-role">Open Source</p>
        <p className="cs-name">Every contribution matters.</p>
        <p className="cs-name">Every bug fixed matters.</p>
        <p className="cs-name">Every question added matters.</p>
        <p className="cs-name">Every learner matters.</p>
      </div>

      <div className="cs-divider" />

      <div className="cs-block">
        <p className="cs-role">Created & Maintained By</p>
        <h2 className="cs-name-main">Vighnesh Poojary</h2>
        <p className="cs-name">Founder · Developer · Open Source Contributor</p>
      </div>

      <div className="cs-divider" />

      <div className="cs-block">
        <p className="cs-role">Powered By</p>
        <p className="cs-name">React</p>
        <p className="cs-name">Vite</p>
        <p className="cs-name">JavaScript</p>
        <p className="cs-name">Open Source</p>
      </div>

      <div className="cs-divider" />

      <div className="cs-block">
        <p className="cs-role">Special Thanks</p>
        <p className="cs-name">Every contributor.</p>
        <p className="cs-name">Every educator.</p>
        <p className="cs-name">Every student.</p>
        <p className="cs-name">The Open Source Community.</p>
      </div>

      <div className="cs-divider" />

      <div className="cs-block">
        <h2 className="cs-title">Build.</h2>
        <h2 className="cs-title">Learn.</h2>
        <h2 className="cs-title">Share.</h2>
        <h2 className="cs-title">Repeat.</h2>
      </div>

      <div className="cs-divider" />

      <div className="cs-block">
        <h2 className="cs-title">See you in the next commit.</h2>
      </div>
    </>
  );

  return (
    <section className="cs-wrapper">
      <div className="cs-fade-top" />
      <div className="cs-fade-bottom" />
      <div className="cs-viewport">
        <div className="cs-track">
          {creditsContent}
          <div className="cs-divider" />
          {creditsContent}
        </div>
      </div>
    </section>
  );
}

export default CreditsScroll;