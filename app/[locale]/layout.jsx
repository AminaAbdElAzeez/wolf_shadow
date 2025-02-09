"use client"
import LocaleLayout from "../LocaleLayout";


export default function RootLayout({ children,params }) {
  return (
    
        <LocaleLayout params={params.locale}>{children}</LocaleLayout>
      
  );
}
