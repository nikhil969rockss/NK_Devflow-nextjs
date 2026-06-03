export const ROUTES = {
  HOME: '/',
  SIGN_UP: '/sign-up',
  SIGN_IN: '/sign-in',
  QUESTIONS: (id: string) => `/questions/${id}`,
  TAGS: (_id: string) => `/tags/${_id}`,
};
