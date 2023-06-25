export async function load({ params }){
  if(params.slug != "favicon.svg"){
    const post = await import(`../../../../posts/${params.slug}.md`)
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
}
