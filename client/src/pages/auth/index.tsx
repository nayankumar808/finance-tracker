import {
  SignedIn,
  SignInButton,
  SignOutButton,
  SignedOut,
  UserButton,
  SignUpButton,
} from "@clerk/clerk-react";

export const Auth = () => {
  return (
    <div className="">
      <h1>Authentication</h1>

      <SignInButton mode="modal" />
      <SignUpButton mode="modal" />
      <SignOutButton />
      <UserButton />
    </div>
  );
};
