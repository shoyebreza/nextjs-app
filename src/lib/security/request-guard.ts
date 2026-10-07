const requests = new Map<string, number[]>();

const suspiciousUserAgents = [
  "ahrefsbot",
  "bytespider",
  "curl/",
  "go-http-client",
  "headlesschrome",
  "python-requests",
  "scrapy",
  "semrushbot",
  "wget/",
];

const trustedCrawlers = ["googlebot", "bingbot", "duckduckbot"];

export function isSuspiciousBot(userAgent: string) {
  const normalizedUserAgent = userAgent.toLowerCase();

  if (trustedCrawlers.some((crawler) => normalizedUserAgent.includes(crawler))) {
    return false;
  }

  return suspiciousUserAgents.some((bot) => normalizedUserAgent.includes(bot));
}

export function isFlooding(key: string, now = Date.now(), limit = 60, windowMs = 60_000) {
  const recentRequests = (requests.get(key) ?? []).filter((timestamp) => now - timestamp < windowMs);

  if (recentRequests.length >= limit) {
    requests.set(key, recentRequests);
    return true;
  }

  recentRequests.push(now);
  requests.set(key, recentRequests);
  return false;
}

export function getClientKey(ip: string | null, userAgent: string) {
  return `${ip ?? "unknown"}:${userAgent.slice(0, 80)}`;
}

export function pruneRequestStore(now = Date.now(), windowMs = 60_000) {
  for (const [key, timestamps] of requests) {
    const recentRequests = timestamps.filter((timestamp) => now - timestamp < windowMs);
    if (recentRequests.length === 0) {
      requests.delete(key);
    } else {
      requests.set(key, recentRequests);
    }
  }
}