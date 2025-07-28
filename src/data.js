const fileData = {
  id: 1,
  name: "file-explorer",
  isFolder: true,
  parentId: null,
  children: [
    {
      id: 2,
      name: "src",
      isFolder: true,
      parentId: 1,
      children: [
        {
          id: 3,
          name: "assets",
          isFolder: true,
          parentId: 2,
          children: [
            {
              id: 4,
              name: "react.svg",
              isFolder: false,
              parentId: 3,
            },
          ],
        },
        {
          id: 5,
          name: "App.jsx",
          isFolder: false,
          parentId: 2,
        },
      ],
    },
    {
      id: 6,
      name: ".gitignore",
      parentId: 1,
      isFolder: false,
    },
  ],
};
export default fileData;
