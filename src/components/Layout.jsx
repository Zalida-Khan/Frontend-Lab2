function Layout({ children }) {
    console.log({ children });
    return (
        <div className="layout">
            {children}
        </div>
    );
}

export default Layout;
