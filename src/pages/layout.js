import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

const Layout = ({ children }) => {
    return (
        <html lang="pt">
            <head>
                <title>Lucas Rodrigues</title>
            </head>
            <body>
                {children}
                <SpeedInsights />
                <Analytics />
            </body>
        </html>
    );
};

export default Layout;
