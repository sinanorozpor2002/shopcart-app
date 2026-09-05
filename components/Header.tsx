import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";
import FavoriteButton from "./FavoriteButton";
import SignIn from "./SignIn";
import MobileMenu from "./MobileMenu";
// import { auth, currentUser } from "@clerk/nextjs/server"; // Temporarily disabled
// import { ClerkLoaded, SignedIn, UserButton } from "@clerk/nextjs"; // Temporarily disabled
import Link from "next/link";
import { Logs } from "lucide-react";
// import { getMyOrders } from "@/sanity/queries"; // Temporarily disabled

const Header = async () => {
  // Temporarily disabled Clerk authentication
  // const user = await currentUser();
  // const { userId } = await auth();
  // let orders = null;
  // if (userId) {
  //   orders = await getMyOrders(userId);
  // }

  const user = null; // Temporarily set to null
  const orders = null;

  return (
    <header className="sticky top-0 z-50 py-5 bg-white/70 backdrop-blur-md">
      <Container className="flex items-center justify-between text-lightColor">
        <div className="w-auto md:w-1/3 flex items-center gap-2.5 justify-start md:gap-0">
          <MobileMenu />
          <Logo />
        </div>
        <HeaderMenu />
        <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
          <SearchBar />
          <CartIcon />
          <FavoriteButton />

          {user && (
            <Link
              href={"/orders"}
              className="group relative hover:text-shop_light_green hoverEffect"
            >
              <Logs />
              <span className="absolute -top-1 -right-1 bg-shop_btn_dark_green text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center">
                {orders?.length ? orders?.length : 0}
              </span>
            </Link>
          )}

          {/* Temporarily disabled Clerk components */}
          {/* <ClerkLoaded>
            <SignedIn>
              <UserButton />
            </SignedIn>
            {!user && <SignIn />}
          </ClerkLoaded> */}
          
          {!user && <SignIn />}
        </div>
      </Container>
    </header>
  );
};

export default Header;
