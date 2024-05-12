import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';

const Layout = ({ children }) => {
    return (
        <html lang="pt">
            <Head>
                <title>Lucas Rodrigues</title>
            </Head>
            <body>
                {children}
                <SpeedInsights />
                <Analytics />
            </body>
        </html>
    );
};

export default Layout;
