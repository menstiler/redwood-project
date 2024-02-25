export const standard = defineScenario({
  comment: {
    jane: {
      data: {
        name: 'Jane Doe',
        body: 'I like trees',
        post: {
          create: {
            title: 'Redwood Leaves',
            body: 'The quick brown fox jumped over the lazy dog.',
            user: {
              create: {
                email: 'john.doe@example.com',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
      },
    },
    john: {
      data: {
        name: 'John Doe',
        body: 'Hug a tree today',
        post: {
          create: {
            title: 'Root Systems',
            body: 'The five boxing wizards jump quickly.',
            user: {
              create: {
                email: 'jane.doe@example.com',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
      },
    },
  },
})

export const postOnly = defineScenario({
  post: {
    bark: {
      data: {
        title: 'Bark',
        body: "A tree's bark is worse than its bite",
        user: {
          create: {
            email: 'jane.doe@example.com',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})
