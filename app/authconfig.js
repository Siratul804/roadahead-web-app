export const authConfig = {
  providers: [],
  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    authorized({ auth, request }) {
      const isLoggedIn = auth?.user;
      const isOnDashboard = request.nextUrl.pathname.startsWith("/");
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/", request.nextUrl));
      }
      return true;
    },
  },
};

// Need to modify this code !!!
