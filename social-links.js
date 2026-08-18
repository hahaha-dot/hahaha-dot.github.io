const socialLinks = {
  xiaohongshu: "",
  instagram: "",
  linkedin: "",
  github: "https://github.com/hahaha-dot",
};

document.querySelectorAll("[data-social]").forEach((link) => {
  const url = socialLinks[link.dataset.social];

  if (url) {
    link.href = url;
    link.target = "_blank";
    link.rel = "noreferrer";
    return;
  }

  link.classList.add("is-pending");
  link.setAttribute("aria-disabled", "true");
  link.title = `${link.title} account link pending`;
});
