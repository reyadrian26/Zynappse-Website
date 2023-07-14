import style from "styles/main.module.scss";

const NewContactUs = () => {
  return (
    <>
      <div className={style.NewContactUsContainer} id="contactContainer">
        <div className={style.ContactUsLabelContainer}>
          <div className={style.ContactLabel}>CONTACT</div>
          <div className={style.UsLabel}>US</div>
        </div>
        <div className={style.DetailsContainer}>
          <div className={style.DetailsBackground}>
            <div className={style.WeWantLabel}>We want to hear you out</div>
            <div className={style.DetailColContainer}>
              <div className={style.DetailCol1}>
                <div className={style.TellUsLabel}>TELL US ABOUT YOUR IDEA</div>
                <div className={style.NameLabel}>Name</div>
                <input className={style.NameInput} />
                <div className={style.EmailLabel}>Email Address</div>
                <input className={style.EmailInput} />
                <div className={style.MessageLabel}>Message</div>
                <textarea className={style.MessageTextarea} />
              </div>
              <div className={style.DetailCol2}>
                <div className={style.ImageContainer}>
                  <img src="/NewContactUS/Laptop.png" />
                </div>
                <button className={style.SubmitButton}>Submit</button>
              </div>
            </div>
          </div>
        </div>
        <div className={style.RedCircleContainer}>
          <img src="/NewContactUs/RedCircle.svg" />
        </div>
      </div>
    </>
  );
};

export default NewContactUs;
