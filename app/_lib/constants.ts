
const LINKS = ["dashboard", "about"]

export const NavLinks = [
  ... [{ href: "/", text: "home", includes: "" }],
  ... LINKS.map((link) => ({ href: `/${link}`, text: link, includes: link })),
]