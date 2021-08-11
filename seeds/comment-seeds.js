const { Comment } = require('../models');

const commentdata = [
    {
        comment_text: 'Nunc rhoncus dui vel sem.',
        user_id: 1,
        post_id: 2
    },
    {
        comment_text: 'Mauris aliquam ornare risus, non tempor libero consequat quis. Nunc luctus.',
        user_id: 2,
        post_id: 3
    },
    {
        comment_text: 'Maecenas nec ante condimentum, semper leo nec, laoreet orci. Vestibulum ante.',
        user_id: 3,
        post_id: 1
    },
    {
        comment_text: 'Donec blandit enim eget leo condimentum, sed suscipit lorem porttitor. Nunc.',
        user_id: 4,
        post_id: 1
    },
    {
        comment_text: 'Sed sagittis orci quis tincidunt aliquet. Proin elementum dapibus felis, vel.',
        user_id: 5,
        post_id: 2
    },
    {
        comment_text: 'Mauris efficitur arcu euismod, lacinia lacus sed, luctus dolor. Quisque accumsan.',
        user_id: 1,
        post_id: 3
    },
    {
        comment_text: 'Fusce in lacinia ligula. Sed eu suscipit est. Nam consequat posuere.',
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: 'Nulla facilisi. Etiam et eleifend magna, et cursus enim. Integer in.',
        user_id: 3,
        post_id: 2
    },
    {
        comment_text: 'Sed scelerisque elit ipsum, lobortis rhoncus justo lacinia a. Morbi bibendum.',
        user_id: 4,
        post_id: 3
    },
    {
        comment_text: 'Mauris malesuada lorem sed fringilla ullamcorper. Donec tincidunt, tellus id vestibulum.',
        user_id: 5,
        post_id: 1
    },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;