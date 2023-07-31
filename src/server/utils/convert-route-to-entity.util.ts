const mapping: Record<string, string> = {
  businesses: 'business',
  contacts: 'contact',
  messages: 'message',
  tasks: 'task',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
