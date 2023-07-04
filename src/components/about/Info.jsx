const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bxs-award about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">3 years</span>
      </div>
      <div className="about__box">
        <i class="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Employment</h3>
        <span className="about__subtitle">B2B</span>
      </div>
      <div className="about__box">
        <i class="bx bx-support about__icon"></i>
        <h3 className="about__title">Bilingual</h3>
        <span className="about__subtitle">{`PL/ENG`}</span>
      </div>
    </div>
  );
};

export default Info;
