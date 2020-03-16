// const { forwardTo } = require("prisma-binding");

const resolvers = {
  Query: {
    // items: forwardTo("prisma") // TODO does not work
    items: async (parent, args, ctx, info) => {
      const items = await ctx.prisma.items();
      return items;
    }
  },

  Mutation: {
    createItem: async (parent, args, ctx, info) => {
      // TODO check if user is logged in
      const item = await ctx.prisma.createItem(
        {
          ...args
        },
        info
      );
      return item;
    }
  }
};

module.exports = resolvers;
