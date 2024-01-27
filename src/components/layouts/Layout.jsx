import { SpeedInsights } from '@vercel/speed-insights/next';

const Layout = ({ children }) => {
    return (
        <html lang="pt">
            <head>
                <title>Lucas Rodrigues</title>
            </head>
            <body>
                {children}
                <SpeedInsights />
            </body>
        </html>
    );
};

export default Layout;
