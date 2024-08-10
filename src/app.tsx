import PWABadge from "./PWABadge.tsx";
import { Header } from "./components/header/header.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CategoryPage } from "./pages/category-page/category-page.tsx";
import { HOME_PAGE } from "./service/navigation-service.ts";
import { RecipePage } from "./pages/recipe-page/recipe-page.tsx";
import { HomePage } from "./pages/home/home.tsx";
import { StyledApp, StyledContent } from "./app.styled.ts";
import { Footer } from "./components/footer/footer.tsx";
import { GlobalStyles } from "./styles/global-styles.ts";
import { categories } from "./static/category.ts";
import { Wallpaper } from "./components/wallpaper/wallpaper.tsx";
import cooking from "./resources/cooking.jpg";

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <BrowserRouter>
          <Header />
          <Wallpaper $backgroundImage={cooking} />
          <StyledContent>
            <Routes>
              <Route path={":id"} element={<RecipePage />} />
              {categories.map((category) => (
                <Route
                  path={category.path}
                  element={<CategoryPage category={category} />}
                />
              ))}
              <Route path={HOME_PAGE} element={<HomePage />} />
            </Routes>
          </StyledContent>
        </BrowserRouter>
      </StyledApp>
      <Footer />
      <PWABadge />
    </>
  );
}

export default App;
