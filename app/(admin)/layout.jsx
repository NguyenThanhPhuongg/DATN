
import { Josefin_Sans } from 'next/font/google';
import '@/globals.scss';
import { Store } from '@/context/store';
import Sidebar from '../components/admin/Sidebar';

const inter = Josefin_Sans({
    weight: ['100', '200', '300', '500', '600', '400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
});

export const metadata = {
    title: 'ZIARA Clothing',
    description: 'ZIARA Clothing - Fashion Luxury No1.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Store>
            {children}
            <Sidebar />
        </Store>
        </body>
        </html>
    );
}
