import DynamicHeader from "components/MainHeader/DynamicHeader";
import { Outlet } from "react-router-dom";

export default function MainHeader() {
    return (
        <section>
            <DynamicHeader />
            <Outlet />
        </section>
    )
};