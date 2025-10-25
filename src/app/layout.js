import { Righteous, Poppins } from "next/font/google";
import "./globals.css";


const poppins = Poppins({
subsets: ["latin"],
variable: "--font-poppins",
weight: ["100", "200" , "300", "400", "500", "600", "700", "800", "900" ]
})

export const metadata = {
  title: "Hassan Naseer - Portfolio",
  description: "Welcome to my portfolio website! I'm Hassan Naseer, a passionate web developer specializing in creating dynamic and responsive web applications. Explore my projects, skills, and get in touch to collaborate on exciting ventures.",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en" className={`${poppins.variable} `}>
      <body className="antialiased">
        {children}
      </body>
    </html>
    
  );
}
