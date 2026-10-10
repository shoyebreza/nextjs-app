export const roles = ["admin", "member"] as const;

export type Role = (typeof roles)[number];

export function getConfiguredRole(): Role {
  const configuredRole = process.env.AUTH_ROLE;

  if (!configuredRole || configuredRole === "member") {
    return "member";
  }

  if (configuredRole === "admin") {
    return "admin";
  }

  throw new Error('AUTH_ROLE must be either "admin" or "member".');
}

export function isRole(value: unknown): value is Role {
  return value === "admin" || value === "member";
}

export function hasRole(userRole: Role, requiredRole: Role) {
  return userRole === "admin" || userRole === requiredRole;
}
