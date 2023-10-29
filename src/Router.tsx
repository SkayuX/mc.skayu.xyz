import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Home from "./Home";
import NotFoundPage from './404'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" element={<Home />} />
                <Route path="/*" element={<NotFoundPage />} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;