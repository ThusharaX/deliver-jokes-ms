export type CreateJokeParams = {
  setup: string;
  punchline: string;
  author: string;
  type: string;
};
//
export type UpdateJokeParams = {
  setup?: string;
  punchline?: string;
  author?: string;
  type?: string;
};
//
export type CreateJokeTypeParams = {
  name: string;
};
//
export type UpdateJokeTypeParams = {
  name?: string;
};
