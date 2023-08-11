import i18n from "i18next";
import { initReactI18next  } from "react-i18next";
import resources from "@/langs/langs.json";
import langs from "@/langs/langsKey.json";
const defaultLang = localStorage.getItem("defaultLang") ?? langs[0];
i18n.use(initReactI18next).init({ resources,lng: defaultLang, });
export default i18n;
