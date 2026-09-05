"use client";
// import { SignInButton } from "@clerk/nextjs"; // Temporarily disabled
import React from "react";

const SignIn = () => {
  return (
    // Temporarily disabled Clerk SignInButton
    // <SignInButton mode="modal">
      <button 
        className="text-sm font-semibold hover:text-darkColor text-lightColor hover:cursor-pointer hoverEffect"
        onClick={() => {
          // Authentication temporarily disabled
          // You can set up Clerk to enable login
        }}
      >
        Login
      </button>
    // </SignInButton>
  );
};

export default SignIn;
