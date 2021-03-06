export const english = {
  "Please, enter valid credentials.": "Please, enter valid credentials.",
  "A user with that username already exists.":
    "A user with that username already exists.",
  "A Confirmation Email has been sent to your email.":
    "A Confirmation Email has been sent to your email.",
  "Invalid token.": "Invalid token.",

  "legal-notice": "Copyright © CiteDrive {{year}}.",

  "login-template": {
    name: "Login template",
    "label-extension-heading": "Install the chrome extension.",
    "label-extension-heading-description":
      "Add websites and articles with one click to your project!",
    "button-link-to-extension": "To the chrome store",
  },

  yup: {
    "warning-required": "Required",
    "warning-must-be-eight-characters-or-more": "Must be 8 characters or more",
    "warning-one-lowercase-character": "One lowercase character",
    "warning-one-uppercase-character": "One uppercase character",
    "warning-one-number": "One number",
    "warning-one-special-character": "One special character",
    "warning-invalid-email": "Invalid email",
  },

  login: {
    name: "Login",
    "label-log-in-to-citedrive": "Log in to CiteDrive",
    "label-email": "Email",
    "label-password": "Password",
    "label-warning-email": "Invalid email",
    "label-warning-required": "Required",
    "link-sign-up-an-account": "Sign up for an account",
    "link-forgot-password": "Forgot password?",
    "button-sign-in": "Sign In",
  },

  createAccount: {
    name: "Create Account",
    "label-create-your-account": "Create your Account",
    "label-email": "Email",
    "label-password": "Password",
    "link-to-login": "Already have an account? Log In",

    "message-success": "A Confirmation Email has been sent to your email.",

    "button-sign-up": "Sign Up",
  },

  activate: {
    "label-please-wait": "Please wait . . .",
    "error-message":
      "Error while attempting to verify account. Please try again later.",

    "error-heading": "Error Verifying Account",
    "message-success": "You've successfully verified your account",

    "button-proceed-to-login": "Proceed to Login",
    "button-return-to-login": "Return to Login",
  },

  reset: {
    success: "Successfully reset password",
    "return-login": "Return to Login",
    "error-message": "Error when setting password. Please try again later.",
    "login.reset-your-password": "Reset your Password",
    "login.password": "Password",
    "set-password": "Set Password",
  },

  loginExtension: {
    name: "Login to Extension",
    "label-log-in-to-citedrive": "Log in to CiteDrive",
    "label-email": "Email",
    "label-password": "Password",
    "label-warning-email": "Invalid email",
    "label-warning-required": "Required",
    "link-sign-up-an-account": "Sign up for an account",
    "link-forgot-password": "Forgot password?",
    "button-sign-in": "Sign In",
  },

  passwordSet: {
    "label-successfully-activated": "Successfully activated account",
    "button-return-to-login": "Return to Login",
    "error-message": "Error when setting password. Please try again later.",
    "label-finish-creating-your-account": "Finish Creating Your Account",
    "label-password": "Password",
    "button-set-password": "Set Password",
  },

  forgotPassword: {
    "label-forgot-password": "Forgot password?",
    "link-to-login": "Return to Login",
    "success-message": "A recovery link has been sent to your email.",
    "label-email": "Email",
    "button-request-reset": "Request reset",
  },
  projectPage: {
    projectContainer: {
      h2: "Projects",
      empty: {
        p1: "No projects available",
        p2: "Click + to create a new project.",
      },
    },
    newProject: {
      option: {
        rename: "Rename project",
        user: "Invite collegues",
        delete: "Delete project"
      },
      bibtex: {
        title: "Create a new BibTeX project",
        ariaLabel: "Create a new BibTeX project",
        label: "BibTeX / BibLaTeX",
        modal: {
          formField: {
            label: "Title",
            placeholder: "Name your project",
          },
          button: {
            label: "Create new BibTeX project",
            ariaLabel: "Create new BibTeX project",
          },
        },
      },

      overleaf: {
        title: "Create a new Overleaf project",
        ariaLabel: "Create a new Overleaf project",
        label: "Overleaf",
        modal: {
          formField: {
            label: "Title",
            placeholder: "Name your project",
          },
          button: {
            label: "Create new Overleaf project",
            ariaLabel: "Create new Overleaf project",
          },
        },
      },
      settings: {
        rename: {
          title: "Rename project",
          button: "Rename project",
          placeholder: "New Name",
          description: "",
        },
        delete: {
          title: "Delete project",
          button: "Delete project",
          description:
            "Are you sure to delete this project? This operation cannot be undone.",
        },
      },
    },
  },

  components: {
    user: {
      title: "Invite users to your project",
      placeholder:
        "Start typing an email address, for example: alex@example.com",
      wait: "Wait ...",
      button: "Invite user",
    },
    topBar: {
      menu: {
        news: "News",
        docs: "Docs",
        privacy: "Privacy Policy",
        term: "Terms and Conditions",
        signout: "Sign out",
      },
    },
  },

  aria: {
    open: "open",
  },
};
