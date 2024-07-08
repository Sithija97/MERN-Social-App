import { Outlet } from "react-router-dom";
import { Header, SideNavBar } from "../components";

export const RootLayout = () => {
  return (
    <section
      className={`min-h-screen bg-white text-black ${
        import.meta.env.VITE_DEV_ENV === "development" ? "debug-screens" : ""
      }`}
    >
      {/* <header className="header">
        <div>
          <SignedIn>
            <UserButton afterSignOutUrl="/sign-in" />
          </SignedIn>
          <SignedOut>
            <Link to="/sign-in">Sign In</Link>
          </SignedOut>
        </div>
      </header> */}
      <>
        <div className="md:block h-screen fixed border-r">
          <SideNavBar />
        </div>
        <div className="md:ml-64">
          <Header />
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="md:col-span-2">
              <Outlet />
            </div>
            <div className="p-5 flex justify-center">
              <img
                src="https://static.vecteezy.com/system/resources/previews/004/759/797/non_2x/cute-panda-working-in-front-of-laptop-vector.jpg"
                alt="panda-side-section"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </>
    </section>
  );
};
