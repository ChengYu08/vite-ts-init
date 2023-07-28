
import AppBar from "@/views/AppBar";
import FoldTop from "./views/FoldTop";
import KID from "./views/KID"
import BackedBy  from "./views/BackedBy";
import PhotoWall from "./views/PhotoWall"
import AppFooter from "./views/AppFooter"
import AppShow from "./views/AppShow"
// import { useEffect } from "react";
// import { bodyToScroll } from "./utils";
import DownLoadCard from "./views/DownLoadCard"
import LangSelect from "@/components/LangSelect"
export default  function App() {
    return <div>
        <LangSelect />
        <AppBar/>
        <FoldTop />
        <AppShow />
        <KID/>
        <PhotoWall/>
        <BackedBy />
        <AppFooter />
        <DownLoadCard />
        654sad64sa
    </div>;
}