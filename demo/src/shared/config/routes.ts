export const routes = {
  home: "/",
  schedule: "/trainingsplan",
  prices: "/preise",
  journal: "/journal",
  article: "/artikel",
  trial: "/probetraining",
} as const;

export function articlePath(id: number): string {
  return `${routes.article}/${id}`;
}

export type RoutePath = (typeof routes)[keyof typeof routes];
