export default {
  commonFields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 100,
      },
    },
    {
      name: "image",
      title: "Pic",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
