import '@/assets/styles/globals.css';

export const metadata = {
  title: 'EstateFlix | Find The Perfect Rental',
  description: 'Find your dream rental property',
  keywords: 'rental, find rentals, find properties',
};

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <div className="text-3xl">{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
