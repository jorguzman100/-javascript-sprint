const extractContent = (content, start, end) => {
    return content.slice(content.indexOf(start), content.lastIndexOf(end) + 1);
}

// const blogPosts = ['post1', 'post2', 'post3', 'post4', 'post5'];
// const blogPost = 'The big brown fox';

// console.log(extractContent(blogPosts, 'post2', 'post4'));
// console.log(extractContent(blogPosts, '', ''));
// console.log(extractContent(blogPost, '', ''));
// console.log(extractContent(blogPost, 'b', 'b'));
// console.log(extractContent(blogPost, 'big', 'fox'));
// console.log(extractContent(blogPost, '', 'brown'));
// console.log(extractContent(blogPost, 'jump', ''));

// ['post2', 'post3', 'post4']
// []
// 'The big brown fox'
// 'big b'
// 'big brown f'
// 'The big b'
// 'x'
