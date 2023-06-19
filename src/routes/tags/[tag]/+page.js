export const load = async ({ fetch, params }) => {
  const { tag } = params
  const response = await fetch(`/musings/api/posts`)
  const allPosts = await response.json()

  const posts = await allPosts
    .filter(post => post.meta.tags.includes(tag))

  return {
    tag,
    posts
  }
}
