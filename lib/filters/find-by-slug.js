module.exports = {
  findBySlug: function (collection, slug) {
    return collection.find(({ fileSlug }) => fileSlug === slug);
  },
};
