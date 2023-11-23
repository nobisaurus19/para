import Navbar from "../navbar";

export const DefaultLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default DefaultLayout