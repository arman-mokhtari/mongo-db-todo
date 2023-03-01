exports.get404 = (req, res) => {
  res.status(404).render("page404", { pageTitle: "صفحه مورد نظر پیدا نشد" });
};
