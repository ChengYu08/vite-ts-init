import i18n from "i18next";
import { initReactI18next  } from "react-i18next";
import resources from "@/langs/langs.json";
import langs from "@/langs/langsKey.json";
i18n.use(initReactI18next).init({ resources,lng: langs[0], });
export default i18n;
