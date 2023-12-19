const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const resolvers = {
  Query: {
    users: async () => await prisma.user.findMany(),
    user: async (_, { id }) => await prisma.user.findUnique({ where: { id } }),
    categories: async () => await prisma.category.findMany(),
    category: async (_, { id }) => await prisma.category.findUnique({ where: { id } }),
    products: async () => await prisma.product.findMany(),
    product: async (_, { id }) => await prisma.product.findUnique({ where: { id } }),
  },
  Mutation: {
    createUser: async (_, { data }) => await prisma.user.create({ data }),
    updateUser: async (_, { id, data }) => await prisma.user.update({ where: { id }, data }),
    deleteUser: async (_, { id }) => await prisma.user.delete({ where: { id } }),

    createCategory: async (_, { data }) => await prisma.category.create({ data }),
    updateCategory: async (_, { id, data }) => await prisma.category.update({ where: { id }, data }),
    deleteCategory: async (_, { id }) => await prisma.category.delete({ where: { id } }),

    createProduct: async (_, { data }) => await prisma.product.create({ data }),
    updateProduct: async (_, { id, data }) => await prisma.product.update({ where: { id }, data }),
    deleteProduct: async (_, { id }) => await prisma.product.delete({ where: { id } }),

    signIn: async (_, { email, password }) => {
      // Validate credentials using Prisma
      const user = await prisma.user.findUnique({
        where: { email: email, password: password },
      });

      if (user) {
        // Authentication successful
        return { token: 'your_generated_token' };
      } else {
        // Authentication failed
        throw new Error('Invalid credentials');
      }
    },
  },
  User: {
    products: async (parent) => await prisma.product.findMany({ where: { userId: parent.id } }),
  },
  Category: {
    products: async (parent) => await prisma.product.findMany({ where: { categoryId: parent.id } }),
  },
  Product: {
    category: async (parent) => await prisma.category.findUnique({ where: { id: parent.categoryId } }),
    user: async (parent) => await prisma.user.findUnique({ where: { id: parent.userId } }),
  },
};

module.exports = resolvers;
