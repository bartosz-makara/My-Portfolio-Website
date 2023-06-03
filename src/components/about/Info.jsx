const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bxs-award about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">2 years</span>
      </div>
      <div className="about__box">
        <i class="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Finished</h3>
        <span className="about__subtitle">10+ Projects</span>
      </div>
      <div className="about__box">
        <i class="bx bx-support about__icon"></i>
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">{`24/7(sort of)`}</span>
      </div>
    </div>
  );
};

export default Info;
