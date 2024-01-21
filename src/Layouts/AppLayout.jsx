import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";

const AppLayout = () => {
  const location = useLocation();

  //set dynamic title text:
  useEffect(() => {
    if (location.pathname === "/") {
      document.title = `EventPlaner - home`;
    } else {
      document.title = `EventPlanner ${location.pathname.replace("/", "- ")}`;
    }
    if (location.state) {
      document.title = `EventPlanner ${location.state.replace("/", "- ")}`;
    }
  }, [location]);

  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          success: {
            style: {
              color: "green",
              border: "1px solid green",
            },
          },
          error: {
            style: {
              color: "red",
              border: "1px solid red",
            },
          },
        }}
      />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
