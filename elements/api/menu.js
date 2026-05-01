export default function handler(req, res) {
    res.status(200).json({
      items: [
        { title: "Home", path: "/" },
        { title: "Schedule", path: "/schedule" },
        { title: "Team", path: "/team" },
        { title: "About", path: "/about" }
      ]
    });
  }