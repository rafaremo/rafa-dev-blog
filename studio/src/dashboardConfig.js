export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6166f2fe27c73d1c5826457a",
                  title: "Sanity Studio",
                  name: "rafa-dev-blog-studio",
                  apiId: "28ffeb47-a60f-40b5-aabb-310fb963b6ab",
                },
                {
                  buildHookId: "6166f2feac83d51527a4f119",
                  title: "Blog Website",
                  name: "rafa-dev-blog",
                  apiId: "33b376e7-778f-4720-a17f-309ced0f8785",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/rafaremo/rafa-dev-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://rafa-dev-blog.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
