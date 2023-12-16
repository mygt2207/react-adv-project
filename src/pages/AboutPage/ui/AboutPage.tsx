import { FC } from "react";
import { useTranslation } from "react-i18next";

type AboutPageProps = {};

const AboutPage: FC<AboutPageProps> = ({}) => {
  const { t } = useTranslation("about");
  return <div>{t("About page")}</div>;
};

export default AboutPage;
