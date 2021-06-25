import NetlifyIdentityWidget from "netlify-identity-widget";

declare global {
  interface Window {
    netlifyIdentity?: {
      on(event: string, cb: (...args: any[]) => void): void;
      init(): void;
    };
  }
}

export function redirectToAdminOnLogin(): void {
  window.netlifyIdentity?.on("init", (user?: NetlifyIdentityWidget.User) => {
    if (!user) {
      window.netlifyIdentity?.on("login", () => {
        document.location.href = "/admin";
      });
    }
  });

  window.netlifyIdentity?.init();
}
