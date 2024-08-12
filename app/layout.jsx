import "@/styles/globals.css";
import Nav from "@/component/Nav";
import Provider from "@/component/Provider";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" min-h-screen m-0">
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app ">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}

export default RootLayout;
