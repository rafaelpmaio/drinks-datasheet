import MainHeader from "components/MainHeader"
import CollectionPage from "pages/CollectionPage"
import DrinkPage from "pages/DrinkPage"
import DrinkSetupPage from "pages/DrinkSetupPage"
import Home from "pages/Home"
import Page404 from "pages/Page404"
import { Route, Routes } from "react-router-dom"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainHeader />}>
                <Route index element={<Home />} />
                <Route path="collection/:id" element={<CollectionPage />} />
            </Route>
            <Route path="new_drink" element={<DrinkSetupPage />} />
            <Route
                path="drink/:collectionId/:drinkId"
                element={<DrinkPage />}
            />
            <Route path="*" element={<Page404 />}></Route>
        </Routes>
    )
}