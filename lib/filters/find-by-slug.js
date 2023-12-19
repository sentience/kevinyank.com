export function findBySlug(collection, slug) {
  return collection.find(({ fileSlug }) => fileSlug === slug);
}
