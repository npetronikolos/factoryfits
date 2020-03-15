const resolvers = {
  Query: {
    hello: () => "Hello World"
  },

  Mutation: {
    // createItem: async (
    //   parent,
    //   { title, description, price, image, largeImage },
    //   ctx,
    //   info
    // ) => {
    //   const item = await ctx.prisma.createItem({
    //     title,
    //     description,
    //     price,
    //     image,
    //     largeImage
    //   });
    //   return item;
    // }

    createItem: async (parent, args, ctx, info) => {
      const item = await ctx.prisma.createItem({
        ...args
      });
      return item;
    }
  }
};

module.exports = resolvers;
