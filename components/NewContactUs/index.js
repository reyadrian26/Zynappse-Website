import style from "styles/main.module.scss";
import {images} from "components/assets"

import {getLocalizedString} from "strings"

const NewContactUs = () => {
  return (
    <>
      <div className={style.NewContactUsContainer} id="contactContainer">
        <div className={style.ContactUsLabelContainer}>
          <div className={style.ContactLabel}>{getLocalizedString("CONTACT_US_CONTACT_LABEL")}</div>
          <div className={style.UsLabel}>{getLocalizedString("CONTACT_US_US_LABEL")}</div>
        </div>
        <div className={style.DetailsContainer}>
          <div className={style.DetailsBackground}>
            <div className={style.WeWantLabel}>{getLocalizedString("CONTACT_US_TITLE_LABEL")}</div>
            <div className={style.DetailColContainer}>
              <div className={style.DetailCol1}>
                <div className={style.TellUsLabel}>{getLocalizedString("CONTACT_US_SUBTITLE_LABEL")}</div>
                <div className={style.NameLabel}>{getLocalizedString("CONTACT_US_NAME_LABEL")}</div>
                <input className={style.NameInput} />
                <div className={style.EmailLabel}>{getLocalizedString("CONTACT_US_EMAIL_LABEL")}</div>
                <input className={style.EmailInput} />
                <div className={style.MessageLabel}>{getLocalizedString("CONTACT_US_MESSAGE_LABEL")}</div>
                <textarea className={style.MessageTextarea} />
              </div>
              <div className={style.DetailCol2}>
                <div className={style.ImageContainer}>
                  <img src={images.contactUsLaptopImage} />
                </div>
                <button className={style.SubmitButton}>{getLocalizedString("CONTACT_US_SUBMIT_BUTTON_LABEL")}</button>
              </div>
            </div>
          </div>
        </div>
        <div className={style.RedCircleContainer}>
          <img src={images.contactUsCircleImage} />
        </div>
      </div>
    </>
  );
};

export default NewContactUs;
