/**
 * Admin Layout — explicitly tells ALL search engines never to index this page.
 * This prevents Google's Safe Browsing from flagging the login form as phishing.
 */
export const metadata = {
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  title: 'Admin | Shashank Gowda NB',
};

export default function AdminLayout({ children }) {
  return children;
}
