export function uploadUrl(filePath: string): string {
  return `${basePath()}/uploads/${filePath
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/")}`;
}

function basePath(): string {
  const configured = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").trim();
  if (configured.length > 0) {
    const normalized = configured.startsWith("/") ? configured : `/${configured}`;
    return normalized.endsWith("/") ? normalized.slice(0, -1) : normalized;
  }

  const repository = process.env.GITHUB_REPOSITORY;
  if (process.env.GITHUB_ACTIONS !== "true" || !repository) {
    return "";
  }

  const [, repo] = repository.split("/");
  return repo ? `/${repo}` : "";
}
