export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main
      style={{
        backgroundColor: "background.default",
        overflow: "hidden",
        padding: "100px 40px 45px 40px",
        textAlign: "left",
      }}
    >
      {children}
      <footer
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignContent: "center",
          width: "initial",
          position: "absolute",
          bottom: 0,
        }}
      >
        <p className="w-fit">created by Megan Swanby</p>

        <p className="w-fit">
          <a href="https://www.github.com/nycswan">source code</a>
        </p>
      </footer>
    </main>
  );
}
