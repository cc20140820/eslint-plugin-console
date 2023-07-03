module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow using console.log with arguments",
      category: "Best Practices",
      recommended: true,
    },
    fixable: null,
    schema: [],
  },
  create: function (context) {
    return {
      CallExpression: function (node) {
        if (
          node.callee.type === "MemberExpression" &&
          node.callee.object.type === "Identifier" &&
          node.callee.object.name === "console" &&
          node.callee.property.type === "Identifier" &&
          node.callee.property.name === "log" &&
          node.arguments.length === 0
        ) {
          context.report({
            node,
            message: "Avoid using console.log with no arguments",
          });
        }
      },
    };
  },
};
