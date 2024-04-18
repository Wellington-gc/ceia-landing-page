import NavBar from "./NavBar";

type Props = {
    children: React.ReactNode;
};

export default function PageLayout({ children }: Props) {
    return (
        <div className="min-h-screen bg-gradient-to-b from-primary-dark-blue to-secondary-light-blue text-white">
            <NavBar />
            {children}
        </div>
    );
}