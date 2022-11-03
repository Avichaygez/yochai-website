import Main from "../LayoutArea/Main/Main";
import Footer from "../LayoutArea/Footer/Footer";
import Header from "../LayoutArea/Header/Header";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
			<header>
                <Header />
            </header>
            <main>
                <Main />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Layout;
