export async function load({ params }){
  console.log(params);
  const post = await import(`../../posts/${params.slug}.md`)
  const { title, date, tags, edited} = post.metadata
  const Content = post.default


  return {
    Content,
    title,
    date,
    tags,
    edited
  }
}
