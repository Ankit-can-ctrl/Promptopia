import "../styles/globals.css";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-custom-gradient min-h-screen m-0">
        <div className="main">
          <div className=" " />
        </div>
        <main className="app ">{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;
