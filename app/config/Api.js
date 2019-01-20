import React from 'react'

module.exports = {
  URL: 'http://api.rubensanroman.com',

  ACCOUNTS: {
    ADMIN: {
      USERNAME: 'your-admin-username',
      PASSWORD: 'your-admin-password'
    }
  },

  ENDPOINTS: {
    JWT_AUTH: '/wp-json/jwt-auth/v1/token',
    BASE: '/wp-json/wp/v2',
    POSTS: '/posts',
    PAGES: '/pages',
    USERS: '/users',
    MEDIA: '/media'
  }
}
