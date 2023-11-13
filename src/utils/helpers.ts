export const createSlug = (name: string): string => {
  // Convert string to lowercase
  let slug = name.toLowerCase();

  // Remove diacritical marks (e.g., accents)
  slug = slug.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // Replace non-alphanumeric characters with hyphens
  slug = slug.replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  return slug + "dashboard";
};
