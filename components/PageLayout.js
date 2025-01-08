import Navbar from '@/components/HeaderComponents/Navbar'
import Footer from '@/components/Footer'

export default function PageLayout({ title, subtitle=false, image=false, children }) {
    return (
        <>
            <div className="min-h-screen flex flex-col">
                <Navbar/>
                <div className="h-16"/>
                <div className="flex-grow">
                    <div className="max-w-7xl mx-auto px-2 py-12 sm:px-6 lg:px-8">
                        {children}
                    </div>
                </div>
                <div className="px-0 py-1 sm:px-2 lg:px-2"> {/* Removed max-w-7xl mx-auto */}
                    <Footer />
                </div>
            </div>
        </>
    );
}