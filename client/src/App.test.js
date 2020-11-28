import { render, screen, fireEvent, getByTestId } from "@testing-library/react";
import App from "./App";
import Favorites from "./pages/Favorites";
import { Provider } from "react-redux";
import store from "./store/store";
import Contact from "./pages/Contact";
import ContactDetail from "./components/ContactDetail";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("should render favorites page", () => {
  test("render favorites", () => {
    render(
      <Provider store={store}>
        <Favorites />
      </Provider>
    );
    const textFav = screen.getByText(/favorite/i);
    expect(textFav).toBeInTheDocument();
  });
});

describe("should render contact page", () => {
  test("render contact", () => {
    render(
      <Provider store={store}>
        <Contact />
      </Provider>
    );
    const textFav = screen.getByText(/contact/i);
    expect(textFav).toBeInTheDocument();
  });
});
