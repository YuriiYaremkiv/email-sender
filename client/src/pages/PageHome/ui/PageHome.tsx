import { EmailSender } from "src/shared/EmailSender";

import scss from "./PageHome.module.scss";

const PageHome = () => {
  return (
    <div className={scss.page}>
      PageHome
      <EmailSender />
    </div>
  );
};

export default PageHome;
